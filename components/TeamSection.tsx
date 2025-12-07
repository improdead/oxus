import React, { useEffect, useRef, useState } from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
    { name: 'Sarah Chen', role: 'Head of Audit Intelligence', image: 'https://picsum.photos/100?random=11' },
    { name: 'Marcus Rodriguez', role: 'Principal AI Engineer', image: 'https://picsum.photos/100?random=12' },
    { name: 'Elena Volkov', role: 'Staff Security Engineer', image: 'https://picsum.photos/100?random=13' },
    { name: 'David Okafor', role: 'VP of Engineering', image: 'https://picsum.photos/100?random=14' },
    { name: 'Jennifer Wu', role: 'Director of Product', image: 'https://picsum.photos/100?random=15' },
    { name: 'Alex Thompson', role: 'Lead Data Scientist', image: 'https://picsum.photos/100?random=16' },
    { name: 'Maria Garcia', role: 'Senior Audit Manager', image: 'https://picsum.photos/100?random=17' },
    { name: 'James Wilson', role: 'Principal Systems Architect', image: 'https://picsum.photos/100?random=18' },
    { name: 'Priya Patel', role: 'AI Research Scientist', image: 'https://picsum.photos/100?random=19' },
    { name: 'Robert Chang', role: 'Head of Customer Success', image: 'https://picsum.photos/100?random=20' },
];

const TeamSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0B0C15] text-white py-24 border-t border-white/5 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="mb-4 text-[10px] font-bold tracking-widest uppercase text-orange-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-sm"></span>
                    AI Team
                </div>

                <div className="flex flex-col lg:flex-row justify-between mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif max-w-lg leading-tight">
                        Built by a world-class team of Auditors & AI experts
                    </h2>
                    <p className="text-gray-400 text-sm max-w-md mt-6 lg:mt-0 leading-relaxed">
                        <span className="text-xs font-mono mr-2">04</span>
                        The Oxus Group, an expert team of CPAs, machine learning scientists, and engineers, continuously optimize the platform to meet the rigorous standards of modern internal auditing.
                    </p>
                </div>

                <div className="border-t border-white/10 pt-4 mb-8 flex justify-between items-center">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Leadership</span>
                    <a href="#" className="text-[10px] text-gray-300 hover:text-white uppercase tracking-widest underline">Meet the full team +</a>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8">
                {team.map((member, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center text-center group transition-all duration-700 ease-out"
                        style={{ 
                            transitionDelay: `${index * 100 + 200}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                        }}
                    >
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-orange-500 transition-all duration-500 grayscale group-hover:grayscale-0 relative transform group-hover:scale-105">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-sm mb-1">{member.name}</h4>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wide leading-tight max-w-[120px] transition-colors duration-300 group-hover:text-gray-300">{member.role}</p>
                    </div>
                ))}
            </div>
         </div>
    </section>
  );
};

export default TeamSection;