import { useState } from 'react';

export default function ContactUs() {
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, this would connect to your backend
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white bg-opacity-20 text-white font-medium text-sm mb-6">
            <i className="fas fa-envelope mr-2"></i> GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to streamline your import/export operations? Get in touch with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email Us</h4>
                    <a href="mailto:Boxandbagretailindia@gmail.com" className="text-blue-100 hover:text-white">
                      Boxandbagretailindia@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white mr-4">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Call Us</h4>
                    <a href="tel:9478317004" className="text-blue-100 hover:text-white">
                      +91 9478317004
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white mr-4">
                    <i className="fas fa-building"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Registered Office</h4>
                    <p className="text-blue-100 text-sm">Second Floor, Cabin no.1, D-235A, Sector-71, Phase 8B, SAS Nagar, Punjab, 160071</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white mr-4">
                    <i className="fas fa-warehouse"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Warehouse Address</h4>
                    <p className="text-blue-100 text-sm">Plot No.936, Ground Floor, Industrial Area, JLPL, Sector 82, Mohali, Punjab, 140306</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white mr-4">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">GST Information</h4>
                    <p className="text-blue-100 text-sm">
                      <span className="block">Registration Number: 03AALCB0115F1ZE</span>
                      <span className="block">Constitution: Private Limited Company</span>
                      <span className="block">Date of Liability: 18/11/2022</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                <h4 className="font-medium text-white mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm text-blue-100">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
              
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
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
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
                
                <div className="mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    placeholder="Please describe your requirements in detail..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
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
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
            <div className="text-white text-3xl mb-3">
              <i className="fas fa-headset"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
            <p className="text-blue-100">Our team is always available to address your import/export queries</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
            <div className="text-white text-3xl mb-3">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Fast Response</h4>
            <p className="text-blue-100">We guarantee a response within 24 hours for all business inquiries</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
            <div className="text-white text-3xl mb-3">
              <i className="fas fa-globe"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Global Network</h4>
            <p className="text-blue-100">Leverage our worldwide connections for your import/export needs</p>
          </div>
        </div>
      </div>
    </section>
  );
}