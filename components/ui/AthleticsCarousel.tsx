'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion'; // <--- Importamos PanInfo
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface VideoItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

interface CarouselProps {
  items: VideoItem[];
}

export default function AthleticsCarousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navegación
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Lógica para obtener índices visibles (Circular)
  const getVisibleItems = () => {
    const total = items.length;
    // Encontrar el índice anterior y siguiente de forma circular
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleItems();

  // --- NUEVA LÓGICA DE ARRASTRE (SWIPE) ---
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // Si arrastra más de 50px o lo hace rápido, cambia de slide
    if (offset < -50 || velocity < -400) {
      nextSlide();
    } else if (offset > 50 || velocity > 400) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto! px-2! py-2!">
      
      {/* --- CONTENEDOR CARRUSEL --- */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-1000">
        
        {items.map((item, index) => {
          // Determinar posición
          let position = 'hidden';
          if (index === current) position = 'center';
          else if (index === prev) position = 'left';
          else if (index === next) position = 'right';

          // Si no es ninguno de los 3 visibles, no renderizar (o ocultar)
          if (position === 'hidden') return null;

          return (
            <motion.div
              key={item.id}
              // --- AQUÍ ESTÁN LAS PROPIEDADES DE ARRASTRE ---
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
              // ---------------------------------------------
              
              initial={false}
              animate={{
                scale: position === 'center' ? 1 : 0.85,
                opacity: position === 'center' ? 1 : 0.4,
                x: position === 'center' ? '0%' : position === 'left' ? '-55%' : '55%',
                zIndex: position === 'center' ? 20 : 10,
                rotateY: position === 'center' ? 0 : position === 'left' ? 15 : -15, // Efecto 3D sutil
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`
                absolute w-[90%]! md:w-[60%]! lg:w-[45%]! h-full!
                /* Agregamos cursor-grab y touch-pan-y para móviles */
                cursor-grab active:cursor-grabbing touch-pan-y
                ${position === 'hidden' ? 'pointer-events-none' : ''}
              `}
            >
              {/* --- LA TARJETA NEÓN (INTACTA) --- */}
              <div className="w-full h-full relative group">
                
                {/* Borde Neón */}
                <div className={`
                  absolute -inset-[3px] rounded-[22px] -z-10
                  bg-linear-to-br from-[#ff5e00] via-[#0044ff] to-[#ff5e00]
                  opacity-70 blur-[2px] 
                  transition-all duration-300 ease-out
                  ${position === 'center' ? 'group-hover:opacity-100 group-hover:blur-[8px] group-hover:shadow-[0_0_40px_rgba(255,94,0,0.5)]' : ''}
                `}></div>

                {/* Contenido Tarjeta */}
                <div className="
                  relative w-full h-full 
                  bg-[#050505] rounded-[20px] overflow-hidden
                  flex flex-col border border-white/5
                ">
                  
                  {/* VIDEO (Ocupa la mayoría del espacio) */}
                  <div className="relative w-full flex-1 bg-black flex items-center justify-center border-b border-white/10">
                      {/* Solo cargamos el iframe si es la tarjeta central para rendimiento */}
                      {position === 'center' ? (
                         // Agregamos pointer-events-auto explícitamente y una capa superior para poder arrastrar
                         // NOTA: Para arrastrar en PC, agarre la tarjeta de la BARRA DE INFO o los BORDES,
                         // ya que el iframe de YouTube se roba el evento del mouse.
                         <iframe 
                           className="w-full h-full object-cover pointer-events-auto"
                           src={item.videoUrl} 
                           title={item.title}
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                           allowFullScreen
                         ></iframe>
                      ) : (
                        // Imagen o placeholder para las tarjetas de los lados
                        <div className="flex flex-col items-center justify-center text-gray-600">
                           <Play size={40} />
                           <span className="text-xs mt-2 uppercase tracking-widest">Video Preview</span>
                        </div>
                      )}
                  </div>

                  {/* INFO BAR */}
                  <div className="
                    shrink-0 px-6! py-4!
                    bg-linear-to-r from-blue-950/90 to-[#0a0a15]
                    backdrop-blur-md
                    flex flex-col items-center text-center
                  ">
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide truncate w-full">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 font-medium truncate w-full">
                      {item.description}
                    </p>
                    <div className="h-0.5 w-8 bg-accent rounded-full mt-2 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* --- CONTROLES NAVEGACIÓN --- */}
      
      {/* Flechas */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-2! md:left-0! -translate-y-1/2 p-3! rounded-full bg-black/90 border border-white/30 text-white hover:bg-accent hover:border-accent transition-colors z-30 cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-2! md:right-0! -translate-y-1/2 p-3! rounded-full bg-black/90 border border-white/30 text-white hover:bg-accent hover:border-accent transition-colors z-30 cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>

      {/* Paginación (Puntos) */}
      <div className="flex justify-center gap-3 mt-8!">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
              ${index === currentIndex 
                ? 'bg-accent w-8 shadow-[0_0_10px_rgba(249,115,22,0.5)]' 
                : 'bg-white/20 hover:bg-white/40'}
            `}
          />
        ))}
      </div>

    </div>
  );
}