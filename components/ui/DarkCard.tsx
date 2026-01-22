import React from 'react';

interface DarkCardProps {
    title: string;
    description: string;
    width?: number;
  
}

export default function DarkCard({ title, description, width = 240 }: DarkCardProps) {
  return (
    <div 
        style={{ maxWidth: `${width}px` }}
        className="
            w-full p-4! rounded-2xl bg-[#252525] transition-all duration-300 
            group-hover:scale-[1.02] group-hover:bg-[#2a2a2a]
            shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.05)]
            relative z-10 border border-white/10
            ">
            <h4 className="text-lg font-bold text-white leading-tight mb-2">{title}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
            
            {/* <div className="flex justify-start items-center gap-1.5 text-[10px] text-accent font-medium">
            {item.school} <GraduationCap size={12} />
            </div> */}
    </div>
  );
}