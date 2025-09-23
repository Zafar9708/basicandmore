"use client"
import { useState, useEffect } from 'react';

export default function SpecialtyItemsPage() {
  const [activeCollection, setActiveCollection] = useState('premium');
  const [viewMode, setViewMode] = useState('gallery');
  const [animatedStats, setAnimatedStats] = useState({
    items: 0,
    categories: 0,
    exclusive: 0,
    clients: 0
  });

  const specialtyCollections = {
    premium: {
      title: "Premium Collection",
      icon: "👑",
      color: "from-amber-500 to-yellow-500",
      description: "Luxury and high-end specialty items",
      items: [
        {
          name: "Artisanal Gift Sets",
          description: "Handcrafted luxury gift packages for special occasions",
          features: ["Premium Packaging", "Customizable", "Limited Edition", "Eco-Friendly"],
          uniqueness: "Exclusive designs not available elsewhere",
          moq: "50 Sets",
          price: "$45-120/set",
          leadTime: "2-3 weeks"
        },
        {
          name: "Limited Edition Home Decor",
          description: "Exclusive home decoration pieces with unique designs",
          features: ["Handcrafted", "Numbered Editions", "Premium Materials", "Certificate of Authenticity"],
          uniqueness: "Limited to 500 pieces worldwide",
          moq: "25 Pieces",
          price: "$75-200/piece",
          leadTime: "3-4 weeks"
        }
      ]
    },
    cultural: {
      title: "Cultural Specialties",
      icon: "🌍",
      color: "from-green-500 to-teal-500",
      description: "Traditional and culturally significant items",
      items: [
        {
          name: "Traditional Craftwork",
          description: "Authentic cultural artifacts and traditional crafts",
          features: ["Handmade", "Cultural Significance", "Authentic Materials", "Story Behind Each Piece"],
          uniqueness: "Sourced directly from artisan communities",
          moq: "30 Pieces",
          price: "$35-150/piece",
          leadTime: "4-5 weeks"
        }
      ]
    },
    innovative: {
      title: "Innovative Products",
      icon: "💡",
      color: "from-blue-500 to-cyan-500",
      description: "Cutting-edge and unique product innovations",
      items: [
        {
          name: "Smart Home Solutions",
          description: "Innovative home products with smart technology integration",
          features: ["Tech-Enabled", "Energy Efficient", "Modern Design", "Easy Installation"],
          uniqueness: "Patent-pending technology",
          moq: "100 Units",
          price: "$60-180/unit",
          leadTime: "2 weeks"
        }
      ]
    }
  };

  const uniqueSellingPoints = [
    {
      icon: "⭐",
      title: "Exclusive Items",
      description: "Products you won't find elsewhere"
    },
    {
      icon: "🎨",
      title: "Unique Designs",
      description: "Creative and original product designs"
    },
    {
      icon: "🔒",
      title: "Limited Availability",
      description: "Limited runs ensure exclusivity"
    },
    {
      icon: "📦",
      title: "Special Packaging",
      description: "Premium unboxing experience"
    }
  ];

  const sourcingProcess = [
    {
      phase: "Discovery",
      icon: "🔍",
      steps: ["Market Research", "Artisan Identification", "Product Conceptualization"]
    },
    {
      phase: "Development",
      icon: "✨",
      steps: ["Prototype Creation", "Quality Assessment", "Design Refinement"]
    },
    {
      phase: "Delivery",
      icon: "🚀",
      steps: ["Limited Production", "Quality Assurance", "Exclusive Distribution"]
    }
  ];

  useEffect(() => {
    const animateStats = () => {
      setAnimatedStats({
        items: 75,
        categories: 8,
        exclusive: 40,
        clients: 150
      });
    };
    setTimeout(animateStats, 500);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section with Polygon Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Polygon Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 left-10 w-48 h-48 bg-orange-300 clip-polygon"></div>
            <div className="absolute top-40 right-20 w-36 h-36 bg-amber-300 clip-polygon-reverse"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-orange-400 clip-polygon"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-400 clip-polygon-reverse"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-200 mb-8 animate-float">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
                Exclusive Specialty Items
              </span>
            </div>
            
            {/* Creative Title Layout */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="block text-gray-900">Discover</span>
                <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  The Extraordinary
                </span>
              </h1>
              <div className="flex justify-center space-x-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-amber-400 text-xl">✦</span>
                ))}
              </div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Curated collection of unique, limited-edition, and specialty items that 
              stand out from ordinary products. Each piece tells a story of craftsmanship and innovation.
            </p>

            {/* Diamond-shaped Stats */}
            <div className="flex justify-center space-x-6">
              {Object.entries(animatedStats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="w-20 h-20 bg-white border-2 border-orange-200 rotate-45 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <div className="-rotate-45">
                      <span className="text-xl font-bold text-orange-600">{value}+</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collection Navigation - Card Style */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(specialtyCollections).map(([key, collection]) => (
              <div 
                key={key}
                onClick={() => setActiveCollection(key)}
                className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeCollection === key ? 'scale-105' : ''
                }`}
              >
                <div className={`bg-gradient-to-r ${collection.color} rounded-2xl p-6 text-white shadow-lg`}>
                  <div className="text-4xl mb-3">{collection.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-white/90 text-sm">{collection.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-white/80 text-sm">{collection.items.length} items</span>
                    {activeCollection === key && (
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs">Selected</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {specialtyCollections[activeCollection].title}
            </h2>
            <div className="flex bg-white rounded-lg p-1 border border-orange-200">
              <button
                onClick={() => setViewMode('gallery')}
                className={`p-2 rounded flex items-center ${
                  viewMode === 'gallery' ? 'bg-orange-500 text-white' : 'text-gray-600'
                }`}
              >
                <span className="mr-2">🖼️</span> Gallery
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={`p-2 rounded flex items-center ${
                  viewMode === 'detailed' ? 'bg-orange-500 text-white' : 'text-gray-600'
                }`}
              >
                <span className="mr-2">📋</span> Detailed
              </button>
            </div>
          </div>

          {/* Items Display */}
          <div className={`gap-8 ${
            viewMode === 'gallery' 
              ? 'grid grid-cols-1 lg:grid-cols-2' 
              : 'space-y-6'
          }`}>
            {specialtyCollections[activeCollection].items.map((item, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  viewMode === 'gallery' ? 'p-6' : 'p-8'
                }`}
              >
                {/* Item Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-3xl">{specialtyCollections[activeCollection].icon}</span>
                </div>

                {/* Uniqueness Highlight */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                  <div className="flex items-center">
                    <span className="text-amber-500 text-lg mr-2">⭐</span>
                    <span className="text-amber-800 font-semibold">Unique Feature:</span>
                  </div>
                  <p className="text-amber-700 text-sm mt-1">{item.uniqueness}</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <span className="text-xs text-gray-500">MOQ</span>
                    <p className="font-semibold">{item.moq}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Lead Time</span>
                    <p className="font-semibold">{item.leadTime}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Price Range</span>
                    <p className="font-semibold text-orange-600">{item.price}</p>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 rounded-xl font-semibold transition duration-300">
                  Request Exclusive Access
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Special</h2>
            <p className="text-xl text-gray-600">The elements that set our specialty items apart</p>
          </div>

          {/* Circular Feature Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {uniqueSellingPoints.map((point, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{point.icon}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Curated Process</h2>
            <p className="text-xl text-gray-600">How we source and deliver exceptional specialty items</p>
          </div>

          {/* Process Steps with Connected Dots */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-300 to-amber-300 hidden md:block"></div>
            
            <div className="space-y-16">
              {sourcingProcess.map((phase, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="text-2xl mr-3">{phase.icon}</span>
                        {phase.phase}
                      </h3>
                      <ul className="space-y-2">
                        {phase.steps.map((step, sIndex) => (
                          <li key={sIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Phase Marker */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Spacer */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Access CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Access Exclusive Items
              </h2>
              <p className="text-orange-100 text-lg mb-8">
                Join our premium client list for first access to limited edition specialty items
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  👑 Request Premium Access
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  💼 Become a Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .clip-polygon {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        .clip-polygon-reverse {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}