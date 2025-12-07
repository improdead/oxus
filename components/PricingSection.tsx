import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="bg-[#0B0C15] text-white py-32 border-t border-white/5 relative">
        <div className="max-w-[1200px] mx-auto px-6">
            
            <div className="flex justify-center gap-12 mb-20 text-[10px] text-gray-400 font-mono tracking-widest uppercase">
                <span className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-[#FF6600] flex items-center justify-center font-bold text-xs text-black">Y</div> BACKED BY Y COMBINATOR</span>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center relative max-w-4xl mx-auto">
                 {/* Background blur/aurora */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-t from-orange-600/20 via-indigo-900/20 to-transparent pointer-events-none blur-[120px] rounded-full"></div>
                 
                 <h2 className="text-5xl md:text-[5rem] font-serif text-white/90 relative z-10 leading-[0.9] tracking-tight mb-8">
                     Ready to Transform Your <br/>
                     <span className="font-serif italic font-medium">Audit Process?</span>
                 </h2>
                 
                 <p className="text-xl text-gray-400 font-light mb-12 relative z-10">
                     Join the future of internal auditing with AI-powered efficiency.
                 </p>
                 
                 <div className="flex justify-center gap-5 relative z-10">
                    <button className="bg-white text-black px-10 py-4 rounded text-sm font-bold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">Book a Demo</button>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default PricingSection;