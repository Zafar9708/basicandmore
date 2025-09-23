"use client";
import { useState, useEffect } from 'react';

export default function ProductSourcingPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [sourcingProgress, setSourcingProgress] = useState(0);
  const [isSourcing, setIsSourcing] = useState(false);

  // Sourcing categories
  const sourcingCategories = {
    all: { name: "All Products", icon: "🌍", color: "from-orange-500 to-amber-500" },
    agricultural: { name: "Agricultural", icon: "🌾", color: "from-green-500 to-emerald-500" },
    packaged: { name: "Packaged Foods", icon: "🥫", color: "from-blue-500 to-cyan-500" },
    beverages: { name: "Beverages", icon: "☕", color: "from-brown-500 to-amber-500" },
    spices: { name: "Spices & Herbs", icon: "🌿", color: "from-lime-500 to-green-500" },
    dairy: { name: "Dairy Products", icon: "🥛", color: "from-white-500 to-gray-300" },
    meat: { name: "Meat & Poultry", icon: "🍖", color: "from-red-500 to-orange-500" },
    seafood: { name: "Seafood", icon: "🐟", color: "from-blue-400 to-cyan-400" }
  };

  // Global suppliers database
  const globalSuppliers = [
    {
      id: 1,
      name: "AgriFood Exports Ltd.",
      country: "Brazil",
      rating: 4.8,
      products: ["Coffee Beans", "Sugar", "Beef"],
      minOrder: "$10,000",
      delivery: "15 days",
      certification: ["ISO 22000", "HACCP", "Organic"],
      established: 1998,
      reliability: 98
    },
    {
      id: 2,
      name: "EuroFresh Distributors",
      country: "Spain",
      rating: 4.9,
      products: ["Olive Oil", "Wine", "Canned Fish"],
      minOrder: "$5,000",
      delivery: "10 days",
      certification: ["EU Organic", "BRC", "IFS"],
      established: 1985,
      reliability: 99
    },
    {
      id: 3,
      name: "AsiaSpice International",
      country: "India",
      rating: 4.7,
      products: ["Spices", "Rice", "Tea"],
      minOrder: "$3,000",
      delivery: "20 days",
      certification: ["FSSAI", "Spices Board", "HALAL"],
      established: 1975,
      reliability: 97
    },
    {
      id: 4,
      name: "OceanHarvest Co.",
      country: "Thailand",
      rating: 4.6,
      products: ["Seafood", "Frozen Fish", "Shrimp"],
      minOrder: "$8,000",
      delivery: "12 days",
      certification: ["BAP", "MSC", "HACCP"],
      established: 1990,
      reliability: 96
    },
    {
      id: 5,
      name: "Mediterranean Foods",
      country: "Italy",
      rating: 4.9,
      products: ["Pasta", "Cheese", "Olives"],
      minOrder: "$7,000",
      delivery: "8 days",
      certification: ["DOP", "IGP", "Organic EU"],
      established: 1960,
      reliability: 99
    },
    {
      id: 6,
      name: "American Grain Corp.",
      country: "USA",
      rating: 4.8,
      products: ["Wheat", "Corn", "Soybeans"],
      minOrder: "$15,000",
      delivery: "25 days",
      certification: ["USDA Organic", "Non-GMO", "FDA"],
      established: 1955,
      reliability: 98
    }
  ];

  // Sourcing requests
  const sourcingRequests = [
    { id: 1, product: "Organic Basmati Rice", quantity: "100 tons", status: "sourcing", progress: 75, suppliers: 3 },
    { id: 2, product: "Extra Virgin Olive Oil", quantity: "5,000 L", status: "negotiating", progress: 50, suppliers: 2 },
    { id: 3, product: "Arabica Coffee Beans", quantity: "20 tons", status: "completed", progress: 100, suppliers: 1 },
    { id: 4, product: "Black Pepper", quantity: "10 tons", status: "evaluating", progress: 25, suppliers: 4 }
  ];

  const sourcingStats = {
    suppliers: 2500,
    countries: 85,
    products: 500,
    successRate: 99.2
  };

  const sourcingProcess = [
    { step: 1, title: "Requirement Analysis", description: "Understand your specific needs", icon: "📋" },
    { step: 2, title: "Supplier Matching", description: "Find ideal global partners", icon: "🔍" },
    { step: 3, title: "Quality Verification", description: "Ensure product standards", icon: "✅" },
    { step: 4, title: "Price Negotiation", description: "Get competitive pricing", icon: "💲" },
    { step: 5, title: "Logistics Setup", description: "Arrange shipping", icon: "🚢" },
    { step: 6, title: "Delivery", description: "Product arrival", icon: "📦" }
  ];

  const filteredSuppliers = globalSuppliers.filter(supplier =>
    activeCategory === 'all' || supplier.products.some(product => 
      product.toLowerCase().includes(sourcingCategories[activeCategory].name.toLowerCase().split(' ')[0])
    )
  ).filter(supplier =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.products.some(product => product.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    if (isSourcing) {
      const timer = setInterval(() => {
        setSourcingProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setIsSourcing(false);
            return 100;
          }
          return prev + 5;
        });
      }, 200);
      return () => clearInterval(timer);
    }
  }, [isSourcing]);

  const handleStartSourcing = () => {
    setIsSourcing(true);
    setSourcingProgress(0);
  };

  const toggleSupplierSelection = (supplierId) => {
    setSelectedSuppliers(prev =>
      prev.includes(supplierId)
        ? prev.filter(id => id !== supplierId)
        : [...prev, supplierId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-200 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
              Global Product Sourcing
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-gray-900">Smart Product</span>
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Sourcing Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with verified global suppliers and source quality food products with competitive pricing and reliable logistics
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{sourcingStats.suppliers}+</div>
            <div className="text-gray-600">Verified Suppliers</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">{sourcingStats.countries}</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{sourcingStats.products}+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{sourcingStats.successRate}%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Main Sourcing Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Panel - Supplier Search */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-8">
              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
                <input
                  type="text"
                  placeholder="Search suppliers, products, or countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border border-orange-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.entries(sourcingCategories).map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        activeCategory === key
                          ? 'border-orange-500 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-105'
                          : 'border-orange-200 text-gray-600 hover:border-orange-300 bg-white'
                      }`}
                    >
                      <div className="text-2xl mb-2">{category.icon}</div>
                      <div className="text-sm font-medium">{category.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Suppliers Grid */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Verified Suppliers ({filteredSuppliers.length})
                </h3>
                {filteredSuppliers.map((supplier) => (
                  <div key={supplier.id} className="border border-orange-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                          {supplier.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{supplier.name}</h4>
                          <p className="text-sm text-gray-600">📍 {supplier.country} • Est. {supplier.established}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-amber-600">
                          <span>⭐</span>
                          <span className="font-semibold">{supplier.rating}</span>
                        </div>
                        <div className="text-sm text-green-600 font-medium">{supplier.reliability}% Reliability</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Main Products</div>
                        <div className="font-medium text-gray-900">{supplier.products.join(', ')}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Min. Order</div>
                        <div className="font-medium text-gray-900">{supplier.minOrder}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Delivery</div>
                        <div className="font-medium text-gray-900">{supplier.delivery}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {supplier.certification.map((cert, index) => (
                          <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                            {cert}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => toggleSupplierSelection(supplier.id)}
                        className={`px-4 py-2 rounded-xl font-semibold transition duration-300 ${
                          selectedSuppliers.includes(supplier.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg'
                        }`}
                      >
                        {selectedSuppliers.includes(supplier.id) ? 'Selected ✓' : 'Select Supplier'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sourcing Request Form */}
              <div className="border-2 border-dashed border-orange-300 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">New Sourcing Request</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Product Name" className="p-3 border border-orange-200 rounded-xl" />
                  <input type="text" placeholder="Quantity Required" className="p-3 border border-orange-200 rounded-xl" />
                  <input type="text" placeholder="Quality Standards" className="p-3 border border-orange-200 rounded-xl" />
                  <input type="text" placeholder="Target Price" className="p-3 border border-orange-200 rounded-xl" />
                </div>
                <textarea placeholder="Special Requirements" className="w-full p-3 border border-orange-200 rounded-xl mb-4" rows="3"></textarea>
                
                {selectedSuppliers.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Selected Suppliers: {selectedSuppliers.length}</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedSuppliers.map(supplierId => {
                        const supplier = globalSuppliers.find(s => s.id === supplierId);
                        return supplier ? (
                          <span key={supplierId} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                            {supplier.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleStartSourcing}
                  disabled={isSourcing}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition duration-300 disabled:opacity-50"
                >
                  {isSourcing ? 'Sourcing...' : 'Start Sourcing Process'}
                </button>
                
                {isSourcing && (
                  <div className="mt-4">
                    <div className="w-full bg-orange-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${sourcingProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Finding best suppliers... {sourcingProgress}%</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Process & Active Requests */}
          <div className="space-y-8">
            {/* Sourcing Process */}
            <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">6-Step Sourcing Process</h3>
              <div className="space-y-3">
                {sourcingProcess.map((step) => (
                  <div key={step.step} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
                      <div className="text-xs text-gray-600">{step.description}</div>
                    </div>
                    <div className="text-xl">{step.icon}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Sourcing Requests */}
            <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Sourcing Requests</h3>
              <div className="space-y-4">
                {sourcingRequests.map((request) => (
                  <div key={request.id} className="p-4 border border-orange-200 rounded-xl">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{request.product}</h4>
                        <p className="text-sm text-gray-600">{request.quantity}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        request.status === 'completed' ? 'bg-green-100 text-green-700' :
                        request.status === 'negotiating' ? 'bg-blue-100 text-blue-700' :
                        request.status === 'sourcing' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {request.status}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{request.progress}%</span>
                      </div>
                      <div className="w-full bg-orange-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full"
                          style={{ width: `${request.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">Suppliers contacted: {request.suppliers}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-6 text-white">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 p-3 rounded-xl text-left transition duration-300">
                  <div className="font-medium">📊 Market Analysis</div>
                  <div className="text-sm text-orange-100">Price trends & insights</div>
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 p-3 rounded-xl text-left transition duration-300">
                  <div className="font-medium">📋 Supplier Comparison</div>
                  <div className="text-sm text-orange-100">Compare multiple offers</div>
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 p-3 rounded-xl text-left transition duration-300">
                  <div className="font-medium">🚢 Logistics Calculator</div>
                  <div className="text-sm text-orange-100">Shipping cost estimate</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Use Our Sourcing Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Verified Suppliers</h3>
              <p className="text-gray-600">All suppliers undergo rigorous verification and quality checks</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing through bulk purchasing and negotiation</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Sourcing</h3>
              <p className="text-gray-600">Reduce sourcing time from weeks to days with our platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}