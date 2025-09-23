"use client"
import { useState, useEffect } from 'react';

export default function BeveragesPage() {
  const [activeTab, setActiveTab] = useState('products');
  const [selectedCategory, setSelectedCategory] = useState('water');
  const [viewMode, setViewMode] = useState('masonry');
  const [animatedNumbers, setAnimatedNumbers] = useState({
    products: 0,
    countries: 0,
    capacity: 0,
    clients: 0
  });

  const beverageData = {
    water: {
      title: "Premium Water Solutions",
      icon: "💧",
      products: [
        {
          name: "Natural Mineral Water",
          description: "Sourced from protected natural springs with essential minerals",
          specs: ["500ml, 1L, 1.5L", "Still & Sparkling", "BIS Certified", "24 Months Shelf Life"],
          moq: "1000 Cases",
          price: "$8-12/case"
        },
        {
          name: "Purified Drinking Water",
          description: "Advanced RO purification with UV treatment",
          specs: ["500ml, 1L, 2L", "PET Bottles", "Custom Labeling", "18 Months Shelf Life"],
          moq: "800 Cases",
          price: "$6-10/case"
        }
      ]
    },
    juices: {
      title: "Natural Fruit Juices",
      icon: "🍊",
      products: [
        {
          name: "Orange Juice Concentrate",
          description: "100% pure concentrate without added sugars",
          specs: ["1L, 5L, 20L", "Aseptic Packaging", "No Preservatives", "12 Months Shelf Life"],
          moq: "500 Liters",
          price: "$12-18/liter"
        },
        {
          name: "Mixed Fruit Juice Blend",
          description: "Ready-to-drink tropical fruit blend",
          specs: ["250ml, 1L Tetra", "UHT Treated", "Multiple Flavors", "9 Months Shelf Life"],
          moq: "600 Cases",
          price: "$15-22/case"
        }
      ]
    },
    energy: {
      title: "Energy & Sports Drinks",
      icon: "⚡",
      products: [
        {
          name: "Premium Energy Drink",
          description: "Advanced formula with natural energizers",
          specs: ["250ml, 500ml", "Cans & Bottles", "Multiple Flavors", "12 Months Shelf Life"],
          moq: "800 Cases",
          price: "$18-25/case"
        }
      ]
    }
  };

  const certifications = [
    { name: "ISO 22000", icon: "🏆", description: "Food Safety Management" },
    { name: "FDA Approved", icon: "🔬", description: "US Food & Drug Administration" },
    { name: "Halal Certified", icon: "☪️", description: "Halal Compliance" },
    { name: "Quality Tested", icon: "✅", description: "Laboratory Verified" }
  ];

  const processes = [
    { step: "1", title: "Source Selection", description: "Careful selection of raw materials and suppliers", icon: "🌱" },
    { step: "2", title: "Quality Testing", description: "Rigorous laboratory testing and analysis", icon: "🔍" },
    { step: "3", title: "Production", description: "Modern manufacturing with quality control", icon: "🏭" },
    { step: "4", title: "Packaging", description: "Hygienic packaging with tamper evidence", icon: "📦" },
    { step: "5", title: "Delivery", description: "Temperature-controlled logistics", icon: "🚚" }
  ];

  useEffect(() => {
    const animateNumbers = () => {
      setAnimatedNumbers({
        products: 25,
        countries: 15,
        capacity: 50,
        clients: 120
      });
    };
    setTimeout(animateNumbers, 500);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section with Geometric Pattern */}
      <section className="relative py-20 overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-3xl rotate-12 opacity-20"></div>
          <div className="absolute top-32 right-20 w-64 h-64 bg-amber-200 rounded-full opacity-15"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-orange-300 rounded-2xl -rotate-12 opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-200 mb-8 animate-pulse">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
                Premium Beverage Solutions
              </span>
            </div>
            
            {/* Main Title with Gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Thirst for</span>
              <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Quality?
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our premium range of beverages crafted with excellence and delivered 
              with the quality your business deserves.
            </p>

            {/* Animated Stats in Circle Layout */}
            <div className="flex justify-center items-center space-x-8 mb-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-orange-200 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-orange-600">{animatedNumbers.products}+</span>
                </div>
                <span className="text-gray-600">Products</span>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-amber-200 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-amber-600">{animatedNumbers.countries}+</span>
                </div>
                <span className="text-gray-600">Countries</span>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-orange-200 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-orange-500">{animatedNumbers.capacity}K+</span>
                </div>
                <span className="text-gray-600">Monthly Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-orange-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-1">
            {['products', 'quality', 'process'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-semibold rounded-t-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-100'
                }`}
              >
                {tab === 'products' && '🍹 Our Products'}
                {tab === 'quality' && '🏆 Quality Standards'}
                {tab === 'process' && '⚙️ Our Process'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Tab */}
      {activeTab === 'products' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Selection */}
            <div className="flex justify-center space-x-4 mb-12">
              {Object.entries(beverageData).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === key
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  <span className="text-xl mr-2">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>

            {/* Products Grid - Masonry Layout */}
            <div className={`grid gap-8 ${
              viewMode === 'masonry' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {beverageData[selectedCategory].products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-200 group hover:-translate-y-2"
                >
                  {/* Product Header */}
                  <div className="p-6 border-b border-orange-100">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <span className="text-2xl">{beverageData[selectedCategory].icon}</span>
                    </div>
                    <p className="text-gray-600">{product.description}</p>
                  </div>

                  {/* Specifications */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {product.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-orange-600">{product.price}</div>
                        <div className="text-sm text-gray-500">MOQ: {product.moq}</div>
                      </div>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold transition duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quality Standards Tab */}
      {activeTab === 'quality' && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Uncompromising Quality</h2>
              <p className="text-xl text-gray-600">Every beverage meets the highest international standards</p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Features */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl mb-4">🔬</div>
                  <h4 className="font-bold mb-2">Laboratory Testing</h4>
                  <p className="text-orange-100 text-sm">Comprehensive quality and safety testing</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🌡️</div>
                  <h4 className="font-bold mb-2">Temperature Control</h4>
                  <p className="text-orange-100 text-sm">Maintained throughout supply chain</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">📊</div>
                  <h4 className="font-bold mb-2">Quality Metrics</h4>
                  <p className="text-orange-100 text-sm">Continuous monitoring and improvement</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Tab */}
      {activeTab === 'process' && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Beverage Journey</h2>
              <p className="text-xl text-gray-600">From source to sip - our meticulous process</p>
            </div>

            {/* Process Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-amber-400 hidden md:block"></div>
              
              <div className="space-y-12">
                {processes.map((process, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                        <div className="text-amber-500 font-bold text-lg mb-2">Step {process.step}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                    </div>
                    
                    {/* Step Marker */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {process.icon}
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
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-orange-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Quench Your Market's Thirst?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our premium beverages can elevate your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-amber-600 transition duration-300">
                🍹 Request Product Catalog
              </button>
              <button className="bg-white border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg hover:bg-orange-50 transition duration-300">
                💬 Chat with Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}