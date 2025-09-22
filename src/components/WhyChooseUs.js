import { useState, useEffect } from 'react';

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [counter, setCounter] = useState(0);
  
  const features = [
    {
      id: 1,
      title: "Quality Assurance",
      icon: "fas fa-award",
      gradient: "from-green-500 to-emerald-600",
      description: "Every product undergoes rigorous quality checks to ensure they meet international standards and your specific requirements.",
      stats: "99.8% Quality Satisfaction",
      details: ["ISO Certified Processes", "Regular Quality Audits", "Supplier Verification", "Batch Testing"]
    },
    {
      id: 2,
      title: "Global Sourcing Network",
      icon: "fas fa-globe-americas",
      gradient: "from-blue-500 to-cyan-600",
      description: "Access to trusted suppliers worldwide ensures you get the best products at competitive prices.",
      stats: "12+ Countries Network",
      details: ["Direct Manufacturer Relationships", "Multiple Sourcing Options", "Market Intelligence", "Supplier Diversity"]
    },
    {
      id: 3,
      title: "Competitive Pricing",
      icon: "fas fa-tag",
      gradient: "from-orange-500 to-amber-600",
      description: "Bulk purchasing power and efficient logistics enable us to offer unbeatable prices without compromising quality.",
      stats: "Best Market Prices",
      details: ["Volume Discounts", "Price Negotiation", "Cost Transparency", "Value Analysis"]
    },
    {
      id: 4,
      title: "Reliable Delivery",
      icon: "fas fa-shipping-fast",
      gradient: "from-purple-500 to-indigo-600",
      description: "Streamlined supply chain and multiple logistics partners guarantee timely delivery of your orders.",
      stats: "On-Time Delivery",
      details: ["Multiple Carriers", "Real-time Tracking", "Warehouse Network", "Emergency Support"]
    },
    {
      id: 5,
      title: "Custom Solutions",
      icon: "fas fa-cogs",
      gradient: "from-pink-500 to-rose-600",
      description: "Tailored solutions for your specific business needs, from private labeling to custom packaging.",
      stats: "Personalized Service",
      details: ["Private Labeling", "Custom Packaging", "Product Development", "Flexible MOQs"]
    }
  ];

  const achievements = [
    { number: 8, suffix: "+", label: "Years Experience" },
    { number: 200, suffix: "+", label: "Satisfied Clients" },
    { number: 50, suffix: "+", label: "Product Categories" },
    { number: 12, suffix: "+", label: "Countries Served" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter < 100) {
        setCounter(counter + 1);
      }
    }, 30);
    
    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-25 via-white to-amber-25 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{animationDelay: '4s'}}></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ff6b35' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '600px 600px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-100 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
              Why Choose Basic and More Inc
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Trusted
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Trading Partner
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We go beyond traditional trading by offering comprehensive solutions that ensure 
            your business gets the best products, prices, and service in the industry.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Feature Showcase */}
          <div className="relative">
            {/* Main Feature Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
              <div className={`bg-gradient-to-r ${features[activeFeature].gradient} rounded-2xl p-6 text-white mb-6 transition-all duration-500`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">
                    <i className={features[activeFeature].icon}></i>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{features[activeFeature].stats}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{features[activeFeature].title}</h3>
                <p className="text-white text-opacity-90">{features[activeFeature].description}</p>
              </div>

              {/* Feature Details */}
              <div className="grid grid-cols-2 gap-4">
                {features[activeFeature].details.map((detail, index) => (
                  <div key={index} className="flex items-center bg-orange-50 rounded-lg p-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeature ? 'bg-orange-500 scale-125' : 'bg-orange-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h3>
              <p className="text-gray-600 text-lg">
                Years of excellence in delivering quality products and building lasting relationships.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 text-center group hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}{achievement.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-700">Client Satisfaction Rate</span>
                <span className="text-2xl font-bold text-orange-600">{counter}%</span>
              </div>
              <div className="w-full bg-orange-100 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${counter}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl text-2xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h4>
              <p className="text-gray-600">All products come with quality assurance and satisfaction guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl text-2xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Trusted Partnerships</h4>
              <p className="text-gray-600">Long-term relationships with suppliers and clients worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl text-2xl mb-4">
                <i className="fas fa-headset"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h4>
              <p className="text-gray-600">Personal account manager for seamless communication and support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us for their trading needs. 
              Let's build a successful partnership together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                <i className="fas fa-calendar-check mr-2"></i> Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                <i className="fas fa-file-alt mr-2"></i> Download Brochure
              </button>
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