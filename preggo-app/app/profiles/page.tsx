"use client";
import ProfilePage from "./components/profilePage";
import Calendar from "./components/Calendar";

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

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col sm:flex-row gap-16 items-start">
        {/* Map moved to the left */}
        <div className="flex-shrink-0 w-full sm:w-1/2">
          {<ProfilePage />}
        </div>
        {/* Content on the right */}
        <div className="flex flex-col gap-4 sm:w-1/2">
          {<Calendar />}
        </div>
      </main>
    </div>
  );
}
