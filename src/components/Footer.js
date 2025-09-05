// import Link from 'next/link';
// import { FaWhatsapp } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center mb-6">
//               <div className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center mr-3">
//                 <span className="text-white font-bold text-lg">TN</span>
//               </div>
//               <span className="text-xl font-semibold text-blue-800">TradeNexus</span>
//             </div>
//             <p className="text-gray-600 mb-6">
//               Your trusted partner for all import and export needs. We connect markets across the globe with precision and expertise.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//               <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-1">
//             <h3 className="text-lg font-semibold text-blue-800 mb-6 relative inline-block">
//               Quick Links
//               <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blue-400"></span>
//             </h3>
//             <ul className="space-y-3">
//               <li>
//                 <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/products" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="lg:col-span-1">
//             <h3 className="text-lg font-semibold text-blue-800 mb-6 relative inline-block">
//               Our Services
//               <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blue-400"></span>
//             </h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   Import/Export Solutions
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   Logistics & Shipping
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   Customs Clearance
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   Product Sourcing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
//                   <i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i>
//                   Trade Consulting
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div className="lg:col-span-1">
//             <h3 className="text-lg font-semibold text-blue-800 mb-6 relative inline-block">
//               Contact Info
//               <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blue-400"></span>
//             </h3>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
//                   <i className="fas fa-map-marker-alt"></i>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-blue-800">Registered Office</h4>
//                   <p className="text-gray-600 text-sm">Second Floor, Cabin no.1, D-235A, Sector-71, Phase 8B, SAS Nagar, Punjab, 160071</p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
//                   <i className="fas fa-warehouse"></i>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-blue-800">Warehouse Address</h4>
//                   <p className="text-gray-600 text-sm">Plot No.936, Ground Floor, Industrial Area, JLPL, Sector 82, Mohali, Punjab, 140306</p>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
//                   <i className="fas fa-phone"></i>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-blue-800">Call Us</h4>
//                   <a href="tel:9478317004" className="text-blue-600 hover:text-blue-800">+91 9478317004</a>
//                 </div>
//               </li>
//               <li className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
//                   <i className="fas fa-envelope"></i>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-blue-800">Email Us</h4>
//                   <a href="mailto:Boxandbagretailindia@gmail.com" className="text-blue-600 hover:text-blue-800">Boxandbagretailindia@gmail.com</a>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Business Info Section */}
//         <div className="border-t border-gray-200 pt-8 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-blue-50 rounded-xl p-4 text-center">
//               <div className="text-blue-600 text-2xl mb-2">
//                 <i className="fas fa-file-contract"></i>
//               </div>
//               <h4 className="font-medium text-blue-800 mb-1">GST Registration</h4>
//               <p className="text-gray-600 text-sm">03AALCB0115F1ZE</p>
//             </div>
//             <div className="bg-blue-50 rounded-xl p-4 text-center">
//               <div className="text-blue-600 text-2xl mb-2">
//                 <i className="fas fa-building"></i>
//               </div>
//               <h4 className="font-medium text-blue-800 mb-1">Business Type</h4>
//               <p className="text-gray-600 text-sm">Private Limited Company</p>
//             </div>
//             <div className="bg-blue-50 rounded-xl p-4 text-center">
//               <div className="text-blue-600 text-2xl mb-2">
//                 <i className="fas fa-calendar-alt"></i>
//               </div>
//               <h4 className="font-medium text-blue-800 mb-1">Since</h4>
//               <p className="text-gray-600 text-sm">18th November 2022</p>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Subscription */}
//         <div className="border-t border-gray-200 pt-8 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <h3 className="text-lg font-semibold text-blue-800 mb-2">Stay Updated</h3>
//               <p className="text-gray-600">Subscribe to our newsletter for the latest in global trade</p>
//             </div>
//             <div className="flex w-full md:w-auto">
//               <input 
//                 type="email" 
//                 placeholder="Your email address" 
//                 className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500 w-full md:w-64"
//               />
//               <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-medium text-white transition duration-300">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <div className="text-gray-500 text-sm mb-4 md:mb-0">
//             <p>&copy; 2023 GlobalTrade Nexus. All rights reserved.</p>
//           </div>
//           <div className="flex space-x-6">
//             <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition duration-300">Privacy Policy</a>
//             <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition duration-300">Terms of Service</a>
//             <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition duration-300">Shipping Policy</a>
//             <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition duration-300">Returns Policy</a>
//           </div>
//         </div>
//       </div>

//       {/* Floating WhatsApp Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <a 
//           href="https://wa.me/919478317004" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
//           </svg>
//         </a>
//       </div>
//     </footer>
//   );
// }



import Link from 'next/link';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaWarehouse, FaPhone, FaEnvelope, FaFileContract, FaBuilding, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">TN</span>
              </div>
              <span className="text-xl font-semibold text-blue-800">TradeNexus</span>
            </div>
            <p className="text-gray-600 mb-6">
              Your trusted partner for all import and export needs. We connect markets across the globe with precision and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-blue-800 mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blue-400"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-blue-800 mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blue-400"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  Import/Export Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  Logistics & Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  Customs Clearance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  Product Sourcing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 flex items-center">
                  <FaChevronRight size={10} className="mr-2 text-blue-500" />
                  Trade Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-blue-800 mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blue-400"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Registered Office</h4>
                  <p className="text-gray-600 text-sm">Second Floor, Cabin no.1, D-235A, Sector-71, Phase 8B, SAS Nagar, Punjab, 160071</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <FaWarehouse size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Warehouse Address</h4>
                  <p className="text-gray-600 text-sm">Plot No.936, Ground Floor, Industrial Area, JLPL, Sector 82, Mohali, Punjab, 140306</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <FaPhone size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Call Us</h4>
                  <a href="tel:9478317004" className="text-blue-600 hover:text-blue-800">+91 9478317004</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Email Us</h4>
                  <a href="mailto:Boxandbagretailindia@gmail.com" className="text-blue-600 hover:text-blue-800">Boxandbagretailindia@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Info Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-blue-600 text-2xl mb-2">
                <FaFileContract size={24} />
              </div>
              <h4 className="font-medium text-blue-800 mb-1">GST Registration</h4>
              <p className="text-gray-600 text-sm">03AALCB0115F1ZE</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-blue-600 text-2xl mb-2">
                <FaBuilding size={24} />
              </div>
              <h4 className="font-medium text-blue-800 mb-1">Business Type</h4>
              <p className="text-gray-600 text-sm">Private Limited Company</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-blue-600 text-2xl mb-2">
                <FaCalendarAlt size={24} />
              </div>
              <h4 className="font-medium text-blue-800 mb-1">Since</h4>
              <p className="text-gray-600 text-sm">18th November 2022</p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Stay Updated</h3>
              <p className="text-gray-600">Subscribe to our newsletter for the latest in global trade</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500 w-full md:w-64"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-medium text-white transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <p>&copy; 2023 TradeNexus. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition duration-300">Shipping Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition duration-300">Returns Policy</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/919478317004" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </footer>
  );
}