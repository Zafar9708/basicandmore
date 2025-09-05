"use client"
import { useState } from 'react';

export default function LogisticsShipping() {
  const [activeService, setActiveService] = useState(0);
  const [activeMode, setActiveMode] = useState('sea');

  // Services data
  const services = [
    {
      title: "Ocean Freight",
      description: "Comprehensive sea shipping solutions for all types of cargo",
      icon: "🚢",
      features: [
        "FCL (Full Container Load) shipments",
        "LCL (Less than Container Load) consolidation",
        "Breakbulk and project cargo",
        "Reefer container services",
        "Dangerous goods handling"
      ],
      details: "Our ocean freight services provide cost-effective solutions for large volume shipments with flexible scheduling and global coverage."
    },
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo solutions for time-sensitive shipments",
      icon: "✈️",
      features: [
        "Next flight out services",
        "Consolidated air freight",
        "Charter aircraft services",
        "Express air delivery",
        "Temperature-controlled air cargo"
      ],
      details: "When time is critical, our air freight services ensure your goods reach their destination quickly and securely with real-time tracking."
    },
    {
      title: "Land Transportation",
      description: "Efficient overland transport solutions for domestic and cross-border shipments",
      icon: "🚛",
      features: [
        "Full truckload (FTL) services",
        "Less than truckload (LTL) consolidation",
        "Intermodal transport solutions",
        "Specialized heavy haulage",
        "Cross-border trucking"
      ],
      details: "Our land transportation network provides seamless connectivity between ports, airports, and final destinations with reliable scheduling."
    },
    {
      title: "Warehousing & Distribution",
      description: "Complete storage and inventory management solutions",
      icon: "🏭",
      features: [
        "Bonded and non-bonded storage",
        "Inventory management systems",
        "Pick and pack services",
        "Cross-docking operations",
        "Value-added services"
      ],
      details: "Our strategically located warehouses offer secure storage with advanced inventory management and efficient distribution services."
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain optimization and visibility",
      icon: "📊",
      features: [
        "End-to-end supply chain visibility",
        "Inventory optimization",
        "Demand forecasting",
        "Vendor managed inventory",
        "Performance analytics"
      ],
      details: "We provide comprehensive supply chain solutions that optimize flow, reduce costs, and improve efficiency across your entire operation."
    },
    {
      title: "Customs Brokerage",
      description: "Expert customs clearance and compliance services",
      icon: "📑",
      features: [
        "Customs clearance documentation",
        "Duty and tax optimization",
        "Import/export compliance",
        "Restricted goods handling",
        "Trade agreement advisory"
      ],
      details: "Our customs experts navigate complex regulations to ensure smooth clearance and compliance for all your international shipments."
    }
  ];

  // Shipping modes comparison
  const shippingModes = {
    sea: {
      name: "Sea Freight",
      icon: "🚢",
      advantages: [
        "Most cost-effective for large volumes",
        "Environmentally friendly per unit",
        "Ideal for heavy or bulky items",
        "High capacity for various cargo types"
      ],
      bestFor: [
        "Large volume shipments",
        "Non-perishable goods",
        "Heavy machinery and equipment",
        "Long lead time items"
      ],
      transitTimes: {
        "Asia to North America": "18-25 days",
        "Europe to Asia": "25-35 days",
        "Intra-Asia": "7-14 days",
        "Middle East to Europe": "15-22 days"
      }
    },
    air: {
      name: "Air Freight",
      icon: "✈️",
      advantages: [
        "Fastest delivery option",
        "Enhanced security",
        "Reduced inventory holding costs",
        "Superior tracking capabilities"
      ],
      bestFor: [
        "Time-sensitive shipments",
        "High-value goods",
        "Perishable items",
        "Emergency shipments"
      ],
      transitTimes: {
        "Asia to North America": "2-5 days",
        "Europe to Asia": "3-6 days",
        "Intra-Asia": "1-3 days",
        "Middle East to Europe": "2-4 days"
      }
    },
    land: {
      name: "Land Transport",
      icon: "🚛",
      advantages: [
        "Flexible scheduling",
        "Door-to-door service",
        "Cost-effective for regional shipments",
        "Easy tracking and communication"
      ],
      bestFor: [
        "Regional distributions",
        "Cross-border trade",
        "Last-mile delivery",
        "Time-sensitive regional shipments"
      ],
      transitTimes: {
        "Coast to Coast (US)": "4-6 days",
        "Intra-Europe": "2-4 days",
        "Southeast Asia Region": "3-7 days",
        "Middle East Cross-border": "2-5 days"
      }
    }
  };

  // Technology features
  const technologyFeatures = [
    {
      title: "Real-Time Tracking",
      description: "Monitor your shipments 24/7 with our advanced GPS tracking system",
      icon: "📍"
    },
    {
      title: "Automated Documentation",
      description: "Streamlined digital documentation process reducing errors and delays",
      icon: "📄"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered insights for route optimization and delivery forecasting",
      icon: "📊"
    },
    {
      title: "API Integration",
      description: "Seamless integration with your existing systems and platforms",
      icon: "🔌"
    }
  ];

  // Industry specialties
  const industrySpecialties = [
    {
      industry: "Retail & E-commerce",
      solutions: ["Last-mile delivery", "Returns management", "Inventory distribution", "Seasonal surge capacity"]
    },
    {
      industry: "Manufacturing",
      solutions: ["JIT delivery", "Production line feeding", "Raw material logistics", "Finished goods distribution"]
    },
    {
      industry: "Healthcare",
      solutions: ["Temperature-sensitive shipping", "Pharmaceutical logistics", "Medical device distribution", "Emergency medical supply chain"]
    },
    {
      industry: "Automotive",
      solutions: ["Parts sequencing", "Production line supply", "Aftermarket distribution", "Just-in-sequence delivery"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Global <span className="text-blue-300">Logistics</span> & <span className="text-blue-300">Shipping</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-10">
            End-to-end logistics solutions that connect your business to global markets with efficiency and reliability
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg transition duration-300 hover:bg-blue-50 hover:shadow-lg">
              Request a Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition duration-300 hover:bg-white hover:text-blue-700">
              Track Shipment
            </button>
          </div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-12 h-12 rounded-full bg-blue-400 opacity-30 animate-bounce"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">On-Time Delivery Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Tracking & Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Annual Shipments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Logistics Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial pickup to final delivery, we manage your entire supply chain with precision and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  activeService === index ? 'border-blue-600' : 'border-white hover:border-blue-200'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="text-4xl mb-4 text-blue-600">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-gray-500">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Modes Comparison */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Shipping Mode Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the optimal shipping method for your needs based on cost, speed, and requirements
            </p>
          </div>
          
          {/* Mode Selector */}
          <div className="flex justify-center mb-12">
            <div className="border border-blue-200 rounded-lg p-1 bg-white">
              {Object.keys(shippingModes).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeMode === mode 
                      ? 'bg-blue-600 text-white' 
                      : 'text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {shippingModes[mode].icon} {shippingModes[mode].name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mode Details */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="text-3xl mr-3">{shippingModes[activeMode].icon}</span>
                  {shippingModes[activeMode].name}
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Advantages:</h4>
                  <ul className="space-y-2">
                    {shippingModes[activeMode].advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Best For:</h4>
                  <ul className="space-y-2">
                    {shippingModes[activeMode].bestFor.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Average Transit Times:</h4>
                <div className="bg-blue-50 rounded-lg p-6">
                  {Object.entries(shippingModes[activeMode].transitTimes).map(([route, time], index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-blue-100 last:border-b-0">
                      <span className="text-gray-700">{route}</span>
                      <span className="font-semibold text-blue-600">{time}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Note:</span> Transit times are estimates and may vary based on weather, customs, and other factors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Advanced Logistics Technology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technology to provide visibility, efficiency, and control throughout your supply chain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-2xl text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specialties */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Industry-Specific Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored logistics solutions designed to meet the unique requirements of different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySpecialties.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{industry.industry}</h3>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Optimize Your Supply Chain Today</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Let our logistics experts develop a customized solution that reduces costs and improves efficiency for your business
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg transition duration-300 hover:bg-blue-50 hover:shadow-lg">
              Get a Logistics Assessment
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition duration-300 hover:bg-white hover:text-blue-600">
              Speak to an Expert
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}