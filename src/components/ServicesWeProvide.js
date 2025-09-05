import { useState } from 'react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      id: 1,
      title: "Import/Export Solutions",
      icon: "fas fa-ship",
      description: "End-to-end import and export services for a wide range of products including frames, carry bags, gowns, basketballs, portable chargers, kids helmets and more.",
      features: ["Customs documentation", "Product certification", "Quality assurance", "Global logistics"]
    },
    {
      id: 2,
      title: "Logistics & Shipping",
      icon: "fas fa-truck-loading",
      description: "Comprehensive logistics solutions ensuring your products reach their destination safely and on time across global markets.",
      features: ["Air, sea & land freight", "Real-time tracking", "Warehousing solutions", "Last-mile delivery"]
    },
    {
      id: 3,
      title: "Customs Clearance",
      icon: "fas fa-file-contract",
      description: "Expert handling of customs procedures and documentation to ensure smooth cross-border transactions.",
      features: ["Customs brokerage", "Duty optimization", "Regulatory compliance", "Document preparation"]
    },
    {
      id: 4,
      title: "Product Sourcing",
      icon: "fas fa-box-open",
      description: "Finding the best manufacturers and products worldwide that match your requirements and quality standards.",
      features: ["Supplier verification", "Quality control", "Sample acquisition", "Market research"]
    },
    {
      id: 5,
      title: "Trade Consulting",
      icon: "fas fa-chart-line",
      description: "Strategic advice to help you navigate international markets, regulations, and maximize your import/export operations.",
      features: ["Market analysis", "Regulatory guidance", "Risk assessment", "Strategic planning"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive import and export solutions tailored to your business needs
          </p>
        </div>
        
        {/* Services Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`mx-2 my-2 px-6 py-3 rounded-full text-sm font-medium transition duration-300 ${
                activeService === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-blue-600 hover:bg-blue-100 shadow-md'
              }`}
            >
              <i className={`${service.icon} mr-2`}></i>
              {service.title}
            </button>
          ))}
        </div>
        
        {/* Active Service Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="text-blue-600 text-5xl mb-6">
                <i className={services[activeService].icon}></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {services[activeService].description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        <i className="fas fa-check text-sm"></i>
                      </div>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
                  <i className="fas fa-info-circle mr-2"></i> Learn More
                </button>
                <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
                  <i className="fas fa-envelope mr-2"></i> Request Quote
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-12 text-white flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block bg-white bg-opacity-20 p-6 rounded-2xl mb-8">
                  <i className={`${services[activeService].icon} text-5xl md:text-6xl`}></i>
                </div>
                <h4 className="text-xl font-semibold mb-4">Why Choose Our Service?</h4>
                <ul className="space-y-3 text-blue-100 text-left max-w-md mx-auto">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                    <span>Expertise in global trade regulations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                    <span>Extensive network of partners worldwide</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                    <span>Competitive pricing and cost efficiency</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                    <span>Personalized solutions for your business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* All Services Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Our Complete Service Offerings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-blue-100">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className={service.icon}></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description.substring(0, 100)}...</p>
                <button 
                  onClick={() => setActiveService(service.id - 1)}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </button>
              </div>
            ))}
            
            {/* Custom Solutions Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-md text-white">
              <div className="text-white text-4xl mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4 className="text-xl font-semibold mb-3">Custom Solutions</h4>
              <p className="text-blue-100 mb-4">Need something specific? We tailor our services to meet your unique business requirements.</p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition duration-300">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}