'use client';

import React from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import { athleticsData } from '@/data/athletics'; 
import { 
  Play, 
  ExternalLink, 
  Trophy, 
  Ruler, 
  Weight, 
  User, 
  MapPin, 
  Shirt, 
  ArrowDown 
} from 'lucide-react';

// Helper para iconos dinámicos
const getIcon = (iconName: string) => {
  const icons: any = { Trophy, Ruler, Weight, User, MapPin, Shirt };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent size={20} /> : <User size={20} />;
};

export default function Athletics() {
  return (
    <section id="athletics" className="relative min-h-screen pt-20! pb-20! overflow-hidden flex flex-col items-center justify-center">
      
      <SectionBackground img={athleticsData.backgroundImage} />

      <div className="w-full max-w-[90%] xl:max-w-[1500px] mx-auto px-4 relative z-10">
        
        <SectionTitle title={athleticsData.sectionTitle} subtitle={athleticsData.sectionSubtitle} />

        {/* --- GRID PRINCIPAL (2 COLUMNAS) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12 items-stretch">

          {/* ======================================================= */}
          {/* COLUMNA IZQUIERDA: VIDEO CARD (YA APROBADA ✅) */}
          {/* ======================================================= */}
          <div className="relative h-full min-h-[550px] w-full group perspective-1000">
            <div className="
              absolute -inset-[3px] rounded-[22px] -z-10
              bg-gradient-to-br from-[#ff5e00] via-[#0044ff] to-[#ff5e00]
              opacity-70 blur-[2px] 
              transition-all duration-300 ease-out
              group-hover:opacity-100 group-hover:blur-[8px] group-hover:shadow-[0_0_40px_rgba(255,94,0,0.5)]
            "></div>

            <div className="
              relative w-full h-full 
              bg-[#050505] rounded-[20px] overflow-hidden
              flex flex-col
              transition-transform duration-300 ease-out
              group-hover:-translate-y-2
            ">
              {/* VIDEO */}
              <div className="
                relative w-full 
                h-[300px] md:h-[350px] lg:h-[420px] 
                bg-black flex items-center justify-center
                border-b border-white/10
              ">
                <iframe 
                  className="w-full h-full object-cover"
                  src={athleticsData.highlight.videoUrl} 
                  title="Player Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              {/* INFO BAR */}
              <div className="
                flex-1 px-8! py-6! 
                bg-gradient-to-r from-blue-950/90 to-[#0a0a15]
                flex items-center justify-between
                backdrop-blur-md
              ">
                <div className="flex flex-col gap-2 pr-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      {athleticsData.highlight.title}
                    </h3>
                    <span className="text-xl animate-bounce duration-1000">⚽</span>
                  </div>
                  <p className="text-base text-gray-400 font-medium leading-relaxed">
                    {athleticsData.highlight.description}
                  </p>
                </div>

                <button className="
                  hidden md:flex items-center gap-2 
                  px-6! py-3! rounded-full
                  border border-accent/50 text-accent font-bold text-sm uppercase tracking-wider
                  hover:bg-accent hover:text-black transition-all duration-300
                  group/btn shrink-0 cursor-pointer
                ">
                  More Action
                  <ArrowDown size={18} className="group-hover/btn:translate-y-1 transition-transform" />
                </button>
              </div>
              
              <button className="md:hidden absolute bottom-5 right-5 p-3 rounded-full bg-accent/10 border border-accent text-accent">
                 <ArrowDown size={20} />
              </button>
            </div>
          </div>


          {/* ======================================================= */}
          {/* COLUMNA DERECHA: PERFIL NCSA (REDDISEÑADA 🛠️) */}
          {/* ======================================================= */}
          <div className="relative h-full min-h-[550px] w-full group perspective-1000">
            
            {/* 1. BORDE NEÓN (IGUAL A LA IZQUIERDA: Naranja-Azul) */}
            <div className="
              absolute -inset-[3px] rounded-[22px] -z-10
              bg-gradient-to-br from-[#ff5e00] via-[#0044ff] to-[#ff5e00]
              opacity-70 blur-[2px] 
              transition-all duration-300 ease-out
              group-hover:opacity-100 group-hover:blur-[8px] group-hover:shadow-[0_0_40px_rgba(255,94,0,0.5)]
            "></div>

            {/* 2. CONTENEDOR (FONDO NEGRO #050505) */}
            <div className="
              relative h-full w-full 
              bg-[#050505] rounded-[20px] 
              border border-white/5
              overflow-hidden flex flex-col 
              p-8 lg:p-10!
              shadow-2xl
              transition-transform duration-300 ease-out
              group-hover:-translate-y-2
            ">
              
              {/* --- HEADER (ESTILO ACADEMICS) --- */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-10 border-b border-white/10 pb-6">
                 {/* Logo con brillo */}
                 <div className="
                    w-14 h-14 rounded-2xl bg-white flex items-center justify-center 
                    shadow-[0_0_25px_rgba(255,255,255,0.15)] shrink-0
                 ">
                    <img src={athleticsData.ncsa.logoUrl} alt="NCSA" className="w-full h-full object-contain" />
                 </div>
                 
                 {/* Título con Decoración Naranja */}
                 <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-wide">
                      NCSA Profile
                    </h3>
                    {/* LA BARRITA DECORATIVA (ESTILO ACADEMICS) */}
                    <div className="h-1.5 w-48! bg-accent rounded-full mt-3 shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>
                    
                    <span className="mt-3 text-sm font-mono text-gray-400">
                      Official Recruiting Profile
                    </span>
                 </div>

                 {/* Badge Verified (A la derecha en desktop) */}
                 <div className="md:ml-auto">
                    <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                      Verified Athlete
                    </span>
                 </div>
              </div>

              {/* --- GRID DE STATS (ESTILO TIMELINE/DARKCARD) --- */}
              <div className="grid grid-cols-2 gap-5 mb-10 flex-1 content-center">
                {athleticsData.ncsa.stats.map((stat) => (
                  <div key={stat.id} className="
                    relative overflow-hidden
                    bg-[#1a1a1a] /* Fondo Timeline */
                    border border-white/10 /* Borde sutil */
                    rounded-xl p-5
                    flex flex-col items-center justify-center text-center
                    group/stat hover:border-accent/40 transition-colors duration-300
                    shadow-lg
                  ">
                    {/* Efecto hover suave en el fondo */}
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10 flex flex-col items-center gap-2">
                       {/* Icono pequeño y elegante */}
                       <div className="text-gray-500 group-hover/stat:text-accent transition-colors mb-1">
                          {getIcon(stat.icon)}
                       </div>
                       
                       {/* Valor (Dato importante) */}
                       <span className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                         {stat.value}
                       </span>
                       
                       {/* Etiqueta */}
                       <span className="text-[10px] lg:text-xs uppercase font-bold tracking-widest text-gray-500 group-hover/stat:text-gray-300">
                         {stat.label}
                       </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* --- BOTÓN CTA --- */}
              <a 
                href={athleticsData.ncsa.profileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                  w-fit mx-auto! px-8! py-4! rounded-xl 
                  bg-linear-to-r from-blue-600 to-blue-800 
                  hover:from-blue-500 hover:to-blue-700
                  text-white font-bold text-xl tracking-wide uppercase
                  flex items-center justify-center gap-3
                  shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]
                  transition-all duration-300 hover:-translate-y-1
                "
              >
                View Full Profile 
                <ExternalLink size={24} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}