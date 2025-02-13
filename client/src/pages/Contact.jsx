import React, { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import axios_url from "../helpers/AxiosUrl";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios_url.post("user/register", formData); // No need to wrap formData in another object

      if (response.status === 200) {
        // const token = response.data?.accessToken;
        console.log(response.data.message);
        console.log(formData);

        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
    }
  };

  const contactMethods = [
    {
      icon: MapPinIcon,
      title: "Visit Us",
      details: "123 Tech Street, Silicon Valley, CA 94088",
      color: "text-blue-500",
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      color: "text-green-500",
    },
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      details: "contact@devcraft.com",
      color: "text-orange-500",
    },
    {
      icon: ClockIcon,
      title: "Working Hours",
      details: "Mon-Fri: 9AM - 5PM PST",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something Amazing
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project ideas and
            requirements
          </p>
          <div className="mt-8 animate-bounce-slow">
            <EnvelopeIcon className="h-16 w-16 mx-auto text-orange-400" />
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <ChatBubbleLeftRightIcon className="h-8 w-8 mr-2 text-orange-500" />
              Contact Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <method.icon className={`h-12 w-12 mb-4 ${method.color}`} />
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600">{method.details}</p>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GlobeAmericasIcon className="h-6 w-6 mr-2 text-orange-500" />
                Our Location
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with actual map embed */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map integration placeholder
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  We'll get back to you within 24 hours
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Send Message
                  </button>
                  <span className="text-sm text-gray-500">
                    Typically replies in 2 hours
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Social & CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
              (network, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <span className="sr-only">{network}</span>
                  <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                    {/* Replace with actual social icons */}
                    {network[0]}
                  </div>
                </a>
              )
            )}
          </div>
          <div className="mt-8 border-t pt-8">
            <p className="text-gray-600 mb-4">Prefer a direct conversation?</p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Schedule Video Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
