"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

// Dynamically import Leaflet to avoid SSR issues
let L: any;
if (typeof window !== "undefined") {
  L = require("leaflet");
}

// Fix default marker icon issue in Leaflet
if (L) {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    className: "custom-hue-marker",
  });
}

// Inline CSS for hue rotation
const markerStyle = {
  filter: "hue-rotate(180deg)", // Rotate the hue by 180 degrees
};

// Dynamically import React-Leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const [address, setAddress] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [customIcon, setCustomIcon] = useState<any>(null);
  const [dummyData, setDummyData] = useState<any[]>([]);

  // // dummy data
  // const dummyData = [
  //   { id: 1, name: "Alice", lat: 37.7749, lng: -122.4194, description: "Nearby person 1" },
  //   { id: 2, name: "Bob", lat: 37.7849, lng: -122.4094, description: "Nearby person 2" },
  //   { id: 3, name: "Carol", lat: 37.7649, lng: -122.4294, description: "Nearby person 3" },
  //   { id: 4, name: "David", lat: 37.7650, lng: -122.4300, description: "Nearby person 4" },
  // ];

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
          // Generate dummy data relative to current location
          setDummyData(generateRelativePoints(latitude, longitude));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    const initializeLeaflet = async () => {
      if (typeof window !== "undefined") {
        const L = await import("leaflet");
        
        // Create custom black icon using leaflet-color-markers
        const blackIcon = new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });
    
        setCustomIcon(blackIcon);
      }
    };

    initializeLeaflet();
  }, []);

  const generateRelativePoints = (centerLat: number, centerLng: number) => {
    // Helper function to generate random offset within range (in degrees)
    const randomOffset = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };
  
    // Generate 4 random points within roughly 500m radius
    return [
      { 
        id: 1, 
        name: "Alice", 
        lat: centerLat + randomOffset(-0.005, 0.005),
        lng: centerLng + randomOffset(-0.005, 0.005), 
        description: "Nearby person 1" 
      },
      { 
        id: 2, 
        name: "Bob", 
        lat: centerLat + randomOffset(-0.005, 0.005),
        lng: centerLng + randomOffset(-0.005, 0.005),
        description: "Nearby person 2" 
      },
      { 
        id: 3, 
        name: "Carol", 
        lat: centerLat + randomOffset(-0.005, 0.005),
        lng: centerLng + randomOffset(-0.005, 0.005),
        description: "Nearby person 3" 
      },
      { 
        id: 4, 
        name: "David", 
        lat: centerLat + randomOffset(-0.005, 0.005), // ~500m radius
        lng: centerLng + randomOffset(-0.005, 0.005),
        description: "Nearby person 4" 
      },
    ];
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setAddress(query);

    if (query.length > 2) {
      const OPENCAGE_API_KEY = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY;

      if (!OPENCAGE_API_KEY) {
        console.error("API key is missing. Please check your environment variables.");
        return;
      }

      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            query
          )}&key=${OPENCAGE_API_KEY}&limit=5`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setSuggestions(data.results);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    const { lat, lng } = suggestion.geometry;
    setCurrentLocation([lat, lng]);
    setAddress(suggestion.formatted); // Update the input field with the selected suggestion
    setSuggestions([]); // Clear suggestions
    // Generate new dummy data for the new location
    setDummyData(generateRelativePoints(lat, lng));
  };

  const handleReturnToCurrentLocation = () => {
    if (currentLocation && mapInstance) {
      mapInstance.setView(currentLocation, 13); // Center the map on the current location
    }
  };

  return (
    <div className="relative">
      {/* Input for address with suggestions */}
      <div className="mb-4 relative z-20">
        <input
          type="text"
          placeholder="Enter an address or location"
          value={address}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        />
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border rounded shadow-md mt-1 w-full z-30">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.annotations.geohash} // Use a unique key from the suggestion
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {suggestion.formatted}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* GPS Icon to return to current location */}
      <div
        onClick={handleReturnToCurrentLocation}
        className="absolute bottom-4 left-4 z-30 bg-white text-black p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-800"
        title="Return to Current Location"
      >
        <FontAwesomeIcon icon={faLocationArrow} />
      </div>

      {/* Map */}
      <div className="relative z-10">
        <MapContainer
          key={currentLocation ? currentLocation.join(",") : "default"}
          center={currentLocation || [37.7749, -122.4194]} // Default to San Francisco if location is not available
          zoom={13}
          style={{ height: "500px", width: "100%" }}
          ref={setMapInstance}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          />
          {currentLocation && (
            <Marker position={currentLocation}>
              <Popup>
                {`Latitude: ${currentLocation[0]}, Longitude: ${currentLocation[1]}`}
              </Popup>
            </Marker>
          )}

          {/* Render markers for dummy data */}
          {dummyData.map((person) => (
            <Marker key={person.id} position={[person.lat, person.lng]} icon={customIcon}>
              <Popup>
                <strong>{person.name}</strong>
                <br />
                {person.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;