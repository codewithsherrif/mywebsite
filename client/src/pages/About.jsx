import React from "react";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAmericasIcon,
  HeartIcon,
  SparklesIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import LiveChatWidget from "./LiveChatWidget";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      expertise: "Tech Strategy",
    },
    { name: "Michael Chen", role: "CTO", expertise: "Software Architecture" },
    { name: "Emma Wilson", role: "Lead Designer", expertise: "UX/UI" },
    { name: "David Smith", role: "Mobile Expert", expertise: "React Native" },
  ];

  const timeline = [
    {
      year: "2018",
      event: "Company Founded",
      detail: "Started in a small coworking space",
    },
    {
      year: "2019",
      event: "First Major Client",
      detail: "Developed e-commerce platform",
    },
    {
      year: "2020",
      event: "Mobile Division Launch",
      detail: "Expanded to app development",
    },
    {
      year: "2022",
      event: "Global Reach",
      detail: "Served clients in 15+ countries",
    },
    { year: "2023", event: "Award Winning", detail: "Best Tech Startup 2023" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crafting Digital Excellence Since 2018
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transforming ideas into impactful digital solutions through
              innovation and expertise
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  <SparklesIcon className="h-8 w-8 inline-block mr-2 text-orange-500" />
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600">
                  To empower businesses through cutting-edge digital solutions
                  that drive growth, enhance user experiences, and create
                  lasting value in an ever-evolving digital landscape.
                </p>
                <div className="mt-8 p-6 bg-orange-50 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Core Values</h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Innovation",
                      "Integrity",
                      "Excellence",
                      "Collaboration",
                    ].map((value) => (
                      <li key={value} className="flex items-center">
                        <HeartIcon className="h-5 w-5 text-orange-500 mr-2" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl h-96 overflow-hidden">
                {/* Add your office image here */}
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <UserGroupIcon className="h-8 w-8 inline-block mr-2 text-orange-500" />
              Meet The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                    {/* Add team member photo */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.expertise}</p>
                  <div className="mt-4 flex justify-center space-x-3">
                    {[
                      /* Add social icons here */
                    ].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <BriefcaseIcon className="h-8 w-8 inline-block mr-2 text-orange-500" />
              Our Journey
            </h2>
            <div className="relative pl-8 sm:pl-32 py-12 space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start group">
                  <div className="absolute left-0 sm:-left-24 w-16 flex items-center justify-center">
                    <div className="h-12 w-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="pl-8 sm:pl-0">
                    <div className="border-l-4 border-orange-500 pl-8 py-4 relative">
                      <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-2 top-6"></div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.event}
                      </h3>
                      <p className="text-gray-600 mt-2">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "5+", label: "Years Experience" },
                { number: "150+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "15+", label: "Countries Served" },
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-8">
              Let's collaborate to create something extraordinary for your
              business
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                Meet The Team
              </button>
            </div>
          </div>
        </section>
      </div>
      <LiveChatWidget />
    </>
  );
};

export default About;
