import { useState } from 'react';

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('food');
  
  const categories = [
    {
      id: 'food',
      name: 'Food Products',
      icon: 'fas fa-utensils',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: 'fas fa-wine-bottle',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'household',
      name: 'Household Goods',
      icon: 'fas fa-home',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'consumables',
      name: 'Daily Consumables',
      icon: 'fas fa-shopping-basket',
      color: 'from-orange-500 to-amber-600'
    }
  ];

  const products = {
    food: [
      {
        name: "Premium Rice Varieties",
        image: "https://exportmandi.com/wp-content/uploads/2024/02/rice-types.jpg",
        description: "High-quality basmati, jasmine, and long-grain rice",
        specs: ["Food Grade Certified", "Vacuum Packed", "Multiple Grades"],
        moq: "5 Tons"
      },
      {
        name: "Organic Spices & Herbs",
        image: "/api/placeholder/300/200",
        description: "Pure, aromatic spices sourced from best regions",
        specs: ["100% Natural", "Hygienically Packed", "Long Shelf Life"],
        moq: "1 Ton"
      },
      {
        name: "Grains & Pulses",
        image: "/api/placeholder/300/200",
        description: "Nutritious grains and pulses for wholesale distribution",
        specs: ["Rich in Protein", "Carefully Selected", "Competitive Pricing"],
        moq: "2 Tons"
      }
    ],
    beverages: [
      {
        name: "Premium Juices & Drinks",
        image: "/api/placeholder/300/200",
        description: "Natural fruit juices and healthy beverages",
        specs: ["No Artificial Preservatives", "Various Flavors", "Bulk Packaging"],
        moq: "500 Cases"
      },
      {
        name: "Mineral Water",
        image: "/api/placeholder/300/200",
        description: "Pure drinking water in multiple packaging options",
        specs: ["BIS Certified", "Multiple Sizes", "OEM Available"],
        moq: "1000 Cases"
      },
      {
        name: "Energy & Soft Drinks",
        image: "/api/placeholder/300/200",
        description: "Popular beverage brands and private labeling",
        specs: ["Branded Options", "Private Label", "Competitive Rates"],
        moq: "300 Cases"
      }
    ],
    household: [
      {
        name: "Cleaning Supplies",
        image: "/api/placeholder/300/200",
        description: "Complete range of household cleaning products",
        specs: ["Eco-friendly Options", "Commercial Grade", "Bulk Quantities"],
        moq: "200 Units"
      },
      {
        name: "Kitchen Essentials",
        image: "/api/placeholder/300/200",
        description: "Quality kitchenware and cooking essentials",
        specs: ["Durable Quality", "Multiple Varieties", "Wholesale Prices"],
        moq: "150 Units"
      },
      {
        name: "Home Care Products",
        image: "/api/placeholder/300/200",
        description: "Products for home maintenance and care",
        specs: ["Premium Quality", "Safe Usage", "Cost Effective"],
        moq: "100 Units"
      }
    ],
    consumables: [
      {
        name: "Personal Care Items",
        image: "/api/placeholder/300/200",
        description: "Daily use personal hygiene and care products",
        specs: ["Quality Assured", "Various Brands", "Regular Supply"],
        moq: "500 Pieces"
      },
      {
        name: "Paper Products",
        image: "/api/placeholder/300/200",
        description: "Tissue papers, napkins, and paper products",
        specs: ["Soft Quality", "Eco-friendly", "Bulk Packaging"],
        moq: "200 Packs"
      },
      {
        name: "Plastic & Disposables",
        image: "/api/placeholder/300/200",
        description: "Disposable items for daily use",
        specs: ["Food Grade", "Various Sizes", "Competitive Pricing"],
        moq: "1000 Pieces"
      }
    ]
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-semibold mb-4">
            <i className="fas fa-box-open mr-2"></i>
            Our Product Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quality Products for 
            <span className="block text-orange-600">Every Need</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium products carefully sourced and quality-checked 
            for your business success
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-8 py-4  rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                  : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
              }`}
            >
              <i className={`${category.icon} mr-3`}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products[activeCategory].map((product, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    MOQ: {product.moq}
                  </span>
                </div>
              </div>
              
              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Specifications */}
                <div className="space-y-2 mb-6">
                  {product.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center text-sm text-gray-500">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      {spec}
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center">
                    <i className="fas fa-envelope mr-2"></i> Get Quote
                  </button>
                  <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition duration-300 flex items-center justify-center">
                    <i className="fas fa-info"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl text-2xl mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600">All products undergo strict quality checks and certifications</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl text-2xl mb-4">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Timely Delivery</h4>
              <p className="text-gray-600">Efficient logistics ensuring on-time delivery across locations</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl text-2xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bulk Discounts</h4>
              <p className="text-gray-600">Competitive pricing with special discounts for bulk orders</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
            <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us for their product needs. 
              Get competitive quotes and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 flex items-center justify-center">
                <i className="fas fa-phone-alt mr-2"></i> Schedule Call
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 flex items-center justify-center">
                <i className="fas fa-file-invoice mr-2"></i> Request Catalog
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}