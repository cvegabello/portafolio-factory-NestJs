'use client';

import React from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import AthleticsCarousel from "@/components/ui/AthleticsCarousel";
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
    // WRAPPER PRINCIPAL: Contiene el fondo y las dos secciones
    <div className="relative w-full">
      
      {/* 1. EL FONDO (Cubre ambas secciones porque está en el wrapper padre) */}
      <SectionBackground img={athleticsData.backgroundImage} />
      <section id="athletics" className="relative min-h-screen pt-20! pb-20! overflow-hidden flex flex-col items-center justify-center">
 
        <div className="w-full max-w-[90%] xl:max-w-[1500px] mx-auto px-4 relative z-10">
          
          <SectionTitle title={athleticsData.sectionTitle} subtitle={athleticsData.sectionSubtitle} />

          {/* --- GRID PRINCIPAL (2 COLUMNAS) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12 items-stretch">

            {/* ======================================================= */}
            {/* COLUMNA IZQUIERDA: VIDEO CARD (AJUSTE MÓVIL ✅) */}
            {/* ======================================================= */}
            <div className="relative h-full min-h-[500px] md:min-h-[550px] w-full group perspective-1000">
              
              {/* 1. Borde Neón */}
              <div className="
                absolute -inset-[3px] rounded-[22px] -z-10
                bg-gradient-to-br from-[#ff5e00] via-[#0044ff] to-[#ff5e00]
                opacity-70 blur-[2px] 
                transition-all duration-300 ease-out
                group-hover:opacity-100 group-hover:blur-[8px] group-hover:shadow-[0_0_40px_rgba(255,94,0,0.5)]
              "></div>

              {/* 2. Contenedor de la Tarjeta */}
              <div className="
                relative w-full h-full 
                bg-[#050505] rounded-[20px] overflow-hidden
                flex flex-col
                transition-transform duration-300 ease-out
                group-hover:-translate-y-2
              ">

                {/* --- PARTE SUPERIOR: VIDEO --- */}
                {/* CAMBIO: Usamos 'flex-1' para que el video ocupe TODO el espacio sobrante */}
                <div className="
                  relative w-full 
                  flex-1  /* <--- ESTO ES CLAVE: Ocupa todo el alto disponible */
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

                {/* --- PARTE INFERIOR: INFO BAR --- */}
                {/* CAMBIO: Padding reducido en móvil (px-4 py-3) y normal en desktop (md:px-8 md:py-6) */}
                <div className="
                  shrink-0 /* Evita que esta barra se aplaste */
                  px-4! py-3! md:px-8! md:py-6! 
                  bg-gradient-to-r from-blue-950/90 to-[#0a0a15]
                  flex items-center justify-between
                  backdrop-blur-md gap-3
                ">
                  
                  {/* Textos */}
                  <div className="flex flex-col gap-1 md:gap-2 pr-2 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg md:text-2xl font-bold text-white tracking-wide truncate">
                        {athleticsData.highlight.title}
                      </h3>
                      <span className="text-base md:text-xl animate-bounce duration-1000">⚽</span>
                    </div>
                    <p className="text-xs md:text-base text-gray-400 font-medium leading-relaxed truncate">
                      {athleticsData.highlight.description}
                    </p>
                  </div>

                  {/* ENLACE A LA SEGUNDA SECCIÓN */}
                  <a 
                    href="#training-camp" // <--- Apunta al ID de la sección de abajo
                    className="
                      flex items-center gap-2 
                      px-3! py-2! md:px-6! md:py-3! rounded-full
                      border border-accent/50 text-accent font-bold 
                      text-[10px] md:text-sm uppercase tracking-wider
                      hover:bg-accent hover:text-black transition-all duration-300
                      group/btn shrink-0 cursor-pointer whitespace-nowrap
                    "
                  >
                    More Action
                    <ArrowDown size={14} className="md:w-[18px] md:h-[18px] group-hover/btn:translate-y-1 transition-transform" />
                  </a>

                </div>
                
                {/* NOTA: Eliminé el botón flotante de la flecha sola, 
                    porque ya tenemos el botón principal visible en el celular. */}

              </div>
            </div>


            {/* ======================================================= */}
            {/* COLUMNA DERECHA: PERFIL NCSA (REDDISEÑADA 🛠️) */}
            {/* ======================================================= */}
            <div className="relative h-full min-h-[550px] w-full group perspective-1000">
              
              {/* 1. BORDE NEÓN (IGUAL A LA IZQUIERDA: Naranja-Azul) */}
              <div className="
                absolute -inset-[3px] rounded-[22px] -z-10
                bg-linear-to-br from-[#ff5e00] via-[#0044ff] to-[#ff5e00]
                opacity-70 blur-[2px] 
                transition-all duration-300 ease-out
                group-hover:opacity-100 group-hover:blur-sm group-hover:shadow-[0_0_40px_rgba(255,94,0,0.5)]
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
                group-hover:-translate-y-2 px-6! py-10! 
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
                    w-fit mx-auto! mt-6! lg:mt-0! px-8! py-4! rounded-xl 
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

      {/* ======================================================= */}
      {/* SECCIÓN 2: TRAINING CAROUSEL (ID: training-camp) */}
      {/* ======================================================= */}
      <section 
        id="training-camp" 
        className="
            relative w-full min-h-screen 
            flex flex-col justify-center items-center 
            py-20! px-4 z-10
            /* Degradado sutil arriba para marcar transición */
            bg-linear-to-b from-[#050505]/90 to-transparent
        "
      >
        <div className="w-full max-w-[90%] xl:max-w-[1500px] mx-auto text-center">
          
          <SectionTitle 
              title={athleticsData.trainingCarousel.title} 
              subtitle={athleticsData.trainingCarousel.subtitle} 
          />

          <div className="w-full mt-12 md:mt-20">
              <AthleticsCarousel items={athleticsData.trainingCarousel.videos} />
          </div>

          <div className="mt-12! flex justify-center">
                <a href="#athletics" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest flex flex-col items-center gap-2 animate-pulse cursor-pointer">
                  Back to Top
                  <ArrowDown size={16} className="rotate-180" />
                </a>
          </div>

        </div>
      </section>


    </div>
  );
}