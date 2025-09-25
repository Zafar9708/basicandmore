// "use client"
// import { useState } from 'react';

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       // Simulate subscription
//       setIsSubscribed(true);
//       setEmail('');
//       setTimeout(() => setIsSubscribed(false), 3000);
//     }
//   };

//   const quickLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Products', href: '/products' },
//     { name: 'Services', href: '/services' },
//     { name: 'Contact', href: '/contact' }
//   ];

//   const productCategories = [
//     'Food & Beverages',
//     'Household Goods',
//     'Personal Care',
//     'Daily Consumables',
//     'Kitchen Essentials',
//     'Beverages & Drinks'
//   ];

//   const services = [
//     'Product Sourcing',
//     'Quality Assurance',
//     'Global Logistics',
//     'Custom Solutions',
//     'Wholesale Distribution',
//     'Private Labeling'
//   ];

//   const contactInfo = [
//     {
//       icon: 'fas fa-map-marker-alt',
//       text: '1590 S Milliken Ave #G, Ontario, CA 91761 ,USA '
//     },
//     {
//       icon: 'fas fa-phone',
//       text: '+971 4 123 4567'
//     },
//     {
//       icon: 'fas fa-envelope',
//       text: 'basicandmoreinc@gmail.com'
//     },
//     {
//       icon: 'fas fa-clock',
//       text: 'Mon - Fri: 8:00 AM - 6:00 PM GST'
//     }
//   ];

//   const socialLinks = [
//     { icon: 'fab fa-linkedin', href: '#', color: 'hover:text-blue-600' },
//     { icon: 'fab fa-twitter', href: '#', color: 'hover:text-blue-400' },
//     { icon: 'fab fa-facebook', href: '#', color: 'hover:text-blue-500' },
//     { icon: 'fab fa-instagram', href: '#', color: 'hover:text-pink-500' },
//     { icon: 'fab fa-whatsapp', href: '#', color: 'hover:text-green-500' }
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden border-t border-orange-200">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundSize: '150px 150px'
//         }}></div>
//       </div>

//       {/* Top Wave */}
//       <div className="absolute top-0 left-0 right-0 transform -translate-y-1">
//         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
//           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
//                 opacity=".25" 
//                 className="fill-orange-300"></path>
//           <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
//                 opacity=".5" 
//                 className="fill-orange-300"></path>
//           <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
//                 className="fill-orange-300"></path>
//         </svg>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center mb-6">
//               <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-2 mr-3">
//                 <i className="fas fa-boxes text-white text-2xl"></i>
//               </div>
//               <span className="text-2xl font-bold text-gray-900">Basic and More Inc</span>
//             </div>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Your trusted partner for quality products and reliable trading solutions. 
//               We connect global markets with premium goods and exceptional service.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   className={`w-10 h-10 bg-white border border-orange-200 rounded-lg flex items-center justify-center text-orange-600 transition duration-300 ${social.color} hover:bg-orange-50 shadow-sm`}
//                 >
//                   <i className={social.icon}></i>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
//               <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                 Quick Links
//               </span>
//             </h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-600 hover:text-orange-600 transition duration-300 flex items-center group"
//                   >
//                     <i className="fas fa-chevron-right text-orange-500 text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Product Categories */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
//               <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                 Product Categories
//               </span>
//             </h3>
//             <ul className="space-y-3">
//               {productCategories.map((category, index) => (
//                 <li key={index}>
//                   <a
//                     href="#"
//                     className="text-gray-600 hover:text-orange-600 transition duration-300 flex items-center group"
//                   >
//                     <i className="fas fa-cube text-orange-500 text-xs mr-2 group-hover:scale-110 transition-transform duration-300"></i>
//                     {category}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter & Contact */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
//               <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
//                 Stay Updated
//               </span>
//             </h3>
            
//             {isSubscribed ? (
//               <div className="bg-green-100 border border-green-200 rounded-lg p-4 text-center">
//                 <i className="fas fa-check-circle text-green-500 text-2xl mb-2"></i>
//                 <p className="text-green-700 font-semibold">Thank you for subscribing!</p>
//                 <p className="text-green-600 text-sm">You'll receive our latest updates soon.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubscribe} className="mb-6">
//                 <p className="text-gray-600 text-sm mb-4">Get the latest product updates and offers</p>
//                 <div className="flex">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Your email address"
//                     className="flex-1 px-4 py-3 bg-white border border-orange-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="bg-gradient-to-r from-orange-500 to-amber-500 px-4 rounded-r-lg hover:from-orange-600 hover:to-amber-600 transition duration-300"
//                   >
//                     <i className="fas fa-paper-plane text-white"></i>
//                   </button>
//                 </div>
//               </form>
//             )}

