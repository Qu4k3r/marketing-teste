
import React from 'react';
import { X, Check } from 'lucide-react';

const FinalChoice = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">
          You Have Two Choices Right Now...
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Option 1 - Don't Buy */}
        <div className="bg-red-50 rounded-lg p-8 border-2 border-red-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-red-600">OPTION #1</h3>
            <p className="text-lg text-red-600 font-semibold">You don't buy the program</p>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Continue living with embarrassing leaks</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Miss out on activities you love</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Spend hundreds on pads and protection</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Watch the problem get worse over time</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Feel anxious and self-conscious</span>
            </li>
          </ul>
        </div>
        
        {/* Option 2 - Buy */}
        <div className="bg-green-50 rounded-lg p-8 border-2 border-green-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-600">OPTION #2</h3>
            <p className="text-lg text-green-600 font-semibold">You DO buy the program</p>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Regain complete bladder control</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Exercise without fear or embarrassment</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Feel confident and powerful again</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Strengthen your entire core</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Enjoy life without limitations</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-xl text-[#333333] mb-8">
          The choice is yours. But remember, <strong>every day you wait is another day of unnecessary suffering.</strong>
        </p>
        
        <div className="max-w-2xl mx-auto">
          <button className="w-full bg-[#F0B94A] hover:bg-[#E0A93A] text-white font-bold py-6 px-8 rounded-lg text-2xl transition-colors mb-4">
            YES! I Want to Stop Bladder Leaks Forever - Get Instant Access
          </button>
          <p className="text-sm text-gray-600">
            Secure checkout - Your information is 100% protected
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalChoice;
