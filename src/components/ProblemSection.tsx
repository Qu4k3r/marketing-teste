
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center space-y-8">
        <p className="text-xl text-[#333333] leading-relaxed">
          It truly doesn't have to be this way... <strong>What most women don't realize</strong> is that bladder leakage is actually a symptom of a deeper problem that affects your entire core. Fix this one hidden issue, and not only will your bladder problems disappear, but <strong>your belly pooch will flatten and your back pain will be permanently gone.</strong>
        </p>
        
        {/* Highlight Box */}
        <div className="bg-[#8B575C] rounded-lg p-8 text-white mx-auto max-w-3xl">
          <h3 className="text-2xl font-bold mb-6">And there are two main forms of urinary incontinence...</h3>
          
          <div className="space-y-6 text-left">
            <div>
              <h4 className="text-xl font-semibold mb-2">1. Stress Incontinence</h4>
              <p className="text-lg opacity-90">
                This happens when you cough, sneeze, laugh, exercise, or lift something heavy. The pressure on your bladder causes urine to leak because your pelvic floor muscles can't provide enough support.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-2">2. Urgency Incontinence</h4>
              <p className="text-lg opacity-90">
                This is when you suddenly feel an urgent need to urinate and can't make it to the bathroom in time. Your bladder muscle contracts involuntarily, causing leakage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
