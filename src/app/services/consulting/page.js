"use client"
import { useState } from 'react';

export default function TradeConsulting() {
  const [activeService, setActiveService] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  
  const consultingServices = [
    {
      id: 1,
      title: "Market Entry Strategy",
      icon: "fas fa-chart-line",
      description: "Comprehensive analysis and planning for entering new international markets successfully.",
      features: ["Market research & analysis", "Competitor benchmarking", "Entry mode selection", "Risk assessment", "Implementation roadmap"],
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Regulatory Compliance",
      icon: "fas fa-file-contract",
      description: "Navigate complex international trade regulations and ensure full compliance across borders.",
      features: ["Customs regulations guidance", "Documentation compliance", "Trade agreement optimization", "Export controls", "Import restrictions"],
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Supply Chain Optimization",
      icon: "fas fa-tasks",
      description: "Streamline your global supply chain for maximum efficiency and cost-effectiveness.",
      features: ["Logistics network design", "Inventory management", "Supplier relationship management", "Cost reduction strategies", "Risk mitigation"],
      color: "from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Risk Management",
      icon: "fas fa-shield-alt",
      description: "Identify, assess, and mitigate risks associated with international trade operations.",
      features: ["Currency risk management", "Political risk assessment", "Supply chain disruption planning", "Contract risk analysis", "Compliance risk mitigation"],
      color: "from-amber-500 to-amber-700"
    },
    {
      id: 5,
      title: "Trade Finance Advisory",
      icon: "fas fa-hand-holding-usd",
      description: "Optimize your trade finance strategies and access the right financial instruments.",
      features: ["Letters of credit guidance", "Payment term optimization", "Export financing options", "Working capital management", "Insurance solutions"],
      color: "from-red-500 to-red-700"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Electronics Manufacturer Expansion",
      challenge: "A consumer electronics company struggling to enter the Southeast Asian market due to complex regulations and supply chain challenges.",
      solution: "Developed a comprehensive market entry strategy with phased implementation, established local partnerships, and optimized supply chain routes.",
      results: ["38% reduction in import duties", "Established in 3 new countries within 12 months", "25% cost savings in logistics", "Full regulatory compliance achieved"],
      industry: "Electronics"
    },
    {
      id: 2,
      title: "Textile Exporter Compliance",
      challenge: "A textile manufacturer facing repeated customs delays and compliance issues when exporting to European markets.",
      solution: "Conducted full compliance audit, implemented new documentation processes, and trained staff on EU regulations and standards.",
      results: ["Eliminated customs delays completely", "Achieved 100% compliance rate", "Reduced documentation errors by 92%", "Improved customer satisfaction by 45%"],
      industry: "Textiles & Apparel"
    },
    {
      id: 3,
      title: "Agricultural Products Logistics",
      challenge: "A agricultural products company experiencing spoilage and delays in perishable goods exports to Middle Eastern markets.",
      solution: "Redesigned cold chain logistics, implemented real-time tracking, and negotiated better shipping terms with carriers.",
      results: ["Reduced spoilage by 78%", "Improved delivery times by 35%", "Achieved 20% cost reduction in logistics", "Expanded to 2 new markets"],
      industry: "Agriculture"
    }
  ];

  const consultants = [
    {
      name: "Senior Trade Advisor",
      expertise: "15+ years in international trade, specializing in market entry strategies and regulatory compliance across Asian markets.",
      credentials: ["MBA International Business", "Certified Global Business Professional", "Fluent in 4 languages"]
    },
    {
      name: "Supply Chain Expert",
      expertise: "12+ years optimizing global supply chains for manufacturing and retail sectors, with focus on cost reduction and efficiency.",
      credentials: ["MS Supply Chain Management", "Six Sigma Black Belt", "APICS Certified"]
    },
    {
      name: "Regulatory Compliance Specialist",
      expertise: "10+ years ensuring trade compliance for businesses across multiple industries and jurisdictions.",
      credentials: ["JD International Trade Law", "Customs Broker License", "Certified Compliance Professional"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10% left-5% w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10% right-10% w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Trade Consulting</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert guidance to navigate global trade complexities, reduce risks, and maximize international business opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300">
                <i className="fas fa-calendar-alt mr-3"></i> Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                <i className="fas fa-file-download mr-3"></i> Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Strategic Trade Expertise</h2>
              <p className="text-xl text-gray-600 mb-6">
                In today's complex global marketplace, expert guidance is not just valuable—it's essential. 
                Our trade consulting services provide the strategic insight and practical solutions needed to 
                navigate international trade successfully.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <i className="fas fa-check"></i>
                  </div>
                  <p className="text-gray-700">Reduce operational risks and compliance issues</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <i className="fas fa-check"></i>
                  </div>
                  <p className="text-gray-700">Optimize supply chain and reduce costs</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <i className="fas fa-check"></i>
                  </div>
                  <p className="text-gray-700">Identify and capitalize on new market opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-4">
                  <i className="fas fa-globe-americas text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Global Trade Intelligence</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">48+</div>
                  <div className="text-gray-600">Countries Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">350+</div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
                  <div className="text-gray-600">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive trade consulting solutions tailored to your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {consultingServices.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  activeService === index ? 'border-blue-500 scale-105' : 'border-white hover:border-blue-200'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-2xl mb-4`}>
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-blue-500 mr-2 text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${consultingServices[activeService].color} flex items-center justify-center text-white text-2xl mr-6`}>
                    <i className={consultingServices[activeService].icon}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{consultingServices[activeService].title}</h3>
                    <p className="text-blue-600">Comprehensive Consulting Solution</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-6">
                  {consultingServices[activeService].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {consultingServices[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-1">
                        <i className="fas fa-check text-xs"></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                    <i className="fas fa-info-circle mr-2"></i> Learn More
                  </button>
                  <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition duration-300">
                    <i className="fas fa-calendar mr-2"></i> Schedule Consultation
                  </button>
                </div>
              </div>
              
              <div className={`bg-gradient-to-br ${consultingServices[activeService].color} p-8 md:p-12 text-white flex items-center justify-center`}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-2xl mb-8">
                    <i className={`${consultingServices[activeService].icon} text-4xl`}></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-6">Our Approach</h4>
                  <div className="space-y-4 text-left max-w-md mx-auto">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-search"></i>
                      </div>
                      <div>
                        <div className="font-semibold">Comprehensive Analysis</div>
                        <div className="text-blue-100 text-sm">In-depth assessment of your current operations</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-lightbulb"></i>
                      </div>
                      <div>
                        <div className="font-semibold">Strategic Planning</div>
                        <div className="text-blue-100 text-sm">Customized strategies for your specific needs</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <div>
                        <div className="font-semibold">Implementation Support</div>
                        <div className="text-blue-100 text-sm">Hands-on assistance with execution</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our trade consulting has delivered measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  activeCaseStudy === index ? 'border-blue-500' : 'border-white hover:border-blue-200'
                }`}
                onClick={() => setActiveCaseStudy(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    <i className="fas fa-industry"></i>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Solution Highlights</h4>
                  <p className="text-gray-700 text-sm">{study.solution}</p>
                </div>
                
                <ul className="space-y-2">
                  {study.results.slice(0, 2).map((result, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Optimize Your Global Trade Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our trade experts and discover how we can help your business thrive in international markets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300">
              <i className="fas fa-calendar-check mr-3"></i> Schedule Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
              <i className="fas fa-envelope mr-3"></i> Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}