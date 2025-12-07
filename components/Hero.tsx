import React from 'react';
import { PlayCircle, ArrowRight, FileText, ShieldCheck, Sparkles, Search, MoreHorizontal, ArrowUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden flex flex-col items-center justify-start bg-[#0B0C15]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5980?q=80&w=3272&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 inset-0 bg-gradient-to-b from-transparent via-[#0B0C15]/80 to-[#0B0C15] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        {/* Logo Mark */}
        <div className="mb-8 flex justify-center">
             <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-md">
                <span className="font-serif font-bold text-2xl italic text-white">Ox</span>
             </div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-8 tracking-tight text-white">
          Streamline Internal Audits <br />
          <span className="italic font-normal">with Oxus</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl mx-auto">
            AI-native platform for internal auditors. <br/>
            <span className="text-gray-500 text-lg">Automate SOX testing, evidence collection, and reporting.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-12 font-sans">
          <div className="bg-[#FF6600]/10 border border-[#FF6600]/30 px-4 py-2 rounded text-[#FF6600] flex items-center gap-2">
            <span>Backed by</span>
            <span className="font-bold text-white">Y Combinator</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-24">
          <button className="bg-white text-black px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors">
            Book a Demo
          </button>
          <button className="flex items-center gap-2 border border-white/20 px-7 py-3.5 rounded-lg text-sm font-bold hover:bg-white/5 transition-colors text-white">
            <PlayCircle className="w-4 h-4" />
            See how it works
          </button>
        </div>

        {/* UI Mockup */}
        <div className="relative w-full max-w-[1100px] mx-auto perspective-1000">
          <div className="relative bg-[#08090F] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50 transform rotate-x-2 transition-transform hover:rotate-0 duration-700">
            
            {/* Mockup Grid */}
            <div className="grid grid-cols-12 h-[600px]">
                {/* Left Sidebar (Narrow) */}
                <div className="hidden md:flex col-span-1 border-r border-white/5 bg-[#0B0C15] flex-col items-center py-4 gap-6">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-serif italic">Ox</div>
                    <div className="space-y-6 mt-4">
                        <div className="text-white cursor-pointer relative"><ShieldCheck size={18}/> <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div></div>
                        <div className="text-gray-500 hover:text-white cursor-pointer"><FileText size={18}/></div>
                        <div className="text-gray-500 hover:text-white cursor-pointer"><Sparkles size={18}/></div>
                    </div>
                </div>

                 {/* Middle List Sidebar */}
                 <div className="hidden lg:block col-span-3 border-r border-white/5 bg-[#0B0C15] flex flex-col">
                     <div className="p-4 border-b border-white/5">
                        <div className="text-[10px] font-bold text-gray-500 tracking-wider mb-2">ACTIVE WORKPAPERS</div>
                        <div className="space-y-2">
                             <div className="h-9 bg-[#1A1D26] border-l-2 border-orange-500 rounded-r w-full flex flex-col justify-center px-3">
                                <span className="text-[11px] text-white font-medium">AP-04: Duplicate Payments</span>
                                <span className="text-[9px] text-gray-500">Procurement Cycle • FY25</span>
                             </div>
                             <div className="h-9 bg-transparent rounded w-full flex flex-col justify-center px-3 opacity-60 hover:opacity-100">
                                <span className="text-[11px] text-gray-300">ITGC-02: User Access</span>
                                <span className="text-[9px] text-gray-600">IT General Controls</span>
                             </div>
                             <div className="h-9 bg-transparent rounded w-full flex flex-col justify-center px-3 opacity-60 hover:opacity-100">
                                <span className="text-[11px] text-gray-300">REV-01: Revenue Rec</span>
                                <span className="text-[9px] text-gray-600">Order to Cash</span>
                             </div>
                        </div>
                     </div>
                     <div className="p-4 flex-1">
                        <div className="text-[10px] font-bold text-gray-500 tracking-wider mb-4">TESTING STATUS</div>
                         {[1,2,3,4,5].map(i => (
                             <div key={i} className={`p-3 mb-2 rounded border ${i === 1 ? 'bg-white/5 border-white/10' : 'border-transparent opacity-40'}`}>
                                 <div className="flex justify-between mb-2">
                                     <div className="h-2 w-24 bg-white/20 rounded"></div>
                                     <div className={`h-2 w-8 rounded ${i===1 ? 'bg-emerald-500' : 'bg-white/10'}`}></div>
                                 </div>
                                 <div className="h-1.5 w-full bg-white/5 rounded overflow-hidden">
                                     <div className="h-full bg-white/20 w-3/4"></div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>

                 {/* Main Chat Area */}
                 <div className="col-span-12 md:col-span-11 lg:col-span-5 bg-[#0B0C15] flex flex-col relative border-r border-white/5">
                     {/* Chat Header */}
                     <div className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-[#0B0C15]">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white text-black flex items-center justify-center rounded text-[10px] font-bold"><Sparkles size={10} fill="black"/></div>
                            <span className="text-sm font-medium text-white">Oxus Audit Copilot</span>
                        </div>
                        <div className="flex gap-2 text-gray-500">
                             <div className="text-[10px] border border-white/10 px-2 py-1 rounded bg-white/5 text-gray-300">Model: OX-4 (Audit)</div>
                        </div>
                     </div>

                     {/* Chat Messages */}
                     <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden relative">
                         {/* Message 1 */}
                         <div className="flex gap-3 justify-end opacity-60">
                             <div className="space-y-1 max-w-[90%]">
                                 <div className="bg-[#2A2D3A] p-3 rounded-2xl rounded-tr-none border border-white/5">
                                     <p className="text-[12px] text-gray-200">
                                         Scan the Q3 General Ledger for potential duplicate payments based on fuzzy matching vendor names and amounts.
                                     </p>
                                 </div>
                             </div>
                         </div>

                         {/* Message 2 */}
                         <div className="flex gap-3">
                             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                                 <Sparkles size={14} fill="black" className="text-black"/>
                             </div>
                             <div className="space-y-1 max-w-[95%]">
                                 <div className="bg-[#1A1D26] p-4 rounded-2xl rounded-tl-none border border-white/5 relative overflow-hidden">
                                     <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                                     <p className="text-[13px] text-gray-200 leading-relaxed">
                                         <span className="font-bold text-white block mb-2">Analysis Complete: Q3 GL Dump</span>
                                         I processed <span className="text-white">45,201 transactions</span>. I found <span className="text-orange-400 font-bold">3 high-risk exceptions</span> that match your criteria.
                                         <br/><br/>
                                         <div className="bg-black/40 rounded p-2 text-[11px] font-mono border border-white/10 mb-2">
                                             <div className="flex justify-between text-gray-400 mb-1 border-b border-white/10 pb-1">
                                                <span>Vendor</span><span>Amount</span><span>Date</span>
                                             </div>
                                             <div className="flex justify-between text-white">
                                                <span>Acme Corp</span><span>$12,450.00</span><span>Oct 12</span>
                                             </div>
                                             <div className="flex justify-between text-white">
                                                <span>Acme Inc.</span><span>$12,450.00</span><span>Oct 14</span>
                                             </div>
                                         </div>
                                         Should I draft a deficiency finding for AP-04?
                                     </p>
                                 </div>
                                 <div className="text-[10px] text-gray-600 pl-1">Oxus AI • 2s ago</div>
                             </div>
                         </div>
                         
                         {/* Ghost Image Effect */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none"></div>
                     </div>

                     {/* Chat Input */}
                     <div className="p-4 mt-auto">
                         <div className="relative">
                             <input type="text" disabled placeholder="Yes, draft the finding and request invoice copies..." className="w-full bg-[#13161F] border border-white/10 rounded-full py-3 px-5 text-sm focus:outline-none text-gray-400" />
                             <div className="absolute right-2 top-2 p-1.5 bg-white rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                                 <ArrowUp size={14} className="text-black" />
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 {/* Right Sidebar (Analytics) */}
                 <div className="hidden lg:block lg:col-span-3 bg-[#0B0C15] border-l border-white/5 p-4">
                     <div className="text-[10px] font-bold text-gray-500 tracking-wider mb-4">POPULATION COVERAGE</div>
                     <div className="space-y-4 mb-8">
                         <div>
                            <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                                <span>Accounts Payable</span>
                                <span className="text-white">100%</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-full"></div>
                            </div>
                         </div>
                         <div>
                            <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                                <span>Payroll</span>
                                <span className="text-white">100%</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-full"></div>
                            </div>
                         </div>
                     </div>
                     
                     <div className="text-[10px] font-bold text-gray-500 tracking-wider mb-4">RISK HEATMAP</div>
                     <div className="grid grid-cols-2 gap-1 mb-4">
                        <div className="aspect-square bg-emerald-900/30 border border-emerald-500/20 rounded flex items-center justify-center text-xs font-bold text-emerald-500">Low</div>
                        <div className="aspect-square bg-orange-900/30 border border-orange-500/20 rounded flex items-center justify-center text-xs font-bold text-orange-500">High</div>
                        <div className="aspect-square bg-emerald-900/30 border border-emerald-500/20 rounded flex items-center justify-center text-xs font-bold text-emerald-500">Low</div>
                        <div className="aspect-square bg-emerald-900/30 border border-emerald-500/20 rounded flex items-center justify-center text-xs font-bold text-emerald-500">Low</div>
                     </div>
                 </div>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className="absolute -left-12 top-40 animate-bounce-slow hidden xl:block">
              <div className="w-[180px] h-[180px] rounded-lg overflow-hidden border border-white/10 shadow-2xl relative bg-black">
                   <div className="p-4 h-full flex flex-col justify-center text-center">
                        <span className="text-4xl font-serif text-white mb-2">100%</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Population<br/>Tested</span>
                   </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-ping"></div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;