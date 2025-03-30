import Image from "next/image";
import Map from "./components/Map";
import ProfileList from "./components/ProfileList";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col sm:flex-row gap-16 items-start">
        {/* Map moved to the left */}
        <div className="flex-shrink-0 w-full sm:w-1/2">
          <Map />
        </div>
        {/* Content on the right */}
        <div className="flex flex-col gap-4 sm:w-1/2">
          <ProfileList />
        </div>
      </main>
    </div>
  );
}
