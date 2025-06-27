
import React from 'react';

const Guarantee = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-lg p-12 shadow-xl border-4 border-[#F0B94A]">
        <div className="text-center">
          <div className="w-24 h-24 bg-[#F0B94A] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-white">60</span>
          </div>
          
          <h3 className="text-3xl font-bold text-[#333333] mb-6">
            60-Day Money Back Guarantee
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-4">
              <p className="text-lg text-[#333333]">
                I'm so confident that Pelvic Floor Strong will work for you that I'm offering a complete 60-day money-back guarantee.
              </p>
              
              <p className="text-lg text-[#333333]">
                If you don't see a significant improvement in your bladder control within 60 days, simply contact us for a full refund - <strong>no questions asked.</strong>
              </p>
              
              <p className="text-lg text-[#333333]">
                You have absolutely nothing to lose and everything to gain!
              </p>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Alex Miller - Money Back Guarantee"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-gray-600 mt-2 italic">
                "Your success is my guarantee" - Alex Miller, PT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
