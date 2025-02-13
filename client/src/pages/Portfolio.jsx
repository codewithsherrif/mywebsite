import React, { useState } from "react";
import {
  StarIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import LiveChatWidget from "./LiveChatWidget";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      type: "Web Development",
      industry: "Fashion Retail",
      image: "bg-blue-100",
      duration: "6 weeks",
      budget: "$25k",
      features: ["React", "Node.js", "Payment Gateway"],
      rating: 4.9,
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      category: "mobile",
      type: "Mobile App",
      industry: "Health & Fitness",
      image: "bg-green-100",
      duration: "8 weeks",
      budget: "$38k",
      features: ["React Native", "AWS", "Social Features"],
      rating: 4.8,
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "web",
      type: "Web Design",
      industry: "Technology",
      image: "bg-purple-100",
      duration: "4 weeks",
      budget: "$15k",
      features: ["WordPress", "SEO", "Multilingual"],
      rating: 4.7,
    },
    {
      id: 4,
      title: "Food Delivery Service",
      category: "mobile",
      type: "Mobile App",
      industry: "Food & Beverage",
      image: "bg-red-100",
      duration: "10 weeks",
      budget: "$45k",
      features: ["Flutter", "Real-time Tracking", "POS Integration"],
      rating: 4.9,
    },
    {
      id: 5,
      title: "Online Learning Platform",
      category: "web",
      type: "Web Application",
      industry: "Education",
      image: "bg-yellow-100",
      duration: "12 weeks",
      budget: "$62k",
      features: ["MERN Stack", "Video Streaming", "CMS"],
      rating: 5.0,
    },
    {
      id: 6,
      title: "Inventory Management",
      category: "web",
      type: "Web Application",
      industry: "Logistics",
      image: "bg-pink-100",
      duration: "9 weeks",
      budget: "$55k",
      features: ["Python/Django", "ERP Integration", "Reporting"],
      rating: 4.8,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ecommerce", name: "E-Commerce" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Portfolio Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our successful projects across various industries and
              technologies
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="sticky top-0 bg-white/95 backdrop-blur z-10 border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedCategory === category.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div
                  className={`${project.image} h-48 rounded-t-2xl relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-orange-500 px-6 py-2 rounded-full flex items-center font-semibold">
                      View Project
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {project.industry}
                      </p>
                    </div>
                    <div className="flex items-center text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded">
                      <StarIcon className="h-4 w-4 mr-1" />
                      {project.rating}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{project.type}</span>
                    <span>{project.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      {project.budget}
                    </span>
                    <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                      Case Study →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats CTA */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "4.9/5", label: "Average Rating" },
                { number: "50+", label: "Technologies Used" },
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Start Your Project Now
            </button>
          </div>
        </div>
      </div>
      <LiveChatWidget />
    </>
  );
};

export default Portfolio;
