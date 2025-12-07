import React from 'react';
import { Check } from 'lucide-react';

const IntegrationSection: React.FC = () => {
  const logos = [
      'NetSuite', 'SAP', 'Workday',
      'Oracle', 'Oxus', 'ServiceNow',
      'Jira', 'Salesforce',
      'Microsoft', 'AWS', 'Google Cloud'
  ];

  return (
    <section className="bg-[#0B0C15] text-white py-32 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
                 <div className="mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-orange-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-[1px]"></span>
                    Seamless Integration
                </div>
                <h2 className="text-4xl md:text-[3.5rem] font-serif mb-8 leading-[1.1] tracking-tight">
                    Oxus works with <br/> your entire stack
                </h2>
                
                <p className="text-gray-400 text-sm mb-12 leading-[1.6] max-w-md font-light">
                    <span className="text-[11px] font-mono mr-3 text-gray-500">04</span>
                    Connect Oxus to your ERPs, ticketing systems, and cloud providers to automate evidence collection and population testing.
                </p>

                <div className="mb-10">
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">KEY FEATURES</p>
                    <ul className="space-y-4">
                        <li className="flex gap-4 text-[13px] text-gray-300 font-medium">
                            <Check size={14} className="text-[#FF4500] mt-1" strokeWidth={3} />
                            Read-only API connectors for all major ERPs.
                        </li>
                        <li className="flex gap-4 text-[13px] text-gray-300 font-medium">
                            <Check size={14} className="text-[#FF4500] mt-1" strokeWidth={3} />
                            Automated screenshot capture and evidence logging.
                        </li>
                        <li className="flex gap-4 text-[13px] text-gray-300 font-medium">
                            <Check size={14} className="text-[#FF4500] mt-1" strokeWidth={3} />
                            SOC 2 Type II compliant security.
                        </li>
                    </ul>
                </div>

                <button className="border border-white/20 px-8 py-3 rounded text-[11px] font-bold tracking-wide uppercase hover:bg-white hover:text-black transition-all">
                    View all integrations
                </button>
            </div>

            {/* Logo Grid - CSS Grid */}
            <div className="relative border border-white/10 p-12 bg-[#0E121D] flex items-center justify-center">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                <div className="grid grid-cols-3 gap-6 relative z-10 w-full">
                    {logos.map((logo, idx) => (
                        <div key={idx} className={`
                            h-24 rounded border flex items-center justify-center transition-all duration-300
                            ${logo === 'Oxus' ? 'bg-black border-[#FF4500] shadow-[0_0_30px_rgba(255,69,0,0.15)] scale-110 z-20' : 'bg-[#13161F] border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300'}
                        `}>
                            {logo === 'Oxus' ? (
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-serif italic font-bold text-[#FF4500]">Oxus</span>
                                </div>
                            ) : (
                                <span className="text-[10px] font-bold uppercase tracking-widest">{logo}</span>
                            )}
                        </div>
                    ))}
                </div>
                 
                 {/* Corner Accents */}
                 <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-white/20"></div>
                 <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-white/20"></div>
                 <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-white/20"></div>
                 <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-white/20"></div>
            </div>
        </div>
    </section>
  );
};

export default IntegrationSection;