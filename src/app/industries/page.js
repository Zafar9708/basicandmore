"use client"
import { useState } from 'react';

export default function Industries() {
  const [activeTab, setActiveTab] = useState('exports');
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Export Products
  const exportProducts = [
    {
      category: "Agricultural Products",
      items: ["Seasame Seeds", "Rice", "Mustard", "Wheat", "Pulses", "Spices"],
      icon: "🌱",
      description: "High-quality agricultural products sourced from trusted farmers"
    },
    {
      category: "Textiles & Apparel",
      items: ["Towels", "Cotton Fabrics", "Home Textiles", "Garments", "Yarn"],
      icon: "🧵",
      description: "Premium textiles and apparel manufactured to international standards"
    },
    {
      category: "Handicrafts",
      items: ["Artisanal Products", "Home Decor", "Traditional Crafts", "Handmade Items"],
      icon: "🎨",
      description: "Unique handicrafts showcasing traditional craftsmanship"
    }
  ];

  // Import Products
  const importProducts = [
    {
      category: "Sports Equipment",
      items: ["Basketballs", "Portable Hoops", "Kids Helmets", "Sports Gear", "Fitness Equipment"],
      icon: "⚽",
      description: "Quality sports equipment from international brands"
    },
    {
      category: "Consumer Goods",
      items: ["Carry Bags", "Frames", "Gowns", "Fashion Accessories", "Home Products"],
      icon: "🛍️",
      description: "Diverse consumer products for retail and distribution"
    },
    {
      category: "Safety Products",
      items: ["Protective Gear", "Safety Equipment", "Kids Safety Products", "Industrial Safety"],
      icon: "🛡️",
      description: "Safety products meeting international quality standards"
    }
  ];

  // Industries data
  const industries = [
    {
      title: "Agriculture & Food",
      description: "End-to-end solutions for agricultural exports and food products",
      icon: "🌾",
      services: ["Quality inspection", "Cold chain logistics", "Certification compliance", "Global distribution"]
    },
    {
      title: "Textiles & Apparel",
      description: "Complete supply chain management for textile products",
      icon: "👕",
      services: ["Fabric sourcing", "Manufacturing coordination", "Quality control", "Global shipping"]
    },
    {
      title: "Sports & Recreation",
      description: "Specialized import solutions for sports equipment",
      icon: "🏀",
      services: ["Product sourcing", "Quality assurance", "Inventory management", "Distribution"]
    },
    {
      title: "Consumer Goods",
      description: "Efficient import and distribution of consumer products",
      icon: "📦",
      services: ["Supplier identification", "Bulk purchasing", "Customs clearance", "Retail distribution"]
    },
    {
      title: "Safety Equipment",
      description: "Import of certified safety products and equipment",
      icon: "🦺",
      services: ["Standards compliance", "Product testing", "Certification management", "Market distribution"]
    },
    {
      title: "Handicrafts & Decor",
      description: "Global export of traditional crafts and decor items",
      icon: "🖼️",
      services: ["Artisan coordination", "Quality control", "Packaging solutions", "International marketing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Products & Industries</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting international markets with quality products through seamless trade solutions
          </p>
        </div>
      </section>

      {/* Products Section with Tabs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Product Portfolio</h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="border border-blue-200 rounded-lg p-1 bg-blue-50">
              <button
                onClick={() => setActiveTab('exports')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'exports' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-600 hover:bg-blue-100'
                }`}
              >
                Export Products
              </button>
              <button
                onClick={() => setActiveTab('imports')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'imports' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-600 hover:bg-blue-100'
                }`}
              >
                Import Products
              </button>
            </div>
          </div>
          
          {/* Export Products */}
          {activeTab === 'exports' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {exportProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 transition-transform duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.category}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Products We Export:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.items.map((item, i) => (
                        <span key={i} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Import Products */}
          {activeTab === 'imports' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {importProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 transition-transform duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.category}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Products We Import:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.items.map((item, i) => (
                        <span key={i} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Industry Expertise</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Specialized trade solutions tailored to specific industry requirements
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  activeIndustry === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveIndustry(index)}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{industry.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{industry.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Our Services:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {industry.services.map((service, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Trade Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sourcing & Identification</h3>
              <p className="text-gray-600 text-sm">
                Finding the best products and suppliers that meet quality standards
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Rigorous quality checks and compliance verification
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Logistics Management</h3>
              <p className="text-gray-600 text-sm">
                Efficient shipping, customs clearance, and documentation
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery & Support</h3>
              <p className="text-gray-600 text-sm">
                Timely delivery and ongoing customer support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Global Network</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              With partners and clients across six continents, we facilitate trade between diverse markets
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4 bg-blue-500 rounded-lg">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold">Americas</h3>
            </div>
            <div className="p-4 bg-blue-500 rounded-lg">
              <div className="text-2xl mb-2">🇪🇺</div>
              <h3 className="font-semibold">Europe</h3>
            </div>
            <div className="p-4 bg-blue-500 rounded-lg">
              <div className="text-2xl mb-2">🌏</div>
              <h3 className="font-semibold">Asia</h3>
            </div>
            <div className="p-4 bg-blue-500 rounded-lg">
              <div className="text-2xl mb-2">🇦🇺</div>
              <h3 className="font-semibold">Oceania</h3>
            </div>
            <div className="p-4 bg-blue-500 rounded-lg">
              <div className="text-2xl mb-2">🇦🇫</div>
              <h3 className="font-semibold">Middle East</h3>
            </div>
            <div className="p-4 bg-blue-500 rounded-lg">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold">Africa</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Start Trading With Us Today</h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
            Whether you're looking to import or export, we have the expertise and network to facilitate your global trade needs
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-700 hover:shadow-lg">
              Request Export Consultation
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
              Discuss Import Needs
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}