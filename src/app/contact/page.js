'use client';
import { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('form');

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
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - GlobalTrade Nexus</title>
        <meta name="description" content="Get in touch with GlobalTrade Nexus for all your import and export needs." />
      </Head>

      {/* Animated Header Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        {/* Animated elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-full opacity-10 animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm mb-6">
            <i className="fas fa-comments mr-2"></i> LET'S CONNECT
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to expand your global reach? Our team is here to make international trade simple for you.
          </p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center -mb-px">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition duration-300 ${
                activeTab === 'form' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className="fas fa-envelope mr-2"></i> Send Message
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition duration-300 ${
                activeTab === 'info' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className="fas fa-info-circle mr-2"></i> Contact Info
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition duration-300 ${
                activeTab === 'faq' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className="fas fa-question-circle mr-2"></i> FAQ
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {activeTab === 'form' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-blue-100 transform hover:shadow-2xl transition duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle mr-2"></i>
                      <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      <span>There was an error sending your message. Please try again.</span>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="Import Inquiry">Import Inquiry</option>
                      <option value="Export Inquiry">Export Inquiry</option>
                      <option value="Customs Clearance">Customs Clearance</option>
                      <option value="Product Sourcing">Product Sourcing</option>
                      <option value="Logistics Services">Logistics Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="Please describe your requirements in detail..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold text-lg transition duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Visual Element */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white h-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px'
                  }}></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <i className="fas fa-headset text-4xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <div className="space-y-4 text-left max-w-md mx-auto">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div>
                        <div className="font-semibold">Quick Response</div>
                        <div className="text-blue-100 text-sm">Typically within 2 hours</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-globe"></i>
                      </div>
                      <div>
                        <div className="font-semibold">Global Expertise</div>
                        <div className="text-blue-100 text-sm">48+ countries experience</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div>
                        <div className="font-semibold">Secure & Confidential</div>
                        <div className="text-blue-100 text-sm">Your data is protected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Contact Cards */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center transform hover:-translate-y-1 transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Registered Office</h3>
                <p className="text-gray-600 text-sm">
                  Second Floor, Cabin no.1, D-235A, Sector-71, Phase 8B, SAS Nagar, Punjab, 160071
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center transform hover:-translate-y-1 transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4">
                  <i className="fas fa-warehouse"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Warehouse</h3>
                <p className="text-gray-600 text-sm">
                  Plot No.936, Ground Floor, Industrial Area, JLPL, Sector 82, Mohali, Punjab, 140306
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center transform hover:-translate-y-1 transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                <a href="tel:9478317004" className="text-blue-600 hover:text-blue-800 font-medium">
                  +91 9478317004
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center transform hover:-translate-y-1 transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                <a href="mailto:Boxandbagretailindia@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Boxandbagretailindia@gmail.com
                </a>
              </div>

              {/* Business Info */}
              <div className="md:col-span-2 lg:col-span-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white mt-8">
                <h3 className="text-xl font-bold mb-6 text-center">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">03AALCB0115F1ZE</div>
                    <div className="text-blue-100">GST Registration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">Private Limited</div>
                    <div className="text-blue-100">Company Type</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">Since 2022</div>
                    <div className="text-blue-100">Established</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <i className="fas fa-file-contract text-blue-600 mr-3"></i>
                    What documents are required?
                  </h3>
                  <p className="text-gray-600">We handle all necessary documentation including customs declarations, certificates of origin, commercial invoices, and shipping documents.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <i className="fas fa-clock text-blue-600 mr-3"></i>
                    How long does clearance take?
                  </h3>
                  <p className="text-gray-600">Typically 2-5 business days, depending on the product type and country of origin. We expedite the process through our established networks.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <i className="fas fa-ship text-blue-600 mr-3"></i>
                    Do you handle international shipping?
                  </h3>
                  <p className="text-gray-600">Yes, we provide end-to-end logistics solutions including air, sea, and land freight to over 48 countries worldwide.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <i className="fas fa-search text-blue-600 mr-3"></i>
                    Can you help with product sourcing?
                  </h3>
                  <p className="text-gray-600">Absolutely! Our global network helps find the best suppliers and products that meet your quality standards and budget requirements.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Global Trade Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that trust us with their import and export needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition duration-300 shadow-lg">
              <i className="fas fa-calendar-check mr-3"></i> Schedule Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
              <i className="fas fa-file-alt mr-3"></i> Request Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}