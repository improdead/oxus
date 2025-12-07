import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', value: 10, value2: 5 },
  { name: 'Week 2', value: 25, value2: 10 },
  { name: 'Week 3', value: 45, value2: 25 },
  { name: 'Week 4', value: 60, value2: 40 },
  { name: 'Week 5', value: 85, value2: 65 },
  { name: 'Week 6', value: 95, value2: 80 },
];

const CapabilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Scoping' | 'Docs' | 'Testing'>('Testing');

  return (
    <section className="bg-[#F8F7F3] text-gray-900 py-32 relative overflow-hidden">
        {/* Sticky Sidebar Marker */}
        <div className="hidden xl:block absolute left-12 top-32 w-48">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-600 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-[1px]"></span>
                Key Modules
            </div>
            <ul className="space-y-4 text-[10px] font-bold tracking-[0.1em] text-gray-400 border-l border-gray-200 pl-6 py-2">
                <li className="text-black border-l-2 border-black -ml-[25px] pl-6 transition-all duration-300">01 MODULES</li>
                <li className="hover:text-gray-600 cursor-pointer transition-colors">02 PERFORMANCE</li>
                <li className="hover:text-gray-600 cursor-pointer transition-colors">03 AI ENGINE</li>
                <li className="hover:text-gray-600 cursor-pointer transition-colors">04 INTEGRATIONS</li>
            </ul>
        </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-[5rem] font-serif mb-12 leading-[0.95] tracking-tight">
            Complete coverage. <br />
            Total assurance.
          </h2>
          
          <div className="flex items-start gap-6 mb-10">
              <span className="text-[11px] font-mono mt-1 text-gray-400">01</span>
              <p className="text-lg leading-[1.6] text-[#1A1D26] max-w-md font-light">
                Oxus's industry-leading modules let you scope, document, and test your controls in one workspace. From Document Intelligence to automated SOX Testing, we drive continuous audit improvements—no manual sampling required.
              </p>
          </div>

          <div>
              <button className="border border-gray-300 px-6 py-3 rounded-lg text-sm font-bold hover:border-black transition-colors bg-transparent">
                Explore all modules
              </button>
          </div>
        </div>

        {/* Right Content - Interactive Mockup */}
        <div className="bg-white rounded-xl shadow-2xl shadow-gray-200/50 border border-gray-200 overflow-hidden p-8 relative">
           {/* Mockup Header */}
           <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                   <span className="text-sm font-bold">Audit Dashboard</span>
               </div>
               
              <div className="flex gap-1 bg-[#F4F4F5] p-1 rounded-lg">
                  {[
                      {id: 'Scoping', label: 'Scoping'}, 
                      {id: 'Docs', label: 'Doc Intelligence'}, 
                      {id: 'Testing', label: 'SOX Testing'}
                  ].map((tab) => (
                      <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-4 py-1.5 rounded-[6px] text-[10px] font-bold tracking-wide uppercase transition-all ${activeTab === tab.id ? 'bg-[#FF4500] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                      >
                          {tab.label}
                      </button>
                  ))}
              </div>
           </div>

           <div className="mb-6">
               <h3 className="text-3xl font-serif mb-3">
                   {activeTab === 'Testing' && 'SOX Testing'}
                   {activeTab === 'Scoping' && 'Scoping + Walkthroughs'}
                   {activeTab === 'Docs' && 'Document Intelligence'}
               </h3>
               <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                   {activeTab === 'Testing' && 'Automatically test 100% of populations, spot anomalies, and generate workpapers instantly.'}
                   {activeTab === 'Scoping' && 'Visualize your control environment and identify scope creep instantly.'}
                   {activeTab === 'Docs' && 'Extract key data points from PDFs, spreadsheets, and emails with AI-powered precision.'}
               </p>
               
               {/* Stats Row */}
               <div className="flex gap-4 mb-8">
                   <div className="bg-white p-4 rounded-lg border border-gray-100 flex-1 shadow-sm">
                       <p className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-wide">Controls Tested</p>
                       <div className="flex items-baseline gap-2">
                           <p className="text-3xl font-serif">142</p>
                           <span className="text-emerald-600 text-[10px] font-bold bg-emerald-50 px-1.5 py-0.5 rounded">100% Coverage</span>
                       </div>
                   </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 flex-1 shadow-sm">
                       <p className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-wide">Exceptions Detected</p>
                        <div className="flex items-baseline gap-2">
                           <p className="text-3xl font-serif">12</p>
                           <span className="text-orange-600 text-[10px] font-bold bg-orange-50 px-1.5 py-0.5 rounded">Needs Review</span>
                       </div>
                   </div>
               </div>

               {/* Chart */}
               <div className="h-64 w-full border border-gray-100 rounded-lg p-4 bg-white">
                <div className="flex justify-between mb-4">
                    <span className="text-[10px] font-bold text-gray-900">Testing Progress</span>
                    <div className="flex gap-2">
                         <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded">Automated</span>
                         <span className="text-[10px] text-gray-400 border border-gray-200 px-2 py-1 rounded">Manual</span>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="80%">
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FBBC05" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#FBBC05" stopOpacity={0}/>
                        </linearGradient>
                         <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A855F7" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#bbb'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#bbb'}} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '12px' }} />
                    <Area type="monotone" dataKey="value" stroke="#FBBC05" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    <Area type="monotone" dataKey="value2" stroke="#A855F7" strokeWidth={3} fillOpacity={1} fill="url(#colorValue2)" />
                    </AreaChart>
                </ResponsiveContainer>
               </div>
           </div>
           
           <div className="bg-[#F8F7F3] -m-8 mt-6 p-8 border-t border-gray-200">
                <p className="text-[10px] font-bold text-gray-500 mb-4 uppercase tracking-wide">CAPABILITIES</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-[11px] text-gray-600">
                    <span className="hover:text-black cursor-pointer transition-colors">Risk Control Matrix</span>
                    <span className="hover:text-black cursor-pointer transition-colors">Population Analysis</span>
                    <span className="hover:text-black cursor-pointer transition-colors">Narrative Generation</span>
                    <span className="hover:text-black cursor-pointer transition-colors">Evidence Requests</span>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;