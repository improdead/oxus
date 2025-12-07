import React from 'react';

const Footer: React.FC = () => {
  const columns = [
      { title: 'Platform', links: ['SOX Scoping', 'Document Intelligence', 'SOX Testing', 'Security'] },
      { title: 'Company', links: ['About Us', 'Careers', 'Blog'] },
      { title: 'Resources', links: ['Documentation', 'Case Studies', 'Help Center'] },
      { title: 'Connect', links: ['LinkedIn', 'Twitter', 'Contact Us'] },
  ];

  return (
    <footer className="bg-[#05060A] text-white pt-20 pb-12 border-t border-white/5 text-xs">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
                <div className="col-span-1">
                    <span className="text-xl font-serif font-bold text-white tracking-tight">Oxus</span>
                </div>
                {columns.map((col, idx) => (
                    <div key={idx}>
                        <h4 className="font-bold tracking-widest uppercase mb-6 text-[10px] text-gray-500">{col.title}</h4>
                        <ul className="space-y-3">
                            {col.links.map(link => (
                                <li key={link}><a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-500">
                <div className="mb-4 md:mb-0">
                    <span>© 2025 Oxus. All rights reserved.</span>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;