import { useState } from 'react';

export default function ServicesProcess() {
  const [activeStep, setActiveStep] = useState(0);
  
  const processes = [
    {
      id: 1,
      title: "Consultation & Planning",
      icon: "fas fa-headset",
      description: "We begin with understanding your specific needs, target markets, and requirements to develop a tailored import/export strategy.",
      details: [
        "Business needs assessment",
        "Market analysis",
        "Regulatory requirements review",
        "Customized plan development"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Product Sourcing & Procurement",
      icon: "fas fa-search",
      description: "Our global network helps find the best suppliers and products that meet your quality standards and budget requirements.",
      details: [
        "Supplier identification & verification",
        "Sample acquisition & evaluation",
        "Price negotiation",
        "Quality assurance planning"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Logistics & Shipping",
      icon: "fas fa-shipping-fast",
      description: "We handle all transportation logistics, selecting the most efficient and cost-effective shipping methods for your products.",
      details: [
        "Shipping method selection",
        "Documentation preparation",
        "Cargo insurance",
        "Real-time tracking"
      ],
      color: "from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Customs Clearance",
      icon: "fas fa-file-contract",
      description: "Our experts manage all customs procedures and documentation to ensure smooth clearance and compliance with regulations.",
      details: [
        "Customs documentation",
        "Duty & tax calculation",
        "Regulatory compliance",
        "Clearance coordination"
      ],
      color: "from-amber-500 to-amber-700"
    },
    {
      id: 5,
      title: "Delivery & Distribution",
      icon: "fas fa-truck-loading",
      description: "We ensure timely delivery to your specified location and can assist with distribution and inventory management.",
      details: [
        "Final mile delivery",
        "Inventory management",
        "Quality inspection upon arrival",
        "After-sales support"
      ],
      color: "from-red-500 to-red-700"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            <i className="fas fa-cogs mr-2"></i> OUR PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Service Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to handling your import and export needs from start to finish
          </p>
        </div>
        
        {/* Process Steps - Horizontal Timeline */}
        <div className="mb-16 relative">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-10 h-1 bg-blue-200 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {processes.map((process, index) => (
              <div 
                key={process.id}
                className="text-center group cursor-pointer"
                onClick={() => setActiveStep(index)}
              >
                {/* Step number and connector */}
                <div className="flex items-center justify-center relative">
                  {/* Left connector - hidden on first step */}
                  {index > 0 && (
                    <div className="hidden md:block absolute right-1/2 w-1/2 h-1 bg-blue-200"></div>
                  )}
                  
                  {/* Right connector - hidden on last step */}
                  {index < processes.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 w-1/2 h-1 bg-blue-200"></div>
                  )}
                  
                  {/* Step circle */}
                  <div className={`relative w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                    activeStep === index 
                      ? `bg-gradient-to-r ${process.color} text-white shadow-lg scale-110` 
                      : 'bg-white text-blue-600 border-4 border-blue-200 shadow-md group-hover:scale-105'
                  }`}>
                    <i className={`${process.icon} text-xl`}></i>
                    
                    {/* Step number */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeStep === index ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                {/* Step title */}
                <h3 className={`mt-4 font-semibold transition-colors duration-300 ${
                  activeStep === index ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {process.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Active Step Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Process details */}
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${processes[activeStep].color} flex items-center justify-center text-white text-2xl mr-6`}>
                  <i className={processes[activeStep].icon}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{processes[activeStep].title}</h3>
                  <p className="text-blue-600">Step {activeStep + 1} of {processes.length}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg mb-8">
                {processes[activeStep].description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {processes[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <i className="fas fa-check text-xs"></i>
                      </div>
                    </div>
                    <p className="text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
                  <i className="fas fa-info-circle mr-2"></i> Learn More
                </button>
                <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
                  <i className="fas fa-download mr-2"></i> Download Process PDF
                </button>
              </div>
            </div>
            
            {/* Right side - Visual representation */}
            <div className={`bg-gradient-to-br ${processes[activeStep].color} p-8 md:p-12 text-white flex items-center justify-center relative overflow-hidden`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '100px 100px'
                }}></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-2xl mb-8">
                  <i className={`${processes[activeStep].icon} text-4xl`}></i>
                </div>
                
                <h4 className="text-xl font-semibold mb-6">Process Highlights</h4>
                
                <div className="space-y-4 text-left max-w-md mx-auto">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Time Efficiency</div>
                      <div className="text-blue-100 text-sm">30-50% faster processing</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Risk Management</div>
                      <div className="text-blue-100 text-sm">Comprehensive coverage</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Cost Optimization</div>
                      <div className="text-blue-100 text-sm">Average 23% savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Process Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 flex items-center ${
              activeStep === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
            }`}
          >
            <i className="fas fa-arrow-left mr-2"></i> Previous
          </button>
          
          <button 
            onClick={() => setActiveStep(prev => Math.min(processes.length - 1, prev + 1))}
            disabled={activeStep === processes.length - 1}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 flex items-center ${
              activeStep === processes.length - 1 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100 text-center">
            <div className="text-blue-600 text-3xl mb-4">
              <i className="fas fa-headset"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Dedicated Support</h4>
            <p className="text-gray-600">
              Each client gets a dedicated account manager for personalized service and support.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100 text-center">
            <div className="text-blue-600 text-3xl mb-4">
              <i className="fas fa-sync-alt"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Continuous Updates</h4>
            <p className="text-gray-600">
              Real-time tracking and regular updates throughout the entire process.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100 text-center">
            <div className="text-blue-600 text-3xl mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Partnership Approach</h4>
            <p className="text-gray-600">
              We work as an extension of your team, not just a service provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}