"use client"
import { useState } from 'react';

export default function CustomsClearance() {
  const [activeTab, setActiveTab] = useState('import');
  const [activeStep, setActiveStep] = useState(0);

  // Services data
  const services = {
    import: [
      {
        title: "Import Customs Clearance",
        description: "Complete clearance services for goods entering the country",
        icon: "📥",
        features: [
          "Import declaration filing",
          "Duty and tax calculation",
          "Customs bond processing",
          "Import compliance verification"
        ],
        details: "We handle all aspects of import clearance, ensuring compliance with regulations while minimizing delays and costs."
      },
      {
        title: "Restricted Goods Handling",
        description: "Specialized clearance for regulated and restricted items",
        icon: "⚠️",
        features: [
          "Permit and license acquisition",
          "FDA, EPA, and other agency compliance",
          "Dangerous goods documentation",
          "Restricted commodity expertise"
        ],
        details: "Our experts navigate complex regulations for restricted items including food, pharmaceuticals, chemicals, and controlled substances."
      },
      {
        title: "Post-Entry Services",
        description: "Comprehensive support after goods have cleared customs",
        icon: "📑",
        features: [
          "Post-entry amendments",
          "Duty refund claims",
          "Recordkeeping compliance",
          "Audit support and representation"
        ],
        details: "We provide ongoing support including duty recovery, record maintenance, and assistance during customs audits."
      }
    ],
    export: [
      {
        title: "Export Documentation",
        description: "Complete preparation of all required export documents",
        icon: "📋",
        features: [
          "Commercial invoices preparation",
          "Certificate of origin processing",
          "Export declaration filing",
          "Shipping documentation"
        ],
        details: "We ensure all export documents are accurately prepared and filed to meet international requirements and prevent delays."
      },
      {
        title: "Export Compliance",
        description: "Ensuring adherence to all export regulations and restrictions",
        icon: "✅",
        features: [
          "Export control classification",
          "Denied party screening",
          "License determination",
          "Export compliance training"
        ],
        details: "Our compliance experts ensure your exports meet all regulatory requirements including EAR, ITAR, and OFAC regulations."
      },
      {
        title: "Duty Drawback Services",
        description: "Maximizing duty recovery on exported goods",
        icon: "💵",
        features: [
          "Duty drawback filing",
          "Claim preparation and submission",
          "Documentation management",
          "Customs communication"
        ],
        details: "We help you recover duties paid on imported materials that are subsequently exported, maximizing your cost savings."
      }
    ]
  };

  // Clearance process steps
  const clearanceProcess = [
    {
      step: "1",
      title: "Document Preparation",
      description: "We collect and prepare all necessary documentation including commercial invoices, packing lists, and certificates of origin.",
      icon: "📄",
      time: "1-2 hours",
      documents: ["Commercial Invoice", "Packing List", "Bill of Lading", "Certificate of Origin"]
    },
    {
      step: "2",
      title: "Customs Submission",
      description: "Our system electronically files all documents with customs authorities and relevant government agencies.",
      icon: "💻",
      time: "2-4 hours",
      documents: ["Customs Declaration", "Import/Export Forms", "Government Agency Filings"]
    },
    {
      step: "3",
      title: "Duty Calculation",
      description: "We calculate all applicable duties, taxes, and fees based on product classification and trade agreements.",
      icon: "🧮",
      time: "1-2 hours",
      documents: ["Duty Calculation Sheet", "Tax Assessment", "Payment Documentation"]
    },
    {
      step: "4",
      title: "Release & Delivery",
      description: "Once cleared, we coordinate with carriers to ensure smooth release and delivery of your goods.",
      icon: "🚚",
      time: "4-24 hours",
      documents: ["Release Notices", "Delivery Orders", "Customs Clearance Certificate"]
    }
  ];

  // Compliance features
  const complianceFeatures = [
    {
      title: "Regulatory Expertise",
      description: "Deep knowledge of customs regulations across multiple countries",
      icon: "🎓"
    },
    {
      title: "Risk Management",
      description: "Proactive identification and mitigation of compliance risks",
      icon: "🛡️"
    },
    {
      title: "Technology Integration",
      description: "Advanced systems for seamless customs documentation and filing",
      icon: "🔧"
    },
    {
      title: "Duty Optimization",
      description: "Strategies to minimize duty payments through trade agreements",
      icon: "💰"
    }
  ];

  // Required documents
  const requiredDocuments = [
    {
      category: "Commercial Documents",
      items: ["Commercial Invoice", "Packing List", "Bill of Lading/Air Waybill", "Insurance Certificate"]
    },
    {
      category: "Regulatory Documents",
      items: ["Import/Export Declaration", "Certificate of Origin", "Import/Export Licenses", "Inspection Certificates"]
    },
    {
      category: "Additional Documents",
      items: ["Power of Attorney", "Letter of Credit", "Product Specifications", "Safety Data Sheets"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-800 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-10"></div>
        <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">Expert Customs Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Customs Clearance <span className="text-blue-200">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Navigating complex customs regulations with precision and expertise to ensure smooth cross-border trade
          </p>
          
          <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">99.7%</div>
                <div className="text-sm opacity-80">Clearance Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4-6 hours</div>
                <div className="text-sm opacity-80">Average Clearance Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Countries Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Customs Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert clearance services for both import and export operations, ensuring compliance and efficiency
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="border border-gray-200 rounded-lg p-1 bg-white shadow-sm">
              <button
                onClick={() => setActiveTab('import')}
                className={`px-8 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'import' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Import Clearance
              </button>
              <button
                onClick={() => setActiveTab('export')}
                className={`px-8 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'export' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Export Clearance
              </button>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services[activeTab].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl mb-5 text-blue-600">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Services Include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clearance Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to customs clearance that minimizes delays and ensures compliance
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 right-0 top-8 h-1 bg-gray-200 transform translate-y-4 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {clearanceProcess.map((step, index) => (
                <div 
                  key={index}
                  className="text-center relative"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-4 transition-all duration-300 ${
                    activeStep === index ? 'border-blue-600 bg-blue-100 scale-110' : 'border-white bg-gray-100'
                  }`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  <div className="mt-6">
                    <div className="text-sm font-semibold text-blue-600 mb-1">Step {step.step}</div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs font-semibold text-gray-500 mb-1">Typical Timeframe</div>
                      <div className="text-sm font-medium text-gray-800">{step.time}</div>
                    </div>
                  </div>
                  
                  {/* Documents Tooltip */}
                  {activeStep === index && (
                    <div className="absolute z-10 left-0 right-0 top-full mt-4 bg-white p-4 rounded-lg shadow-xl">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Documents:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {step.documents.map((doc, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Required Documentation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proper documentation is essential for smooth customs clearance. Here's what you typically need:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requiredDocuments.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-100 rounded-xl p-6 text-center">
            <p className="text-blue-800">
              <span className="font-semibold">Note:</span> Document requirements may vary by country, product type, and specific regulations. 
              Our experts will provide you with a customized checklist for your shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Compliance & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise ensures your shipments meet all regulatory requirements and avoid costly delays
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Our Compliance Advantage</h3>
              
              <div className="space-y-6">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl mr-4 text-blue-600">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Regulatory Knowledge</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">HS Code Classification</span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Expert</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Trade Agreement Utilization</span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Expert</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">FDA & EPA Regulations</span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Advanced</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Dangerous Goods Handling</span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Advanced</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">Export Controls (EAR/ITAR)</span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Streamline Your Customs Clearance</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Let our customs experts handle your clearance needs while you focus on your core business
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg transition duration-300 hover:bg-blue-50 hover:shadow-lg">
              Get Customs Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition duration-300 hover:bg-white hover:text-blue-700">
              Download Compliance Guide
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-dots-pattern {
          background-image: radial-gradient(circle, #ffffff 2px, transparent 2px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
}