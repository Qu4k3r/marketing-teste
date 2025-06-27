
import React from 'react';

const Testimonial = ({ name, image, quote }: { name: string; image: string; quote: string }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg">
    <img 
      src={image} 
      alt={name}
      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
    />
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <p className="font-semibold text-[#8B575C]">- {name}</p>
  </div>
);

const AuthorIntro = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Testimonial 
          name="Sarah M."
          image="/placeholder.svg"
          quote="I thought I'd have to live with bladder leaks forever after having three kids. Alex's method changed my life in just 2 weeks!"
        />
        <Testimonial 
          name="Jennifer K."
          image="/placeholder.svg"
          quote="No more embarrassing moments at the gym! I can finally exercise without worry thanks to this amazing program."
        />
      </div>
      
      {/* Author Introduction */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#333333]">Hi, I'm Alex Miller!</h2>
          <p className="text-lg text-[#333333] leading-relaxed">
            I'm a certified Physical Therapist with over 15 years of experience helping women reclaim their confidence and their bodies. I specialize in pelvic floor dysfunction and have helped thousands of women overcome bladder leakage naturally.
          </p>
          <p className="text-lg text-[#333333] leading-relaxed">
            My methods have been featured in major health publications, and I've trained medical professionals across the country on proper pelvic floor rehabilitation techniques.
          </p>
        </div>
        
        <div>
          <img 
            src="/placeholder.svg" 
            alt="Alex Miller - Physical Therapist"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AuthorIntro;
