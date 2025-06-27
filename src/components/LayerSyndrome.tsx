
import React from 'react';

const LayerSyndrome = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">
          This is when he discovered LAYER syndrome
        </h2>
        <p className="text-xl text-[#333333]">
          The hidden condition affecting millions of women over 40...
        </p>
      </div>
      
      {/* Abdominal Canister Diagram */}
      <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-[#8B575C] text-center mb-8">
          The Abdominal Canister
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-[#333333] mb-4">
              Your core works like a canister with 4 walls:
            </p>
            <ul className="space-y-2 text-lg text-[#333333]">
              <li><strong>Top:</strong> Diaphragm</li>
              <li><strong>Front:</strong> Abdominal muscles</li>
              <li><strong>Back:</strong> Spine and back muscles</li>
              <li><strong>Bottom:</strong> Pelvic floor</li>
            </ul>
            <p className="text-lg text-[#333333] mt-4">
              When one part is weak or dysfunctional, the entire system fails.
            </p>
          </div>
          
          {/* Simplified diagram */}
          <div className="bg-[#F9F9F9] p-8 rounded-lg">
            <div className="relative w-64 h-64 mx-auto">
              {/* Canister representation */}
              <div className="absolute inset-0 border-4 border-[#8B575C] rounded-lg">
                <div className="absolute top-0 left-0 right-0 h-4 bg-[#8B575C] rounded-t-lg flex items-center justify-center text-white text-sm font-bold">
                  DIAPHRAGM
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#8B575C] rounded-b-lg flex items-center justify-center text-white text-sm font-bold">
                  PELVIC FLOOR
                </div>
                <div className="absolute left-0 top-4 bottom-4 w-4 bg-[#8B575C] flex items-center justify-center text-white text-xs font-bold transform -rotate-90">
                  ABS
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-4 bg-[#8B575C] flex items-center justify-center text-white text-xs font-bold transform rotate-90">
                  SPINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breathing Cycle */}
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-[#8B575C] text-center mb-8">
          The Breathing Connection
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <h4 className="text-xl font-bold text-blue-600 mb-4">INHALE</h4>
            <p className="text-lg text-[#333333] mb-4">Diaphragm moves DOWN</p>
            <p className="text-lg text-[#333333]">Pelvic floor gently RELEASES</p>
            <div className="mt-4 w-16 h-16 mx-auto bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">↓</span>
            </div>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <h4 className="text-xl font-bold text-green-600 mb-4">EXHALE</h4>
            <p className="text-lg text-[#333333] mb-4">Diaphragm moves UP</p>
            <p className="text-lg text-[#333333]">Pelvic floor gently LIFTS</p>
            <div className="mt-4 w-16 h-16 mx-auto bg-green-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">↑</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 p-6 bg-red-50 rounded-lg">
          <h4 className="text-xl font-bold text-red-600 mb-4">WHEN LAYER SYNDROME OCCURS:</h4>
          <p className="text-lg text-[#333333]">
            This natural coordination is disrupted, causing your pelvic floor to work against itself, leading to weakness, tension, and ultimately... bladder leaks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LayerSyndrome;
