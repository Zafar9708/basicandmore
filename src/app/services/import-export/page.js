// app/import-export/page.js
"use client";
import { useState, useEffect } from 'react';

export default function FoodTradingImportExport() {
  const [activeTab, setActiveTab] = useState('import');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Food categories for trading
  const foodCategories = {
    all: { name: "All Products", icon: "📦" },
    grains: { name: "Grains & Cereals", icon: "🌾" },
    spices: { name: "Spices & Herbs", icon: "🌿" },
    dairy: { name: "Dairy Products", icon: "🥛" },
    meat: { name: "Meat & Poultry", icon: "🍗" },
    seafood: { name: "Seafood", icon: "🐟" },
    fruits: { name: "Fruits & Vegetables", icon: "🍎" },
    oils: { name: "Cooking Oils", icon: "🫒" },
    beverages: { name: "Beverages", icon: "☕" }
  };

  // Sample food products data
  const foodProducts = [
    { id: 1, name: "Basmati Rice", category: "grains", origin: "India", price: "$850/ton", stock: "500 tons", status: "available" },
    { id: 2, name: "Arabica Coffee Beans", category: "beverages", origin: "Brazil", price: "$3,200/ton", stock: "200 tons", status: "available" },
    { id: 3, name: "Extra Virgin Olive Oil", category: "oils", origin: "Spain", price: "$4.5/L", stock: "10,000 L", status: "available" },
    { id: 4, name: "Black Pepper", category: "spices", origin: "Vietnam", price: "$2,800/ton", stock: "50 tons", status: "low" },
    { id: 5, name: "Frozen Beef", category: "meat", origin: "Australia", price: "$6,500/ton", stock: "100 tons", status: "available" },
    { id: 6, name: "Almonds", category: "fruits", origin: "USA", price: "$7,200/ton", stock: "75 tons", status: "available" },
    { id: 7, name: "Canned Tuna", category: "seafood", origin: "Thailand", price: "$2.3/can", stock: "50,000 cans", status: "available" },
    { id: 8, name: "Parmesan Cheese", category: "dairy", origin: "Italy", price: "$12.5/kg", stock: "5,000 kg", status: "available" }
  ];

  const tradingStats = {
    countries: 28,
    products: 150,
    containers: 47,
    successRate: 99.7
  };

  const recentTransactions = [
    { id: 1, product: "Wheat Flour", type: "export", destination: "UAE", quantity: "100 tons", date: "2024-01-15", status: "completed" },
    { id: 2, product: "Green Tea", type: "import", origin: "China", quantity: "20 tons", date: "2024-01-14", status: "completed" },
    { id: 3, product: "Olive Oil", type: "export", destination: "USA", quantity: "5,000 L", date: "2024-01-13", status: "shipping" },
    { id: 4, product: "Dates", type: "import", origin: "Saudi Arabia", quantity: "15 tons", date: "2024-01-12", status: "completed" },
    { id: 5, product: "Spices Mix", type: "export", destination: "UK", quantity: "2 tons", date: "2024-01-11", status: "processing" }
  ];

  const importProcess = [
    { step: 1, title: "Sourcing", description: "Find reliable suppliers worldwide", icon: "🔍" },
    { step: 2, title: "Quality Check", description: "Ensure food safety standards", icon: "✅" },
    { step: 3, title: "Logistics", description: "Arrange shipping & customs", icon: "🚢" },
    { step: 4, title: "Delivery", description: "Warehouse to your location", icon: "🏭" }
  ];

  const exportProcess = [
    { step: 1, title: "Order Processing", description: "Receive and verify orders", icon: "📋" },
    { step: 2, title: "Packaging", description: "Food-grade packaging", icon: "📦" },
    { step: 3, title: "Documentation", description: "Export certificates & papers", icon: "📄" },
    { step: 4, title: "Shipment", description: "International delivery", icon: "✈️" }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? foodProducts 
    : foodProducts.filter(product => product.category === selectedCategory);

  useEffect(() => {
    if (isUploading) {
      const timer = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setIsUploading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
      return () => clearInterval(timer);
    }
  }, [isUploading]);

  const handleOrderSubmit = () => {
    setIsUploading(true);
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-200 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
              Global Food Trading
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-gray-900">Food Import & Export</span>
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Trading Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting global food markets with premium quality products and reliable supply chain solutions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{tradingStats.countries}+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">{tradingStats.products}+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{tradingStats.containers}</div>
            <div className="text-gray-600">Containers/Month</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{tradingStats.successRate}%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Main Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Panel - Products & Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-8">
              {/* Tab Navigation */}
              <div className="flex space-x-4 mb-8">
                {['import', 'export'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-105'
                        : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-2xl">{tab === 'import' ? '📥' : '📤'}</span>
                      <span>{tab === 'import' ? 'Import Products' : 'Export Products'}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Categories</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {Object.entries(foodCategories).map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                        selectedCategory === key
                          ? 'border-orange-500 bg-orange-50 text-orange-700 transform scale-105'
                          : 'border-orange-200 text-gray-600 hover:border-orange-300'
                      }`}
                    >
                      <div className="text-lg mb-1">{category.icon}</div>
                      <div className="text-xs font-medium">{category.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="border border-orange-200 rounded-2xl p-4 hover:shadow-lg transition duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-600">{product.origin}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        product.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-3">
                      <span>Price: {product.price}</span>
                      <span>Stock: {product.stock}</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 rounded-xl font-semibold hover:shadow-lg transition duration-300">
                      {activeTab === 'import' ? 'Request Import' : 'Order Export'}
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Form */}
              <div className="border-2 border-dashed border-orange-300 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {activeTab === 'import' ? 'Custom Import Request' : 'Export Order Form'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Product Name" className="p-3 border border-orange-200 rounded-xl" />
                  <input type="text" placeholder="Quantity" className="p-3 border border-orange-200 rounded-xl" />
                  <input type="text" placeholder={activeTab === 'import' ? "Country of Origin" : "Destination Country"} className="p-3 border border-orange-200 rounded-xl" />
                  <input type="text" placeholder="Contact Email" className="p-3 border border-orange-200 rounded-xl" />
                </div>
                <textarea placeholder="Additional Requirements" className="w-full p-3 border border-orange-200 rounded-xl mb-4" rows="3"></textarea>
                <button
                  onClick={handleOrderSubmit}
                  disabled={isUploading}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition duration-300 disabled:opacity-50"
                >
                  {isUploading ? 'Submitting...' : 'Submit Request'}
                </button>
                
                {isUploading && (
                  <div className="mt-4">
                    <div className="w-full bg-orange-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Processing your request... {uploadProgress}%</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Process & Transactions */}
          <div className="space-y-8">
            {/* Trading Process */}
            <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {activeTab === 'import' ? 'Import Process' : 'Export Process'}
              </h3>
              <div className="space-y-4">
                {(activeTab === 'import' ? importProcess : exportProcess).map((step) => (
                  <div key={step.step} className="flex items-center space-x-4 p-3 bg-orange-50 rounded-xl">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{step.title}</div>
                      <div className="text-sm text-gray-600">{step.description}</div>
                    </div>
                    <div className="text-2xl ml-auto">{step.icon}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-orange-50 rounded-xl transition duration-300">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        transaction.type === 'import' ? 'bg-orange-100' : 'bg-amber-100'
                      }`}>
                        <span className="text-lg">{transaction.type === 'import' ? '📥' : '📤'}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{transaction.product}</div>
                        <div className="text-sm text-gray-500">
                          {transaction.type === 'import' ? `From: ${transaction.origin}` : `To: ${transaction.destination}`}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{transaction.quantity}</div>
                      <div className={`text-xs font-medium ${
                        transaction.status === 'completed' ? 'text-green-600' : 
                        transaction.status === 'shipping' ? 'text-blue-600' : 'text-orange-600'
                      }`}>
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Food Trading Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">Direct connections with producers and suppliers worldwide</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality checks and food safety certifications</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl mb-4">🚚</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Logistics</h3>
              <p className="text-gray-600">Efficient supply chain with temperature-controlled shipping</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Trading Today</h2>
          <p className="text-orange-100 text-lg mb-6">
            Join hundreds of satisfied clients in global food trading
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
              📞 Get Quote
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
              💼 Become Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}