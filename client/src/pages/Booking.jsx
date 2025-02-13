import React, { useState, useEffect } from "react";
import {
  CalendarIcon,
  ClockIcon,
  UserCircleIcon,
  CreditCardIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import LiveChatWidget from "./LiveChatWidget";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    {
      id: 1,
      name: "Website Development",
      duration: "2-4 weeks",
      price: "$2999",
    },
    {
      id: 2,
      name: "Mobile App Development",
      duration: "4-8 weeks",
      price: "$4999",
    },
    { id: 3, name: "E-Commerce Setup", duration: "1-2 weeks", price: "$1999" },
    { id: 4, name: "SEO Optimization", duration: "Ongoing", price: "$999/mo" },
  ];

  // Simulate API call for available times
  useEffect(() => {
    if (selectedDate) {
      setIsLoading(true);
      // Fake API delay
      setTimeout(() => {
        setAvailableTimes(["09:00", "10:30", "13:00", "14:30", "16:00"]);
        setIsLoading(false);
      }, 1000);
    }
  }, [selectedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(5); // Show confirmation
    // Here you would typically send data to your backend
  };

  const ProgressStepper = () => (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="flex justify-between">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="flex flex-col items-center w-1/4">
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
              {["Service", "Date & Time", "Details", "Confirm"][num - 1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <LiveChatWidget />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Book Your Service
          </h1>

          <ProgressStepper />

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold flex items-center">
                  <CreditCardIcon className="h-6 w-6 mr-2 text-orange-500" />
                  Choose Your Service
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
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
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                      <div className="mt-2 text-sm text-gray-600">
                        <p>{service.duration}</p>
                        <p className="mt-1 text-orange-600 font-medium">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold flex items-center">
                  <CalendarIcon className="h-6 w-6 mr-2 text-orange-500" />
                  Select Date & Time
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                  {/* Calendar Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Choose Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Times
                    </label>
                    {isLoading ? (
                      <div className="animate-pulse space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="h-10 bg-gray-200 rounded-md"
                          ></div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        {availableTimes.map((time) => (
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
                    )}
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

            {/* Step 3: User Details */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold flex items-center">
                  <UserCircleIcon className="h-6 w-6 mr-2 text-orange-500" />
                  Your Information
                </h2>

                <div className="space-y-4">
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
                        setUserDetails({
                          ...userDetails,
                          email: e.target.value,
                        })
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
                        setUserDetails({
                          ...userDetails,
                          phone: e.target.value,
                        })
                      }
                    />
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
                    type="button"
                    onClick={() => setStep(4)}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold flex items-center">
                  <CheckBadgeIcon className="h-6 w-6 mr-2 text-orange-500" />
                  Confirm Booking
                </h2>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Booking Summary
                  </h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Service:</dt>
                      <dd className="font-medium">
                        {services.find((s) => s.id === selectedService)?.name}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Date:</dt>
                      <dd className="font-medium">{selectedDate}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Time:</dt>
                      <dd className="font-medium">{selectedTime}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Name:</dt>
                      <dd className="font-medium">{userDetails.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Email:</dt>
                      <dd className="font-medium">{userDetails.email}</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
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
              </div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <div className="text-center py-16">
                <CheckBadgeIcon className="h-20 w-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-8">
                  A confirmation email has been sent to {userDetails.email}
                </p>
                <div className="bg-gray-50 rounded-xl p-6 inline-block text-left">
                  <div className="font-mono text-sm">
                    <p>
                      Booking ID: #
                      {Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </p>
                    <p>
                      Date: {selectedDate} at {selectedTime}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="mt-8 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                >
                  Make Another Booking
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