//             {/* Contact Info */}
//             <div className="space-y-3">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="flex items-center text-gray-600">
//                   <i className={`${info.icon} text-orange-500 mr-3 w-4`}></i>
//                   <span className="text-sm">{info.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Trust Badges */}
//         <div className="border-t border-orange-200 py-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <div className="flex flex-col items-center">
//               <i className="fas fa-award text-2xl text-orange-500 mb-2"></i>
//               <div className="text-gray-900 font-semibold">Quality Certified</div>
//               <div className="text-gray-600 text-sm">ISO Standards</div>
//             </div>
//             <div className="flex flex-col items-center">
//               <i className="fas fa-globe text-2xl text-orange-500 mb-2"></i>
//               <div className="text-gray-900 font-semibold">Global Network</div>
//               <div className="text-gray-600 text-sm">12+ Countries</div>
//             </div>
//             <div className="flex flex-col items-center">
//               <i className="fas fa-shipping-fast text-2xl text-orange-500 mb-2"></i>
//               <div className="text-gray-900 font-semibold">Fast Delivery</div>
//               <div className="text-gray-600 text-sm">Worldwide</div>
//             </div>
//             <div className="flex flex-col items-center">
//               <i className="fas fa-handshake text-2xl text-orange-500 mb-2"></i>
//               <div className="text-gray-900 font-semibold">Trusted Partner</div>
//               <div className="text-gray-600 text-sm">200+ Clients</div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="border-t border-orange-200 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-600 text-sm mb-4 md:mb-0">
//               © 2025 Basic and More Inc. All rights reserved.
//             </div>
//             <div className="flex flex-wrap justify-center space-x-6">
//               <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition duration-300">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition duration-300">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition duration-300">
//                 Cookie Policy
//               </a>
//               <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition duration-300">
//                 Sitemap
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Floating CTA */}
//         <div className="fixed bottom-6 right-6 z-50">
//           <div className="flex flex-col space-y-3">
//             {/* WhatsApp */}
//             <a
//               href="https://wa.me/97141234567"
//               className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce"
//               style={{ animationDelay: '0.5s' }}
//             >
//               <i className="fab fa-whatsapp text-xl"></i>
//             </a>
            
//             {/* Quick Contact */}
//             <a
//               href="tel:+97141234567"
//               className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-full shadow-lg hover:from-orange-600 hover:to-amber-600 transition duration-300 animate-bounce"
//               style={{ animationDelay: '1s' }}
//             >
//               <i className="fas fa-phone text-xl"></i>
//             </a>
            
