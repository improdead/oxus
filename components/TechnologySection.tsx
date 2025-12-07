import React from 'react';

const TechnologySection: React.FC = () => {
  return (
    <section className="bg-[#0B0F19] text-white py-32 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-orange-600 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-600 rounded-[1px]"></span>
            Superior Technology
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <div>
                <h2 className="text-5xl md:text-[4.5rem] font-serif mb-6 leading-[1.05] tracking-tight">
                    Powered by the <br/>
                    Oxus Audit Engine™
                </h2>
            </div>
            <div className="flex items-end">
                <p className="text-gray-400 text-sm leading-relaxed max-w-md font-light">
                   <span className="text-[10px] font-mono mr-3 text-gray-500">03</span>
                   The Oxus Audit Engine™ is a patented AI architecture specifically engineered for GRC and Audit. Every layer is optimized for precision, evidence handling, and regulatory compliance—so you can trust the results.
                </p>
            </div>
        </div>

        {/* Engine Visualization (Complex CSS Construction) */}
        <div className="relative border border-white/10 bg-[#0E121D] rounded-lg h-[800px] flex items-center justify-center mb-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
            <div className="absolute top-8 left-8 text-[10px] text-gray-500 font-mono tracking-widest uppercase">FIG 3.A - OXUS AUDIT ENGINE™</div>
            
            {/* Core Graphic - The Lens Stack */}
            <div className="relative w-[400px] h-[600px] flex flex-col items-center perspective-1000 transform scale-75 md:scale-100">
                
                {/* Top Lens Group */}
                <div className="w-[200px] h-[60px] border border-white/20 rounded-[100%] bg-transparent mb-[-30px] z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"></div>
                <div className="w-[180px] h-[100px] border-l border-r border-white/10 mx-auto bg-gradient-to-b from-white/5 to-transparent backdrop-blur-[1px] relative z-0">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[40px] border border-dashed border-white/20 rounded-[100%]"></div>
                </div>

                {/* Middle Processor */}
                <div className="w-[240px] h-[240px] relative my-[-20px] z-20">
                     {/* Outer Ring */}
                     <div className="absolute inset-0 border border-orange-500/30 rounded-full animate-spin-slow-reverse"></div>
                     <div className="absolute inset-2 border border-dashed border-white/10 rounded-full"></div>
                     
                     {/* Inner Sphere Wireframe */}
                     <div className="absolute inset-10 border border-orange-400/50 rounded-full flex items-center justify-center bg-[#0B0F19]/80 backdrop-blur-sm">
                          <div className="w-full h-full border border-white/5 rounded-full absolute animate-ping-slow"></div>
                          <div className="w-16 h-16 border border-white/80 rounded-full shadow-[0_0_30px_rgba(255,165,0,0.5)] bg-orange-900/20"></div>
                     </div>
                     
                     {/* Side Brackets */}
                     <div className="absolute -left-4 top-1/2 h-16 w-4 border-l border-t border-b border-white/30"></div>
                     <div className="absolute -right-4 top-1/2 h-16 w-4 border-r border-t border-b border-white/30"></div>
                </div>

                {/* Bottom Cone/Output */}
                <div className="w-[200px] h-[150px] relative mt-[-40px] z-10 flex flex-col items-center justify-center">
                    <div className="w-full h-full border-l border-r border-white/10 bg-gradient-to-t from-orange-900/10 to-transparent transform perspective-500 rotate-x-12"></div>
                    <div className="absolute bottom-0 w-[220px] h-[40px] border border-orange-500/50 rounded-[100%] bg-orange-900/5 shadow-[0_0_30px_rgba(255,69,0,0.2)]"></div>
                </div>

                {/* Labels with connecting lines */}
                <div className="absolute left-[-160px] top-20 w-48 text-right group">
                    <h4 className="text-[10px] font-bold text-gray-300 mb-2 tracking-widest">[3.A.1] INGEST CONTROL DATA</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-light">Oxus connects to ERPs and evidence repositories to ingest populations, policies, and screenshots for analysis.</p>
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gray-700 absolute right-[-24px] top-3"></div>
                    <div className="w-1 h-1 bg-white rounded-full absolute right-[-26px] top-2.5"></div>
                </div>

                 <div className="absolute right-[-160px] bottom-32 w-48 text-left group">
                    <h4 className="text-[10px] font-bold text-gray-300 mb-2 tracking-widest group-hover:text-orange-400 transition-colors">[3.A.4] WORKPAPER GENERATION</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-light">To calibrate performance, the Oxus Engine formats findings into audit-ready workpapers complete with screenshots and references.</p>
                     <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-orange-700 absolute left-[-24px] top-3"></div>
                     <div className="w-1 h-1 bg-orange-500 rounded-full absolute left-[-26px] top-2.5"></div>
                </div>
                
                <div className="absolute left-[-160px] bottom-40 w-48 text-right">
                     <h4 className="text-[10px] font-bold text-gray-300 mb-2 tracking-widest">[3.A.3] VERIFY EVIDENCE</h4>
                     <p className="text-[10px] text-gray-500 leading-relaxed font-light">In the final step, Oxus checks extracted values against control logic to identify exceptions or deficiencies.</p>
                     <div className="h-[1px] w-12 bg-gray-700 absolute right-[-24px] top-3"></div>
                </div>
                
                {/* Vertical labels */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-mono text-gray-600 tracking-widest flex items-center gap-2">
                    <span>VERIFY EVIDENCE</span>
                    <div className="w-8 h-[1px] bg-gray-600"></div>
                </div>
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 text-[9px] font-mono text-gray-600 tracking-widest flex items-center gap-2">
                    <div className="w-8 h-[1px] bg-gray-600"></div>
                    <span>GENERATE FINDINGS</span>
                </div>
            </div>
            
            {/* Bottom Tech Bar */}
             <div className="absolute bottom-8 left-8 right-8 h-2 bg-[#13161F] flex items-center gap-1 opacity-50">
                {[...Array(40)].map((_,i) => (
                    <div key={i} className={`h-full w-full ${i % 3 === 0 ? 'bg-orange-900' : 'bg-[#1A1D26]'}`}></div>
                ))}
            </div>

            <button className="absolute bottom-24 left-1/2 -translate-x-1/2 border border-white/20 text-white px-6 py-2.5 rounded hover:bg-white hover:text-black transition-all text-xs font-bold tracking-wide uppercase">
                How it works
            </button>
        </div>

        {/* Certifications */}
        <div className="flex flex-col items-center gap-6">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">TRUSTED AND FULLY CERTIFIED</p>
            <div className="flex gap-12 opacity-40 grayscale mix-blend-screen">
                 <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center text-[9px] font-bold tracking-tighter shadow-[0_0_15px_rgba(255,255,255,0.2)]">ISO<br/>27001</div>
                 <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center text-[9px] font-bold tracking-tighter shadow-[0_0_15px_rgba(255,255,255,0.2)]">SOC<br/>2</div>
                 <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center text-[9px] font-bold tracking-tighter shadow-[0_0_15px_rgba(255,255,255,0.2)]">GDPR</div>
                 <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center text-[9px] font-bold tracking-tighter shadow-[0_0_15px_rgba(255,255,255,0.2)]">HIPAA</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;