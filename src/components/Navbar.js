




'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to scroll to contact section
  const scrollToContact = () => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Left side with logo and company name */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-20 w-20 relative">
                <Image
                  src="/Box&Bag.png" // Path to your logo in the public folder
                  alt="Box&Bag Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ml-3 text-lg sm:text-xl font-semibold text-gray-800 whitespace-nowrap">
                box&bag Pvt.Ltd
              </span>
            </Link>

          </div>

          {/* Middle with navigation items */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
              Home
            </Link>

            <Link href="/about" className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
              About Us
            </Link>

            {/* New Industries Page */}
            <Link href="/industries" className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
              Industries
            </Link>

            {/* Services Dropdown - Fixed z-index issue */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-200"
              >
                Services
                <svg className="ml-1 h-4 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link href="/services/import-export" className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150" role="menuitem">
                      Import/Export Solutions
                    </Link>
                    <Link href="/services/logistics" className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150" role="menuitem">
                      Logistics & Shipping
                    </Link>
                    <Link href="/services/customs" className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150" role="menuitem">
                      Customs Clearance
                    </Link>
                    <Link href="/services/sourcing" className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150" role="menuitem">
                      Product Sourcing
                    </Link>
                    <Link href="/services/consulting" className="block px-4 py-2 text-sm text-gray-950 hover:bg-blue-50 hover:text-blue-600 transition duration-150" role="menuitem">
                      Trade Consulting
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-950 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
              Contact Us
            </Link>
          </div>

          {/* Right side with CTA button */}
          <div className="hidden md:flex md:items-center">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none transition duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
              About Us
            </Link>

            {/* New Industries Page in mobile */}
            <Link href="/industries" className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
              Industries
            </Link>

            {/* Services section in mobile with toggle */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200"
              >
                <span>Services</span>
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
                <div className="pl-5 space-y-1 mt-1">
                  <Link href="/services/import-export" className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                    Import/Export Solutions
                  </Link>
                  <Link href="/services/logistics" className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                    Logistics & Shipping
                  </Link>
                  <Link href="/services/customs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                    Customs Clearance
                  </Link>
                  <Link href="/services/sourcing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                    Product Sourcing
                  </Link>
                  <Link href="/services/consulting" className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
                    Trade Consulting
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-blue-600 hover:bg-blue-50 transition duration-200">
              Contact Us
            </Link>
            <div className="pt-2">
              <button
                onClick={scrollToContact}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
