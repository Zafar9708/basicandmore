"use client"
import { useState } from 'react';

export default function ImportExportServices() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Services data
  const services = [
    {
      title: "Agricultural Export Solutions",
      description: "Specialized export services for agricultural products including sesame seeds, rice, mustard, and other commodities",
      icon: "🌱",
      features: [
        "Quality certification & inspection",
        "Custom packaging solutions",
        "Export documentation handling",
        "Global distribution network"
      ],
      image: "/agricultural-export.jpg"
    },
    {
      title: "Textile & Apparel Export",
      description: "End-to-end export services for towels, fabrics, and textile products to international markets",
      icon: "🧵",
      features: [
        "Quality control & assurance",
        "Custom packaging & branding",
        "Logistics management",
        "Market compliance & regulations"
      ],
      image: "/textile-export.jpg"
    },
    {
      title: "Consumer Goods Import",
      description: "Complete import solutions for frames, carry bags, gowns, and various consumer products",
      icon: "🛍️",
      features: [
        "Supplier identification & verification",
        "Bulk purchasing & negotiation",
        "Quality inspection & assurance",
        "Customs clearance & documentation"
      ],
      image: "/consumer-import.jpg"
    },
    {
      title: "Sports Equipment Import",
      description: "Specialized import services for basketballs, portable hoops, kids helmets, and sports gear",
      icon: "⚽",
      features: [
        "Product sourcing & verification",
        "Safety standards compliance",
        "Inventory management",
        "Distribution network"
      ],
      image: "/sports-import.jpg"
    }
  ];

  // Process steps with icons
  const processSteps = [
    {
      title: "Consultation & Strategy",
      description: "We begin with understanding your business needs and developing a customized trade strategy",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Sourcing & Verification",
      description: "Identification of reliable suppliers and thorough quality verification processes",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Logistics & Compliance",
      description: "Comprehensive handling of shipping, customs paperwork, and regulatory compliance",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Delivery & Support",
      description: "Timely delivery to destination with ongoing support and relationship management",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  // Statistics
  const stats = [
    { value: "98%", label: "On-Time Delivery Rate" },
    { value: "50+", label: "Countries Served" },
    { value: "500+", label: "Successful Shipments" },
    { value: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Global Trade <span className="text-blue-300">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-10">
            Streamlining international trade with customized import and export solutions
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg transition duration-300 hover:bg-blue-50 hover:shadow-lg">
              Explore Our Services
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition duration-300 hover:bg-white hover:text-blue-700">
              Get a Quote
            </button>
          </div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-blue-400 opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-blue-300 opacity-40 animate-ping"></div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Import & Export Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored services designed to simplify global trade and maximize your business potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${
                  activeService === index ? 'ring-4 ring-blue-500 scale-105' : 'ring-2 ring-gray-200 hover:ring-blue-300'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                <div className="h-48 bg-blue-100 flex items-center justify-center relative">
                  <div className="text-6xl text-blue-600">{service.icon}</div>
                </div>
                
                <div className="p-6 relative z-20 bg-white">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg transition duration-300 hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Circular Design */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Streamlined Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach that ensures efficiency, compliance, and success in every trade operation
            </p>
          </div>
          
          <div className="relative h-96 md:h-[500px]">
            {/* Central circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-semibold">
                Your Success
              </div>
            </div>
            
            {/* Process steps arranged in a circle */}
            {processSteps.map((step, index) => {
              const angle = (index * 90) - 45; // Arrange in a circle
              const radius = 180; // Distance from center
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              
              return (
                <div
                  key={index}
                  className={`absolute w-64 p-6 bg-white rounded-xl shadow-lg transition-all duration-300 transform ${
                    hoveredStep === index ? 'scale-110 z-10 ring-4 ring-blue-500' : 'scale-100'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) ${hoveredStep === index ? 'scale(1.1)' : ''}`,
                  }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="text-blue-600 mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Worldwide Network</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Leverage our established network of partners and distributors across international markets
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-blue-500 rounded-xl transform transition duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3">🌎</div>
              <h3 className="font-semibold">Americas</h3>
              <p className="text-blue-100 text-sm mt-2">USA, Canada, Brazil, Mexico</p>
            </div>
            <div className="p-6 bg-blue-500 rounded-xl transform transition duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h3 className="font-semibold">Europe</h3>
              <p className="text-blue-100 text-sm mt-2">UK, Germany, France, Italy</p>
            </div>
            <div className="p-6 bg-blue-500 rounded-xl transform transition duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3">🌏</div>
              <h3 className="font-semibold">Asia</h3>
              <p className="text-blue-100 text-sm mt-2">China, Japan, India, Singapore</p>
            </div>
            <div className="p-6 bg-blue-500 rounded-xl transform transition duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-semibold">Middle East & Africa</h3>
              <p className="text-blue-100 text-sm mt-2">UAE, Saudi Arabia, South Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Expand Your Global Reach?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Let our experts handle your import/export needs while you focus on growing your business
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg transition duration-300 hover:bg-blue-50 hover:shadow-lg">
                Get a Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition duration-300 hover:bg-white hover:text-blue-600">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-pattern {
          background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
}