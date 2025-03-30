import TrackingMap from "./components/TrackingMap";

export default function MyAppointments() {
  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Left side: Appointments */}
      <div className="w-2/3 overflow-y-auto p-8 bg-white shadow-md rounded-lg m-4">
        <h1 className="text-3xl font-bold mb-6">My Appointments</h1>
        <div className="w-full">
          {/* April 2025 */}
          <p className="text-xl font-semibold mb-4">April 2025</p>
          <table className="table-auto w-full mb-8 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Health Care Provider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Thursday, April 3rd</td>
                <td className="border border-gray-300 px-4 py-2">5:30 PM</td>
                <td className="border border-gray-300 px-4 py-2">Carol Lee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Tuesday, April 22nd</td>
                <td className="border border-gray-300 px-4 py-2">11:30 AM</td>
                <td className="border border-gray-300 px-4 py-2">Alice Johnson</td>
              </tr>
            </tbody>
          </table>

          {/* May 2025 */}
          <p className="text-xl font-semibold mb-4">May 2025</p>
          <table className="table-auto w-full mb-8 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Health Care Provider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Monday, May 5th</td>
                <td className="border border-gray-300 px-4 py-2">2:15 PM</td>
                <td className="border border-gray-300 px-4 py-2">David Kim</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Friday, May 16th</td>
                <td className="border border-gray-300 px-4 py-2">9:45 AM</td>
                <td className="border border-gray-300 px-4 py-2">Bob Lee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Wednesday, May 28th</td>
                <td className="border border-gray-300 px-4 py-2">12:00 PM</td>
                <td className="border border-gray-300 px-4 py-2">Carol Lee</td>
              </tr>
            </tbody>
          </table>

          {/* June 2025 */}
          <p className="text-xl font-semibold mb-4">June 2025</p>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Health Care Provider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Tuesday, June 10th</td>
                <td className="border border-gray-300 px-4 py-2">4:00 PM</td>
                <td className="border border-gray-300 px-4 py-2">Alice Lee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right side: Tracking Map */}
      <div className="w-1/3 flex items-center justify-center m-4 relative">
        {/* Banner */}
        <div className="absolute top-0 left-0 w-full bg-black text-white text-center py-2 rounded-lg z-10">
          Carol is 5 minutes away
        </div>

        {/* Map Container */}
        <div className="w-full h-[80%] bg-white shadow-md rounded-lg p-4 z-0 relative">
          <TrackingMap />
        </div>
      </div>
    </div>
  );
}