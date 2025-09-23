"use client"
import { useState, useEffect } from 'react';

export default function RetailSupplyPage() {
  const [activeSolution, setActiveSolution] = useState('sourcing');
  const [viewMode, setViewMode] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({
    retailers: 0,
    products: 0,
    efficiency: 0,
    satisfaction: 0
  });

  const retailSolutions = {
    sourcing: {
      title: "Product Sourcing",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500",
      description: "Curated product selection tailored for retail success",
      features: [
        "Trend analysis and market research",
        "Supplier verification and quality checks",
        "Competitive pricing negotiation",
        "Product mix optimization"
      ],
      benefits: [
        "Higher profit margins",
        "Reduced inventory risks",
        "Faster product turnover",
        "Competitive advantage"
      ],
      process: ["Market Research", "Supplier Selection", "Sample Evaluation", "Bulk Ordering"]
    },
    inventory: {
      title: "Inventory Management",
      icon: "📊",
      color: "from-green-500 to-emerald-500",
      description: "Smart inventory solutions for retail operations",
      features: [
        "Automated stock level monitoring",
        "Demand forecasting algorithms",
        "Seasonal inventory planning",
        "Dead stock prevention"
      ],
      benefits: [
        "25% reduction in carrying costs",
        "99% order fulfillment rate",
        "Optimal stock levels",
        "Improved cash flow"
      ],
      process: ["Stock Analysis", "Demand Forecasting", "Reorder Planning", "Performance Review"]
    },
    delivery: {
      title: "Store Delivery",
      icon: "🚚",
      color: "from-orange-500 to-amber-500",
      description: "Reliable and efficient store delivery network",
      features: [
        "Scheduled store deliveries",
        "Real-time delivery tracking",
        "After-hours delivery options",
        "Multi-store coordination"
      ],
      benefits: [
        "Next-day delivery available",
        "99.5% on-time delivery",
        "Reduced receiving time",
        "Flexible delivery windows"
      ],
      process: ["Route Planning", "Loading Optimization", "Delivery Execution", "Proof of Delivery"]
    },
    support: {
      title: "Retail Support",
      icon: "💡",
      color: "from-purple-500 to-pink-500",
      description: "Comprehensive support for retail success",
      features: [
        "Merchandising guidance",
        "Pricing strategy support",
        "Promotional planning",
        "Retail analytics"
      ],
      benefits: [
        "Increased sales velocity",
        "Better customer engagement",
        "Data-driven decisions",
        "Competitive positioning"
      ],
      process: ["Store Assessment", "Strategy Development", "Implementation", "Performance Tracking"]
    }
  };

  const retailSegments = [
    {
      type: "Supermarkets",
      icon: "🛒",
      features: ["Fresh produce supply", "Private labeling", "Category management", "Promotional support"],
      stats: "50+ stores supplied"
    },
    {
      type: "Convenience Stores",
      icon: "🏪",
      features: ["Fast-moving goods", "Space optimization", "Quick restocking", "Value packs"],
      stats: "200+ locations"
    },
    {
      type: "Specialty Retailers",
      icon: "🎯",
      features: ["Niche products", "Brand partnerships", "Expert curation", "Premium packaging"],
      stats: "Specialized solutions"
    }
  ];

  const technologyFeatures = [
    {
      category: "Retail Analytics",
      tools: ["Sales Forecasting", "Inventory Optimization", "Price Intelligence", "Customer Insights"],
      icon: "📈"
    },
    {
      category: "Supply Chain Tech",
      tools: ["Automated Reordering", "Route Optimization", "Delivery Tracking", "Supplier Portal"],
      icon: "🔗"
    },
    {
      category: "Retail Management",
      tools: ["Shelf Planning", "Promotion Management", "Performance Dashboards", "Mobile Access"],
      icon: "📱"
    }
  ];

  useEffect(() => {
    const animateStats = () => {
      setAnimatedStats({
        retailers: 300,
        products: 10000,
        efficiency: 35,
        satisfaction: 98
      });
    };
    setTimeout(animateStats, 500);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section with Retail Theme */}
      <section className="relative py-20 overflow-hidden">
        {/* Retail Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            {/* Shelf-like patterns */}
            <div className="absolute top-20 left-10 w-64 h-2 bg-orange-300 rounded"></div>
            <div className="absolute top-32 right-20 w-56 h-2 bg-amber-300 rounded"></div>
            <div className="absolute bottom-40 left-1/4 w-48 h-2 bg-orange-400 rounded"></div>
            <div className="absolute bottom-28 right-1/3 w-52 h-2 bg-amber-400 rounded"></div>
            
            {/* Product-like dots */}
            <div className="absolute top-24 left-20 w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="absolute top-36 right-24 w-3 h-3 bg-amber-500 rounded-full"></div>
            <div className="absolute bottom-36 left-1/3 w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-amber-500 rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Retail-focused Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-200 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
                Retail Supply Solutions
              </span>
            </div>
            
            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="block text-gray-900">Retail</span>
                <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Supply Excellence
                </span>
              </h1>
              <div className="flex justify-center space-x-2 mt-6">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Comprehensive retail supply solutions designed to optimize your operations, 
              increase profitability, and ensure your shelves are always stocked with what sells.
            </p>

            {/* Retail-focused Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{animatedStats.retailers}+</div>
                  <div className="text-sm text-gray-600">Retail Partners</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200">
                  <div className="text-2xl font-bold text-amber-600 mb-1">{animatedStats.products}+</div>
                  <div className="text-sm text-gray-600">SKUs Managed</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-500 mb-1">{animatedStats.efficiency}%</div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200">
                  <div className="text-2xl font-bold text-amber-500 mb-1">{animatedStats.satisfaction}%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Navigation - Grid Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(retailSolutions).map(([key, solution]) => (
              <button
                key={key}
                onClick={() => setActiveSolution(key)}
                className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeSolution === key
                    ? `bg-gradient-to-r ${solution.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="text-2xl mb-2">{solution.icon}</div>
                <div className="font-semibold text-sm">{solution.title}</div>
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {retailSolutions[activeSolution].title}
            </h2>
            <div className="flex bg-white rounded-lg p-1 border border-orange-200">
              {['overview', 'features', 'process'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`p-2 rounded capitalize ${
                    viewMode === mode ? 'bg-orange-500 text-white' : 'text-gray-600'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Solution Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 mb-6">
                <p className="text-lg text-gray-600">
                  {retailSolutions[activeSolution].description}
                </p>
              </div>

              {/* Dynamic Content based on View Mode */}
              {viewMode === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                    <h3 className="font-bold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {retailSolutions[activeSolution].features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                    <h3 className="font-bold text-gray-900 mb-3">Business Benefits</h3>
                    <ul className="space-y-2">
                      {retailSolutions[activeSolution].benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {viewMode === 'features' && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Features</h3>
                  <ul className="space-y-3">
                    {retailSolutions[activeSolution].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {viewMode === 'process' && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Process</h3>
                  <div className="space-y-4">
                    {retailSolutions[activeSolution].process.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solution Visualization */}
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6 flex flex-col justify-center">
              <div className="text-center">
                <div className="text-5xl mb-4">{retailSolutions[activeSolution].icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Retail Impact</h3>
                <p className="text-gray-600 text-sm mb-6">Designed for retail success</p>
                
                {/* Impact Metrics */}
                <div className="space-y-3">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="font-bold text-orange-600">↑ 30%</div>
                    <div className="text-xs text-gray-600">Sales Increase</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="font-bold text-amber-600">↓ 25%</div>
                    <div className="text-xs text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="font-bold text-orange-500">99.5%</div>
                    <div className="text-xs text-gray-600">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Segments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Retail Segments We Serve</h2>
            <p className="text-xl text-gray-600">Tailored solutions for different retail formats</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {retailSegments.map((segment, index) => (
              <div key={index} className="bg-orange-50 rounded-2xl p-6 border border-orange-200 group hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{segment.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{segment.type}</h3>
                <ul className="space-y-2 mb-4">
                  {segment.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-orange-600 font-semibold text-sm">{segment.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Retail Technology Stack</h2>
            <p className="text-xl text-gray-600">Advanced tools for modern retail supply</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyFeatures.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                <div className="text-3xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.tools.map((tool, tIndex) => (
                    <li key={tIndex} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your Retail Supply
              </h2>
              <p className="text-orange-100 text-lg mb-8">
                Let's optimize your retail operations and drive growth together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  🛒 Get Retail Assessment
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  💬 Talk to Retail Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}