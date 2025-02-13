import React from "react";
import { Link } from "react-router-dom";
// import {
//   GlobeAltIcon,
//   PhoneIcon,
//   EnvelopeIcon,
//   MapPinIcon,
//   FacebookIcon,
//   TwitterIcon,
//   InstagramIcon,
//   LinkedinIcon,
// } from "@heroicons/react/24/outline";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  PhoneCall,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Careers", path: "/careers" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                DevCraft
              </span>
            </h3>
            <p className="text-sm leading-relaxed">
              Crafting digital excellence through innovative web solutions and
              cutting-edge technology.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm hover:text-orange-500 transition-colors duration-200 block"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm hover:text-orange-500 transition-colors duration-200 block"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="ml-2 text-sm">
                  123 Tech Street, Silicon Valley, CA 94088
                </p>
              </div>
              <div className="flex items-center">
                <PhoneCall className="h-5 w-5 text-orange-500" />
                <a
                  href="tel:+11234567890"
                  className="ml-2 text-sm hover:text-orange-500"
                >
                  +1 (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500" />
                <a
                  href="mailto:info@devcraft.com"
                  className="ml-2 text-sm hover:text-orange-500"
                >
                  info@devcraft.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-gray-700 pt-12">
          <div className="max-w-md mx-auto text-center">
            <h5 className="text-white text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h5>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DevCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
