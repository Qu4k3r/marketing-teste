
import React from 'react';
import { X } from 'lucide-react';

const ErrorBox = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-[#8B575C] mb-8">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-[#8B575C] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
        {number}
      </div>
      <h3 className="text-2xl font-bold text-[#333333]">{title}</h3>
    </div>
    {children}
  </div>
);

const ThreeErrors = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">
          The 3 Biggest Mistakes Women Make When Trying to Fix Bladder Leaks
        </h2>
        <p className="text-xl text-[#333333]">
          These common "solutions" actually make the problem WORSE...
        </p>
      </div>
      
      <ErrorBox number={1} title="Doing Kegels">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-lg text-[#333333] mb-4">
              Most women are told to "just do Kegels" but here's the problem: <strong>if your pelvic floor muscles are already tight and dysfunctional, doing Kegels is like trying to strengthen a muscle that's stuck in a cramp.</strong>
            </p>
            <p className="text-lg text-[#333333]">
              Imagine trying to strengthen a rubber band that's already stretched to its limit - it will only snap faster!
            </p>
          </div>
          <img 
            src="/placeholder.svg" 
            alt="Stretched rubber band"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </ErrorBox>
      
      <ErrorBox number={2} title="Sucking In Their Bellies / Wearing Spanx">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-lg text-[#333333] mb-4">
              When you constantly suck in your belly or wear compression garments, you're actually <strong>creating more internal pressure</strong> that pushes down on your already weakened pelvic floor.
            </p>
            <p className="text-lg text-[#333333]">
              It's like putting a band-aid on a broken pipe - you're making the underlying problem worse!
            </p>
          </div>
          <img 
            src="/placeholder.svg" 
            alt="Woman in tight clothing"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </ErrorBox>
      
      <ErrorBox number={3} title="Doing Crunches & Traditional Core Exercises">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-lg text-[#333333] mb-4">
              Traditional core exercises actually <strong>increase downward pressure on your pelvic floor</strong>, making leaks worse. Avoid:
            </p>
            <ul className="space-y-2 text-lg text-[#333333]">
              <li className="flex items-center"><X className="w-5 h-5 text-red-500 mr-2" />Crunches</li>
              <li className="flex items-center"><X className="w-5 h-5 text-red-500 mr-2" />Sit-ups</li>
              <li className="flex items-center"><X className="w-5 h-5 text-red-500 mr-2" />Planks (traditional)</li>
              <li className="flex items-center"><X className="w-5 h-5 text-red-500 mr-2" />Heavy lifting</li>
              <li className="flex items-center"><X className="w-5 h-5 text-red-500 mr-2" />High-impact cardio</li>
            </ul>
          </div>
          <img 
            src="/placeholder.svg" 
            alt="Woman doing plank exercise"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </ErrorBox>
    </section>
  );
};

export default ThreeErrors;
