'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const productsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  // Add scroll detection for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle quick inquiry
  const handleQuickInquiry = () => {
    setIsMobileMenuOpen(false);
    // Open inquiry modal or redirect to contact page with inquiry form
    window.location.href = '/contact?inquiry=quick';
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-orange-100 shadow-lg' : 'bg-orange-100 shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Left side with logo and company name */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-16 w-16 relative">
                <Image
                  src="/basicandmore.png" // Update with your actual logo path
                  alt="Basic and More Inc Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ml-1 text-xl font-bold text-gray-900 whitespace-nowrap">
                Basic&More Inc
              </span>
            </Link>
          </div>

          {/* Middle with navigation items */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="/" className="text-gray-800 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200 border-b-2 border-transparent hover:border-orange-600">
              Home
            </Link>

            <Link href="/about" className="text-gray-800 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200 border-b-2 border-transparent hover:border-orange-600">
              About Us
            </Link>

            {/* Products Dropdown */}
            <div className="relative" ref={productsDropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="text-gray-800 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-200 border-b-2 border-transparent hover:border-orange-600"
              >
                Our Products
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProductsOpen && (
                <div className="absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-orange-200 ring-opacity-5">
                  <div className="py-2" role="menu" aria-orientation="vertical">
                    <Link href="/products/food-items" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                       Food Products
                    </Link>
                    <Link href="/products/beverages" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                       Beverages
                    </Link>
                    <Link href="/products/household" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                       Household Goods
                    </Link>
                    <Link href="/products/consumables" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                     Daily Consumables
                    </Link>
                    <Link href="/products/specialty" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                      Specialty Items
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-800 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-200 border-b-2 border-transparent hover:border-orange-600"
              >
                Our Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-orange-200 ring-opacity-5">
                  <div className="py-2" role="menu" aria-orientation="vertical">
                    <Link href="/services/wholesale" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                      Wholesale Distribution
                    </Link>
                    <Link href="/services/retail" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                      Retail Supply
                    </Link>
                    <Link href="/services/import-export" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                      Import/Export
                    </Link>
                    <Link href="/services/sourcing" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                      Product Sourcing
                    </Link>
                    <Link href="/services/custom-solutions" className="block px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition duration-150 border-l-4 border-transparent hover:border-orange-500" role="menuitem">
                      Custom Solutions
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* <Link href="/industries" className="text-gray-800 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200 border-b-2 border-transparent hover:border-orange-600">
              Industries
            </Link> */}

            <Link href="/contact" className="text-gray-800 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200 border-b-2 border-transparent hover:border-orange-600">
              Contact
            </Link>
          </div>

          {/* Right side with Quick Inquiry button */}
          <div className="hidden lg:flex lg:items-center">
            <button
              onClick={handleQuickInquiry}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Quick Inquiry
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-orange-100 focus:outline-none transition duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-orange-200 shadow-xl">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link href="/" className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition duration-200 border-l-4 border-orange-500">
              Home
            </Link>
            
            <Link href="/about" className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition duration-200 border-l-4 border-transparent hover:border-orange-500">
              About Us
            </Link>

            {/* Products section in mobile */}
            <div>
              <button
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition duration-200 border-l-4 border-transparent hover:border-orange-500"
              >
                <span>Our Products</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileProductsOpen && (
                <div className="pl-6 space-y-1 mt-1 bg-orange-25 rounded-md">
                  <Link href="/products/food-items" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Food Products
                  </Link>
                  <Link href="/products/beverages" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Beverages
                  </Link>
                  <Link href="/products/household" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Household Goods
                  </Link>
                  <Link href="/products/consumables" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Daily Consumables
                  </Link>
                  <Link href="/products/specialty" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Specialty Items
                  </Link>
                </div>
              )}
            </div>

            {/* Services section in mobile */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition duration-200 border-l-4 border-transparent hover:border-orange-500"
              >
                <span>🔧 Our Services</span>
                <svg
                  className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileServicesOpen && (
                <div className="pl-6 space-y-1 mt-1 bg-orange-25 rounded-md">
                  <Link href="/services/wholesale" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Wholesale Distribution
                  </Link>
                  <Link href="/services/retail" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Retail Supply
                  </Link>
                  <Link href="/services/import-export" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Import/Export
                  </Link>
                  <Link href="/services/sourcing" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Product Sourcing
                  </Link>
                  <Link href="/services/custom-solutions" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 transition duration-200">
                    Custom Solutions
                  </Link>
                </div>
              )}
            </div>

            {/* <Link href="/industries" className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition duration-200 border-l-4 border-transparent hover:border-orange-500">
              🏭 Industries
            </Link> */}

            <Link href="/contact" className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition duration-200 border-l-4 border-transparent hover:border-orange-500">
               Contact
            </Link>

            <div className="pt-3 px-3">
              <button
                onClick={handleQuickInquiry}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-full text-base font-semibold transition duration-300 shadow-lg hover:shadow-xl"
              >
               Quick Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}