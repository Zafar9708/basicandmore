"use client"
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";


export default function FoodProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();

  const foodCategories = [
    {
      id: 'grains',
      name: 'Grains & Cereals',
      icon: 'fas fa-seedling',
      count: 15,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'spices',
      name: 'Spices & Herbs',
      icon: 'fas fa-mortar-pestle',
      count: 12,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: 'fas fa-wine-bottle',
      count: 8,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'canned',
      name: 'Canned Goods',
      icon: 'fas fa-can',
      count: 6,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'snacks',
      name: 'Snack Foods',
      icon: 'fas fa-cookie',
      count: 10,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const foodProducts = {
    grains: [
      {
        id: 1,
        name: 'Premium Basmati Rice',
        grade: 'Grade A',
        origin: 'India',
        packaging: '25kg bags',
        moq: '5 Tons',
        price: '$45-55/ton',
        description: 'Long grain aromatic rice with excellent cooking qualities',
        specs: ['Aged 1 Year', 'Non-Basmati Available', 'Vacuum Packed', 'ISO Certified'],
        image: '/api/placeholder/400/300'
      },
      {
        id: 2,
        name: 'Jasmine Rice',
        grade: 'Premium',
        origin: 'Thailand',
        packaging: '25kg bags',
        moq: '3 Tons',
        price: '$50-60/ton',
        description: 'Fragrant long-grain rice perfect for Asian cuisine',
        specs: ['100% Broken Ratio', 'Natural Fragrance', 'White & Brown Available'],
        image: '/api/placeholder/400/300'
      },
      {
        id: 3,
        name: 'Whole Wheat Flour',
        grade: 'Food Grade',
        origin: 'Multiple',
        packaging: '50kg bags',
        moq: '2 Tons',
        price: '$35-45/ton',
        description: 'High-quality wheat flour for baking and cooking',
        specs: ['Fine Texture', 'Protein Rich', 'Various Grades Available'],
        image: '/api/placeholder/400/300'
      }
    ],
    spices: [
      {
        id: 4,
        name: 'Turmeric Powder',
        grade: 'Food Grade',
        origin: 'India',
        packaging: '25kg bags',
        moq: '100kg',
        price: '$8-12/kg',
        description: 'Pure turmeric powder with high curcumin content',
        specs: ['Organic Available', 'High Curcumin', 'Laboratory Tested'],
        image: '/api/placeholder/400/300'
      },
      {
        id: 5,
        name: 'Cumin Seeds',
        grade: 'Premium',
        origin: 'Middle East',
        packaging: '25kg bags',
        moq: '50kg',
        price: '$6-10/kg',
        description: 'Aromatic cumin seeds for culinary and medicinal use',
        specs: ['Whole Seeds', 'Powder Available', 'Export Quality'],
        image: '/api/placeholder/400/300'
      }
    ],
    beverages: [
      {
        id: 6,
        name: 'Mineral Water',
        grade: 'BIS Certified',
        origin: 'UAE',
        packaging: '500ml/1L bottles',
        moq: '1000 Cases',
        price: '$8-12/case',
        description: 'Pure mineral water with essential minerals',
        specs: ['BIS Certified', 'Multiple Sizes', 'Private Labeling'],
        image: '/api/placeholder/400/300'
      },
      {
        id: 7,
        name: 'Fruit Juices',
        grade: '100% Natural',
        origin: 'Various',
        packaging: '1L Tetra Pak',
        moq: '500 Cases',
        price: '$15-25/case',
        description: 'Natural fruit juices without preservatives',
        specs: ['No Added Sugar', 'Multiple Flavors', 'Concentrates Available'],
        image: '/api/placeholder/400/300'
      }
    ]
  };

  const allProducts = Object.values(foodProducts).flat();

  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : foodProducts[activeCategory] || [];

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price': return a.price.localeCompare(b.price);
      case 'name': return a.name.localeCompare(b.name);
      case 'moq': return a.moq.localeCompare(b.moq);
      default: return 0;
    }
  });

  const featuredProducts = allProducts.filter((_, index) => index < 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-100 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
                Quality Food Products
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Premium Food
              <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Products & Ingredients
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Source high-quality food products from trusted suppliers worldwide. 
              From grains and spices to beverages and canned goods, we ensure the finest 
              quality for your business needs.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-orange-100">
              <div className="text-2xl font-bold text-orange-600">50+</div>
              <div className="text-gray-600">Food Items</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-orange-100">
              <div className="text-2xl font-bold text-amber-600">12+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-orange-100">
              <div className="text-2xl font-bold text-orange-500">100%</div>
              <div className="text-gray-600">Quality Tested</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-orange-100">
              <div className="text-2xl font-bold text-amber-500">ISO</div>
              <div className="text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-y border-orange-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                <i className="fas fa-boxes mr-2"></i>
                All Products ({allProducts.length})
              </button>
              
              {foodCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-orange-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-300"
              >
                <option value="popular">Sort by Popular</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
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
      </section>

      {/* Featured Products */}
      {activeCategory === 'all' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
              <span className="text-orange-600 font-semibold">Bestsellers</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-orange-100">
                  <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100">
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white text-orange-600 px-2 py-1 rounded text-xs font-medium">
                        MOQ: {product.moq}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.origin}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300"
                    >
                      Request Sample & Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeCategory === 'all' ? 'All Food Products' : foodCategories.find(c => c.id === activeCategory)?.name}
              <span className="text-orange-600 ml-2">({sortedProducts.length})</span>
            </h2>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-orange-100">
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
                      <span className="text-xs text-gray-500 bg-orange-100 px-2 py-1 rounded">
                        {product.grade}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-semibold transition duration-300"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-orange-100">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex-shrink-0"></div>
                    
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
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
                      >
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
              <p className="text-gray-500">Try selecting a different category or search term</p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every food product undergoes rigorous quality checks to ensure they meet international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-microscope text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Laboratory Testing</h3>
              <p className="text-gray-600">Comprehensive testing for purity, quality, and safety standards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-award text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certifications</h3>
              <p className="text-gray-600">ISO, Halal, and other international quality certifications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600">Stringent quality control at every stage of sourcing and delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl h-64"></div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Product Details</h4>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-500">Grade</span>
                      <p className="font-medium">{selectedProduct.grade}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Origin</span>
                      <p className="font-medium">{selectedProduct.origin}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Packaging</span>
                      <p className="font-medium">{selectedProduct.packaging}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">MOQ</span>
                      <p className="font-medium">{selectedProduct.moq}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Price</h4>
                    <p className="text-2xl font-bold text-orange-600">{selectedProduct.price}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProduct.specs.map((spec, index) => (
                    <div key={index} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span className="text-sm text-gray-600">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300">
                  Request Sample
                </button>
                <button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 rounded-xl font-semibold transition duration-300">
                  Get Full Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Food Products?</h2>
              <p className="text-orange-100 text-lg mb-6">
                We can source specific food items according to your requirements and quality standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  <i className="fas fa-list-alt mr-2"></i> Request Catalog
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  <i className="fas fa-headset mr-2"></i> Contact Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}