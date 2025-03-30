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
  });
}

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

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

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
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;