import { useState, useEffect } from 'react';

export default function SupplyChainSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    efficiency: 0,
    speed: 0,
    savings: 0
  });

  const supplyChainPhases = [
    {
      id: 1,
      title: "Strategic Sourcing",
      icon: "fas fa-search-dollar",
      gradient: "from-green-500 to-emerald-600",
      description: "We identify and partner with the most reliable manufacturers and suppliers worldwide",
      features: [
        "Supplier verification & audits",
        "Quality benchmarking",
        "Price negotiation",
        "Long-term partnership building"
      ],
      stats: { value: 200, suffix: "+", label: "Verified Suppliers" }
    },
    {
      id: 2,
      title: "Quality Assurance",
      icon: "fas fa-clipboard-check",
      gradient: "from-blue-500 to-cyan-600",
      description: "Rigorous quality control processes at every stage of the supply chain",
      features: [
        "Pre-shipment inspections",
        "Batch testing protocols",
        "Quality certification",
        "Continuous improvement"
      ],
      stats: { value: 99.8, suffix: "%", label: "Quality Satisfaction" }
    },
    {
      id: 3,
      title: "Inventory Management",
      icon: "fas fa-warehouse",
      gradient: "from-orange-500 to-amber-600",
      description: "Smart inventory solutions to ensure product availability and reduce costs",
      features: [
        "Demand forecasting",
        "Safety stock optimization",
        "Inventory turnover analysis",
        "Warehouse management"
      ],
      stats: { value: 45, suffix: "%", label: "Faster Turnover" }
    },
    {
      id: 4,
      title: "Logistics Excellence",
      icon: "fas fa-shipping-fast",
      gradient: "from-purple-500 to-indigo-600",
      description: "Efficient transportation and distribution network for timely deliveries",
      features: [
        "Multi-modal transportation",
        "Route optimization",
        "Real-time tracking",
        "Last-mile delivery"
      ],
      stats: { value: 98.5, suffix: "%", label: "On-Time Delivery" }
    },
    {
      id: 5,
      title: "Customer Partnership",
      icon: "fas fa-handshake",
      gradient: "from-pink-500 to-rose-600",
      description: "Building lasting relationships through exceptional service and support",
      features: [
        "Dedicated account managers",
        "Customized solutions",
        "Regular performance reviews",
        "Continuous support"
      ],
      stats: { value: 95, suffix: "%", label: "Client Retention" }
    }
  ];

  const metrics = [
    { icon: "fas fa-rocket", value: "8+", label: "Years Experience", color: "text-orange-500" },
    { icon: "fas fa-globe", value: "12+", label: "Countries Served", color: "text-blue-500" },
    { icon: "fas fa-users", value: "200+", label: "Happy Clients", color: "text-green-500" },
    { icon: "fas fa-boxes", value: "50K+", label: "Products Delivered", color: "text-purple-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % supplyChainPhases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate metrics
    const animateMetrics = () => {
      setAnimatedValues({
        efficiency: 98,
        speed: 65,
        savings: 42
      });
    };

    const timer = setTimeout(animateMetrics, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-orange-25 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-1/2 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-100 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
              Our Supply Chain Excellence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            End-to-End
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Supply Chain Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From strategic sourcing to final delivery, we manage every aspect of your supply chain 
            with precision, efficiency, and unwavering commitment to quality.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className={`text-4xl mb-4 ${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                <i className={metric.icon}></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
          {/* Supply Chain Visualization */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
              {/* Phase Header */}
              <div className={`bg-gradient-to-r ${supplyChainPhases[activePhase].gradient} rounded-2xl p-6 text-white mb-8 transition-all duration-500`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">
                    <i className={supplyChainPhases[activePhase].icon}></i>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{supplyChainPhases[activePhase].stats.value}{supplyChainPhases[activePhase].stats.suffix}</div>
                    <div className="text-white text-opacity-90">{supplyChainPhases[activePhase].stats.label}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{supplyChainPhases[activePhase].title}</h3>
                <p className="text-white text-opacity-90">{supplyChainPhases[activePhase].description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {supplyChainPhases[activePhase].features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-orange-50 rounded-xl p-4 group hover:bg-orange-100 transition-colors duration-300">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Phase Navigation */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {supplyChainPhases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePhase(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activePhase ? 'bg-orange-500 scale-125' : 'bg-orange-200'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  Phase {activePhase + 1} of {supplyChainPhases.length}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">{animatedValues.efficiency}%</div>
                <div className="text-green-100">Supply Chain Efficiency</div>
                <div className="w-full bg-green-400 bg-opacity-30 rounded-full h-2 mt-3">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${animatedValues.efficiency}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">{animatedValues.speed}%</div>
                <div className="text-blue-100">Faster Processing</div>
                <div className="w-full bg-blue-400 bg-opacity-30 rounded-full h-2 mt-3">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${animatedValues.speed}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">{animatedValues.savings}%</div>
                <div className="text-purple-100">Cost Savings</div>
                <div className="w-full bg-purple-400 bg-opacity-30 rounded-full h-2 mt-3">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${animatedValues.savings}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Key Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Our Supply Chain?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-lg p-2 mr-4">
                    <i className="fas fa-bolt text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Speed & Efficiency</h4>
                    <p className="text-sm text-gray-600">Optimized processes reduce lead times by up to 40%</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-4">
                    <i className="fas fa-shield-alt text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Risk Mitigation</h4>
                    <p className="text-sm text-gray-600">Multiple sourcing options and contingency plans</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 rounded-lg p-2 mr-4">
                    <i className="fas fa-chart-line text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Cost Optimization</h4>
                    <p className="text-sm text-gray-600">Bulk purchasing and efficient logistics reduce costs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Optimize?</h3>
              <p className="text-orange-100 mb-4">Let us analyze your current supply chain and provide a customized solution.</p>
              <button className="w-full bg-white text-orange-600 hover:bg-gray-100 py-3 rounded-xl font-semibold transition duration-300">
                <i className="fas fa-chart-bar mr-2"></i> Get Free Analysis
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
              <div className="space-y-3">
                {['Food & Beverage', 'Household Goods', 'Personal Care', 'Industrial Supplies'].map((industry, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{industry}</span>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Supply Chain Today</h3>
              <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses that trust us for reliable, efficient, and cost-effective supply chain solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  <i className="fas fa-calendar-check mr-2"></i> Schedule Consultation
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  <i className="fas fa-file-invoice mr-2"></i> Request Quote
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}