"use client"
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    quantity: '',
    message: ''
  });
  
  const [activeContact, setActiveContact] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: '+971 4 123 4567',
      description: 'Speak directly with our trading experts',
      timing: 'Mon-Fri: 8:00 AM - 6:00 PM GST',
      color: 'from-green-500 to-emerald-500',
      action: 'tel:+97141234567'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: 'basicandmoreinc@gmail.com',
      description: 'Get detailed quotes and product information',
      timing: 'Response within 2 hours',
      color: 'from-blue-500 to-cyan-500',
      action: 'mailto:basicandmoreinc@gmail.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      // details: 'Trade Center District',
      description: '1590 S Milliken Ave #G, Ontario, CA 91761 ,USA',
      timing: 'By appointment',
      color: 'from-orange-500 to-amber-500',
      action: '#'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      details: '+971 55 123 4567',
      description: 'Quick queries and instant support',
      timing: '24/7 for urgent matters',
      color: 'from-green-400 to-green-600',
      action: 'https://wa.me/971551234567'
    }
  ];

  const productInterests = [
    'Food Products & Grains',
    'Beverages & Drinks',
    'Household Goods',
    'Personal Care Items',
    'Daily Consumables',
    'Custom Product Sourcing'
  ];

  const globalOffices = [
    {
      country: 'USA',
      city: 'Ontario',
      flag: 'US',
      address: '1590 S Milliken Ave #G, Ontario, CA 91761 ,USA',
      phone: '+971 4 123 4567',
      email: 'usa@basicandmoreinc.com'
    },
    {
      country: 'Saudi Arabia',
      city: 'Riyadh',
      flag: '🇸🇦',
      address: 'Business Bay, Riyadh',
      phone: '+966 11 123 4567',
      email: 'riyadh@basicandmoreinc.com'
    },
    {
      country: 'Singapore',
      city: 'Singapore',
      flag: '🇸🇬',
      address: 'Raffles Place, Singapore',
      phone: '+65 6123 4567',
      email: 'singapore@basicandmoreinc.com'
    },
    {
      country: 'India',
      city: 'Mumbai',
      flag: '🇮🇳',
      address: 'Bandra Kurla Complex, Mumbai',
      phone: '+91 22 1234 5678',
      email: 'mumbai@basicandmoreinc.com'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Email content (in real app, this would go to your backend)
      const emailContent = `
        New Contact Request - Basic and More Inc
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Company: ${formData.company}
        Product Interest: ${formData.productInterest}
        Estimated Quantity: ${formData.quantity}
        
        Message:
        ${formData.message}
      `;

      console.log('Email to: basicandmoreinc@gmail.com');
      console.log('Content:', emailContent);

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productInterest: '',
        quantity: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Start Your
              <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Trading Journey
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to source quality products? Contact us today for personalized trading solutions, 
              competitive quotes, and expert guidance for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-orange-100 cursor-pointer transition-all duration-300 ${
                  activeContact === index ? 'ring-2 ring-orange-500 transform scale-105' : 'hover:shadow-xl'
                }`}
                onClick={() => setActiveContact(index)}
              >
                <div className={`bg-gradient-to-r ${method.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                  <i className={`${method.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{method.details}</p>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                <p className="text-orange-500 text-xs font-medium">{method.timing}</p>
                <a 
                  href={method.action}
                  className="inline-block mt-3 text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Contact via {method.title.toLowerCase()} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 text-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-check text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">Your message has been sent successfully.</p>
                    <p className="text-gray-500 text-sm mb-6">We'll get back to you within 2 hours during business days.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Your Inquiry</h2>
                    <p className="text-gray-600 mb-6">Fill out the form below and we'll provide you with a detailed quote</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                            placeholder="+971 XX XXX XXXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Interest *
                          </label>
                          <select
                            name="productInterest"
                            value={formData.productInterest}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                          >
                            <option value="">Select product category</option>
                            {productInterests.map((interest, index) => (
                              <option key={index} value={interest}>{interest}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                            placeholder="e.g., 1000 units, 5 tons per month"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Requirements *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                          placeholder="Tell us about your product requirements, specifications, quality standards, and any other details..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-amber-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                            Sending Your Inquiry...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <i className="fas fa-paper-plane mr-2"></i>
                            Get Quote & Consultation
                          </span>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Quick Response */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <i className="fas fa-bolt text-2xl mr-3"></i>
                  <h3 className="text-xl font-bold">Quick Response Guarantee</h3>
                </div>
                <ul className="space-y-2 text-orange-100">
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i>
                    <span>Response within 2 hours</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i>
                    <span>Detailed quotes in 24 hours</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check mr-2"></i>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </div>

              {/* Global Offices */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Global Offices</h3>
                <div className="space-y-4">
                  {globalOffices.map((office, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-2xl mr-3">{office.flag}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{office.city}, {office.country}</h4>
                        <p className="text-sm text-gray-600">{office.address}</p>
                        <p className="text-sm text-orange-600">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Contact Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-orange-100 text-orange-600 rounded-lg p-2 mr-3">
                      <i className="fas fa-tag"></i>
                    </div>
                    <span className="text-sm text-gray-600">Competitive wholesale pricing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 text-orange-600 rounded-lg p-2 mr-3">
                      <i className="fas fa-award"></i>
                    </div>
                    <span className="text-sm text-gray-600">Quality guaranteed products</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 text-orange-600 rounded-lg p-2 mr-3">
                      <i className="fas fa-shipping-fast"></i>
                    </div>
                    <span className="text-sm text-gray-600">Global logistics support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-orange-100 text-orange-600 rounded-lg p-2 mr-3">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <span className="text-sm text-gray-600">Long-term partnership approach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
                <p className="text-gray-600 mb-6">
                  With offices and partners across multiple continents, we're positioned to serve 
                  your international trading needs efficiently and effectively.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">12+</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">50+</div>
                    <div className="text-gray-600">Cities Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">200+</div>
                    <div className="text-gray-600">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-500">8+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-globe-americas text-6xl text-orange-500 mb-4"></i>
                  <p className="text-gray-700 font-semibold">Global Trading Network</p>
                  <p className="text-gray-600 text-sm">Connecting markets worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-orange-100 text-lg mb-6">
                For urgent inquiries or to speak with a trading expert immediately, 
                call us now or message us on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+97141234567"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300 inline-flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-2"></i> Call Now
                </a>
                <a 
                  href="https://wa.me/971551234567"
                  className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300 inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}