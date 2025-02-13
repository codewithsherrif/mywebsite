import React, { useState } from "react";
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ClockIcon,
  PhoneIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const ContactSales = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const enterpriseFeatures = [
    {
      icon: CurrencyDollarIcon,
      title: "Volume Discounts",
      description: "Special pricing for bulk orders",
    },
    {
      icon: UserGroupIcon,
      title: "Dedicated Support",
      description: "Priority 24/7 customer service",
    },
    {
      icon: BuildingOfficeIcon,
      title: "Enterprise Solutions",
      description: "Custom workflows & integrations",
    },
    {
      icon: ChartBarIcon,
      title: "Advanced Analytics",
      description: "Detailed business insights",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Scale Your Business with Expert Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Speak with our sales team about custom enterprise packages and
            volume discounts
          </p>
          <div className="mt-8 animate-float">
            <CurrencyDollarIcon className="h-16 w-16 mx-auto text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Sales Features */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {enterpriseFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <feature.icon
                className={`h-12 w-12 mx-auto mb-4 ${
                  index % 2 === 0 ? "text-blue-600" : "text-orange-500"
                }`}
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sales Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <PhoneIcon className="h-8 w-8 mr-2 text-blue-600" />
                Priority Sales Support
              </h2>

              <div className="space-y-6">
                <div className="flex items-center">
                  <ClockIcon className="h-6 w-6 text-gray-500 mr-3" />
                  <div>
                    <p className="font-semibold">Sales Team Availability</p>
                    <p className="text-gray-600">Mon-Fri: 6AM - 8PM PST</p>
                    <p className="text-gray-600">Sat: 9AM - 5PM PST</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Enterprise Benefits
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Custom Service Level Agreements",
                      "Dedicated Account Manager",
                      "Volume Pricing Models",
                      "Tailored Training Programs",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">
                Trusted By Industry Leaders
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="h-12 bg-gray-800 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-gray-400 text-sm">
                      Client {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sales Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-green-500 text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-gray-600">
                  A sales representative will contact you within 1 business day
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
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
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Employees *
                    </label>
                    <select
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 bg-white"
                      value={formData.employees}
                      onChange={(e) =>
                        setFormData({ ...formData, employees: e.target.value })
                      }
                    >
                      <option value="">Select...</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501+">501+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    How Can We Help? *
                  </label>
                  <textarea
                    rows="4"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>

                <div className="text-sm text-gray-600">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    privacy policy
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Sales Team
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Custom Enterprise Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team specializes in creating tailored systems for large
            organizations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Schedule Executive Demo
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Download Enterprise Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;
