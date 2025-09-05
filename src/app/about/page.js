"use client"
import { useState } from 'react';

export default function AboutUs() {
  const [activeValue, setActiveValue] = useState(0);

  // Values data
  const values = [
    {
      title: "Integrity First",
      description: "We build trust through transparency, honesty, and ethical business practices in all our relationships.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Global Excellence",
      description: "We deliver exceptional service quality and innovative solutions across international markets.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, building long-term relationships based on mutual success.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Stats with icons
  const stats = [
    { number: '3+', label: 'Years Experience', icon: '🎯' },
    { number: '50+', label: 'Clients Worldwide', icon: '🌎' },
    { number: '95%', label: 'Client Retention', icon: '💫' },
    { number: '5+', label: 'Countries Served', icon: '🚀' }
  ];

  // Process steps
  const processSteps = [
    {
      title: "Consultation & Strategy",
      description: "We begin by understanding your business goals and developing a customized trade strategy.",
      icon: "📋"
    },
    {
      title: "Implementation & Execution",
      description: "Our experts handle all logistics, documentation, and compliance requirements for seamless execution.",
      icon: "⚡"
    },
    {
      title: "Ongoing Optimization",
      description: "We continuously monitor and optimize your trade operations for maximum efficiency and cost savings.",
      icon: "📊"
    },
    {
      title: "Growth & Expansion",
      description: "We help you identify new market opportunities and scale your international presence.",
      icon: "🌱"
    }
  ];

  // Client success stories
  const successStories = [
    {
      company: "EcoTech Solutions",
      challenge: "Needed to navigate complex EU regulatory requirements for electronics",
      solution: "Full compliance management and customs clearance services",
      result: "40% reduction in customs delays and 25% cost savings"
    },
    {
      company: "Global Fabrics Inc.",
      challenge: "Required efficient multi-modal transportation for textile imports",
      solution: "Custom logistics solution combining sea and rail transport",
      result: "30% faster delivery times and 15% lower shipping costs"
    },
    {
      company: "Premium Foods LLC",
      challenge: "Struggled with perishable goods import documentation",
      solution: "End-to-end documentation and cold chain logistics management",
      result: "Zero shipment rejections and 99% on-time delivery rate"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with animated gradient */}
      <section className="relative py-24 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-8 left-20 w-72 h-72 bg-blue-800 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Redefining <span className="text-blue-200">Global Trade</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Connecting businesses across borders with innovative and seamless trade solutions since 2012
          </p>
          <div className="mt-10">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition">
                Explore Our Services
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with diagonal separator */}
      <section className="relative py-20">
        <div className="absolute top-0 left-0 w-full h-24 bg-blue-600 -skew-y-2 transform origin-top-left -z-10"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-lg z-0"></div>
              <div className="relative z-10 bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2022, Box and Bag(TradeNexus) began with a vision to democratize international trade 
                  for businesses of all sizes. What started as a small consultancy has grown into a comprehensive 
                  trade solutions provider serving clients across the globe.
                </p>
                <p className="text-gray-600">
                  Today, we leverage our extensive network of partners, deep industry knowledge, and cutting-edge 
                  technology to simplify complex trade processes, reduce costs, and eliminate barriers for our clients.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-blue-600 text-white p-6 rounded-xl text-center transform transition duration-300 hover:-translate-y-2">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with interactive cards */}
      <section className="py-20 bg-blue-50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            The principles that guide everything we do at GlobalTrade Nexus
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 shadow-md transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${activeValue === index ? 'ring-4 ring-blue-500' : ''}`}
                onMouseEnter={() => setActiveValue(index)}
              >
                <div className="text-blue-600 mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Proven Process</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            A structured approach to ensuring your global trade success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full text-2xl transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-16 -translate-y-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Client Success Stories</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            How we've helped businesses overcome challenges and achieve global growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-blue-600">{story.company}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Challenge</h4>
                  <p className="text-gray-600 text-sm">{story.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Our Solution</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>
                
                <div className="p-3 bg-blue-100 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-1">Result</h4>
                  <p className="text-blue-600 text-sm font-medium">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Global Reach, Local Expertise</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              With operations spanning six continents, we combine global capabilities with local market knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Americas</h3>
              <p className="text-blue-200">North, Central & South America</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🗼</div>
              <h3 className="text-xl font-semibold mb-2">Europe</h3>
              <p className="text-blue-200">EU, UK and Eastern Europe</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🏯</div>
              <h3 className="text-xl font-semibold mb-2">Asia</h3>
              <p className="text-blue-200">East Asia, Southeast Asia, and India</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🐪</div>
              <h3 className="text-xl font-semibold mb-2">Middle East & Africa</h3>
              <p className="text-blue-200">GCC, North Africa, and Sub-Saharan Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Begin Your Global Expansion Journey</h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
            Partner with us to navigate international trade with confidence and efficiency
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition duration-300 hover:bg-blue-700 hover:shadow-lg">
              <span className="relative z-10">Get a Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}