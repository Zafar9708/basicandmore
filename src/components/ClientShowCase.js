import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GlobalImpact() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % successStories.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const successStories = [
    {
      id: 1,
      title: "Electronics Import Expansion",
      category: "Technology Sector",
      image: "/api/placeholder/600/400",
      results: [
        { metric: "37%", description: "Cost reduction in supply chain" },
        { metric: "28%", description: "Faster delivery times" },
        { metric: "12", description: "New markets entered" }
      ],
      icon: "fas fa-microchip"
    },
    {
      id: 2,
      title: "Apparel Global Distribution",
      category: "Fashion Industry",
      image: "/api/placeholder/600/400",
      results: [
        { metric: "42%", description: "Increase in export volume" },
        { metric: "19", description: "New countries reached" },
        { metric: "99.2%", description: "On-time delivery rate" }
      ],
      icon: "fas fa-tshirt"
    },
    {
      id: 3,
      title: "Sports Equipment Logistics",
      category: "Sporting Goods",
      image: "/api/placeholder/600/400",
      results: [
        { metric: "31%", description: "Shipping cost reduction" },
        { metric: "15%", description: "Faster customs clearance" },
        { metric: "100%", description: "Regulatory compliance" }
      ],
      icon: "fas fa-basketball-ball"
    },
    {
      id: 4,
      title: "Consumer Goods Export",
      category: "Retail Products",
      image: "/api/placeholder/600/400",
      results: [
        { metric: "27%", description: "Overall cost savings" },
        { metric: "23", description: "New distribution partners" },
        { metric: "98%", description: "Client satisfaction rate" }
      ],
      icon: "fas fa-box-open"
    }
  ];

  const globalStats = [
    { value: "5+", label: "Countries Served", icon: "fas fa-globe-americas" },
    { value: "3+", label: "Years Experience", icon: "fas fa-calendar-alt" },
    { value: "50+", label: "Successful Projects", icon: "fas fa-chart-line" },
    { value: "99.7%", label: "On-Time Delivery", icon: "fas fa-shipping-fast" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            <i className="fas fa-chart-network mr-2"></i> GLOBAL IMPACT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Proven Results Across Industries</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering measurable success through optimized import and export solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {globalStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-md border border-blue-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-blue-600 text-2xl mb-3">
                <i className={stat.icon}></i>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story Content */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-blue-200 text-6xl z-0">
              <i className="fas fa-quote-left"></i>
            </div>
            
            <div className="relative z-10">
              {successStories.map((story, index) => (
                <div 
                  key={story.id}
                  className={`p-6 rounded-2xl mb-6 transition-all duration-500 transform ${
                    activeIndex === index 
                      ? 'bg-blue-600 text-white shadow-2xl scale-105' 
                      : 'bg-white text-gray-800 shadow-md opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-xl ${
                      activeIndex === index ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-600'
                    }`}>
                      <i className={story.icon}></i>
                    </div>
                    <div className="ml-5">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        activeIndex === index ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {story.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-3 mb-2">{story.title}</h3>
                      
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {story.results.map((result, i) => (
                          <div key={i} className="text-center">
                            <div className={`text-xl font-bold ${activeIndex === index ? 'text-yellow-300' : 'text-blue-600'}`}>
                              {result.metric}
                            </div>
                            <div className={`text-xs ${activeIndex === index ? 'text-blue-200' : 'text-gray-600'}`}>
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-blue-200 text-6xl z-0">
              <i className="fas fa-quote-right"></i>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="bg-white rounded-2xl p-1 shadow-xl border border-blue-100 overflow-hidden">
            <div className="relative h-80 rounded-xl overflow-hidden">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <i className={`${successStories[activeIndex].icon} text-5xl mb-4`}></i>
                  <h3 className="text-2xl font-bold mb-2">{successStories[activeIndex].title}</h3>
                  <p className="text-blue-100">{successStories[activeIndex].category}</p>
                </div>
              </div>
              
              {/* Global network visualization */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-300 rounded-full"></div>
                
                {/* Connection lines */}
                <div className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-white/30 transform rotate-45 origin-left"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-white/30 transform -rotate-30 origin-left"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-white/30 transform rotate-10 origin-left"></div>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Industry Impact</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-blue-600 font-bold">5+</div>
                  <div className="text-xs text-gray-600">Countries Reached</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-blue-600 font-bold">3+</div>
                  <div className="text-xs text-gray-600">Industries Served</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-4 text-white">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-sync-alt"></i>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">Continuous Optimization</div>
                    <div className="text-blue-100 text-sm">Ongoing process improvements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Industry Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "fas fa-microchip", label: "Electronics" },
              { icon: "fas fa-tshirt", label: "Apparel" },
              { icon: "fas fa-basketball-ball", label: "Sports" },
              { icon: "fas fa-box-open", label: "Consumer Goods" },
              { icon: "fas fa-gem", label: "Luxury Items" },
              { icon: "fas fa-home", label: "Home Decor" }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md border border-blue-100 transition-all duration-300 hover:shadow-lg">
                <div className="text-blue-600 text-2xl mb-2">
                  <i className={industry.icon}></i>
                </div>
                <div className="text-sm text-gray-700">{industry.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Success Story</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join companies across the globe that trust us with their import and export needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300 shadow-md">
                <i className="fas fa-calendar-check mr-3"></i> Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                <i className="fas fa-file-alt mr-3"></i> Download Brochure
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}