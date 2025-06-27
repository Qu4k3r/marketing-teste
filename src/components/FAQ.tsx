
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 px-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-[#333333] pr-4">{question}</span>
        <ChevronDown 
          className={`w-6 h-6 text-[#8B575C] transition-transform flex-shrink-0 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="px-4 pb-6 animate-fade-in">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Most women notice a significant improvement in bladder control within 2-3 weeks of starting the program. However, some see results even faster - as early as the first week!"
    },
    {
      question: "Is this suitable for my age/fitness level?",
      answer: "Absolutely! This program is designed for women of all ages and fitness levels. The exercises are low-impact and can be modified to accommodate any physical limitations or restrictions."
    },
    {
      question: "What if I've tried Kegels and they didn't work?",
      answer: "That's exactly why this program exists! Traditional Kegels often fail because they don't address the root cause - LAYER syndrome. Our method works with your entire core system, not just isolated muscles."
    },
    {
      question: "Do I need special equipment?",
      answer: "No! All exercises can be done at home with no equipment required. The program is designed to fit into your daily routine without any additional purchases."
    },
    {
      question: "What if I have severe prolapse or other conditions?",
      answer: "While this program has helped many women with various pelvic floor conditions, we always recommend consulting with your healthcare provider before starting any new exercise program, especially if you have diagnosed medical conditions."
    },
    {
      question: "Is this really a one-time payment?",
      answer: "Yes! This is a one-time payment with lifetime access. There are no monthly fees, subscriptions, or hidden costs. You get everything upfront."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "You're protected by our 60-day money-back guarantee. If you don't see improvement in your bladder control, simply contact us for a full refund - no questions asked."
    },
    {
      question: "Can I access this on my phone/tablet?",
      answer: "Absolutely! The digital version is mobile-friendly and can be accessed on any device with an internet connection. Perfect for following along during workouts."
    }
  ];
  
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#333333] mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600">
          Get answers to the most common questions about Pelvic Floor Strong
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
