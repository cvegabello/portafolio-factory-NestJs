"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import Timeline from "@/components/ui/TimeLine";
import Accordion from "@/components/ui/Accordion";
import ScrollAnimation from "@/components/ui/ScrollAnimation"; // 👈 1. Importamos la magia
import { academicsData } from "@/data/academics";
import {
  BookOpen,
  PenTool,
  GraduationCap,
  Laptop,
  TrendingUp,
  Scroll,
  Code,
  FileText,
  Trophy,
  Video,
  LucideIcon,
  Languages,
  X,
} from "lucide-react";

// Función auxiliar para iconos de las estadísticas
const getIcon = (iconName: string) => {
  const icons: { [key: string]: LucideIcon } = {
    BookOpen,
    PenTool,
    GraduationCap,
    Laptop,
    TrendingUp,
    Scroll,
    Code,
    FileText,
    Trophy,
    Video,
    Languages,
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent size={24} /> : <BookOpen size={24} />;
};

export default function Academics() {
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  return (
    <section
      id="academics"
      className="relative min-h-screen pt-20! overflow-hidden flex flex-col items-center"
    >
      <SectionBackground img={academicsData.backgroundImage} />

      <div className="w-full max-w-8xl mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Título entrando suave hacia arriba */}
        <ScrollAnimation direction="up">
          <SectionTitle title={academicsData.sectionTitle} />
        </ScrollAnimation>

        {/* --- 1. GRID DE TARJETAS (STATS) --- */}
        {/* Cambié el <div> por <ScrollAnimation> conservando TODAS sus clases exactas */}
        {/* direction="up" -> Salen de abajo hacia arriba */}
        <ScrollAnimation
          direction="up"
          delay={0.2}
          className="
            grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 
            gap-x-4 gap-y-6 xl:gap-x-8! 
            mb-14! 
            w-full xl:w-fit! px-6! justify-center
          "
        >
          {academicsData.stats.map((stat) => {
            const isCredits = stat.id === 6;
            return (
              <div 
                key={stat.id} 
                className="group relative w-full"
                onClick={() => { if (isCredits) setShowCreditsModal(true); }}
              >
                {/* w-full para llenar la celda en móvil */}
                {/* Fondo Blur: w-full en móvil para que se adapte, xl:w-58! fijo en PC */}
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-accent rounded-2xl w-full h-full xl:w-58! xl:h-22! opacity-50 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>
                {/* Tarjeta: w-full en móvil para que se adapte, xl:w-56! fijo en PC */}
                <div className={`relative h-full bg-linear-to-b from-blue-950/85 to-orange-900/85 border border-white/10 rounded-xl w-full xl:w-56! xl:h-19! pt-4! pb-4! flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-1 ${isCredits ? "cursor-pointer hover:border-accent/40" : ""}`}>
                  <div
                    className={`mb-4 p-3 rounded-full bg-white/5 ${stat.color === "blue" ? "text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "text-accent shadow-[0_0_15px_rgba(249,115,22,0.3)]"} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {getIcon(stat.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                  {isCredits && (
                    <span className="text-[10px] text-blue-400 mt-3 font-mono font-bold uppercase tracking-widest animate-pulse">
                      Click to View
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </ScrollAnimation>

        {/* --- 2. ZONA MAESTRA: TIMELINE + ACORDEÓN --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start w-full max-w-7xl mx-auto pb-32">
          {/* === COLUMNA IZQUIERDA: TIMELINE === */}
          {/* direction="right" -> Viene de la Izquierda hacia la derecha */}
          <ScrollAnimation
            direction="right"
            delay={0.4}
            className="w-full flex justify-center lg:justify-end"
          >
            <Timeline items={academicsData.timeline} title="My Journey" />
          </ScrollAnimation>

          {/* === COLUMNA DERECHA: ACORDEÓN (DIGITAL LOCKER) === */}
          {/* direction="left" -> Viene de la Derecha hacia la izquierda */}
          <ScrollAnimation
            direction="left"
            delay={0.4}
            className="w-full flex justify-center lg:justify-start"
          >
            {/* Aquí llamamos al componente limpio, sin títulos extra */}
            <Accordion items={academicsData.lockerItems} title="The Evidence" />
          </ScrollAnimation>
        </div>
      </div>

      {/* MODAL DE DESGLOSE DE CRÉDITOS */}
      <AnimatePresence>
        {showCreditsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowCreditsModal(false)}
          >
            <div className="flex min-h-full items-center justify-center p-4 py-10">
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative w-full max-w-4xl bg-[#050505] rounded-3xl overflow-hidden p-6! sm:p-8! md:p-12! border border-accent/40 shadow-[0_0_50px_rgba(249,115,22,0.35)]"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Botón Cerrar */}
              <button
                onClick={() => setShowCreditsModal(false)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Encabezado */}
              <div className="mb-8 pb-5 border-b border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <Scroll className="text-accent" size={32} />
                  <span>College Credit Breakdown</span>
                </h3>
                <p className="text-sm text-gray-400 font-mono mt-2">
                  Santiago Vega | 36 College Credits Earned (As of Junior Year)
                </p>
              </div>

              {/* Grid Principal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10! mb-8!">
                
                {/* AP CREDITS CARD */}
                <div className="bg-[#111] border border-orange-500/20 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[380px]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none"></div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-lg bg-accent/10 text-accent font-bold text-sm">
                        AP
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white">Advanced Placement</h4>
                    </div>
                    <ul className="space-y-4 mb-6 text-sm md:text-base text-gray-300">
                      <li className="flex justify-between border-b border-white/5 pb-3">
                        <span>AP United States History</span>
                        <span className="font-bold text-accent">6 credits</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-3">
                        <span>AP English Lit & Composition</span>
                        <span className="font-bold text-accent">6 credits</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-3">
                        <span>AP Physics 1</span>
                        <span className="font-bold text-accent">4 credits</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 flex justify-between items-center text-sm md:text-base font-bold text-white border-t border-white/10 mt-auto">
                    <span>Total AP Credits</span>
                    <span className="text-accent text-xl">16 Credits</span>
                  </div>
                </div>

                {/* DUAL ENROLLMENT CARD */}
                <div className="bg-[#111] border border-blue-500/20 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[380px]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 font-bold text-sm">
                        DE
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white">Dual Enrollment</h4>
                    </div>
                    <ul className="space-y-4 mb-6 text-xs md:text-sm text-gray-300">
                      <li className="flex justify-between border-b border-white/5 pb-3">
                        <div>
                          <span className="font-bold block text-white text-xs md:text-sm">Siena College</span>
                          <span className="text-[11px] md:text-xs text-gray-400">Pre-Calculus</span>
                        </div>
                        <span className="font-bold text-blue-400 self-center">4 credits</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-3">
                        <div>
                          <span className="font-bold block text-white text-xs md:text-sm">Hudson Valley CC (HVCC)</span>
                          <span className="text-[11px] md:text-xs text-gray-400">Statistics</span>
                        </div>
                        <span className="font-bold text-blue-400 self-center">4 credits</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-3">
                        <div>
                          <span className="font-bold block text-white text-xs md:text-sm">SUNY Schenectady</span>
                          <span className="text-[11px] md:text-xs text-gray-400">Python / Intro to CS</span>
                        </div>
                        <span className="font-bold text-blue-400 self-center">3 credits</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-3">
                        <div>
                          <span className="font-bold block text-white text-xs md:text-sm">SUNY (Bilingual Sequence)</span>
                          <span className="text-[11px] md:text-xs text-gray-400">Advanced Spanish</span>
                        </div>
                        <span className="font-bold text-blue-400 self-center">6 credits</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-3">
                        <div>
                          <span className="font-bold block text-white text-xs md:text-sm">Rochester Institute of Tech (RIT)</span>
                          <span className="text-[11px] md:text-xs text-gray-400">Project-Based Engineering</span>
                        </div>
                        <span className="font-bold text-blue-400 self-center">3 credits</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 flex justify-between items-center text-sm md:text-base font-bold text-white border-t border-white/10 mt-auto">
                    <span>Total DE Credits</span>
                    <span className="text-blue-400 text-xl">20 Credits</span>
                  </div>
                </div>

              </div>

              {/* SENIOR YEAR IN PROGRESS CARD */}
              <div className="bg-linear-to-r from-blue-950/40 to-orange-950/40 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden mt-8! md:mt-10!">
                <div className="absolute top-4 right-6">
                  <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 text-[10px] md:text-xs font-bold uppercase tracking-widest animate-pulse">
                    Senior Year (In Progress)
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-green-400" size={28} />
                  <h4 className="text-lg md:text-xl font-bold text-white">Grade 12 Advanced Coursework</h4>
                </div>
                <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
                  Continuing the rigorous STEM and Business/Finance track with Syracuse University (SUPA), State University of New York (SUNY), and Advanced Placement (AP) partnerships:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-gray-300">
                  <div className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-accent/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0"></div>
                    <div>
                      <span className="font-bold block text-white text-sm">AP Calculus (AB)</span>
                      <span className="text-gray-500 text-[11px] md:text-xs">Mathematics (1.0 HS Credit / College Credit Pending)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-accent/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0"></div>
                    <div>
                      <span className="font-semibold block text-white text-sm">AP Physics II</span>
                      <span className="text-gray-500 text-[11px] md:text-xs">Science (1.0 HS Credit / College Credit Pending)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                    <div>
                      <span className="font-semibold block text-white text-sm">English 12 (SUPA)</span>
                      <span className="text-gray-500 text-[11px] md:text-xs">Syracuse Univ. Project Advance (1.0 HS Credit / College Credit)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                    <div>
                      <span className="font-semibold block text-white text-sm">SUPA Economics 305</span>
                      <span className="text-gray-500 text-[11px] md:text-xs">Syracuse Univ. Finance/Business (0.5 HS Credit / College Credit)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                    <div>
                      <span className="font-semibold block text-white text-sm">SUPA Policy Studies 101</span>
                      <span className="text-gray-500 text-[11px] md:text-xs">Syracuse Univ. Social Sciences (0.5 HS Credit / College Credit)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                    <div>
                      <span className="font-semibold block text-white text-sm">Spanish V (SUNY)</span>
                      <span className="text-gray-500 text-[11px] md:text-xs">State Univ. of New York (1.0 HS Credit / College Credit)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
