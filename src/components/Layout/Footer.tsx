import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl">EcoShop</span>
            </div>
            <p className="text-gray-400">
              Your trusted online marketplace for quality products at great prices.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <div className="space-y-2">
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">
                All Products
              </Link>
              <Link to="/products?category=Electronics" className="block text-gray-400 hover:text-white transition-colors">
                Electronics
              </Link>
              <Link to="/products?category=Fashion" className="block text-gray-400 hover:text-white transition-colors">
                Fashion
              </Link>
              <Link to="/products?category=Sports" className="block text-gray-400 hover:text-white transition-colors">
                Sports
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Shipping Info
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Returns
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EcoShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}