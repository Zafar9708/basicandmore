"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function ProductSourcing() {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    {
      id: 1,
      title: "Electronics & Gadgets",
      icon: "fas fa-microchip",
      products: ["Smartphones", "Laptops & Computers", "Audio Equipment", "Wearable Technology", "Home Appliances"],
      image: "/api/placeholder/600/400",
      description: "Source cutting-edge electronics from leading manufacturers across Asia with quality assurance and competitive pricing."
    },
    {
      id: 2,
      title: "Apparel & Fashion",
      icon: "fas fa-tshirt",
      products: ["Casual Wear", "Formal Attire", "Sportswear", "Accessories", "Footwear"],
      image: "/api/placeholder/600/400",
      description: "Connect with textile manufacturers and fashion houses for quality clothing lines and accessories."
    },
    {
      id: 3,
      title: "Sports Equipment",
      icon: "fas fa-basketball-ball",
      products: ["Fitness Equipment", "Team Sports Gear", "Outdoor Recreation", "Water Sports", "Winter Sports"],
      image: "/api/placeholder/600/400",
      description: "Source durable sports equipment from specialized manufacturers with focus on safety and performance."
    },
    {
      id: 4,
      title: "Home & Living",
      icon: "fas fa-home",
      products: ["Furniture", "Home Decor", "Kitchenware", "Lighting", "Gardening Supplies"],
      image: "/api/placeholder/600/400",
      description: "Find unique home products that combine functionality with aesthetic appeal from global artisans."
    },
    {
      id: 5,
      title: "Consumer Goods",
      icon: "fas fa-box-open",
      products: ["Beauty Products", "Health Supplements", "Toys & Games", "Stationery", "Pet Supplies"],
      image: "/api/placeholder/600/400",
      description: "Source everyday consumer products that meet international quality and safety standards."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Requirement Analysis",
      description: "We begin by understanding your specific needs, target market, and quality requirements.",
      icon: "fas fa-clipboard-list"
    },
    {
      step: 2,
      title: "Supplier Identification",
      description: "Our network helps identify reliable manufacturers that match your specifications and budget.",
      icon: "fas fa-search"
    },
    {
      step: 3,
      title: "Sample Evaluation",
      description: "We procure samples for your evaluation and conduct quality checks before bulk orders.",
      icon: "fas fa-check-circle"
    },
    {
      step: 4,
      title: "Negotiation & Contracting",
      description: "We handle price negotiations, contract terms, and payment arrangements on your behalf.",
      icon: "fas fa-handshake"
    },
    {
      step: 5,
      title: "Production Monitoring",
      description: "We oversee the manufacturing process to ensure quality control and timely production.",
      icon: "fas fa-eye"
    },
    {
      step: 6,
      title: "Logistics & Delivery",
      description: "We manage all shipping, customs clearance, and delivery to your specified location.",
      icon: "fas fa-shipping-fast"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10% left-5% w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10% right-10% w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Product Sourcing</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Global access to quality products. We find manufacturers that meet your specifications, budget, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300">
                <i className="fas fa-envelope mr-3"></i> Request Sourcing Quote
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                <i className="fas fa-headset mr-3"></i> Speak to Our Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Sourcing Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in sourcing a wide range of products across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <div 
                key={category.id}
                className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  activeCategory === index ? 'border-blue-500 scale-105' : 'border-white hover:border-blue-200'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <div className="text-blue-600 text-4xl mb-4">
                  <i className={category.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.products.slice(0, 3).map((product, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {product}
                    </span>
                  ))}
                  {category.products.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      +{category.products.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Category Detail */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 text-4xl mr-4">
                    <i className={categories[activeCategory].icon}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{categories[activeCategory].title}</h3>
                    <p className="text-blue-600">Specialized Sourcing Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-6">
                  {categories[activeCategory].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-blue-600 font-bold text-xl mb-2">50+</div>
                    <div className="text-gray-600">Verified Suppliers</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-blue-600 font-bold text-xl mb-2">12%</div>
                    <div className="text-gray-600">Average Cost Saving</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                    <i className="fas fa-download mr-2"></i> Download Brochure
                  </button>
                  <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition duration-300">
                    <i className="fas fa-envelope mr-2"></i> Request Quotes
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-12 text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-2xl mb-8">
                    <i className={`${categories[activeCategory].icon} text-3xl`}></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Our Sourcing Advantage</h4>
                  <ul className="space-y-3 text-blue-100 text-left max-w-md mx-auto">
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                      <span>Quality assurance protocols</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                      <span>Direct manufacturer relationships</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                      <span>Competitive pricing negotiation</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                      <span>Regulatory compliance expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Sourcing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to finding the right products at the right price
            </p>
          </div>
          
          <div className="relative">
            {/* Process timeline connector */}
            <div className="absolute left-0 right-0 top-16 h-1 bg-blue-200 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center relative mb-6">
                    {/* Connector dots */}
                    {index > 0 && (
                      <div className="hidden md:block absolute right-1/2 w-1/2 h-1 bg-blue-200"></div>
                    )}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute left-1/2 w-1/2 h-1 bg-blue-200"></div>
                    )}
                    
                    {/* Step circle */}
                    <div className="relative w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                      {step.step}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center text-blue-600 text-xs">
                        <i className={step.icon}></i>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Source Products Globally?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let us handle your product sourcing needs with our global network and expertise
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300">
                <i className="fas fa-calendar-check mr-3"></i> Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                <i className="fas fa-file-alt mr-3"></i> Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}