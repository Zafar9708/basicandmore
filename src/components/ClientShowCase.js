import { useState, useEffect } from 'react';

export default function GlobalNetworkSection() {
  const [activeRegion, setActiveRegion] = useState(0);
  const [counter, setCounter] = useState(0);

  const regions = [
    {
      id: 1,
      name: "Middle East",
      flag: "🇦🇪",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait"],
      products: ["Premium Dates", "Food Products", "Household Goods", "Beverages"],
      color: "from-orange-500 to-amber-600",
      stats: "35% of our trade volume"
    },
    {
      id: 2,
      name: "Southeast Asia",
      flag: "🇸🇬",
      countries: ["Singapore", "Malaysia", "Thailand", "Vietnam", "Indonesia"],
      products: ["Rice Varieties", "Spices", "Food Items", "Consumables"],
      color: "from-orange-400 to-amber-500",
      stats: "28% of our trade volume"
    },
    {
      id: 3,
      name: "Europe",
      flag: "🇩🇪",
      countries: ["Germany", "UK", "France", "Italy", "Netherlands"],
      products: ["Quality Food Items", "Beverages", "Household Products", "Personal Care"],
      color: "from-amber-500 to-orange-500",
      stats: "20% of our trade volume"
    },
    {
      id: 4,
      name: "North America",
      flag: "🇺🇸",
      countries: ["USA", "Canada", "Mexico"],
      products: ["Food Products", "Beverages", "Daily Consumables", "Household Items"],
      color: "from-amber-600 to-orange-400",
      stats: "17% of our trade volume"
    }
  ];

  const services = [
    {
      icon: "fas fa-handshake",
      title: "Strategic Partnerships",
      description: "Long-term relationships with trusted suppliers and distributors worldwide",
      features: ["Supplier verification", "Quality audits", "Contract manufacturing"]
    },
    {
      icon: "fas fa-chart-line",
      title: "Market Intelligence",
      description: "Real-time market insights and trend analysis for informed decisions",
      features: ["Demand forecasting", "Price monitoring", "Competitive analysis"]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Quality Assurance",
      description: "Comprehensive quality control and product testing at every stage",
      features: ["Quality checks", "Batch testing", "Standards compliance"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % regions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter < 100) {
      const timer = setTimeout(() => setCounter(counter + 1), 30);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-orange-200/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-amber-200/30 to-transparent"></div>
        
        {/* Animated Globe */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-orange-200/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-8 bg-amber-200/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute inset-16 bg-orange-300/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-8xl">🌍</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-orange-300/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-amber-300/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-orange-400/30 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-amber-400/30 rounded-full animate-float" style={{animationDelay: '3.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
              Global Reach, Local Expertise
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Worldwide
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Trading Network
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Connecting markets across 12+ countries with a robust network of partners, 
            ensuring seamless trade operations for food products, beverages, and household goods.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive Map Section */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-orange-200 shadow-lg">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Our Regional Presence</h2>
                <div className="flex space-x-2">
                  {regions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveRegion(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeRegion ? 'bg-orange-500 scale-125' : 'bg-orange-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Region Card */}
              <div className={`bg-gradient-to-r ${regions[activeRegion].color} rounded-2xl p-6 text-white mb-6 transition-all duration-500`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{regions[activeRegion].flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{regions[activeRegion].name}</h3>
                      <p className="text-white/90">{regions[activeRegion].stats}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Countries & Products */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gray-900 font-semibold mb-3 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2 text-orange-500"></i>
                    Countries Served
                  </h4>
                  <div className="space-y-2">
                    {regions[activeRegion].countries.map((country, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-gray-900 font-semibold mb-3 flex items-center">
                    <i className="fas fa-boxes mr-2 text-amber-500"></i>
                    Key Products
                  </h4>
                  <div className="space-y-2">
                    {regions[activeRegion].products.map((product, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        {product}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trade Flow Animation */}
            <div className="mt-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-orange-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-900 font-semibold">Supply Chain Efficiency</span>
                <span className="text-orange-600 text-sm font-semibold">{counter}% Optimized</span>
              </div>
              <div className="w-full bg-orange-100 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${counter}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>Start</span>
                <span>Fully Optimized</span>
              </div>
            </div>
          </div>

          {/* Services & Capabilities */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-orange-300">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${service.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 text-center border border-orange-200 shadow-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">12+</div>
                <div className="text-gray-600 text-sm">Countries</div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 text-center border border-orange-200 shadow-lg">
                <div className="text-2xl font-bold text-amber-600 mb-1">50+</div>
                <div className="text-gray-600 text-sm">Product Categories</div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 text-center border border-orange-200 shadow-lg">
                <div className="text-2xl font-bold text-orange-500 mb-1">200+</div>
                <div className="text-gray-600 text-sm">Business Partners</div>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 text-center border border-orange-200 shadow-lg">
                <div className="text-2xl font-bold text-amber-500 mb-1">8+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-orange-200 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-arrow-trend-up text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Market Expansion</h3>
              <p className="text-gray-600">Access new markets with our established distribution channels and local expertise</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-hand-holding-usd text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">Reduce operational costs through optimized supply chains and bulk purchasing</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Ensure product quality with our rigorous testing and quality control processes</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Expand Your Reach?</h3>
              <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
                Leverage our international network to grow your business and access new markets with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300 shadow-lg">
                  <i className="fas fa-globe mr-2"></i> Explore Global Opportunities
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  <i className="fas fa-calendar mr-2"></i> Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}