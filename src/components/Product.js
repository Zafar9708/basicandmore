"use client"
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";   // ✅ App Router hook

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const router = useRouter();

  const categories = [
    { id: 'all', name: 'All Products', icon: 'fas fa-boxes', count: 58, color: 'bg-gradient-to-r from-orange-500 to-amber-500' },
    { id: 'food', name: 'Food Items', icon: 'fas fa-utensils', count: 22, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { id: 'beverages', name: 'Beverages', icon: 'fas fa-wine-bottle', count: 12, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { id: 'household', name: 'Household Goods', icon: 'fas fa-home', count: 15, color: 'bg-gradient-to-r from-purple-500 to-indigo-500' },
    { id: 'personal-care', name: 'Personal Care', icon: 'fas fa-soap', count: 9, color: 'bg-gradient-to-r from-pink-500 to-rose-500' }
  ];

  const products = [
    // Food Items
    { id: 1, name: 'Premium Basmati Rice', category: 'food', price: '$45/bag', moq: '5 Tons', image: '/api/placeholder/400/300', featured: true, description: 'Long grain aromatic rice perfect for restaurants and retailers', specs: ['Grade A Quality', 'Aged 1 Year', 'Vacuum Packed'] },
    { id: 2, name: 'Organic Spices Collection', category: 'food', price: '$28/kg', moq: '100 kg', image: '/api/placeholder/400/300', featured: true, description: 'Pure organic spices sourced from best growing regions', specs: ['100% Natural', 'No Additives', 'Hygienic Packaging'] },
    { id: 3, name: 'Assorted Pulses & Lentils', category: 'food', price: '$35/bag', moq: '2 Tons', image: '/api/placeholder/400/300', featured: false, description: 'Nutritious pulses and lentils for wholesale distribution', specs: ['Rich Protein', 'Carefully Cleaned', 'Multiple Varieties'] },
    { id: 4, name: 'Wheat Flour Premium', category: 'food', price: '$32/bag', moq: '3 Tons', image: '/api/placeholder/400/300', featured: false, description: 'High-quality wheat flour for bakeries and retailers', specs: ['Fine Texture', 'Consistent Quality', 'Bulk Packaging'] },
    
    // Beverages
    { id: 5, name: 'Mineral Water Bottles', category: 'beverages', price: '$8/case', moq: '500 Cases', image: '/api/placeholder/400/300', featured: true, description: 'Pure mineral water in 500ml and 1L bottles', specs: ['BIS Certified', 'Multi-size Options', 'OEM Available'] },
    { id: 6, name: 'Fruit Juice Concentrates', category: 'beverages', price: '$15/liter', moq: '200 Liters', image: '/api/placeholder/400/300', featured: false, description: 'Natural fruit juice concentrates for various applications', specs: ['No Preservatives', 'Multiple Flavors', 'Long Shelf Life'] },
    
    // Household Goods
    { id: 7, name: 'Cleaning Supplies Kit', category: 'household', price: '$25/kit', moq: '100 Kits', image: '/api/placeholder/400/300', featured: true, description: 'Complete cleaning supplies for household and commercial use', specs: ['Eco-friendly', 'Commercial Grade', 'Bulk Discounts'] },
    { id: 8, name: 'Kitchen Utensils Set', category: 'household', price: '$35/set', moq: '50 Sets', image: '/api/placeholder/400/300', featured: false, description: 'Durable kitchen utensils for restaurants and homes', specs: ['Stainless Steel', 'Ergonomic Design', 'Wholesale Pricing'] },
    
    // Personal Care
    { id: 9, name: 'Personal Hygiene Kit', category: 'personal-care', price: '$18/kit', moq: '200 Kits', image: '/api/placeholder/400/300', featured: false, description: 'Essential personal care products for daily use', specs: ['Quality Assured', 'Various Brands', 'Bulk Packaging'] }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name);
      case 'price': return parseFloat(a.price) - parseFloat(b.price);
      case 'moq': return parseInt(a.moq) - parseInt(b.moq);
      default: return 0;
    }
  });

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-25 to-amber-25">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-orange-400 to-amber-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Product Catalog</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Discover premium quality products for your business. From food items to household goods, 
            we've got everything you need in bulk quantities.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search products... (e.g., rice, beverages, cleaning supplies)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl text-gray-900 text-lg border-0 shadow-2xl focus:ring-2 focus:ring-orange-300"
            />
            <i className="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center ${
                    activeCategory === category.id
                      ? `${category.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-orange-50 shadow'
                  }`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-orange-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-300"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="moq">Sort by MOQ</option>
              </select>
              
              <div className="flex bg-white border border-orange-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}
                >
                  <i className="fas fa-th"></i>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      {activeCategory === 'all' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <div className="flex gap-2">
                <button className="w-3 h-3 bg-orange-300 rounded-full"></button>
                <button className="w-3 h-3 bg-orange-200 rounded-full"></button>
                <button className="w-3 h-3 bg-orange-200 rounded-full"></button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                      <span className="text-sm text-gray-500">MOQ: {product.moq}</span>
                    </div>
                    
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300">
                      Request Sample
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Products Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name}
              <span className="text-orange-600 ml-2">({sortedProducts.length})</span>
            </h2>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {product.moq}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold text-orange-600">{product.price}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-semibold transition duration-300">
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex-shrink-0"></div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-3">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.specs.map((spec, index) => (
                          <span key={index} className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-bold text-orange-600 mb-1">{product.price}</div>
                      <div className="text-sm text-gray-500 mb-3">MOQ: {product.moq}</div>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-orange-100 mb-8">
            We source custom products based on your requirements. Contact us for special requests and bulk orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
              <i className="fas fa-headset mr-2"></i> Contact Our Team
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
              <i className="fas fa-file-download mr-2"></i> Download Catalog
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}