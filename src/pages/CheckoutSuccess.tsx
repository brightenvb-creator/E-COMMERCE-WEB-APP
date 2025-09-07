import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Package } from 'lucide-react';

export function CheckoutSuccess() {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been received and is being processed. 
            You will receive a confirmation email shortly with your order details and tracking information.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Package className="w-5 h-5" />
              <span className="font-medium">Order #{Date.now().toString().slice(-6)}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Estimated delivery: 3-5 business days
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/orders"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Track Your Orders
            </Link>
            <Link
              to="/products"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}