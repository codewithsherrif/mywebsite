import React, { useState } from "react";
import {
  CalendarIcon,
  ClockIcon,
  UserCircleIcon,
  VideoCameraIcon,
  PhoneIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const ConsultationBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const services = [
    {
      id: 1,
      title: "Strategy Session",
      duration: "60 mins",
      description: "Business growth planning and goal setting",
      price: "$299",
    },
    {
      id: 2,
      title: "Technical Review",
      duration: "90 mins",
      description: "In-depth technology audit and recommendations",
      price: "$499",
    },
    {
      id: 3,
      title: "Quick Consultation",
      duration: "30 mins",
      description: "Focused discussion on specific challenges",
      price: "$149",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
  ];

  const ProgressStepper = () => (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="flex justify-between">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex flex-col items-center w-1/3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${step >= num ? "bg-orange-500 text-white" : "bg-gray-200"}`}
            >
              {num}
            </div>
            <div
              className={`mt-2 text-sm ${
                step >= num ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {["Service", "Time", "Details"][num - 1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Book Your Consultation
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Schedule a personalized session with our experts
        </p>

        <ProgressStepper />

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold flex items-center">
                <VideoCameraIcon className="h-6 w-6 mr-2 text-orange-500" />
                Select Consultation Type
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service.id);
                      setStep(2);
                    }}
                    className={`p-6 border rounded-xl cursor-pointer transition-all
                      ${
                        selectedService === service.id
                          ? "border-orange-500 bg-orange-50"
                          : "hover:border-orange-200 hover:bg-gray-50"
                      }`}
                  >
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-orange-600 font-medium">
                        {service.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold flex items-center">
                <CalendarIcon className="h-6 w-6 mr-2 text-orange-500" />
                Choose Date & Time
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Times
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm rounded-md transition-colors
                          ${
                            selectedTime === time
                              ? "bg-orange-500 text-white"
                              : "bg-gray-100 hover:bg-orange-100"
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-gray-600 hover:text-orange-600"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold flex items-center">
                <UserCircleIcon className="h-6 w-6 mr-2 text-orange-500" />
                Your Information
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    value={userDetails.name}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    value={userDetails.email}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    value={userDetails.phone}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, phone: e.target.value })
                    }
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Appointment Summary
                  </h3>
                  <div className="flex justify-between text-gray-600">
                    <span>Service:</span>
                    <span>
                      {services.find((s) => s.id === selectedService)?.title}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Date:</span>
                    <span>{selectedDate}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-gray-600 hover:text-orange-600"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-12">
              <CheckBadgeIcon className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-8">
                A confirmation email has been sent to {userDetails.email}
              </p>
              <div className="bg-gray-50 rounded-xl p-6 inline-block text-left">
                <div className="font-mono text-sm space-y-2">
                  <p>
                    Booking ID: #
                    {Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                  <p>
                    Service:{" "}
                    {services.find((s) => s.id === selectedService)?.title}
                  </p>
                  <p>
                    Date: {selectedDate} at {selectedTime}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                >
                  Book Another Session
                </button>
                <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50">
                  Add to Calendar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;