//             {/* Email */}
//             <a
//               href="mailto:basicandmoreinc@gmail.com"
//               className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-3 rounded-full shadow-lg hover:from-amber-600 hover:to-orange-600 transition duration-300 animate-bounce"
//               style={{ animationDelay: '1.5s' }}
//             >
//               <i className="fas fa-envelope text-xl"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client"
import { useState } from 'react';
import Head from "next/head";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const productCategories = [
    'Food & Beverages',
    'Household Goods',
    'Personal Care',
    'Daily Consumables',
    'Kitchen Essentials',
    'Beverages & Drinks'
  ];

  const services = [
    'Product Sourcing',
    'Quality Assurance',
    'Global Logistics',
    'Custom Solutions',
    'Wholesale Distribution',
    'Private Labeling'
  ];

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      text: '1590 S Milliken Ave #G, Ontario, CA 91761 ,USA '
    },
    {
      icon: 'fas fa-phone',
      text: '+971 4 123 4567'
    },
    {
      icon: 'fas fa-envelope',
      text: 'basicandmoreinc@gmail.com'
    },
    {
      icon: 'fas fa-clock',
      text: 'Mon - Fri: 8:00 AM - 6:00 PM GST'
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: '#', color: 'hover:text-blue-600' },
    { icon: 'fab fa-twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: 'fab fa-facebook', href: '#', color: 'hover:text-blue-500' },
    { icon: 'fab fa-instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: 'fab fa-whatsapp', href: '#', color: 'hover:text-green-500' }
  ];

  return (
    <>
      {/* Load Font Awesome */}
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <footer className="bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden border-t border-orange-200">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundSize: '150px 150px'
          }}></div>
        </div>

        {/* Top Wave */}
        <div className="absolute top-0 left-0 right-0 transform -translate-y-1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  opacity=".25" 
                  className="fill-orange-300"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                  opacity=".5" 
                  className="fill-orange-300"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                  className="fill-orange-300"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-2 mr-3">
                  <i className="fas fa-boxes text-white text-2xl"></i>
                </div>
                <span className="text-2xl font-bold text-gray-900">Basic and More Inc</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your trusted partner for quality products and reliable trading solutions. 
                We connect global markets with premium goods and exceptional service.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white border border-orange-200 rounded-lg flex items-center justify-center text-orange-600 transition duration-300 ${social.color} hover:bg-orange-50 shadow-sm`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Quick Links
                </span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-orange-600 transition duration-300 flex items-center group"
                    >
                      <i className="fas fa-chevron-right text-orange-500 text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Product Categories
                </span>
              </h3>
              <ul className="space-y-3">
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-600 transition duration-300 flex items-center group"
                    >
                      <i className="fas fa-cube text-orange-500 text-xs mr-2 group-hover:scale-110 transition-transform duration-300"></i>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Stay Updated
                </span>
              </h3>
              
              {isSubscribed ? (
                <div className="bg-green-100 border border-green-200 rounded-lg p-4 text-center">
                  <i className="fas fa-check-circle text-green-500 text-2xl mb-2"></i>
                  <p className="text-green-700 font-semibold">Thank you for subscribing!</p>
                  <p className="text-green-600 text-sm">You'll receive our latest updates soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mb-6">
                  <p className="text-gray-600 text-sm mb-4">Get the latest product updates and offers</p>
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 bg-white border border-orange-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-amber-500 px-4 rounded-r-lg hover:from-orange-600 hover:to-amber-600 transition duration-300"
                    >
                      <i className="fas fa-paper-plane text-white"></i>
                    </button>
                  </div>
                </form>
              )}

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <i className={`${info.icon} text-orange-500 mr-3 w-4`}></i>
                    <span className="text-sm">{info.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-orange-200 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <i className="fas fa-award text-2xl text-orange-500 mb-2"></i>
                <div className="text-gray-900 font-semibold">Quality Certified</div>
                <div className="text-gray-600 text-sm">ISO Standards</div>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-globe text-2xl text-orange-500 mb-2"></i>
                <div className="text-gray-900 font-semibold">Global Network</div>
                <div className="text-gray-600 text-sm">12+ Countries</div>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-shipping-fast text-2xl text-orange-500 mb-2"></i>
                <div className="text-gray-900 font-semibold">Fast Delivery</div>
                <div className="text-gray-600 text-sm">Worldwide</div>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-handshake text-2xl text-orange-500 mb-2"></i>
                <div className="text-gray-900 font-semibold">Trusted Partner</div>
                <div className="text-gray-600 text-sm">200+ Clients</div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-orange-200 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                © 2025 Basic and More Inc. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition duration-300">
                  Cookie Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600 text-sm transition duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>

          {/* Floating CTA */}
          <div className="fixed bottom-6 right-6 z-50">
            <div className="flex flex-col space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/97141234567"
                className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce"
                style={{ animationDelay: '0.5s' }}
              >
<i className="fab fa-whatsapp"></i>
              </a>
              
              {/* Quick Contact */}
              <a
                href="tel:+97141234567"
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-full shadow-lg hover:from-orange-600 hover:to-amber-600 transition duration-300 animate-bounce"
                style={{ animationDelay: '1s' }}
              >
                <i className="fas fa-phone text-xl"></i>
              </a>
              
              {/* Email */}
              <a
                href="mailto:basicandmoreinc@gmail.com"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-3 rounded-full shadow-lg hover:from-amber-600 hover:to-orange-600 transition duration-300 animate-bounce"
                style={{ animationDelay: '1.5s' }}
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
