"use client";

import React from 'react';
import { GraduationCap, Code, BookOpen, Trophy, Briefcase, Star, Cpu } from 'lucide-react';

// 1. Definimos qué forma tienen los datos que vamos a recibir
interface TimelineItem {
  id: string | number;
  year: string;
  title: string;
  description: string;
  school: string;
  iconName: string;
}

interface TimelineProps {
  items: TimelineItem[]; // Recibimos un array de items
}

// 2. Función auxiliar para mapear los nombres de string a Iconos de Lucide
const getIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'code': return <Code size={20} />;
    case 'book': return <BookOpen size={20} />;
    case 'trophy': return <Trophy size={20} />;
    case 'work': return <Briefcase size={20} />;
    case 'star': return <Star size={20} />;
    case 'cpu': return <Cpu size={20} />;
    default: return <GraduationCap size={20} />;
  }
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full flex justify-center px-4">
      
      {/* --- LA CÁPSULA (CONTENEDOR) --- */}
      <div className="
        relative w-full max-w-2xl h-[520px] rounded-3xl 
        bg-gray/10 backdrop-blur-md
        overflow-y-auto [&::-webkit-scrollbar]:w-[9px] [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-thumb-accent scrollbar-track-[#1a1a1a]/80
        shadow-[inset_10px_10px_20px_rgba(0,0,0,0.5),inset_-10px_-10px_20px_rgba(255,255,255,0.05)]
        border border-white/40
      ">

        {/* LÍNEA CENTRAL (El riel) */}
        <div className="absolute left-4 md:left-1/2 top-12 bottom-0 w-1 md:-translate-x-1/2 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#000] z-0"></div>

        {/* GRID INTERNO */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-6 pt-10! pb-10! ">
          
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={item.id} className={`contents group ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* --- IZQUIERDA --- */}
                {isEven ? (
                  <>
                    <div className="flex justify-end pr-4! md:text-right relative">
                      
                      {/* TARJETA */}
                      <div className="
                        w-full max-w-[220px] pr-3! rounded-xl bg-[#252525] transition-all duration-300 
                        group-hover:scale-[1.02] group-hover:bg-[#2a2a2a]
                        shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.05)]
                        relative z-10 border border-white/5
                      ">
                         {/* Header: Año */}
                         <div className="flex justify-end mb-2">
                            <span className="text-[9px] font-mono font-bold text-accent/80 bg-[#252525] px-2 py-0.5 rounded shadow-[inset_2px_2px_4px_#000,inset_-2px_-2px_4px_#333]">
                              {item.year}
                            </span>
                         </div>

                         <h4 className="text-sm font-bold text-gray-200 leading-tight mb-1">{item.title}</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed mb-3 line-clamp-3">{item.description}</p>
                         
                         <div className="flex justify-end items-center gap-1.5 text-[9px] text-gray-600 font-medium">
                            {item.school} <GraduationCap size={10} />
                         </div>
                      </div>

                      {/* --- REACTOR CENTRAL (DERECHA) --- */}
                      <div className="hidden md:flex absolute top-1/2 right-0 items-center z-20">
                         {/* Brazo conector */}
                         <div className="h-1 w-10! bg-accent/40 absolute right-4 translate-x-full group-hover:bg-accent/80 transition-colors"></div>
                         
                         {/* Icono Redondo */}
                         <div className="
                            absolute right-0 translate-x-[calc(1.75rem+50%)] -translate-y-0/100
                            w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                            bg-[#252525] border-2 border-[#1a1a1a] text-accent/70 shadow-[inset_2px_2px_5px_#000,inset_-2px_-2px_5px_#333]
                            group-hover:bg-accent group-hover:text-white group-hover:border-accent
                            group-hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
                         ">
                            {getIcon(item.iconName)}
                         </div>
                      </div>
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  /* --- DERECHA --- */
                  <>
                    <div className="hidden md:block"></div>
                    <div className="flex justify-start pl-4! md:text-left relative">
                      
                      {/* --- REACTOR CENTRAL (IZQUIERDA) --- */}
                      <div className="hidden md:flex absolute top-1/2 left-0 items-center z-20">
                         {/* Brazo conector */}
                         <div className="h-1 w-10 bg-accent/40 absolute left-4 -translate-x-full group-hover:bg-accent/80 transition-colors"></div>
                         
                         {/* Icono Redondo */}
                         <div className="
                            absolute left-0 -translate-x-[calc(1.75rem+50%)] -translate-y-0/100
                            w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                            bg-[#252525] border-2 border-[#1a1a1a] text-accent/70 shadow-[inset_2px_2px_5px_#000,inset_-2px_-2px_5px_#333]
                            group-hover:bg-accent group-hover:text-white group-hover:border-accent
                            group-hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
                         ">
                            {getIcon(item.iconName)}
                         </div>
                      </div>

                      {/* TARJETA */}
                      <div className="
                        w-full max-w-[220px] p-3! rounded-xl bg-[#252525] transition-all duration-300
                        group-hover:scale-[1.02] group-hover:bg-[#2a2a2a]
                        shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.05)]
                        relative z-10 border border-white/5
                      ">
                         {/* Header: Año */}
                         <div className="flex justify-between mb-2">
                            <span className="text-[9px] font-mono font-bold text-accent/80 bg-[#252525] px-2 py-0.5 rounded shadow-[inset_2px_2px_4px_#000,inset_-2px_-2px_4px_#333]">
                              {item.year}
                            </span>
                         </div>

                         <h4 className="text-sm font-bold text-gray-200 leading-tight mb-1">{item.title}</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed mb-3 line-clamp-3">{item.description}</p>
                         
                         <div className="flex items-center gap-1.5 text-[9px] text-gray-600 font-medium">
                            {item.school} <GraduationCap size={10} />
                         </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;