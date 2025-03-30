"use client";

import React, { useState } from "react";

interface Appointment {
  time: string;
  doctor: string;
  available: boolean;
}

interface CalendarProps {
  selectedProviderName: string | null;
}

// Mock data - hardcoded for demo purposes
const mockAppointments: Record<number, Appointment[]> = {
  7: [
    { time: "9:00 AM", doctor: "Alice Johnson", available: true },
    { time: "10:30 AM", doctor: "Alice Johnson", available: true },
    { time: "2:00 PM", doctor: "David Kim", available: true },
  ],
  10: [
    { time: "11:00 AM", doctor: "Carol Lee", available: true },
    { time: "1:30 PM", doctor: "Carol Lee", available: true },
  ],
  15: [
    { time: "11:45 AM", doctor: "Alice Johnson", available: true },
    { time: "5:30 PM", doctor: "David Kim", available: true },
  ],
  19: [
    { time: "9:30 AM", doctor: "David Kim", available: true },
    { time: "3:00 PM", doctor: "Alice Johnson", available: true },
  ],
  23: [
    { time: "9:45 AM", doctor: "Bob Smith", available: true },
    { time: "2:30 PM", doctor: "David Kim", available: true },
  ],
  25: [
    { time: "9:15 AM", doctor: "Carol Lee", available: true },
    { time: "1:45 PM", doctor: "Alice Johnson", available: true },
  ],
  27: [
    { time: "10:00 AM", doctor: "Alice Johnson", available: true },
    { time: "2:30 PM", doctor: "David Kim", available: true },
  ],
  30: [
    { time: "10:00 AM", doctor: "Alice Johnson", available: true },
    { time: "11:30 AM", doctor: "Bob Smith", available: true },
    { time: "4:00 PM", doctor: "David Kim", available: true },
  ],
};

const Calendar: React.FC<CalendarProps> = ({ selectedProviderName }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInApril = Array.from({ length: 30 }, (_, i) => i + 1);

  // Filter appointments for the selected provider
  const getFilteredAppointments = () => {
    if (!selectedProviderName) {
      return mockAppointments; // Return all appointments if no provider selected
    }

    // Create a new object with only the selected provider's appointments
    const filteredAppointments: Record<number, Appointment[]> = {};
    
    Object.entries(mockAppointments).forEach(([dayKey, appointments]) => {
      const providerAppointments = appointments.filter(
        appt => appt.doctor === selectedProviderName
      );
      
      if (providerAppointments.length > 0) {
        filteredAppointments[parseInt(dayKey)] = providerAppointments;
      }
    });
    
    return filteredAppointments;
  };

  const filteredAppointments = getFilteredAppointments();
  const datesWithAppointments = Object.keys(filteredAppointments).map(Number);

  const handleDateClick = (day: number) => {
    // Toggle selection if clicking the same date, otherwise select the new date
    setSelectedDate(selectedDate === day ? null : day);
  };

  const hasAppointments = (day: number) => {
    return datesWithAppointments.includes(day);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="calendar mb-6">
        <h1 className="text-xl font-bold mb-4 text-center">
          {selectedProviderName ? `${selectedProviderName}'s Availability` : "April"}
        </h1>
        <div className="grid grid-cols-7 gap-2 text-center font-bold mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {/* Empty cells for days before April 1st (Monday) */}
          {Array(2)
            .fill(null)
            .map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
          {daysInApril.map((day) => (
            <div
              key={day}
              className={`p-2 border rounded transition-colors ${
                hasAppointments(day) 
                  ? "bg-blue-100 hover:bg-blue-200 cursor-pointer" 
                  : "text-gray-400"
              } ${selectedDate === day ? "ring-2 ring-blue-500 font-bold" : ""}`}
              onClick={() => hasAppointments(day) && handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Appointment section that shows only when a date with appointments is selected */}
      {selectedDate && hasAppointments(selectedDate) && (
        <div className="mt-6 border rounded-lg p-4 bg-white shadow">
          <h3 className="text-lg font-bold mb-4">
            Available Appointments for April {selectedDate}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left border">Time</th>
                  <th className="px-4 py-2 text-left border">Healthcare Provider</th>
                  <th className="px-4 py-2 text-left border">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments[selectedDate]
                  .filter(appt => appt.available)
                  .map((appointment, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{appointment.time}</td>
                      <td className="border px-4 py-2">{appointment.doctor}</td>
                      <td className="border px-4 py-2">
                        <button 
                          className="bg-black text-white px-4 py-1 rounded hover:bg-gray-700"
                          onClick={() => alert(`Appointment booked for ${appointment.time} with ${appointment.doctor}`)}
                        >
                          Book
                        </button>
                      </td>
                    </tr>
                  ))}
                {filteredAppointments[selectedDate].filter(appt => appt.available).length === 0 && (
                  <tr>
                    <td colSpan={3} className="border px-4 py-2 text-center">
                      No available appointments for this day.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;