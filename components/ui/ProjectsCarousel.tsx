"use client";

import React, { useState } from "react";
import { motion, PanInfo } from "framer-motion";
// Importamos los logos oficiales de React Icons
import { SiHtml5, SiCss3, SiJavascript, SiFirebase } from "react-icons/si";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Code,
  Database,
  Cpu,
  Globe,
  Layers,
  Zap,
  Hand,
  Brain,
  Lock,
} from "lucide-react";

// --- DEFINICIÓN DE TIPOS ---
interface ProjectItem {
  id: number;
  title: string;
  image: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  codeUrl: string;
}

interface CarouselProps {
  items: ProjectItem[];
}

// const getTechIcon = (tech: string) => {
//   switch (tech.toLowerCase()) {
//     case "react":
//       return <Globe size={24} />;
//     case "node":
//       return <Layers size={24} />;
//     case "python":
//       return <Code size={24} />;
//     case "database":
//       return <Database size={24} />;
//     case "cpu":
//       return <Cpu size={24} />;
//     case "brain":
//       return <Brain size={24} />;
//     case "lock":
//       return <Lock size={24} />;
//     default:
//       return <Zap size={24} />;
//   }
// };

const getTechIcon = (techName: string) => {
  const iconClass = "w-5 h-5 md:w-6 md:h-6"; // Tamaño del icono

  switch (techName) {
    case "HTML":
      return <SiHtml5 className={`${iconClass} text-orange-500`} />;
    case "CSS":
      return <SiCss3 className={`${iconClass} text-blue-500`} />;
    case "JavaScript":
      return <SiJavascript className={`${iconClass} text-yellow-400`} />;
    case "Firebase":
      return <SiFirebase className={`${iconClass} text-yellow-500`} />;
    default:
      return null;
  }
};

export default function ProjectsCarousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>(
    {},
  );

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
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
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
    <div className="relative w-full max-w-6xl mx-auto! px-2! py-2!">
      <div className="relative h-[450px] md:h-[550px] flex items-center justify-center perspective-1000">
        {items.map((item, index) => {
          let position = "hidden";
          if (index === current) position = "center";
          else if (index === prev) position = "left";
          else if (index === next) position = "right";

          if (position === "hidden") return null;

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
                cursor-grab active:cursor-grabbing touch-pan-y
                ${position === "hidden" ? "pointer-events-none" : ""}
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
                  {/* CARA FRONTAL (FRONT) */}
                  {/* ================================================= */}
                  <div
                    className={`
                      absolute inset-0 w-full h-full
                      ${isFlipped ? "pointer-events-none" : "pointer-events-auto"}
                    `}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      /* FIX SAFARI: Empujamos la cara 1px hacia el frente para separarla de la de atrás */
                      transform: "translateZ(1px)",
                    }}
                    onClick={() => position === "center" && toggleFlip(item.id)}
                  >
                    <div className="relative w-full h-full group">
                      {/* Borde Neón */}
                      <div
                        className={`
                          absolute -inset-[4px] rounded-[24px] z-[-10]
                          bg-linear-to-br from-[#ff5e00] via-[#0044ff] to-[#ff5e00]
                          opacity-100 blur-[2px]
                          transition-all duration-300
                          ${position === "center" ? "group-hover:blur-[10px] group-hover:shadow-[0_0_40px_rgba(255,94,0,0.6)]" : ""}
                        `}
                      ></div>

                      {/* CAPA DEL MEDIO (SOLID BLACK) */}
                      <div className="absolute inset-0 bg-[#050505] rounded-[20px] z-[-1]"></div>

                      {/* CONTENIDO */}
                      <div className="relative w-full h-full rounded-[20px] overflow-hidden flex flex-col border border-white/5 z-10">
                        <div className="h-[55%] w-full relative flex items-center justify-center px-8! py-6! bg-[#050505]">
                          <div className="w-full h-full relative overflow-hidden rounded-[18px] border border-white/20 shadow-lg group-hover:border-accent/40 transition-colors">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-[#111] text-gray-600">
                                <Code size={48} />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-[#050505]/60 to-transparent pointer-events-none"></div>
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col items-center p-4! text-center bg-linear-to-b from-[#050505] to-[#0a0a15]">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6! tracking-tight leading-none">
                            {item.title}
                          </h3>

                          {/* --- INICIO DEL CAMBIO --- */}
                          <div className="flex flex-wrap justify-center gap-4! mb-4!">
                            {item.techStack.map((tech, i) => (
                              <div
                                key={i}
                                // AQUÍ ESTÁ LA MAGIA DEL ESTILO NEÓN:
                                className="flex items-center justify-center w-12! h-12! rounded-full border border-white/30 bg-[#0a0a15] shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-blue-500/50 hover:scale-110 transition-all duration-300"
                                title={tech}
                              >
                                {getTechIcon(tech)}
                              </div>
                            ))}
                          </div>
                          {/* --- FIN DEL CAMBIO --- */}

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
                  {/* CARA TRASERA (BACK) */}
                  {/* ================================================= */}
                  <div
                    className={`
                      absolute inset-0 w-full h-full
                      ${isFlipped ? "pointer-events-auto" : "pointer-events-none"}
                    `}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      /* FIX SAFARI: Rotamos y ADEMÁS empujamos 1px hacia afuera. Vital. */
                      transform: "rotateY(180deg) translateZ(1px)",
                    }}
                    onClick={() => position === "center" && toggleFlip(item.id)}
                  >
                    <div className="relative w-full h-full group">
                      {/* Borde Neón Trasero */}
                      <div
                        className={`
                          absolute -inset-[4px] rounded-[24px] z-[-10]
                          bg-gradient-to-br from-accent via-purple-600 to-blue-600
                          opacity-100 blur-[2px]
                          transition-all duration-300
                          ${position === "center" ? "group-hover:blur-[10px] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]" : ""}
                        `}
                      ></div>

                      {/* CAPA DEL MEDIO TRASERA */}
                      <div className="absolute inset-0 bg-[#080808] rounded-[20px] z-[-1]"></div>

                      {/* CONTENIDO TRASERO */}
                      <div className="relative w-full h-full rounded-[20px] overflow-hidden flex flex-col p-8 md:p-10 justify-center items-center text-center border border-white/5 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-10">
                        <h3 className="text-xl font-bold text-white mb-8!">
                          About the Project
                        </h3>

                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8! px-8! italic">
                          "{item.description}"
                        </p>

                        <div className="flex gap-4 w-full justify-center">
                          <a
                            href={item.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="relative z-50 flex items-center gap-2 px-8! py-3! rounded-xl 
                                bg-[#1a1a1a] border border-white/10 text-white text-sm font-bold shadow-lg
                                  transition-all duration-300
                                  hover:border-accent hover:text-accent hover:bg-white/5 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
                                  cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={18} /> Code
                          </a>
                          <a
                            href={item.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="relative z-50 flex items-center gap-2! px-8! py-3! rounded-xl 
                                bg-accent text-black bg- text-sm font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)]
                                  transition-all duration-300
                                  hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]
                                  cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={18} /> Demo
                          </a>
                        </div>

                        <div className="mt-auto w-full flex flex-col items-center">
                          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"></div>
                          <div className="flex items-center mt-10! gap-2 text-white-500 text-[14px]  tracking-widest animate-pulse font-medium">
                            <Hand size={14} /> Tap to Flip
                          </div>
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
  );
}
