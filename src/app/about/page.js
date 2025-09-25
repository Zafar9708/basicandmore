"use client"
import { useState, useEffect } from 'react';

export default function AboutUs() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    years: 0,
    clients: 0,
    products: 0,
    countries: 0
  });

  const milestones = [
    {
      year: "2016",
      title: "Company Foundation",
      description: "Basic and More Inc was established with a vision to become a leading global trading partner.",
      achievement: "Started operations in Dubai, UAE"
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Expanded our network to 5+ countries across Middle East and Southeast Asia.",
      achievement: "Reached 50+ business partners"
    },
    {
      year: "2020",
      title: "Product Diversification",
      description: "Diversified into multiple product categories including food, beverages, and household goods.",
      achievement: "Launched 20+ new product lines"
    },
    {
      year: "2022",
      title: "Quality Certification",
      description: "Achieved international quality certifications and strengthened supplier relationships.",
      achievement: "ISO Quality Standards Certified"
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Implemented advanced digital systems for enhanced customer experience and efficiency.",
      achievement: "200+ satisfied clients worldwide"
    }
  ];

  const teamMembers = [
    {
      name: "Ahmed Al Mansoori",
      position: "Founder & CEO",
      image: "/api/placeholder/300/300",
      expertise: "15+ years in international trade",
      quote: "Building bridges between markets through quality and trust."
    },
    {
      name: "Sarah Johnson",
      position: "Head of Operations",
      image: "/api/placeholder/300/300",
      expertise: "Supply chain management expert",
      quote: "Ensuring seamless operations from source to destination."
    },
    {
      name: "Rajesh Kumar",
      position: "Procurement Director",
      image: "/api/placeholder/300/300",
      expertise: "Global sourcing specialist",
      quote: "Finding the best products at the best prices worldwide."
    },
    {
      name: "Fatima Al Rashid",
      position: "Quality Assurance Manager",
      image: "/api/placeholder/300/300",
      expertise: "Quality control and standards",
      quote: "Quality is not an act, it's a habit we live by."
    }
  ];

  const values = [
    {
      icon: "fas fa-handshake",
      title: "Integrity",
      description: "We build relationships based on trust, transparency, and ethical business practices.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "fas fa-award",
      title: "Quality",
      description: "Every product undergoes rigorous quality checks to meet international standards.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "fas fa-users",
      title: "Partnership",
      description: "We work as an extension of your team, understanding your unique business needs.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: "fas fa-rocket",
      title: "Innovation",
      description: "Continuously improving our processes to deliver better value and efficiency.",
      color: "from-orange-500 to-amber-500"
    }
  ];

  useEffect(() => {
    // Animate numbers
    const animateNumbers = () => {
      setAnimatedValues({
        years: 8,
        clients: 200,
        products: 50,
        countries: 12
      });
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % milestones.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
                Our Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Building Bridges in
              <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Global Trade
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over 8 years, Basic and More Inc has been connecting markets worldwide with 
              quality products, reliable service, and unwavering commitment to excellence in 
              international trading.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">{animatedValues.years}+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">{animatedValues.clients}+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-500 mb-2">{animatedValues.products}+</div>
              <div className="text-gray-600">Product Categories</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-amber-500 mb-2">{animatedValues.countries}+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-3 mr-4">
                      <i className="fas fa-bullseye text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600">
                    To become the most trusted global trading partner by delivering quality products, 
                    competitive pricing, and exceptional service that helps businesses grow and thrive 
                    in international markets.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-3 mr-4">
                      <i className="fas fa-eye text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600">
                    To create a world where businesses can easily access global markets through 
                    seamless trading solutions, fostering economic growth and international cooperation.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-white mr-3"></i>
                    <span>8+ Years of Trading Excellence</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-white mr-3"></i>
                    <span>Global Supplier Network</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-white mr-3"></i>
                    <span>Quality Assured Products</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-white mr-3"></i>
                    <span>Competitive Pricing</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-white mr-3"></i>
                    <span>Timely Delivery</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-white mr-3"></i>
                    <span>Personalized Service</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center">
                  <i className="fas fa-globe text-orange-500 text-2xl mr-2"></i>
                  <span className="font-semibold text-gray-900">Global Reach</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-amber-500 text-2xl mr-2"></i>
                  <span className="font-semibold text-gray-900">Quality Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted global trading partner
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-amber-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <div 
                      className={`bg-white rounded-2xl p-6 shadow-lg border border-orange-100 transition-all duration-500 ${
                        activeMilestone === index ? 'transform scale-105 shadow-xl' : ''
                      }`}
                    >
                      <div className="text-orange-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 mb-4">{milestone.description}</p>
                      <div className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {milestone.achievement}
                      </div>
                    </div>
                  </div>
                  
                  {/* Year Marker */}
                  <div className="relative z-10">
                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ${
                        activeMilestone === index 
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 transform scale-125 shadow-2xl' 
                          : 'bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg'
                      }`}
                    >
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Spacer */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The experienced professionals driving our success in global trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-orange-200 to-amber-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-orange-200">{member.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-star text-amber-500 mr-2"></i>
                    <span className="text-sm text-gray-600">{member.expertise}</span>
                  </div>
                  <p className="text-gray-600 italic">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
              <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust us for their international trading needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  <i className="fas fa-handshake mr-2"></i> Start Partnership
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                  <i className="fas fa-file-alt mr-2"></i> Download Company Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}