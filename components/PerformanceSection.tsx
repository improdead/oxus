import React from 'react';
import { Play } from 'lucide-react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PerformanceSection: React.FC = () => {
  const chartData = [
      { name: 'Jan', val: 20 }, { name: 'Feb', val: 35 }, { name: 'Mar', val: 45 }, 
      { name: 'Apr', val: 60 }, { name: 'May', val: 78 }, { name: 'Jun', val: 92 }
  ];

  return (
    <section className="bg-[#F8F7F3] text-gray-900 pb-32 border-t border-gray-200/50">
        <div className="max-w-[1200px] mx-auto px-6 pt-20">
            <div className="mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-orange-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-[1px]"></span>
                Unrivalled Assurance
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20">
                <h2 className="text-5xl md:text-[5rem] font-serif max-w-3xl leading-[0.95] tracking-tight text-[#1A1D26]">
                    Oxus outperforms <br/>
                    manual sampling.
                </h2>
                <h2 className="text-5xl md:text-[5rem] font-serif italic mt-4 lg:mt-0 text-[#1A1D26] pr-12">
                    Every time.
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                {/* Quote Card */}
                <div className="border border-gray-200 p-10 rounded-sm bg-[#F4F1EA] flex flex-col min-h-[400px]">
                     <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-8 border-b border-gray-200 pb-4">EXECUTIVE FEEDBACK</div>
                     
                     <div className="flex-1">
                         <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="font-serif italic text-2xl text-gray-600">S</span>
                            </div>
                         </div>
                         <p className="text-2xl md:text-3xl font-serif leading-tight mb-6 text-[#1A1D26]">
                             Oxus allows us to move from sampling 25 items to <span className="bg-[#FF4500] text-white px-1">testing 100% of the population</span>. Our external auditors rely on our work more than ever.
                         </p>
                     </div>
                     
                     <div>
                         <p className="font-bold text-xs uppercase tracking-wide">Chief Audit Executive</p>
                         <p className="text-[10px] text-gray-500 uppercase tracking-wide mt-1">Fortune 500 Manufacturing</p>
                     </div>
                </div>

                {/* Graph Card */}
                 <div className="border border-gray-200 p-10 rounded-sm bg-[#F4F1EA] flex flex-col justify-between min-h-[400px]">
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-8 border-b border-gray-200 pb-4">DEFICIENCY DETECTION RATE</div>
                    <div className="h-64 w-full relative">
                         {/* Grid Lines */}
                         <div className="absolute inset-0 flex flex-col justify-between">
                             {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-gray-200/50"></div>)}
                         </div>
                         <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <Line type="monotone" dataKey="val" stroke="#1A1D26" strokeWidth={2} dot={{r:4, fill:'#1A1D26', strokeWidth: 0}} />
                                <XAxis dataKey="name" hide />
                                <Tooltip cursor={{stroke: 'gray', strokeWidth: 1, strokeDasharray: '3 3'}} contentStyle={{border:'none', background: '#1A1D26', color: 'white', fontSize: '12px'}} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                     <p className="text-[10px] text-gray-400 mt-6 max-w-[200px] self-end text-right leading-tight">
                         Increase in identified control anomalies vs prior year manual testing.
                     </p>
                </div>
            </div>

            {/* Big Number Section */}
            <div className="border-t border-gray-300 pt-16">
                <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-4">TRANSACTIONS AUDITED</div>
                <h3 className="text-3xl font-serif mb-2 text-[#1A1D26]">Delivers complete <br/>audit coverage</h3>
                <div className="text-[13vw] font-sans font-light leading-none tracking-tighter text-[#1A1D26] tabular-nums -ml-2">
                    26,178,463
                </div>
            </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
                 {/* Left Bottom Graph */}
                 <div className="border border-gray-200 min-h-[300px] p-6 bg-[#F4F1EA] flex flex-col">
                     <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-8">AUDIT HOURS SAVED</div>
                     <div className="flex-1 flex items-end pb-4 relative">
                         <div className="w-full h-40 relative overflow-hidden">
                             {/* Smooth Bezier Curve Approximation */}
                             <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                 <defs>
                                     <linearGradient id="yellowGrad" x1="0" y1="0" x2="0" y2="1">
                                         <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.5"/>
                                         <stop offset="100%" stopColor="#FCD34D" stopOpacity="0"/>
                                     </linearGradient>
                                 </defs>
                                 <path d="M0 160 C 100 150, 200 140, 300 100 S 500 40, 600 20" fill="none" stroke="#FBBF24" strokeWidth="3" />
                                 <path d="M0 160 C 100 150, 200 140, 300 100 S 500 40, 600 20 V 160 H 0 Z" fill="url(#yellowGrad)" />
                                 {/* Dots */}
                                 <circle cx="100" cy="148" r="3" fill="white" stroke="#FBBF24" strokeWidth="2"/>
                                 <circle cx="300" cy="100" r="3" fill="white" stroke="#FBBF24" strokeWidth="2"/>
                                 <circle cx="500" cy="40" r="3" fill="white" stroke="#FBBF24" strokeWidth="2"/>
                             </svg>
                         </div>
                     </div>
                 </div>

                 {/* Right Bottom Isometric Graph */}
                 <div className="border border-gray-200 min-h-[300px] p-6 bg-[#F4F1EA] relative overflow-hidden">
                      <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 relative z-10">CONTINUOUS ASSURANCE</div>
                      
                      {/* Isometric CSS Art */}
                      <div className="absolute inset-0 flex items-center justify-center top-10">
                          <div className="relative w-64 h-64 transform rotate-x-60 rotate-z-45 perspective-1000">
                              {/* Step 1 - Ingest */}
                              <div className="absolute left-0 top-32 w-16 h-16 border border-gray-400 bg-white/50 transform translate-z-0 flex items-center justify-center text-[8px] font-bold text-gray-400">DATA</div>
                              <div className="absolute left-0 top-32 w-16 h-32 border-l border-r border-gray-400 bg-gray-100 transform origin-top rotate-x-90"></div>
                              
                              {/* Step 2 - Analyze */}
                              <div className="absolute left-16 top-16 w-16 h-16 border border-gray-400 bg-white/50 transform translate-z-10 shadow-lg flex items-center justify-center text-[8px] font-bold text-gray-400">TEST</div>
                              <div className="absolute left-16 top-16 w-16 h-32 border-l border-r border-gray-400 bg-gray-100 transform origin-top rotate-x-90"></div>
                              
                              {/* Step 3 - Report (Active) */}
                              <div className="absolute left-32 top-0 w-16 h-16 border-2 border-orange-500 bg-white transform translate-z-20 shadow-2xl flex items-center justify-center text-[8px] font-bold text-orange-600">REPORT</div>
                              <div className="absolute left-32 top-0 w-16 h-48 border-l border-r border-dashed border-orange-300 bg-orange-50/50 transform origin-top rotate-x-90"></div>
                              
                              {/* Connecting Line */}
                              <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none transform -rotate-z-45 -rotate-x-60" style={{zIndex: 50}}>
                                  <path d="M40 200 L 100 150 L 160 100" fill="none" stroke="#FF4500" strokeWidth="2" strokeDasharray="4 4"/>
                              </svg>
                          </div>
                      </div>
                 </div>
             </div>
        </div>
    </section>
  );
};

export default PerformanceSection;