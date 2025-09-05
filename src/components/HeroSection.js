import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function HeroSection() {
  const [years, setYears] = useState(0);
  const [countries, setCountries] = useState(0);
  const [clients, setClients] = useState(0);
  const [products, setProducts] = useState(0);

  useEffect(() => {
    // Animate counters
    const duration = 2000;
    const interval = 20;
    
    const animateValue = (setValue, end, duration) => {
      let start = 0;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const steps = Math.ceil(duration / interval);
      const stepAmount = range / steps;

      const timer = setInterval(() => {
        start += stepAmount;
        setValue(Math.floor(start));
        if (start >= end) {
          clearInterval(timer);
          setValue(end);
        }
      }, interval);
    };

    animateValue(setYears, 12, duration);
    animateValue(setCountries, 48, duration);
    animateValue(setClients, 350, duration);
    animateValue(setProducts, 1200, duration);
  }, []);

  return (
    <>
      <Head>
        <title>GlobalTrade Nexus - Import/Export Experts</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen flex flex-col font-sans">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white bg-opacity-10 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white bg-opacity-10 animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white bg-opacity-10 animate-float" style={{animationDelay: '2.5s'}}></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23ffffff' fill-opacity='0.1' width='50' height='50'/%3E%3Crect fill='%23ffffff' fill-opacity='0.1' x='50' y='50' width='50' height='50'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover'
          }}></div>
          
          {/* Shipping Icons */}
          <div className="absolute top-1/4 left-1/5 text-4xl opacity-30">
            <i className="fas fa-ship"></i>
          </div>
          <div className="absolute bottom-1/4 right-1/5 text-3xl opacity-30">
            <i className="fas fa-plane"></i>
          </div>
          <div className="absolute top-1/2 left-1/10 text-2xl opacity-30">
            <i className="fas fa-truck"></i>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm font-medium mb-6">
                  <i className="fas fa-globe-americas mr-2"></i> Global Import & Export Solutions
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Connecting Markets Across <span className="text-yellow-300">The Globe</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
                  Your trusted partner for seamless import and export of products worldwide. From frames to electronics, we handle it all with precision and care.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a href="#services" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center">
                    <i className="fas fa-concierge-bell mr-3"></i> Explore Our Services
                  </a>
                  <a href="#contact" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center">
                    <i className="fas fa-headset mr-3"></i> Contact Us Today
                  </a>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-blue-100">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                    <span>Customs Expertise</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                    <span>Fast Delivery</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-300 mr-2"></i>
                    <span>Global Network</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-white bg-opacity-15 p-6 rounded-xl border border-white border-opacity-20 transition duration-300 hover:bg-opacity-25">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">{years}+</div>
                      <div className="text-blue-100">Years Experience</div>
                    </div>
                    <div className="bg-white bg-opacity-15 p-6 rounded-xl border border-white border-opacity-20 transition duration-300 hover:bg-opacity-25">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">{countries}+</div>
                      <div className="text-blue-100">Countries Served</div>
                    </div>
                    <div className="bg-white bg-opacity-15 p-6 rounded-xl border border-white border-opacity-20 transition duration-300 hover:bg-opacity-25">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">{clients}+</div>
                      <div className="text-blue-100">Happy Clients</div>
                    </div>
                    <div className="bg-white bg-opacity-15 p-6 rounded-xl border border-white border-opacity-20 transition duration-300 hover:bg-opacity-25">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">{products}+</div>
                      <div className="text-blue-100">Products Exported</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-white bg-opacity-10 p-4 rounded-xl border border-white border-opacity-20">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-full p-3">
                        <i className="fas fa-quote-left text-white text-xl"></i>
                      </div>
                      <div className="ml-4">
                        <p className="text-blue-100 italic">"GlobalTrade Nexus streamlined our import process and reduced costs by 23%. Highly recommended!"</p>
                        <div className="mt-2 flex items-center">
                          <div className="text-yellow-300">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <span className="ml-2 text-white">- TechGadgets Inc.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated shipping containers */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-lg opacity-80 animate-float" style={{animationDelay: '0.5s', zIndex: -1}}></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-400 rounded-lg opacity-80 animate-float" style={{animationDelay: '1s', zIndex: -1}}></div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a href="#services" className="animate-bounce inline-flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-20 text-white">
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </section>

       
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        body {
          font-family: 'Open Sans', sans-serif;
          background-color: #f8fafc;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </>
  );
}