import React from "react";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import LiveChatWidget from "./LiveChatWidget";
const Services = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      features: ["React/Next.js", "Tailwind CSS", "API Integration"],
      badge: "Popular",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications",
      features: ["React Native", "iOS & Android", "Offline Support"],
      badge: "Hot",
    },
    {
      icon: ShoppingCartIcon,
      title: "E-Commerce",
      description: "Scalable online stores",
      features: [
        "Shopify/WordPress",
        "Payment Gateways",
        "Inventory Management",
      ],
    },
    {
      icon: CloudArrowUpIcon,
      title: "Cloud Solutions",
      description: "Cloud infrastructure & migration",
      features: ["AWS/Azure", "DevOps", "Serverless Architecture"],
    },
    {
      icon: ShieldCheckIcon,
      title: "Cyber Security",
      description: "Protect your digital assets",
      features: ["Audits", "Penetration Testing", "Security Training"],
    },
    {
      icon: ChartBarIcon,
      title: "SEO & Analytics",
      description: "Data-driven growth strategies",
      features: ["SEO Optimization", "Google Analytics", "Conversion Tracking"],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Expert Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transform your business with cutting-edge digital solutions
              tailored to your needs
            </p>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
              >
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {service.badge}
                  </span>
                )}
                <service.icon className="h-12 w-12 text-orange-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="text-orange-500 font-semibold hover:text-orange-600 flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}

        {/* <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts to discuss your
            project needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Book a Free Consultation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              View Pricing Plans
            </button>
          </div>
        </div>
      </section> */}
        <section className="bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts to discuss your
              project needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book-consult">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Book a Free Consultation
                </button>
              </Link>
              <Link to="/pricing">
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                  View Pricing Plans
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <LiveChatWidget />
    </>
  );
};

export default Services;
