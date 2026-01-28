"use client";

import React, { useState } from "react";
import { motion, PanInfo, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

// --- TIPOS ---
interface MomentItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

interface CarouselProps {
  items: MomentItem[];
}

export default function MomentsCarousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMoment, setSelectedMoment] = useState<MomentItem | null>(null);

  // --- NAVEGACIÓN ---
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleItems = () => {
    const total = items.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleItems();

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -50 || velocity < -400) nextSlide();
    else if (offset > 50 || velocity > 400) prevSlide();
  };

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto! px-2! py-2!">
        <div className="relative h-[450px] md:h-[550px] flex items-center justify-center perspective-1000">
          {items.map((item, index) => {
            let position = "hidden";
            if (index === current) position = "center";
            else if (index === prev) position = "left";
            else if (index === next) position = "right";

            if (position === "hidden") return null;

            return (
              <motion.div
                key={item.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
                initial={false}
                animate={{
                  scale: position === "center" ? 1 : 0.85,
                  opacity: position === "center" ? 1 : 0.4,
                  x:
                    position === "center"
                      ? "0%"
                      : position === "left"
                        ? "-55%"
                        : "55%",
                  zIndex: position === "center" ? 20 : 10,
                  rotateY:
                    position === "center" ? 0 : position === "left" ? 15 : -15,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`
                  absolute w-[85%]! md:w-[55%]! lg:w-[36%]! h-full!
                  touch-pan-y
                  ${position === "hidden" ? "pointer-events-none" : ""}
                `}
              >
                {/* --- CONTENEDOR GENERAL --- */}
                <div className="relative w-full h-full group">
                  {/* BORDE NEÓN */}
                  <div
                    className={`
                      absolute -inset-[4px] rounded-[24px] z-[-1]
                      bg-linear-gradient-to-br from-[#ff5e00] via-[#0044ff] to-[#ff5e00]
                      opacity-100 blur-[2px]
                      transition-all duration-300
                      ${position === "center" ? "group-hover:blur-[10px] group-hover:shadow-[0_0_40px_rgba(255,94,0,0.6)]" : ""}
                    `}
                  ></div>

                  {/* CONTENIDO TARJETA */}
                  <div className="relative w-full h-full bg-[#050505] rounded-[20px] overflow-hidden border border-white/5 flex flex-col">
                    {/* ZONA 1: IMAGEN (85%) */}
                    <div
                      className="
                             relative h-[85%] w-full overflow-hidden border-b border-white/10 bg-black 
                             cursor-zoom-in group/image
                           "
                      onClick={(e) => {
                        if (position === "center") {
                          e.stopPropagation();
                          setSelectedMoment(item);
                        }
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover/image:scale-110"
                      />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-black/10 pointer-events-none">
                        <div className="bg-black/60 p-3 rounded-full backdrop-blur-sm border border-white/20">
                          <ZoomIn size={28} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* ZONA 2: FRANJA TEXTO (15%) */}
                    <div
                      className="
                             h-[15%] w-full relative z-10 flex flex-col justify-center px-4! py-2!
                             bg-gradient-to-br from-[#0a0a15] via-[#111122] to-[#050505]
                             cursor-grab active:cursor-grabbing
                           "
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex flex-col justify-center h-full">
                        <h3 className="text-lg font-bold text-white leading-tight truncate">
                          {item.title}
                        </h3>
                        <p className="text-accent text-[10px] font-bold uppercase tracking-widest truncate mt-2!">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CONTROLES */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2! md:left-0! -translate-y-1/2 p-3! rounded-full bg-black/90 border border-white/30 text-white hover:bg-accent hover:border-accent transition-colors z-30 cursor-pointer shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2! md:right-0! -translate-y-1/2 p-3! rounded-full bg-black/90 border border-white/30 text-white hover:bg-accent hover:border-accent transition-colors z-30 cursor-pointer shadow-lg"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-3 mt-8!">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "bg-accent w-8 shadow-[0_0_10px_rgba(249,115,22,0.5)]" : "bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      {/* --- MODAL (LIGHTBOX) --- */}
      <AnimatePresence>
        {selectedMoment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md px-8! md:px-10 pt-32! md:pt-20!"
            onClick={() => setSelectedMoment(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh] rounded-[20px] bg-[#050505] p-2 border border-white/10 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Borde Neón Modal */}
              <div className="absolute -inset-[2px] rounded-[22px] bg-accent z-[-1] opacity-70 blur-[10px]"></div>

              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedMoment(null)}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-accent text-black p-2 rounded-full hover:bg-white transition-colors shadow-lg z-50 cursor-pointer"
              >
                <X size={24} />
              </button>

              {/* Imagen Modal - CORREGIDA */}
              <div className="w-full flex-grow relative overflow-hidden rounded-t-[16px] bg-black flex  justify-center">
                <img
                  src={selectedMoment.image}
                  alt={selectedMoment.title}
                  // CAMBIO CLAVE: w-auto, h-auto, max-w-full, max-h-full, object-contain
                  // Esto asegura que la imagen nunca se recorte y se ajuste al espacio disponible.
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                />
              </div>

              {/* Franja Texto Modal */}
              <div
                className="w-full shrink-0 p-6! md:p-8! rounded-b-[16px] border-t border-white/10
                                bg-gradient-to-br from-[#0a0a15] via-[#111122] to-[#050505] relative z-10"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {selectedMoment.title}
                </h3>
                <p className="text-accent text-sm md:text-base font-bold uppercase tracking-widest mb-2!">
                  {selectedMoment.category}
                </p>
                {selectedMoment.description && (
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium border-t border-white/5">
                    "{selectedMoment.description}"
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
