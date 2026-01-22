"use client";

import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Code, BookOpen, Trophy, Briefcase, Star, Cpu, X, MousePointerClick } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- INTERFACES ---
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
}

// --- HELPER ICONOS ---
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

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  
  // --- LÓGICA PARA LÍNEA DINÁMICA ---
  // 1. Refs para "ganchar" los elementos clave
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCircleRef = useRef<HTMLButtonElement>(null);
  const lastCircleRef = useRef<HTMLButtonElement>(null);
  // 2. Estado para guardar la posición calculada de la línea
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0, opacity: 0 });

  // 3. Función que calcula la geometría
  const calculateLinePosition = () => {
    if (!containerRef.current || !firstCircleRef.current || !lastCircleRef.current) return;

    // Obtenemos las coordenadas de los elementos
    const containerRect = containerRef.current.getBoundingClientRect();
    const firstRect = firstCircleRef.current.getBoundingClientRect();
    const lastRect = lastCircleRef.current.getBoundingClientRect();

    // Calculamos el centro vertical de los círculos relativo al contenedor
    // Se suma scrollTop por si el contenedor tiene scroll interno
    const scrollTop = containerRef.current.scrollTop;
    const firstCenterY = firstRect.top + firstRect.height / 2 - containerRect.top + scrollTop;
    const lastCenterY = lastRect.top + lastRect.height / 2 - containerRect.top + scrollTop;

    setLineStyle({
      top: firstCenterY,
      height: lastCenterY - firstCenterY,
      opacity: 1, // La hacemos visible una vez calculada
    });
  };

  // 4. Ejecutar cálculo al cargar y al redimensionar ventana
  useEffect(() => {
    // Pequeño timeout para asegurar que el DOM esté listo
    const timer = setTimeout(calculateLinePosition, 100);
    
    window.addEventListener('resize', calculateLinePosition);
    return () => {
      window.removeEventListener('resize', calculateLinePosition);
      clearTimeout(timer);
    };
  }, [items]); // Recalcular si cambian los items

  
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full flex justify-center">
      
      {/* --- CÁPSULA --- */}
      {/* Agregamos la ref al contenedor principal */}
      <div 
        ref={containerRef}
        className="
        relative w-full max-w-2xl h-[520px] rounded-3xl 
        bg-gray/10 backdrop-blur-md
        overflow-y-auto [&::-webkit-scrollbar]:w-[9px] [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-thumb-accent scrollbar-track-[#1a1a1a]/80
        shadow-[inset_10px_10px_20px_rgba(0,0,0,0.5),inset_-10px_-10px_20px_rgba(255,255,255,0.05)]
        border border-white/40
      ">

        {/* 🔥 LÍNEA CENTRAL DINÁMICA 🔥 */}
        {/* - Quitamos top-22 y bottom-0 fijos.
            - Usamos style={{...}} para aplicar los cálculos dinámicos.
            - Agregamos transition-all para que si cambia de tamaño se vea suave.
        */}
        <div 
          style={{ top: `${lineStyle.top}px`, height: `${lineStyle.height}px`, opacity: lineStyle.opacity }}
          className="
            absolute left-4 md:left-1/2 w-3 md:-translate-x-1/2 rounded-full z-0
            bg-[#1a1a1a] border border-accent/30 shadow-[0_0_25px_rgba(249,115,22,0.4)]
            transition-all duration-300 ease-out
        "></div>

        {/* GRID INTERNO */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-6 pt-16! pb-16!">
          
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const isFirst = index === 0;
            const isLast = index === items.length - 1;
            
            // Determinamos qué ref asignar (solo al primero y al último)
            let buttonRef = null;
            if (isFirst) buttonRef = firstCircleRef;
            if (isLast) buttonRef = lastCircleRef;

            return (
              <div key={item.id} className={`contents group ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* --- LADO IZQUIERDO --- */}
                {isEven ? (
                  <>
                    <div className="flex justify-end pr-4! md:text-right relative">
                      
                      {/* TARJETA */}
                      <div className="
                        w-full max-w-[240px] p-4! rounded-2xl bg-[#252525] transition-all duration-300 
                        group-hover:scale-[1.02] group-hover:bg-[#2a2a2a]
                        shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.05)]
                        relative z-10 border border-white/10
                      ">
                         <h4 className="text-lg font-bold text-white leading-tight mb-2">{item.title}</h4>
                         <p className="text-xs text-gray-400 leading-relaxed mb-3">{item.description}</p>
                         
                         <div className="flex justify-end items-center gap-1.5 text-[10px] text-accent font-medium">
                            {item.school} <GraduationCap size={12} />
                         </div>
                      </div>

                      {/* --- REACTOR CENTRAL (DERECHA) --- */}
                      <div className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 items-center z-20">
                         
                         <div className="h-1 w-10! bg-accent/40 absolute right-4 translate-x-full group-hover:bg-accent transition-colors shadow-[0_0_10px_rgba(249,115,22,0)_group-hover:shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                         
                         {/* BOTÓN CÍRCULO CON REF DINÁMICA */}
                         <motion.button 
                            ref={buttonRef} // <-- AQUÍ ASIGNAMOS LA REF
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedItem(item)}
                            className="
                              w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shrink-0 translate-x-full
                              bg-[#252525] border-2 border-[#1a1a1a] text-accent/70 shadow-[inset_2px_2px_5px_#000,inset_-2px_-2px_5px_#333]
                              hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
                              group/icon
                            "
                         >
                            {getIcon(item.iconName, 24)}
                            {/* TOOLTIP... */}
                            <div className="absolute -top-9 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap px-3! py-1! rounded bg-black/90 text-white text-[11px] font-medium tracking-wide pointer-events-none border border-white/10 shadow-lg translate-y-2 group-hover/icon:translate-y-0">
                              See more... <MousePointerClick className="inline ml-1 w-3 h-3"/>
                            </div>
                         </motion.button>
                      </div>
                    </div>

                    {/* FECHA ESPEJO */}
                    <div className="hidden md:flex items-center pl-2!">
                        <span className="px-4! py-1.5! rounded-full font-mono font-medium text-accent bg-accent-secondary/20 border border-accent/28 shadow-[0_0_10px_rgba(249,115,22,0.3)] text-xs tracking-wider">{item.year}</span>
                    </div>
                  </>
                ) : (
                  /* --- LADO DERECHO --- */
                  <>
                    {/* FECHA ESPEJO */}
                    <div className="hidden md:flex items-center justify-end pr-2!">
                        <span className="px-4! py-1.5! rounded-full font-mono font-medium text-accent bg-accent-secondary/20 border border-accent/28 shadow-[0_0_10px_rgba(249,115,22,0.3)] text-xs tracking-wider">{item.year}</span>
                    </div>

                    <div className="flex justify-start pl-4! md:text-left relative">
                      
                      {/* --- REACTOR CENTRAL (IZQUIERDA) --- */}
                      <div className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 flex-row-reverse items-center z-20">
                         <div className="h-1 w-10! bg-accent/40 absolute left-4 -translate-x-full group-hover:bg-accent transition-colors shadow-[0_0_10px_rgba(249,115,22,0)_group-hover:shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                         
                         {/* BOTÓN CÍRCULO CON REF DINÁMICA */}
                         <motion.button
                            ref={buttonRef} // <-- AQUÍ ASIGNAMOS LA REF
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedItem(item)} 
                            className="
                              w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shrink -translate-x-full
                              bg-[#252525] border-2 border-[#1a1a1a] text-accent/70 shadow-[inset_2px_2px_5px_#000,inset_-2px_-2px_5px_#333]
                              hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
                              group/icon
                            "
                         >
                            {getIcon(item.iconName, 24)}
                            {/* TOOLTIP... */}
                            <div className="absolute -top-9 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap px-3! py-1! rounded bg-black/90 text-white text-[11px] font-medium tracking-wide pointer-events-none border border-white/10 shadow-lg translate-y-2 group-hover/icon:translate-y-0">
                              See more... <MousePointerClick className="inline ml-1 w-3 h-3"/>
                            </div>
                         </motion.button>
                      </div>

                      {/* TARJETA */}
                      <div className="
                        w-full max-w-[240px] p-4! rounded-2xl bg-[#252525] transition-all duration-300
                        group-hover:scale-[1.02] group-hover:bg-[#2a2a2a]
                        shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.05)]
                        relative z-10 border border-white/10
                      ">
                         <h4 className="text-lg font-bold text-white leading-tight mb-2">{item.title}</h4>
                         <p className="text-xs text-gray-400 leading-relaxed mb-3">{item.description}</p>
                         
                         <div className="flex items-center gap-1.5 text-[10px] text-accent font-medium">
                            {item.school} <GraduationCap size={12} />
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

      {/* --- MODAL (Sin cambios) --- */}
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