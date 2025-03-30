"use client";
import { useEffect, useState } from "react";
import ProfilePage from "./components/profilePage";
import Calendar from "./components/Calendar";

export default function Home() {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  
  // Get the selected profile from the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const profileId = Number(queryParams.get("id"));
    
    // Map profile IDs to names - this is a simpler approach than importing profiles
    const profileNames = {
      1: "Alice Johnson",
      2: "Bob Smith",
      3: "Carol Lee",
      4: "David Kim"
    };
    
    setSelectedProvider(profileId ? profileNames[profileId] : null);
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col sm:flex-row gap-16 items-start">
        {/* Profile on the left */}
        <div className="flex-shrink-0 w-full sm:w-1/2">
          <ProfilePage />
        </div>
        {/* Calendar on the right with the selected provider's name */}
        <div className="flex flex-col gap-4 sm:w-1/2">
          <Calendar selectedProviderName={selectedProvider} />
        </div>
      </main>
    </div>
  );
}