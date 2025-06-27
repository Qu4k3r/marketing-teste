
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333] leading-tight">
            Women Over 40: In an age of women's empowerment, it is time we start normalizing the conversation around bladder leakage.
          </h1>
          
          <p className="text-lg text-[#333333] leading-relaxed">
            A shocking and recent study has revealed that <strong>45% of women</strong> will experience <strong>some form of urinary incontinence at some point in their lives</strong> - and yet most suffer in silence, believing it's just a normal part of aging or having children.
          </p>
          
          <p className="text-lg text-[#333333] leading-relaxed">
            But what if I told you that bladder leakage isn't normal at all? What if there was a simple solution that could eliminate your embarrassing leaks in as little as two weeks?
          </p>
        </div>
        
        {/* Right Column - Image */}
        <div className="relative">
          <img 
            src="/placeholder.svg" 
            alt="Woman experiencing discomfort"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          {/* Red circle overlay for bladder area */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-20 h-20 bg-red-500 bg-opacity-30 rounded-full border-2 border-red-500"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="flex justify-center mt-12">
        <div className="w-12 h-12 bg-[#8B575C] rounded-full flex items-center justify-center animate-bounce cursor-pointer">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
