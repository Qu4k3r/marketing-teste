
import React from 'react';

const PersonalStory = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">
          But there's a lot more to me than my successes...
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              Three years ago, my world was turned upside down when my mother was diagnosed with breast cancer. As I watched her go through treatment, I noticed she began experiencing severe bladder leakage - something that deeply affected her dignity and quality of life.
            </p>
            <p className="text-lg text-[#333333] leading-relaxed">
              The doctors told her it was "normal" and offered her adult diapers. I knew there had to be a better way.
            </p>
          </div>
          <img 
            src="/placeholder.svg" 
            alt="Family photo"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Quote Block */}
        <div className="bg-[#8B575C] rounded-lg p-8 text-white relative my-12">
          <div className="text-6xl font-bold opacity-20 absolute top-2 left-4">"</div>
          <p className="text-xl italic text-center relative z-10">
            I have Triple Negative Breast Cancer and watching my body betray me in every way possible has been devastating. But the bladder leaks make me feel like I've lost the last shred of my dignity.
          </p>
          <div className="text-6xl font-bold opacity-20 absolute bottom-2 right-4">"</div>
          <p className="text-center mt-4 font-semibold">- My Mother's Words</p>
        </div>
        
        <p className="text-lg text-[#333333] leading-relaxed">
          That moment changed everything for me. I dedicated myself to finding a real solution - not just for my mother, but for the millions of women suffering in silence.
        </p>
        
        <div className="bg-[#8B575C] py-8 -mx-6 px-6 rounded-lg">
          <p className="text-xl text-white text-center font-semibold">
            If you ever felt like you had to wear dark colored pants because you were afraid of leaks showing...
          </p>
        </div>
        
        <div className="text-center py-8">
          <h3 className="text-4xl font-bold text-[#8B575C] mb-4">
            I am finally able to jump and run again!
          </h3>
          <p className="text-xl text-[#333333]">
            And so can you... in as little as 2 weeks!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;
