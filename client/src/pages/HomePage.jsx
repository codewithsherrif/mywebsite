import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";

const HomePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // State for FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Placeholder data (Replace with actual data)
  const stats = [
    { number: "98%", label: "Customer Satisfaction" },
    { number: "1M+", label: "Users Worldwide" },
    { number: "500K+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
  ];

  const services = [
    {
      icon: GlobeAltIcon,
      title: "Web Development",
      desc: "Creating high-performance websites",
      color: "text-blue-500",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Apps",
      desc: "Innovative mobile solutions",
      color: "text-green-500",
    },
    {
      icon: ShoppingCartIcon,
      title: "E-Commerce",
      desc: "Robust online stores",
      color: "text-red-500",
    },
  ];

  const processSteps = ["Discover", "Design", "Develop", "Deploy"];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer web development, mobile apps, and more.",
    },
    {
      question: "How long does a project take?",
      answer: "Project duration depends on the scope and complexity.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-10 bg-[url('/texture.png')]"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative text-center px-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your{" "}
            <span className="text-outline">Digital Presence</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12"
          >
            Crafting exceptional web experiences that drive results and elevate
            brands
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Tilt tiltReverse scale={1.05}>
              <Link
                to="/booking"
                className="inline-block bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                Start Your Project Today →
              </Link>
            </Tilt>
          </motion.div>
        </motion.div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <CountUp
                  end={parseFloat(stat.number)}
                  duration={3}
                  suffix={stat.number.includes("%") ? "%" : "+"}
                />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                  <service.icon
                    className={`h-16 w-16 mb-6 ${service.color} transition-transform group-hover:rotate-12`}
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <div className="flex items-center text-orange-500 font-semibold hover:text-orange-600 cursor-pointer">
                    <span>Explore Service</span>
                    <span className="ml-2">→</span>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Add remaining sections here */}
    </div>
  );
};

export default HomePage;
