import Calendar from "./components/Calendar";

export default function profiles() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">April Calendar</h1>
      <Calendar />
    </div>
  );
}