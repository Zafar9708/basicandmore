"use client"
import { useState, useEffect } from 'react';

export default function DailyConsumablesPage() {
  const [activeSegment, setActiveSegment] = useState('personal');
  const [viewStyle, setViewStyle] = useState('cards');
  const [animatedNumbers, setAnimatedNumbers] = useState({
    products: 0,
    categories: 0,
    monthly: 0,
    clients: 0
  });

  const consumableSegments = {
    personal: {
      title: "Personal Care",
      icon: "🧴",
      color: "from-blue-500 to-cyan-500",
      description: "Essential daily personal care products",
      products: [
        {
          name: "Body Care Kit",
          description: "Complete body care solution for daily hygiene",
          variants: ["Soap", "Shampoo", "Lotion", "Deodorant"],
          packaging: "Individual & Bulk",
          moq: "500 Units",
          price: "$8-15/unit"
        },
        {
          name: "Oral Care Set",
          description: "Dental hygiene products for family use",
          variants: ["Toothpaste", "Toothbrush", "Mouthwash", "Floss"],
          packaging: "Sets & Individual",
          moq: "300 Sets",
          price: "$12-20/set"
        }
      ]
    },
    home: {
      title: "Home Care",
      icon: "🏠",
      color: "from-green-500 to-emerald-500",
      description: "Everyday home maintenance products",
      products: [
        {
          name: "Cleaning Essentials",
          description: "Multi-surface cleaners and disinfectants",
          variants: ["Floor Cleaner", "Glass Cleaner", "Disinfectant", "Detergent"],
          packaging: "Bottles & Refills",
          moq: "400 Units",
          price: "$5-12/unit"
        }
      ]
    },
    paper: {
      title: "Paper Products",
      icon: "📄",
      color: "from-purple-500 to-pink-500",
      description: "Disposable paper goods for daily use",
      products: [
        {
          name: "Tissue & Napkin Range",
          description: "Soft and absorbent paper products",
          variants: ["Facial Tissues", "Paper Towels", "Napkins", "Toilet Paper"],
          packaging: "Multi-packs",
          moq: "1000 Packs",
          price: "$3-8/pack"
        }
      ]
    }
  };

  const productBenefits = [
    {
      icon: "⚡",
      title: "Daily Essentials",
      description: "Products for everyday use"
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Affordable pricing"
    },
    {
      icon: "🌿",
      title: "Eco Options",
      description: "Environmentally friendly"
    },
    {
      icon: "🚚",
      title: "Regular Supply",
      description: "Consistent availability"
    }
  ];

  const supplyFeatures = [
    {
      stage: "Sourcing",
      icon: "🔍",
      features: ["Quality Raw Materials", "Sustainable Sources", "Bulk Procurement"]
    },
    {
      stage: "Production",
      icon: "🏭",
      features: ["Hygienic Facilities", "Quality Control", "Efficient Manufacturing"]
    },
    {
      stage: "Distribution",
      icon: "📦",
      features: ["Fast Logistics", "Safe Packaging", "Timely Delivery"]
    }
  ];

  useEffect(() => {
    const animateNumbers = () => {
      setAnimatedNumbers({
        products: 200,
        categories: 15,
        monthly: 50,
        clients: 300
      });
    };
    setTimeout(animateNumbers, 500);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section with Diagonal Design */}
      <section className="relative py-20 overflow-hidden">
        {/* Diagonal Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 transform -skew-y-3 origin-top-left"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full opacity-15"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full opacity-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Animated Tag */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-200 mb-8 animate-pulse">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
                Everyday Essentials
              </span>
            </div>
            
            {/* Creative Title Layout */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="block text-gray-900">Daily</span>
                <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Consumables
                </span>
              </h1>
              <div className="flex justify-center space-x-2 mt-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Essential products for daily life - quality consumables that keep homes and 
              businesses running smoothly every day.
            </p>

            {/* Circular Stats Display */}
            <div className="flex justify-center space-x-8">
              {Object.entries(animatedNumbers).map(([key, value], index) => (
                <div key={key} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <div className="absolute inset-0 bg-white rounded-full border-4 border-orange-200"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
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

      {/* Segment Navigation - Vertical Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Vertical Tabs */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg border border-orange-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Product Segments</h3>
                <div className="space-y-2">
                  {Object.entries(consumableSegments).map(([key, segment]) => (
                    <button
                      key={key}
                      onClick={() => setActiveSegment(key)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center ${
                        activeSegment === key
                          ? `bg-gradient-to-r ${segment.color} text-white shadow-md`
                          : 'text-gray-600 hover:bg-orange-100'
                      }`}
                    >
                      <span className="text-2xl mr-3">{segment.icon}</span>
                      <div>
                        <div className="font-semibold">{segment.title}</div>
                        <div className="text-sm opacity-90">{segment.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Display */}
            <div className="lg:w-3/4">
              {/* View Style Toggle */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {consumableSegments[activeSegment].title} Products
                </h2>
                <div className="flex bg-white rounded-lg p-1 border border-orange-200">
                  <button
                    onClick={() => setViewStyle('cards')}
                    className={`p-2 rounded ${viewStyle === 'cards' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}
                  >
                    Cards
                  </button>
                  <button
                    onClick={() => setViewStyle('list')}
                    className={`p-2 rounded ${viewStyle === 'list' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}
                  >
                    List
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`gap-6 ${
                viewStyle === 'cards' 
                  ? 'grid grid-cols-1 md:grid-cols-2' 
                  : 'space-y-4'
              }`}>
                {consumableSegments[activeSegment].products.map((product, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-2xl shadow-lg border border-orange-200 transition-all duration-300 hover:shadow-xl ${
                      viewStyle === 'cards' ? 'p-6' : 'p-4'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600">{product.description}</p>
                      </div>
                      <span className="text-3xl">{consumableSegments[activeSegment].icon}</span>
                    </div>

                    {/* Variants */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Variants Available:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.variants.map((variant, vIndex) => (
                          <span key={vIndex} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                            {variant}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500">Packaging</span>
                        <p className="font-medium">{product.packaging}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">MOQ</span>
                        <p className="font-medium">{product.moq}</p>
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-orange-600">{product.price}</div>
                      <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-2 rounded-xl font-semibold transition duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {productBenefits.map((benefit, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reliable Supply Chain</h2>
            <p className="text-xl text-gray-600">Ensuring consistent availability of daily essentials</p>
          </div>

          {/* Supply Chain Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-amber-400 hidden md:block"></div>
            
            <div className="space-y-12">
              {supplyFeatures.map((stage, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="text-2xl mr-3">{stage.icon}</span>
                        {stage.stage}
                      </h3>
                      <ul className="space-y-2">
                        {stage.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Stage Marker */}
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Regular Supply?
              </h2>
              <p className="text-orange-100 text-lg mb-8">
                We ensure consistent delivery of daily consumables for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  📋 Request Price List
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  💬 Discuss Requirements
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}