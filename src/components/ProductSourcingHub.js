import { useState, useEffect } from 'react';

export default function ProductSourcingHub() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    suppliers: 0,
    products: 0,
    countries: 0,
    successRate: 0
  });

  const sourcingCategories = [
    {
      id: 1,
      name: "Food & Beverages",
      icon: "fas fa-utensils",
      gradient: "from-orange-500 to-amber-500",
      products: ["Rice & Grains", "Spices & Herbs", "Beverages", "Snack Foods", "Canned Goods"],
      sourcingTime: "2-4 weeks",
      minOrder: "1-5 tons",
      features: ["Halal Certified", "ISO Standards", "Custom Packaging", "Quality Testing"]
    },
    {
      id: 2,
      name: "Household Goods",
      icon: "fas fa-home",
      gradient: "from-amber-500 to-orange-400",
      products: ["Cleaning Supplies", "Kitchenware", "Home Decor", "Storage Solutions", "Personal Care"],
      sourcingTime: "3-5 weeks",
      minOrder: "500-2000 units",
      features: ["Eco-friendly Options", "Bulk Discounts", "Private Labeling", "Quality Assurance"]
    },
    {
      id: 3,
      name: "Daily Consumables",
      icon: "fas fa-shopping-basket",
      gradient: "from-orange-400 to-amber-600",
      products: ["Paper Products", "Plastic Goods", "Personal Hygiene", "Baby Care", "Pet Supplies"],
      sourcingTime: "2-3 weeks",
      minOrder: "1000-5000 units",
      features: ["Fast Delivery", "Competitive Pricing", "Regular Stock", "Custom Quantities"]
    }
  ];

  const sourcingProcess = [
    {
      step: 1,
      title: "Requirement Analysis",
      description: "We understand your specific product needs, quality standards, and budget requirements",
      icon: "fas fa-clipboard-list",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Supplier Matching",
      description: "Our AI-powered system matches you with verified suppliers meeting your criteria",
      icon: "fas fa-search",
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "Sample Evaluation",
      description: "Receive and evaluate product samples before proceeding with bulk orders",
      icon: "fas fa-box-open",
      duration: "5-7 days"
    },
    {
      step: 4,
      title: "Quality Assurance",
      description: "Rigorous quality checks and certification verification for your peace of mind",
      icon: "fas fa-award",
      duration: "3-4 days"
    },
    {
      step: 5,
      title: "Logistics & Delivery",
      description: "Seamless shipping and customs clearance to your specified location",
      icon: "fas fa-shipping-fast",
      duration: "As required"
    }
  ];

  // Popular Products Grid to fill the space
  const popularProducts = [
    { name: "Basmati Rice", category: "Food", moq: "5 Tons", icon: "fas fa-seedling" },
    { name: "Mineral Water", category: "Beverages", moq: "1000 Cases", icon: "fas fa-wine-bottle" },
    { name: "Cleaning Kits", category: "Household", moq: "500 Units", icon: "fas fa-soap" },
    { name: "Tissue Papers", category: "Consumables", moq: "2000 Packs", icon: "fas fa-toilet-paper" }
  ];

  useEffect(() => {
    // Animate numbers
    const animateNumbers = () => {
      setAnimatedNumbers({
        suppliers: 250,
        products: 500,
        countries: 12,
        successRate: 98
      });
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % sourcingCategories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-25 to-amber-25 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-100 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
              Smart Product Sourcing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Global Sourcing
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access our extensive network of verified suppliers and streamline your product sourcing 
            with intelligent matching, quality assurance, and seamless logistics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">{animatedNumbers.suppliers}+</div>
            <div className="text-gray-600">Verified Suppliers</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100">
            <div className="text-3xl font-bold text-amber-600 mb-2">{animatedNumbers.products}+</div>
            <div className="text-gray-600">Product Categories</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100">
            <div className="text-3xl font-bold text-orange-500 mb-2">{animatedNumbers.countries}+</div>
            <div className="text-gray-600">Sourcing Countries</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100">
            <div className="text-3xl font-bold text-amber-500 mb-2">{animatedNumbers.successRate}%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mb-16">
          {/* Sourcing Categories */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Product Categories</h2>
                <div className="flex space-x-2">
                  {sourcingCategories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeCategory ? 'bg-orange-500 scale-125' : 'bg-orange-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Active Category Card */}
              <div className={`bg-gradient-to-r ${sourcingCategories[activeCategory].gradient} rounded-2xl p-6 text-white mb-6 transition-all duration-500`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <i className={`${sourcingCategories[activeCategory].icon} text-4xl mr-4`}></i>
                    <div>
                      <h3 className="text-2xl font-bold">{sourcingCategories[activeCategory].name}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                          ⏱️ {sourcingCategories[activeCategory].sourcingTime}
                        </span>
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                          📦 MOQ: {sourcingCategories[activeCategory].minOrder}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {sourcingCategories[activeCategory].products.map((product, index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-3 text-center group hover:bg-orange-100 transition-colors duration-300">
                    <div className="text-orange-600 font-semibold text-sm">{product}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {sourcingCategories[activeCategory].features.map((feature, index) => (
                  <span key={index} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Sourcing Form - FIXED SPACE BELOW */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 mt-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Specific Products?</h3>
              <p className="text-orange-100 mb-4">Tell us what you're looking for and we'll find the best suppliers for you.</p>
              <div className="flex gap-3 mb-4">
                <input 
                  type="text" 
                  placeholder="Enter product name..." 
                  className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-2 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition duration-300">
                  Search
                </button>
              </div>
              
              {/* Popular Products Grid to fill the space */}
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="text-orange-100 font-semibold mb-3 text-sm">Popular Products:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {popularProducts.map((product, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded-lg p-2">
                      <i className={`${product.icon} text-orange-300 mr-2 text-sm`}></i>
                      <div>
                        <div className="text-white text-xs font-medium">{product.name}</div>
                        <div className="text-orange-200 text-xs">MOQ: {product.moq}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sourcing Process */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Sourcing Process</h3>
            {sourcingProcess.map((step, index) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white font-bold text-lg">{step.step}</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                      <span className="text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded">{step.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quality Badges */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quality Certifications</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center bg-green-50 rounded-lg p-2">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span className="text-sm font-medium">ISO Certified</span>
                </div>
                <div className="flex items-center bg-blue-50 rounded-lg p-2">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span className="text-sm font-medium">Halal Certified</span>
                </div>
                <div className="flex items-center bg-purple-50 rounded-lg p-2">
                  <i className="fas fa-check-circle text-purple-500 mr-2"></i>
                  <span className="text-sm font-medium">Quality Tested</span>
                </div>
                <div className="flex items-center bg-amber-50 rounded-lg p-2">
                  <i className="fas fa-check-circle text-amber-500 mr-2"></i>
                  <span className="text-sm font-medium">Bulk Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Sourcing Smart Today</h3>
              <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses that trust us for reliable, quality-assured product sourcing 
                with competitive pricing and seamless logistics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300 shadow-lg">
                  <i className="fas fa-box-open mr-2"></i> Request Product Catalog
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  <i className="fas fa-headset mr-2"></i> Talk to Sourcing Expert
                </button>
              </div>
            </div>
          </div>
        </div>
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