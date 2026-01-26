'use client';

import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Hand, Quote, Star, User
} from 'lucide-react';

// --- DEFINICIÓN DE TIPOS (Adaptado a Referencias) ---
interface ReferenceItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  signature: string;
}

interface CarouselProps {
  items: ReferenceItem[];
}

export default function ReferencesCarousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  // --- NAVEGACIÓN (Igual que Projects) ---
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setFlippedCards({}); 
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setFlippedCards({});
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setFlippedCards({});
  };

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // --- LÓGICA VISUAL ---
  const getVisibleItems = () => {
    const total = items.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleItems();

  // --- SWIPE ---
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -50 || velocity < -400) nextSlide();
    else if (offset > 50 || velocity > 400) prevSlide();
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto! px-2! py-2!">
      
      <div className="relative h-[450px] md:h-[550px] flex items-center justify-center perspective-1000">
        
        {items.map((item, index) => {
          let position = 'hidden';
          if (index === current) position = 'center';
          else if (index === prev) position = 'left';
          else if (index === next) position = 'right';

          if (position === 'hidden') return null;

          const isFlipped = flippedCards[item.id] || false;

          return (
            <motion.div
              key={item.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
              
              onMouseLeave={() => {
                if (isFlipped) toggleFlip(item.id);
              }}

              initial={false}
              animate={{
                scale: position === 'center' ? 1 : 0.85,
                opacity: position === 'center' ? 1 : 0.4,
                x: position === 'center' ? '0%' : position === 'left' ? '-55%' : '55%',
                zIndex: position === 'center' ? 20 : 10,
                rotateY: position === 'center' ? 0 : position === 'left' ? 15 : -15,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`
                absolute w-[85%]! md:w-[55%]! lg:w-[36%]! h-full!
                cursor-grab active:cursor-grabbing touch-pan-y
                ${position === 'hidden' ? 'pointer-events-none' : ''}
              `}
            >
              <div 
                className="relative w-full h-full transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="w-full h-full relative"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  {/* ================================================= */}
                  {/* CARA FRONTAL (AVATAR + NOMBRE) */}
                  {/* ================================================= */}
                  <div 
                    className={`
                      absolute inset-0 w-full h-full
                      ${isFlipped ? 'pointer-events-none' : 'pointer-events-auto'}
                    `}
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translateZ(1px)' // FIX SAFARI
                    }}
                    onClick={() => position === 'center' && toggleFlip(item.id)}
                  >
                     <div className="relative w-full h-full group">
                        
                        {/* BORDE NEÓN */}
                        <div className={`
                          absolute -inset-[4px] rounded-[24px] z-[-10]
                          bg-gradient-to-br from-[#ff5e00] via-[#0044ff] to-[#ff5e00]
                          opacity-100 blur-[2px]
                          transition-all duration-300
                          ${position === 'center' ? 'group-hover:blur-[10px] group-hover:shadow-[0_0_40px_rgba(255,94,0,0.6)]' : ''}
                        `}></div>

                        {/* CAPA DEL MEDIO (Negro Sólido) */}
                        <div className="absolute inset-0 bg-[#050505] rounded-[20px] z-[-1]"></div>

                        {/* CONTENIDO FRONTAL */}
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden flex flex-col border border-white/5 z-10 bg-[#050505]">
                            
                            {/* 1. SECCIÓN SUPERIOR: AVATAR CIRCULAR */}
                            <div className="h-[60%] w-full relative flex items-center justify-center p-6!">
                               {/* Círculo del Avatar */}
                               <div className="w-30 h-30 md:w-40 md:h-40 rounded-full border-2 border-white/20 p-1 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:border-accent/50 transition-colors duration-300 relative overflow-hidden">
                                  {item.avatar ? (
                                     <img src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-full" />
                                  ) : (
                                     <div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center text-gray-500">
                                       <User size={60} />
                                     </div>
                                  )}
                               </div>
                               
                               {/* Brillo de fondo tras el avatar */}
                               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/20 blur-[50px] -z-10 rounded-full"></div>
                            </div>

                            {/* 2. SECCIÓN INFERIOR: INFO */}
                            <div className="flex-1 flex flex-col items-center p-4! text-center">
                              
                              {/* Nombre */}
                              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                {item.name}
                              </h3>

                              {/* Cargo (En Naranja/Accent) */}
                              <span className="text-accent font-bold tracking-widest text-sm md:text-base uppercase mb-4">
                                {item.role}
                              </span>

                              {/* Línea y Tap to Flip */}
                              <div className="mt-auto w-full px-12 flex flex-col items-center">
                                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"></div>
                                  <div className="flex items-center mt-10! gap-2 text-white-500 text-[14px]  tracking-widest animate-pulse font-medium">
                                    <Hand size={14} /> Tap to Flip
                                  </div>
                              </div>
                            </div>
                        </div>
                     </div>
                  </div>

                  {/* ================================================= */}
                  {/* CARA TRASERA (TESTIMONIO) */}
                  {/* ================================================= */}
                  <div 
                    className={`
                      absolute inset-0 w-full h-full
                      ${isFlipped ? 'pointer-events-auto' : 'pointer-events-none'}
                    `}
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg) translateZ(1px)' // FIX SAFARI
                    }}
                    onClick={() => position === 'center' && toggleFlip(item.id)}
                  >
                     <div className="relative w-full h-full group">
                        
                        {/* BORDE NEÓN TRASERO */}
                        <div className={`
                          absolute -inset-[4px] rounded-[24px] z-[-10]
                          bg-gradient-to-br from-accent via-purple-600 to-blue-600
                          opacity-100 blur-[2px]
                          transition-all duration-300
                          ${position === 'center' ? 'group-hover:blur-[10px] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]' : ''}
                        `}></div>

                        {/* CAPA DEL MEDIO TRASERA (Negro Sólido) */}
                        <div className="absolute inset-0 bg-[#080808] rounded-[20px] z-[-1]"></div>

                        {/* CONTENIDO TRASERO */}
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden flex flex-col px-8! items-center text-center border border-white/5 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-10 bg-[#080808]">
                            
                            {/* 1. Icono Comillas (Moderno Gradiente) */}
                            <div className="top-4!">
                               <Quote 
                                  size={48} 
                                  className="text-transparent fill-current" 
                                  style={{ stroke: 'url(#gradient-quote)', fill: 'url(#gradient-quote)' }} // Truco SVG si se quiere, o simple color
                                />
                                {/* Truco simple para gradiente en icono Lucide: Usamos text-clip o clases Tailwind */}
                                <div className="absolute top-10! left-1/2 -translate-x-1/2 w-18! h-18! bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[10px] opacity-40"></div>
                                <Quote size={50} className="text-blue-500 fill-blue-500/20" />
                            </div>
                            
                            {/* 2. Cita Textual */}
                            <p className="text-white/90 text-lg md:text-xl leading-relaxed font-serif italic mt-12! mb-8!">
                              "{item.quote}"
                            </p>

                            {/* 3. Estrellas (5 Estrellas) */}
                            <div className="flex gap-1 mb-8">
                               {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                               ))}
                            </div>

                            {/* 4. Firma (Nombre Abreviado) */}
                            <div className="mt-auto! text-blue-400 font-mono text-sm tracking-widest uppercase">
                               {item.signature}
                            </div>
                            
                            {/* Botón volver (oculto visualmente pero útil para saber) */}
                            <div className="mt-4! mb-2! text-white-500 text-[13px] tracking-widest animate-pulse font-medium">
                                Tap to flip back
                            </div>
                           

                        </div>
                     </div>
                  </div>

                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-2! md:left-0! -translate-y-1/2 p-3! rounded-full bg-black/90 border border-white/30 text-white hover:bg-accent hover:border-accent transition-colors z-30 cursor-pointer shadow-lg"><ChevronLeft size={24} /></button>
      <button onClick={nextSlide} className="absolute top-1/2 right-2! md:right-0! -translate-y-1/2 p-3! rounded-full bg-black/90 border border-white/30 text-white hover:bg-accent hover:border-accent transition-colors z-30 cursor-pointer shadow-lg"><ChevronRight size={24} /></button>

      <div className="flex justify-center gap-3 mt-8!">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? 'bg-accent w-8 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}