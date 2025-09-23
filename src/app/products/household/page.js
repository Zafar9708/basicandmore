"use client"
import { useState, useEffect } from 'react';

export default function HouseholdGoodsPage() {
  const [activeView, setActiveView] = useState('showcase');
  const [selectedRoom, setSelectedRoom] = useState('kitchen');
  const [animatedStats, setAnimatedStats] = useState({
    products: 0,
    categories: 0,
    suppliers: 0,
    countries: 0
  });

  const roomCategories = {
    kitchen: {
      title: "Kitchen Essentials",
      icon: "🔪",
      color: "from-orange-500 to-red-500",
      products: [
        {
          name: "Non-Stick Cookware Set",
          description: "Premium quality non-stick cookware with durable coating",
          features: ["PFOA Free", "Dishwasher Safe", "5-Piece Set", "Heat Resistant"],
          moq: "100 Sets",
          price: "$25-35/set"
        },
        {
          name: "Food Storage Containers",
          description: "Airtight plastic containers for food preservation",
          features: ["BPA Free", "Stackable", "Multiple Sizes", "Microwave Safe"],
          moq: "500 Pieces",
          price: "$2-5/piece"
        }
      ]
    },
    bathroom: {
      title: "Bathroom Supplies",
      icon: "🚿",
      color: "from-blue-500 to-cyan-500",
      products: [
        {
          name: "Bathroom Cleaning Kit",
          description: "Complete cleaning solution for bathroom maintenance",
          features: ["Eco-Friendly", "5 Products", "Long Lasting", "Pleasant Scents"],
          moq: "200 Kits",
          price: "$15-25/kit"
        }
      ]
    },
    living: {
      title: "Living Room Essentials",
      icon: "🛋️",
      color: "from-purple-500 to-pink-500",
      products: [
        {
          name: "Home Decor Set",
          description: "Elegant home decoration items for modern living spaces",
          features: ["Modern Design", "Durable Materials", "Easy Maintenance", "Various Styles"],
          moq: "150 Sets",
          price: "$30-45/set"
        }
      ]
    }
  };

  const productFeatures = [
    {
      icon: "🌿",
      title: "Eco-Friendly",
      description: "Environmentally conscious products"
    },
    {
      icon: "🛡️",
      title: "Durable",
      description: "Long-lasting quality materials"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Superior craftsmanship"
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      description: "Quick supply chain"
    }
  ];

  const qualityStandards = [
    {
      step: "01",
      title: "Material Selection",
      description: "Careful selection of raw materials from trusted suppliers",
      icon: "📋"
    },
    {
      step: "02",
      title: "Manufacturing",
      description: "Precision manufacturing with quality control checks",
      icon: "🏭"
    },
    {
      step: "03",
      title: "Testing",
      description: "Rigorous product testing and safety checks",
      icon: "🔍"
    },
    {
      step: "04",
      title: "Packaging",
      description: "Secure and attractive packaging",
      icon: "📦"
    }
  ];

  useEffect(() => {
    const animateStats = () => {
      setAnimatedStats({
        products: 150,
        categories: 12,
        suppliers: 80,
        countries: 18
      });
    };
    setTimeout(animateStats, 500);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section with Unique Pattern */}
      <section className="relative py-20 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-orange-300 rounded-full"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-amber-300 rounded-lg rotate-45"></div>
            <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-orange-400 rounded-3xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-400 rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Animated Header Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-200 mb-8 animate-bounce">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
                Premium Household Solutions
              </span>
            </div>
            
            {/* Main Title with Creative Layout */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="block text-gray-900">Transform Your</span>
                <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Living Spaces
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4"></div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover premium household goods that combine functionality with elegance, 
              designed to enhance every corner of your home.
            </p>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {Object.entries(animatedStats).map(([key, value]) => (
                <div key={key} className="text-center group">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{value}+</div>
                    <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* View Toggle */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-orange-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 py-4">
            {['showcase', 'quality', 'supply'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                  activeView === view
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-100'
                }`}
              >
                {view === 'showcase' && '🏠 Product Showcase'}
                {view === 'quality' && '⭐ Quality Standards'}
                {view === 'supply' && '🚚 Supply Chain'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase View */}
      {activeView === 'showcase' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Room Category Selection */}
            <div className="flex justify-center space-x-4 mb-12">
              {Object.entries(roomCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRoom(key)}
                  className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center ${
                    selectedRoom === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>

            {/* Products Display - Card Stack Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {roomCategories[selectedRoom].products.map((product, index) => (
                <div 
                  key={index}
                  className="relative group"
                  style={{ transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)` }}
                >
                  <div className="bg-white rounded-3xl shadow-2xl p-6 border border-orange-200 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105">
                    {/* Product Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                      <span className="text-3xl">{roomCategories[selectedRoom].icon}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-orange-600">{product.price}</div>
                        <div className="text-sm text-gray-500">MOQ: {product.moq}</div>
                      </div>
                      <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
                        Get Samples
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Product Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {productFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quality Standards View */}
      {activeView === 'quality' && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality That Speaks</h2>
              <p className="text-xl text-gray-600">Every product meets our uncompromising standards</p>
            </div>

            {/* Quality Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {qualityStandards.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl mb-2">{step.icon}</div>
                      <div className="text-sm opacity-90">{step.step}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Badges */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-semibold">ISO Certified</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="font-semibold">Safety Tested</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌱</div>
                  <div className="font-semibold">Eco-Friendly</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="font-semibold">Premium Grade</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Supply Chain View */}
      {activeView === 'supply' && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Reliable Supply Chain</h2>
              <p className="text-xl text-gray-600">Seamless delivery from factory to your doorstep</p>
            </div>

            {/* Supply Chain Visualization */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="bg-orange-100 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl">🏭</div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Manufacturing</h3>
                  <p className="text-gray-600 text-sm">Quality-controlled production facilities</p>
                </div>
                <div className="group">
                  <div className="bg-amber-100 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl">📦</div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Packaging</h3>
                  <p className="text-gray-600 text-sm">Secure and attractive packaging</p>
                </div>
                <div className="group">
                  <div className="bg-orange-100 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl">🚚</div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Delivery</h3>
                  <p className="text-gray-600 text-sm">Fast and reliable logistics</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-orange-200 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Elevate Your Home?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's bring quality household goods to your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-amber-600 transition duration-300">
                  🏠 Request Catalog
                </button>
                <button className="bg-white border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg hover:bg-orange-50 transition duration-300">
                  💬 Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}