'use client';

import Image from 'next/image';
import { aboutData } from '@/data/about';
import { MapPin, Calendar, Trophy, Languages } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'MapPin': return <MapPin className="w-5 h-5 text-accent" />;
    case 'Calendar': return <Calendar className="w-5 h-5 text-accent" />;
    case 'Trophy': return <Trophy className="w-5 h-5 text-accent" />;
    case 'Languages': return <Languages className="w-5 h-5 text-accent" />;
    default: return null;
  }
};

export default function About() {
  return (
    // CAMBIO CLAVE 1: 'min-h-screen' asegura altura completa. 'py-32' da mucho aire arriba y abajo.
    <section id="about" className="relative min-h-screen pt-10! pb-32! bg-black overflow-hidden flex items-center">
      
      {/* === CAMBIO CLAVE 2: FONDO DE PUNTOS (DOT PATTERN) === */}
      {/* Esto crea exactamente el efecto de la imagen de referencia */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [bg-size:30px_30px] opacity-[0.15]"></div>

      <div className="w-full max-w-[1600px] ml-auto mr-0 px-6 md:px-12 xl:pl-40 xl:pr-12 relative z-10">
        
        {/* Título de Sección Centrado y con espacio */}
        <div className="flex flex-col items-center mb-10! ml-40! mt-10!">
          <h2 className="text-4xl! md:text-5xl font-bold text-white tracking-tight ">
            {aboutData.sectionTitle}
          </h2>
          {/* La barrita naranja debajo del título */}
          <div className="w-24 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] mt-5!"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2.5fr] gap-12 lg:gap-20 items-center ">
          
          {/* COLUMNA 1: FOTO CON MARCO CYBER */}
          <div className="flex justify-center lg:justify-end relative order-2 lg:order-1">
            <div className="relative w-[290px]! h-[400px]! md:w-[350px] md:h-[450px]">
              
              {/* Esquinas Azules (Brackets) */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-600 z-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-blue-600 z-20"></div>
              
              {/* Marco Naranja desplazado */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-accent rounded-xl z-0 box-border shadow-[0_0_20px_rgba(249,115,22,0.2)]"></div>

              {/* La Imagen */}
              <div className="relative w-full h-full rounded-xl overflow-hidden z-10 bg-neutral-900 border border-white/10 shadow-2xl group">
                 <Image
                    src={aboutData.image}
                    alt="Profile"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                 />
              </div>
            </div>
          </div>

          {/* COLUMNA 2: TARJETA DE BIO */}
          <div className="order-1 lg:order-2">
            {/* CAMBIO CLAVE 3: Fondo oscuro sólido para que resalte sobre los puntos */}
            <div className="bg-[#0f0f0f] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-sm min-h-[650px] flex flex-col">
              
              {/* Título de la tarjeta */}
              <h3 className="relative text-3xl md:text-4xl font-extrabold text-white mt-10! pl-10!">
                {aboutData.greeting.prefix} <span className="text-accent">{aboutData.greeting.name}</span>
              </h3>

              {/* Frase Intro con barra azul */}
              <div className="flex flex-row mt-8! ">
                <div className="h-22 w-2 bg-accent rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] ml-8!"></div>
                <p className="text-lg md:text-xl text-gray-200  font-medium pl-2! pr-6! text-justify">
                    {aboutData.intro.text }<strong className="text-white">{aboutData.intro.highlighted[0] }</strong> and <strong className="text-white">{aboutData.intro.highlighted[1] }</strong>.
                </p>
              </div>

              {/* Texto Bio */}
              <p className="text-gray-400 text-base leading-relaxed mt-6! text-justify pl-8! pr-6! whitespace-pre-line">
                {aboutData.bio}
              </p>

              {/* Grid de Datos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10!">
                {aboutData.stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 bg-black p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-colors group"
                  >
                    <div className="p-2 bg-[#1a1a1a] rounded-lg text-accent group-hover:text-white transition-colors">
                      {getIcon(stat.icon)}
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">{stat.label}</span>
                      <span className="text-sm text-white font-bold">{stat.text}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}