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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const productInterests = [
    'Food Products',
    'Beverages',
    'Household Goods',
    'Personal Care',
    'Daily Consumables',
    'Other'
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

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Send email (this would be handled by your backend in a real application)
      const emailBody = `
        New Contact Form Submission from Basic and More Inc Website:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Company: ${formData.company}
        Product Interest: ${formData.productInterest}
        Estimated Quantity: ${formData.quantity}
        
        Message:
        ${formData.message}
      `;

      // In a real application, you would send this to your backend API
      console.log('Email would be sent to: basicandmoreinc@gmail.com');
      console.log('Email content:', emailBody);

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
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: 'basicandmoreinc@gmail.com',
      description: 'We reply within 24 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      details: '123 Trade Center, Business District',
      description: 'Dubai, UAE',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM GST',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-100 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start a
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Business Partnership
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to source quality products? Contact us today and let's discuss how we can support 
            your business with our global sourcing expertise and reliable supply chain solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group">
                  <div className={`bg-gradient-to-r ${method.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${method.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{method.details}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Why Partner With Us?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-white mr-3"></i>
                  <span>8+ Years Trading Experience</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-white mr-3"></i>
                  <span>Verified Supplier Network</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-white mr-3"></i>
                  <span>Quality Guaranteed Products</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-white mr-3"></i>
                  <span>Competitive Pricing</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-white mr-3"></i>
                  <span>Timely Delivery</span>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
              <div className="flex items-center">
                <div className="bg-green-100 text-green-600 rounded-xl p-3 mr-4">
                  <i className="fas fa-bolt text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Quick Response</h4>
                  <p className="text-gray-600">We typically respond to inquiries within 2 hours during business days.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-check text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us Your Inquiry</h2>
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
                        placeholder="+1 (555) 123-4567"
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
                        placeholder="e.g., 1000 units, 5 tons"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
                      placeholder="Tell us about your requirements, specifications, and any other details..."
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
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Inquiry
                      </span>
                    )}
                  </button>

                  <p className="text-center text-gray-600 text-sm">
                    We'll contact you within 2 hours during business days
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Global Presence</h3>
              <p className="text-gray-600 mb-6">
                With operations spanning multiple countries, we're positioned to serve your 
                international trading needs efficiently.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-orange-500 mr-3"></i>
                  <div>
                    <div className="font-semibold text-gray-900">Head Office</div>
                    <div className="text-gray-600">Dubai, UAE</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-globe text-orange-500 mr-3"></i>
                  <div>
                    <div className="font-semibold text-gray-900">Operating In</div>
                    <div className="text-gray-600">12+ Countries Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              {/* Simplified Map Representation */}
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-globe-americas text-6xl text-orange-500 mb-4"></i>
                  <p className="text-gray-700 font-semibold">Global Trading Network</p>
                  <p className="text-gray-600 text-sm">Serving clients across multiple continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}