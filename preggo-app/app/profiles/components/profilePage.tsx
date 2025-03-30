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
    bio: "Pregnancy is a life-changing journey, and I’m here to support you every step of the way. I’m Alice, a Nurse Practitioner with a deep passion for maternal wellness. My approach combines evidence-based medicine with holistic care, ensuring that both your physical and emotional health are nurtured. Whether you need guidance on nutrition, stress management, or birth preparation, I offer compassionate, personalized care to help you feel your best during this special time.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    certifications: ["Certified Nurse Practitioner", "Maternal-Fetal Medicine Specialist"]
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 35,
    phone: "123-456-7890",
    email: "bobsm@gmail.com",
    bio: "Hi there! I’m Bob, a dedicated Nurse Practitioner who believes that every mother deserves a trusted partner during pregnancy. With 10+ years of experience in women’s health, I provide comprehensive prenatal and postpartum care that prioritizes both your well-being and your baby’s development. From answering your late-night questions to offering reassurance through each trimester, I am committed to making your journey smoother, safer, and more joyful.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    certifications: ["Board-Certified Nurse Practitioner (FNP-BC)", "Maternal Newborn Nursing Certification (RNC-MNN)"]
  },
  {
    id: 3,
    name: "Carol Lee",
    age: 27,
    phone: "123-456-7890",
    email: "carollee@gmail.com",
    bio: "Every pregnancy is unique, and so is the care you deserve. I’m Carol, a Nurse Practitioner specializing in maternal health, and I tailor my approach to meet your individual needs. Whether you’re experiencing your first pregnancy or adding to your growing family, I provide expert medical care with a personal touch. I’ll be your advocate, guide, and support system, helping you navigate everything from prenatal visits to postpartum recovery with confidence.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    certifications: ["Women's Health Nurse Practitioner (WHNP-BC)", "Maternal Newborn Nursing Certification (RNC-MNN)"]
  },
  {
    id: 4,
    name: "David Kim",
    age: 31,
    phone: "123-456-7890",
    email: "davek98@gmail.com",
    bio: "Bringing a new life into the world is an incredible experience, and I’m here to help you every step of the way. I’m David, a Board-Certified Nurse Practitioner with a background in obstetric and family care. My goal is to empower you with the knowledge and support needed for a healthy pregnancy and a smooth transition into motherhood. From managing common pregnancy symptoms to preparing for labor, I provide expert, compassionate care tailored to your needs.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    certifications: ["Board-Certified Nurse Practitioner (FNP-BC)", "RNC-OB"]
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
      <button 
        onClick={() => window.history.back()} // Customizable onClick action
        className="absolute top-40 left-40 bg-gray-100 hover:bg-gray-300 text-gray-700 font-bold py-2 px-3 rounded-full"
      > ← </button>
      <img suppressHydrationWarning={true} src={profile.image} alt={profile.name} className="w-40 h-40 rounded-full mx-auto border" />
      <h2 suppressHydrationWarning={true} className="text-xl font-bold mt-4">{profile.name}</h2>
      <p suppressHydrationWarning={true} className="mt-4 text-gray-700">{profile.bio}</p>
      <h3 suppressHydrationWarning={true} className="mt-4 text-lg font-semibold">Certifications</h3>
      {<ul className="list-disc list-inside text-gray-600">
        {profile.certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>}
      <h3 suppressHydrationWarning={true} className="mt-4 text-lg font-semibold">Contact</h3>
      <p><a href={"tel:" + profile.phone} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{profile.phone}</a></p>
      <p><a href={"mailto:" + profile.email} target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{profile.email}</a></p>
    </div>
  );
};

export default ProfilePage;
