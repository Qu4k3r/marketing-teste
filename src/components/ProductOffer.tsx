
import React from 'react';
import { Check } from 'lucide-react';

const ProductOffer = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#333333] mb-6">
          I'm SO excited to introduce to you...
        </h2>
        <h3 className="text-3xl font-bold text-[#8B575C] mb-4">
          Pelvic Floor Strong
        </h3>
        <p className="text-xl text-[#8B575C] font-semibold">
          TOTAL CORE AND PELVIC FLOOR REPAIR METHOD
        </p>
      </div>
      
      {/* Product Image */}
      <div className="text-center mb-12">
        <img 
          src="/placeholder.svg" 
          alt="Pelvic Floor Strong Program Package"
          className="w-96 h-64 object-cover rounded-lg shadow-xl mx-auto"
        />
      </div>
      
      {/* Program Contents */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h4 className="text-2xl font-bold text-[#8B575C] mb-6">What You Get:</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]"><strong>Chapter 1:</strong> Understanding Your Pelvic Floor</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]"><strong>Chapter 2:</strong> The LAYER Syndrome Solution</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]"><strong>Chapter 3:</strong> Breathing Techniques for Core Recovery</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]"><strong>Chapter 4:</strong> Progressive Exercise Sequences</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]"><strong>Chapter 5:</strong> Advanced Strengthening Protocols</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]"><strong>Chapter 6:</strong> Lifestyle Integration & Maintenance</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h4 className="text-2xl font-bold text-[#8B575C] mb-6">Program Features:</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]">Step-by-step video demonstrations</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]">Printable exercise guides</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]">Progress tracking worksheets</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]">Quick reference cards</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]">Mobile-friendly format</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-[#333333]">Lifetime access & updates</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bonuses */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-[#333333] text-center mb-12">
          But wait, there's more! You also get these valuable bonuses:
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg relative">
            <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              $47 VALUE FREE
            </div>
            <h4 className="text-xl font-bold text-[#8B575C] mb-4">BONUS #1: Quick Start Guide</h4>
            <p className="text-[#333333]">Get results in just 5 minutes a day with this condensed action plan.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg relative">
            <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              $67 VALUE FREE
            </div>
            <h4 className="text-xl font-bold text-[#8B575C] mb-4">BONUS #2: Nutrition Guide</h4>
            <p className="text-[#333333]">Foods that support pelvic floor health and reduce inflammation.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg relative">
            <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              $97 VALUE FREE
            </div>
            <h4 className="text-xl font-bold text-[#8B575C] mb-4">BONUS #3: Exercise Modifications</h4>
            <p className="text-[#333333]">Adaptations for every fitness level and physical limitation.</p>
          </div>
        </div>
      </div>
      
      {/* Pricing */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
          <h4 className="text-2xl font-bold text-[#333333] text-center mb-6">Digital Package</h4>
          <div className="text-center mb-6">
            <span className="text-3xl text-gray-400 line-through">$127</span>
            <span className="text-5xl font-bold text-[#8B575C] ml-4">$37</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Instant digital access</li>
            <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />All video content</li>
            <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Printable guides</li>
            <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />All 3 bonuses</li>
          </ul>
          <button className="w-full bg-[#F0B94A] hover:bg-[#E0A93A] text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors">
            Pay Now - $37
          </button>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-lg border-4 border-[#8B575C] relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8B575C] text-white px-6 py-2 rounded-full font-bold">
            BEST VALUE
          </div>
          <h4 className="text-2xl font-bold text-[#333333] text-center mb-6 mt-4">Physical Package</h4>
          <div className="text-center mb-6">
            <span className="text-3xl text-gray-400 line-through">$197</span>
            <span className="text-5xl font-bold text-[#8B575C] ml-4">$49</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Everything in Digital</li>
            <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Physical DVD set</li>
            <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Printed manuals</li>
            <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Quick reference cards</li>
          </ul>
          <button className="w-full bg-[#F0B94A] hover:bg-[#E0A93A] text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors">
            Pay Now - $49
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductOffer;
