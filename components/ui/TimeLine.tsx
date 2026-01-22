"use client";

import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Code, BookOpen, Trophy, Briefcase, Star, Cpu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkCard from './DarkCard'; 
import ReactorTimeLine from './ReactorTimeLine'; 

interface TimelineItem {
  id: string | number;
  year: string;
  title: string;
  description: string;
  details?: string;
  school: string;
  iconName: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string; 
}

const getIcon = (iconName: string, size: number = 20) => {
    switch (iconName.toLowerCase()) {
      case 'code': return <Code size={size} />;
      case 'book': return <BookOpen size={size} />;
      case 'trophy': return <Trophy size={size} />;
      case 'work': return <Briefcase size={size} />;
      case 'star': return <Star size={size} />;
      case 'cpu': return <Cpu size={size} />;
      default: return <GraduationCap size={size} />;
    }
  };

const Timeline: React.FC<TimelineProps> = ({ items, title }) => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  
  // --- REFS ---
  const scrollContainerRef = useRef<HTMLDivElement>(null); 
  const firstCircleRef = useRef<HTMLButtonElement>(null);
  const lastCircleRef = useRef<HTMLButtonElement>(null);
  
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0, opacity: 0 });

  const calculateLinePosition = () => {
    if (!scrollContainerRef.current || !firstCircleRef.current || !lastCircleRef.current) return;
    
    const firstRect = firstCircleRef.current.getBoundingClientRect();
    if (firstRect.width === 0) return; 

    const containerRect = scrollContainerRef.current.getBoundingClientRect();
    const lastRect = lastCircleRef.current.getBoundingClientRect();
    const scrollTop = scrollContainerRef.current.scrollTop;
    
    const firstCenterY = firstRect.top + firstRect.height / 2 - containerRect.top + scrollTop;
    const lastCenterY = lastRect.top + lastRect.height / 2 - containerRect.top + scrollTop;

    setLineStyle({
      top: firstCenterY,
      height: lastCenterY - firstCenterY,
      opacity: 1,
    });
  };

  useEffect(() => {
    const timer = setTimeout(calculateLinePosition, 150);
    window.addEventListener('resize', calculateLinePosition);
    return () => {
      window.removeEventListener('resize', calculateLinePosition);
      clearTimeout(timer);
    };
  }, [items, title]);

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full flex justify-center">
      
      {/* === CÁPSULA DE VIDRIO === */}
      <div className="
        relative 
        w-[90%] md:w-full 
        max-w-2xl h-[520px] rounded-3xl 
        bg-gray/10 backdrop-blur-md
        border border-white/40
        shadow-[inset_10px_10px_20px_rgba(0,0,0,0.5),inset_-10px_-10px_20px_rgba(255,255,255,0.05)]
        flex flex-col overflow-hidden p-2! md:px-1! md:pt-6!
      ">

        {/* --- TÍTULO --- */}
        {title && (
            <div className="flex-none pt-8 pb-6! flex flex-col items-center justify-center z-30">
                <h3 className="text-2xl font-bold text-white tracking-wider drop-shadow-md">
                    {title}
                </h3>
                <div className="h-1 w-12 bg-accent rounded-full mt-2 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
            </div>
        )}

        {/* --- ZONA SCROLLABLE --- */}
        <div 
            ref={scrollContainerRef}
            className="
              relative flex-1 w-full overflow-y-auto 
              [&::-webkit-scrollbar]:w-[9px] [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-thumb-accent scrollbar-track-[#1a1a1a]/80
              p-4 md:p-8
            "
        >

            {/* ⚠️ AQUÍ QUITAMOS LA LÍNEA MÓVIL 
               Ya no hay div con "md:hidden absolute..." 
            */}

            {/* LÍNEA ESCRITORIO (Se mantiene intacta) */}
            <div 
              style={{ top: `${lineStyle.top}px`, height: `${lineStyle.height}px`, opacity: lineStyle.opacity }}
              className="
                hidden md:block absolute left-4 md:left-1/2 w-3 md:-translate-x-1/2 rounded-full z-0
                bg-[#1a1a1a] border border-accent/30 shadow-[0_0_25px_rgba(249,115,22,0.4)]
                transition-all duration-300 ease-out
            "></div>

            {/* GRID DE ITEMS */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-6 md:gap-x-14 pb-16">
              {items.map((item, index) => {
                const isEven = index % 2 === 0;
                const isFirst = index === 0;
                const isLast = index === items.length - 1;
                
                let buttonRef = null;
                if (isFirst) buttonRef = firstCircleRef;
                if (isLast) buttonRef = lastCircleRef;

                return (
                  <div key={item.id} className="contents group">
                    
                    {/* ======================================================= */}
                    {/* VISTA MÓVIL (SIN LÍNEA, SOLO CIRCULOS FLOTANTES) */}
                    {/* ======================================================= */}
                    <div className="
                        md:hidden w-full flex 
                        gap-3  /* <--- gap reducido para acercar el circulo a la caja (antes 5) */
                        pl-4   /* <--- pl-4 mantiene distancia segura del borde izquierdo */
                        relative items-center
                    ">
                        
                        {/* 1. ICONO (Izquierda) */}
                        <div className="flex flex-col items-center justify-center min-w-[48px] z-10">
                             <button 
                                onClick={() => setSelectedItem(item)}
                                className="
                                    w-12 h-12 rounded-full flex items-center justify-center
                                    bg-[#252525] border-2 border-[#1a1a1a] text-accent
                                    shadow-[0_0_15px_rgba(0,0,0,0.5)]
                                    active:scale-95 transition-transform
                                "
                             >
                                {getIcon(item.iconName, 18)}
                             </button>
                        </div>

                        {/* 2. TARJETA (Derecha) */}
                        <div className="flex-1 min-w-0" onClick={() => setSelectedItem(item)}>
                            
                            <div className="
                                w-full overflow-hidden rounded-xl border border-white/10
                                bg-[#1a1a1a] shadow-lg
                                active:border-accent/50 transition-colors
                            ">
                                {/* A. HEADER: Fecha */}
                                <div className="
                                    w-full px-4 py-1.5
                                    bg-blue-500/10 border-b border-white/5
                                    flex justify-end
                                ">
                                    <span className="text-[11px] font-mono font-bold tracking-wider text-blue-300">
                                        {item.year}
                                    </span>
                                </div>

                                {/* B. BODY: Título y Descripción */}
                                <div className="p-4!"> 
                                    <h3 className="text-base font-bold text-white mb-1 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* ======================================================= */}
                    {/* VISTA ESCRITORIO (INTACTA) */}
                    {/* ======================================================= */}
                    <div className="hidden md:contents">
                        {isEven ? (
                            <>
                              <div className="flex justify-end pr-4! md:text-right relative">
                                <DarkCard title={item.title} description={item.description} width={240} />
                                <ReactorTimeLine item={item} buttonRef={buttonRef} onOpen={setSelectedItem} side="right" />
                              </div>
                              <div className="hidden md:flex items-center pl-2!">
                                <span className="px-4! py-1.5! rounded-full font-mono font-medium text-accent bg-accent-secondary/20 border border-accent/28 shadow-[0_0_10px_rgba(249,115,22,0.3)] text-xs tracking-wider">{item.year}</span>
                              </div>
                            </>
                        ) : (
                            <>
                              <div className="hidden md:flex items-center justify-end pr-2!">
                                <span className="px-4! py-1.5! rounded-full font-mono font-medium text-accent bg-accent-secondary/20 border border-accent/28 shadow-[0_0_10px_rgba(249,115,22,0.3)] text-xs tracking-wider">{item.year}</span>
                              </div>
                              <div className="flex justify-start pl-4! md:text-left relative">
                                <ReactorTimeLine item={item} buttonRef={buttonRef} onOpen={setSelectedItem} side="left" />
                                <DarkCard title={item.title} description={item.description} width={240} />
                              </div>
                            </>
                        )}
                    </div>

                  </div>
                );
              })}
            </div>

        </div>
      </div>

      {/* MODAL (SIN CAMBIOS) */}
      <AnimatePresence>
        {selectedItem && (
             <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" />
               <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden z-50">
                 <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"><X size={20} /></button>
                 <div className="flex flex-col items-center text-center">
                   <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 shadow-[0_0_20px_rgba(249,115,22,0.2)]">{getIcon(selectedItem.iconName, 40)}</div>
                   <span className="px-4 py-1 rounded-full font-mono text-accent bg-accent/10 border border-accent/20 text-sm mb-4">{selectedItem.year}</span>
                   <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
                   <h4 className="text-gray-400 font-medium mb-6 flex items-center gap-2"><GraduationCap size={18}/> {selectedItem.school}</h4>
                   <div className="w-full h-px bg-white/10 mb-6"></div>
                   <p className="text-gray-300 leading-relaxed text-base">{selectedItem.details || selectedItem.description}</p>
                 </div>
               </motion.div>
             </div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Timeline;