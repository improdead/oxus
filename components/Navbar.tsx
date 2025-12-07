import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0C15]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <span className="text-2xl font-serif font-bold text-white tracking-tight">Oxus</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-300 tracking-wide">
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="hover:text-white transition-colors">Key Modules</a>
          <a href="#" className="hover:text-white transition-colors">AI Engine</a>
          <a href="#" className="hover:text-white transition-colors">Customers</a>
          <a href="#" className="hover:text-white transition-colors group flex items-center gap-1">
            Resources
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity"><path d="m6 9 6 6 6-6"/></svg>
          </a>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-[13px] font-medium hover:text-white text-gray-300 transition-colors">Sign in</a>
          <button className="bg-white text-black px-4 py-2.5 rounded-lg text-[13px] font-bold hover:bg-gray-100 transition-colors">
            Book a Demo
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <Menu className="text-white w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;