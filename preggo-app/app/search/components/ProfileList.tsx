"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link"; // Import Link for client-side navigation

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
    bio: "<insert a bio>",
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

const ProfileList = () => {
  const handleCardClick = (id : number) => {
    let href = "/profile/" + id;
    window.location.href = href;
  };

  const handleTelClick = (event : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
  };

  const handleEmailClick = (event : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Nurses Near You</h2>
      <ScrollArea className="h-120 border rounded-lg p-2">
        <div className="space-y-4">
          {profiles.map((profile) => (
            <Card key={profile.id} className="flex items-center gap-4 p-4 shadow-md hover:bg-gray-100 cursor-pointer" onClick={() => handleCardClick(profile.id)}>
              <img
                src={profile.image}
                alt={profile.name}
                className="w-16 h-16 rounded-full border"
              />
              <CardContent className="flex-1">
                <h3 className="text-lg font-semibold"><Link href={"/profile/" + profile.name}>{profile.name}</Link></h3>
                <p className="text-sm text-gray-700">Age: {profile.age}</p>
                <p className="text-sm text-gray-700">Phone: 
                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={"tel:" + profile.phone} target="_blank" onClick={(e) => handleTelClick(e)}> {profile.phone}</a>
                </p>
                <p className="text-sm text-gray-700">Email: 
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={"mailto:" + profile.email} target="_blank" onClick={(e) => handleEmailClick(e)}> {profile.email}</a>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProfileList;
