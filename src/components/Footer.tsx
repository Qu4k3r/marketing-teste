
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pelvic Floor Strong</h3>
            <p className="text-gray-300">
              Helping women over 40 regain confidence and control through proven pelvic floor rehabilitation techniques.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Sale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
          <p className="mb-4">
            <strong>Medical Disclaimer:</strong> This program is for educational purposes only and is not intended to replace medical advice. Please consult your healthcare provider before starting any new exercise program.
          </p>
          
          <p className="text-sm">
            © 2024 Pelvic Floor Strong. All rights reserved. | 
            This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. 
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
