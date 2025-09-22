import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function HeroSection() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredProducts = [
    { name: "Food Grains & Spices", icon: "fas fa-seedling", color: "from-green-500 to-green-600" },
    { name: "Beverages & Drinks", icon: "fas fa-wine-bottle", color: "from-blue-500 to-blue-600" },
    { name: "Household Essentials", icon: "fas fa-soap", color: "from-purple-500 to-purple-600" },
    { name: "Kitchen Supplies", icon: "fas fa-utensils", color: "from-red-500 to-red-600" },
    { name: "Daily Consumables", icon: "fas fa-shopping-basket", color: "from-teal-500 to-teal-600" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const productInterval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % featuredProducts.length);
    }, 3000);

    return () => clearInterval(productInterval);
  }, []);

  return (
    <>
      <Head>
        <title>Basic and More Inc - Premium Trading Solutions</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center py-12">
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-100">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
                  Trusted Since 2016
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your Global
                <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Trading Partner
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                We bridge markets worldwide with premium quality products. Specializing in 
                <span className="font-semibold text-orange-600"> food supplies</span>, 
                <span className="font-semibold text-orange-600"> household goods</span>, and 
                <span className="font-semibold text-orange-600"> daily consumables</span>. 
                Your success is our business.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 max-w-md">
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-orange-50">
                  <div className="text-3xl font-bold text-orange-600">8+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-orange-50">
                  <div className="text-3xl font-bold text-orange-600">12+</div>
                  <div className="text-sm text-gray-600 font-medium">Countries</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-orange-50">
                  <div className="text-3xl font-bold text-orange-600">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Clients</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-orange-50">
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Products</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    <i className="fas fa-box-open mr-3"></i>
                    Explore Products
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group relative bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-orange-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 flex items-center justify-center">
                    <i className="fas fa-calendar-alt mr-3"></i>
                    Schedule Meeting
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative">
              {/* Main Product Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl border-8 border-white overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredProducts[currentProduct].color} transition-all duration-1000`}></div>
                
                <div className="relative z-10 p-8 h-96 flex flex-col justify-center items-center text-white">
                  <div className="text-6xl mb-6 transform transition-transform duration-700 hover:scale-110">
                    <i className={featuredProducts[currentProduct].icon}></i>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-center mb-4">
                    {featuredProducts[currentProduct].name}
                  </h3>
                  
                  <p className="text-white text-opacity-90 text-center text-lg">
                    Premium quality products sourced from trusted suppliers worldwide
                  </p>

                  {/* Product Indicators */}
                  <div className="flex space-x-2 mt-6">
                    {featuredProducts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProduct(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentProduct ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Product Cards */}
              <div className="absolute -top-4 -right-4 bg-green-100 rounded-2xl p-4 shadow-lg transform rotate-6">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-award text-green-600 text-2xl"></i>
                  <span className="font-semibold text-green-800">Quality Certified</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-100 rounded-2xl p-4 shadow-lg transform -rotate-6">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-shipping-fast text-blue-600 text-2xl"></i>
                  <span className="font-semibold text-blue-800">Fast Delivery</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 bg-purple-100 rounded-2xl p-4 shadow-lg transform translate-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-globe text-purple-600 text-2xl"></i>
                  <span className="font-semibold text-purple-800">Global Reach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce flex flex-col items-center text-orange-600">
              <span className="text-sm font-semibold mb-2">Discover More</span>
              <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-orange-600 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  opacity=".25" 
                  className="fill-orange-200"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                  opacity=".5" 
                  className="fill-orange-200"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                  className="fill-orange-200"></path>
          </svg>
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
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .gradient-animate {
          background: linear-gradient(-45deg, #ff6b35, #f7931e, #ffa726, #ffb74d);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>
    </>
  );
}