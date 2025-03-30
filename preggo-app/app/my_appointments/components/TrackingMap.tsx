"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

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

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const TrackingMap = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [nurseLocations, setNurseLocations] = useState<{ id: string; lat: number; lng: number }[]>([]);
  const [carIcon, setCarIcon] = useState<L.DivIcon | null>(null);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  // Initialize Leaflet and create the car icon
  useEffect(() => {
    const initializeLeaflet = async () => {
      if (typeof window !== "undefined") {
        const L = await import("leaflet");

        // Create custom car icon using an inline SVG
        const carIcon = new L.DivIcon({
          html: `
            <div style="
              background: white;
              padding: 4px;
              border-radius: 50%;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="black">
                <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
              </svg>
            </div>
          `,
          className: "custom-div-icon",
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -16],
        });

        setCarIcon(carIcon);
      }
    };

    initializeLeaflet();
  }, []);

  // Initialize nurse locations based on user location
  useEffect(() => {
    if (userLocation) {
      const [userLat, userLng] = userLocation;
      setNurseLocations([
        {
          id: "nurse1",
          lat: userLat + 0.005, // ~500m north
          lng: userLng + 0.005, // ~500m east
        }
      ]);
    }
  }, [userLocation]);

  // Simulate movement
  useEffect(() => {
    const interval = setInterval(() => {
      setNurseLocations((prev) =>
        prev.map((nurse) => ({
          ...nurse,
          lat: nurse.lat + (Math.random() - 0.5) * 0.001,
          lng: nurse.lng + (Math.random() - 0.5) * 0.001,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <MapContainer
        center={userLocation || [37.7749, -122.4194]} // Default to San Francisco
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* User Marker */}
        {userLocation && (
          <Marker position={userLocation}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        {/* Nurse Markers */}
        {nurseLocations.map((nurse) => (
          <Marker key={nurse.id} position={[nurse.lat, nurse.lng]} icon={carIcon}>
            <Popup>Nurse Practitioner: {nurse.id}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TrackingMap;