"use client"
import { useState, useEffect } from 'react';

export default function WholesaleDistributionPage() {
  const [activeService, setActiveService] = useState('procurement');
  const [viewMode, setViewMode] = useState('features');
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    products: 0,
    countries: 0,
    efficiency: 0
  });

  const wholesaleServices = {
    procurement: {
      title: "Bulk Procurement",
      icon: "📦",
      color: "from-blue-500 to-cyan-500",
      description: "Strategic sourcing and bulk purchasing solutions",
      features: [
        "Supplier negotiation and contracts",
        "Volume discount optimization",
        "Quality assurance at source",
        "Custom product specifications"
      ],
      benefits: [
        "Cost savings up to 30%",
        "Consistent quality supply",
        "Flexible order quantities",
        "Multiple supplier options"
      ]
    },
    inventory: {
      title: "Inventory Management",
      icon: "🏪",
      color: "from-green-500 to-emerald-500",
      description: "Smart inventory solutions for optimal stock levels",
      features: [
        "Demand forecasting analytics",
        "Safety stock optimization",
        "Inventory turnover analysis",
        "Warehouse management systems"
      ],
      benefits: [
        "Reduce carrying costs by 25%",
        "Minimize stockouts",
        "Improve cash flow",
        "Real-time inventory tracking"
      ]
    },
    logistics: {
      title: "Distribution Logistics",
      icon: "🚚",
      color: "from-orange-500 to-amber-500",
      description: "Efficient supply chain and delivery management",
      features: [
        "Multi-modal transportation",
        "Route optimization",
        "Last-mile delivery solutions",
        "Temperature-controlled logistics"
      ],
      benefits: [
        "Faster delivery times",
        "Reduced shipping costs",
        "Real-time tracking",
        "Nationwide coverage"
      ]
    },
    valueAdded: {
      title: "Value-Added Services",
      icon: "⭐",
      color: "from-purple-500 to-pink-500",
      description: "Additional services to enhance your distribution",
      features: [
        "Private labeling and branding",
        "Product customization",
        "Quality control inspections",
        "Packaging and repackaging"
      ],
      benefits: [
        "Brand differentiation",
        "Custom product solutions",
        "Quality assurance",
        "Market-ready packaging"
      ]
    }
  };

  const distributionProcess = [
    {
      step: "01",
      title: "Needs Assessment",
      description: "Understand your business requirements and distribution goals",
      icon: "📋",
      duration: "1-2 days"
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Develop customized distribution strategy and logistics plan",
      icon: "🗺️",
      duration: "3-5 days"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the distribution plan with continuous monitoring",
      icon: "⚡",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous improvement based on performance analytics",
      icon: "📊",
      duration: "Continuous"
    }
  ];

  const technologyStack = [
    {
      category: "Inventory Management",
      tools: ["ERP Systems", "RFID Tracking", "Automated Reordering", "Stock Analytics"],
      icon: "📱"
    },
    {
      category: "Logistics Technology",
      tools: ["Route Optimization", "GPS Tracking", "Delivery Management", "Fleet Management"],
      icon: "🚛"
    },
    {
      category: "Analytics & Reporting",
      tools: ["Demand Forecasting", "Performance Metrics", "Cost Analysis", "Market Insights"],
      icon: "📈"
    }
  ];

  useEffect(() => {
    const animateStats = () => {
      setAnimatedStats({
        clients: 250,
        products: 5000,
        countries: 12,
        efficiency: 40
      });
    };
    setTimeout(animateStats, 500);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section with Network Visualization */}
      <section className="relative py-20 overflow-hidden">
        {/* Network Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            {/* Network Lines */}
            <div className="absolute top-1/4 left-1/4 w-px h-32 bg-orange-300 rotate-45"></div>
            <div className="absolute top-1/3 right-1/3 w-px h-40 bg-amber-300 -rotate-45"></div>
            <div className="absolute bottom-1/4 left-1/3 w-px h-28 bg-orange-400 rotate-12"></div>
            <div className="absolute bottom-1/3 right-1/4 w-px h-36 bg-amber-400 -rotate-12"></div>
            
            {/* Network Nodes */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-amber-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-orange-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-amber-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Service Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-200 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
                Wholesale Distribution Solutions
              </span>
            </div>
            
            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="block text-gray-900">Scalable</span>
                <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Distribution Network
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6"></div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              End-to-end wholesale distribution services designed to optimize your supply chain, 
              reduce costs, and ensure reliable product delivery to your customers.
            </p>

            {/* Stats Grid with Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{animatedStats.clients}+</div>
                  <div className="text-sm text-gray-600">Satisfied Clients</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200">
                  <div className="text-2xl font-bold text-amber-600 mb-1">{animatedStats.products}+</div>
                  <div className="text-sm text-gray-600">Products Distributed</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-500 mb-1">{animatedStats.countries}+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-200">
                  <div className="text-2xl font-bold text-amber-500 mb-1">{animatedStats.efficiency}%</div>
                  <div className="text-sm text-gray-600">Cost Efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation - Horizontal Scroller */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-y border-orange-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
            {Object.entries(wholesaleServices).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`flex-shrink-0 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center whitespace-nowrap ${
                  activeService === key
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                <span className="text-xl mr-3">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* View Toggle */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {wholesaleServices[activeService].title}
            </h2>
            <div className="flex bg-white rounded-lg p-1 border border-orange-200">
              <button
                onClick={() => setViewMode('features')}
                className={`p-2 rounded ${
                  viewMode === 'features' ? 'bg-orange-500 text-white' : 'text-gray-600'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setViewMode('benefits')}
                className={`p-2 rounded ${
                  viewMode === 'benefits' ? 'bg-orange-500 text-white' : 'text-gray-600'
                }`}
              >
                Benefits
              </button>
            </div>
          </div>

          {/* Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Description */}
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 mb-6">
                <p className="text-lg text-gray-600">
                  {wholesaleServices[activeService].description}
                </p>
              </div>

              {/* Features/Benefits List */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {viewMode === 'features' ? 'Key Features' : 'Business Benefits'}
                </h3>
                <ul className="space-y-3">
                  {(viewMode === 'features' 
                    ? wholesaleServices[activeService].features 
                    : wholesaleServices[activeService].benefits
                  ).map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Visualization */}
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">{wholesaleServices[activeService].icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Overview</h3>
                <p className="text-gray-600">Comprehensive wholesale distribution solution</p>
                
                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="font-bold text-amber-600">99.5%</div>
                    <div className="text-sm text-gray-600">Reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Distribution Process</h2>
            <p className="text-xl text-gray-600">Streamlined workflow for efficient wholesale distribution</p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {distributionProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                <span className="text-orange-500 text-xs font-semibold">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Infrastructure</h2>
            <p className="text-xl text-gray-600">Advanced tools powering our distribution network</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyStack.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
                <div className="text-3xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.tools.map((tool, tIndex) => (
                    <li key={tIndex} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
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
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Optimize Your Distribution?
              </h2>
              <p className="text-orange-100 text-lg mb-8">
                Let's discuss how our wholesale distribution services can transform your supply chain
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  📊 Get Custom Quote
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  💬 Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}