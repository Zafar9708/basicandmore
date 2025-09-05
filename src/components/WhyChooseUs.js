import { useState, useEffect } from 'react';

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const features = [
    {
      id: 1,
      title: "Global Network",
      icon: "fas fa-globe-americas",
      description: "With established partnerships in over 48 countries, we provide seamless import and export solutions across the globe.",
      stats: "5+ Countries"
    },
    {
      id: 2,
      title: "Expert Team",
      icon: "fas fa-users",
      description: "Our team of trade experts has over 12 years of experience in international logistics, customs clearance, and supply chain management.",
      stats: "3+ Years Experience"
    },
    {
      id: 3,
      title: "Cost Efficiency",
      icon: "fas fa-hand-holding-usd",
      description: "We optimize your supply chain to reduce costs without compromising on quality or delivery timelines.",
      stats: "Average 23% Savings"
    },
    {
      id: 4,
      title: "Quality Assurance",
      icon: "fas fa-award",
      description: "Rigorous quality control processes ensure that all products meet international standards and your specifications.",
      stats: "99.7% Quality Rate"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            <i className="fas fa-star mr-2"></i> WHY CHOOSE US
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why GlobalTrade Nexus Stands Out</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the competitive advantages that make us the preferred partner for import and export businesses
          </p>
        </div>
        
        {/* Main content with unique layout */}
        <div className="relative">
          {/* Central visual element */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated circles */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-ping-slow"></div>
              <div className="absolute inset-8 rounded-full border-4 border-blue-300 animate-ping-slower"></div>
              
              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">
                  <i className={features[activeIndex].icon}></i>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature cards positioned around the central circle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`p-6 rounded-2xl transition-all duration-500 transform ${
                  activeIndex === index 
                    ? 'bg-blue-600 text-white shadow-2xl scale-105' 
                    : 'bg-white text-gray-800 shadow-md hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 rounded-xl p-3 ${
                    activeIndex === index ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <i className={`${feature.icon} text-xl`}></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className={activeIndex === index ? 'text-blue-100' : 'text-gray-600'}>
                      {feature.description}
                    </p>
                    <div className={`mt-3 text-sm font-medium px-3 py-1 rounded-full inline-block ${
                      activeIndex === index ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-gray-600">Products Exported/Imported</div>
          </div>
        </div>
        
       
        
      </div>

      <style jsx global>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-ping-slower {
          animation: ping-slower 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}