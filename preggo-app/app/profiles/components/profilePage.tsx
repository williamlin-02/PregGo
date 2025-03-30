"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link"; // Import Link for client-side navigation
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

const profiles = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 29,
    phone: "123-456-7890",
    email: "ajohnson@gmail.com",
    bio: "<insert a bio>",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 35,
    phone: "123-456-7890",
    email: "bobsm@gmail.com",
    bio: "Passionate about delivering quality work and making a difference to those who need it most.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Carol Lee",
    age: 27,
    phone: "123-456-7890",
    email: "carollee@gmail.com",
    bio: "<insert a bio>",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    age: 31,
    phone: "123-456-7890",
    email: "davek98@gmail.com",
    bio: "<insert a bio>",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

type Profile = typeof profiles[number] | null;

const ProfilePage = () => {
  const [profile, setProfile] = useState<Profile>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure we detect client-side rendering
    const queryParams = new URLSearchParams(window.location.search);
    const profileId = Number(queryParams.get("id"));
    const foundProfile = profiles.find((p) => p.id === profileId) || null;
    setProfile(foundProfile);
  }, []);

  if (!isClient) {
    return <div suppressHydrationWarning className="text-center text-gray-500">Loading...</div>;
  }

  if (!profile) {
    return <div suppressHydrationWarning className="text-center text-red-500">Profile not found.</div>;
  }

  return (
    <div suppressHydrationWarning={true} className="max-w-md mx-auto p-6 shadow-lg border rounded-lg text-center">
      <img suppressHydrationWarning={true} src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full mx-auto border" />
      <h2 suppressHydrationWarning={true} className="text-xl font-bold mt-4">{profile.name}</h2>
      {/* <p className="text-gray-500">{profile.contact}</p> */}
      <p suppressHydrationWarning={true} className="mt-4 text-gray-700">{profile.bio}</p>
      <h3 suppressHydrationWarning={true} className="mt-4 text-lg font-semibold">Certifications</h3>
      {/* <ul className="list-disc list-inside text-gray-600">
        {profile.certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProfilePage;
