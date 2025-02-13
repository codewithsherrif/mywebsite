import React, { useState } from "react";
import {
  CheckBadgeIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const plans = [
    {
      name: "Starter",
      price: isAnnual ? "29" : "39",
      description: "Perfect for small teams & startups",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "3 team members",
        "5GB storage",
        "Email support",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: isAnnual ? "99" : "129",
      description: "For growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "10 team members",
        "50GB storage",
        "Priority support",
        "API access",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large teams",
      features: [
        "Unlimited everything",
        "Dedicated support",
        "Single Sign-On",
        "Custom SLAs",
        "Audit logs",
        "Personal training",
      ],
      cta: "Contact Sales",
    },
  ];

  const features = [
    {
      name: "Projects",
      tiers: {
        Starter: "Up to 5",
        Professional: "Unlimited",
        Enterprise: "Unlimited",
      },
    },
    {
      name: "Storage",
      tiers: {
        Starter: "5GB",
        Professional: "50GB",
        Enterprise: "1TB+",
      },
    },
    {
      name: "Support",
      tiers: {
        Starter: "Email",
        Professional: "Priority",
        Enterprise: "24/7 Dedicated",
      },
    },
    {
      name: "Analytics",
      tiers: {
        Starter: "Basic",
        Professional: "Advanced",
        Enterprise: "Advanced + Custom",
      },
    },
    {
      name: "Team Members",
      tiers: {
        Starter: "3",
        Professional: "10",
        Enterprise: "Unlimited",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. Scale as you grow.
          </p>
        </div>
      </div>

      {/* Pricing Toggle */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center gap-4">
          <span className="text-gray-700 font-medium">Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
              ${isAnnual ? "bg-blue-600" : "bg-gray-300"}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition
              ${isAnnual ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Annual</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Save 20%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-xl shadow-lg p-8
            ${plan.popular ? "ring-2 ring-blue-600" : ""}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {plan.name}
            </h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-8">
              {plan.price === "Custom" ? (
                <div className="text-4xl font-bold text-gray-900">
                  Contact Us
                </div>
              ) : (
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              )}
              {isAnnual && plan.price !== "Custom" && (
                <div className="text-gray-500 mt-1">billed annually</div>
              )}
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg font-semibold transition-colors
              ${
                plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Feature Comparison */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Plan Comparison</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left">Features</th>
                <th className="px-6 py-4 text-center">Starter</th>
                <th className="px-6 py-4 text-center">Professional</th>
                <th className="px-6 py-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name} className="border-t">
                  <td className="px-6 py-4 font-medium">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {feature.tiers.Starter}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.tiers.Professional}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.tiers.Enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "Can I switch plans later?",
              answer: "Yes, you can upgrade or downgrade at any time.",
            },
            {
              question: "Is there a free trial?",
              answer: "Yes, all paid plans come with a 14-day free trial.",
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards and PayPal.",
            },
            {
              question: "Do you offer discounts for non-profits?",
              answer: "Yes, contact our sales team for special pricing.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise CTA */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <BuildingOfficeIcon className="h-16 w-16 mx-auto mb-6 text-blue-400" />
          <h2 className="text-3xl font-bold mb-4">
            Need Custom Enterprise Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team can create tailored packages for large organizations with
            complex needs.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Contact Enterprise Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
