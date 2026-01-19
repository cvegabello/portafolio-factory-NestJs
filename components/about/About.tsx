'use client';

import Image from 'next/image';
import { aboutData } from '@/data/about';
import SectionTitle from "@/components/ui/SectionTitle"; // 👈 Importación
// 1. IMPORTAR LOS NUEVOS ICONOS DE LUCIDE
import { 
  MapPin, 
  Calendar, 
  Trophy, 
  Languages,
  Brain,           // <--- Nuevo
  GraduationCap,   // <--- Nuevo
  Gamepad2,        // <--- Nuevo (o el que elija para hobbies: Music, Plane, etc.)
  Home             // <--- Opcional si prefiere casita para residencia
} from 'lucide-react';

// 2. ACTUALIZAR EL SWITCH
const getIcon = (iconName: string) => {
  // Clase base para mantenerlos uniformes
  const iconClass = "w-7 h-7 text-accent drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"; 

  switch (iconName) {
    case 'MapPin': return <MapPin className={iconClass} />;
    case 'Calendar': return <Calendar className={iconClass} />;
    case 'Trophy': return <Trophy className={iconClass} />;
    case 'Languages': return <Languages className={iconClass} />;
    
    // --- NUEVOS ---
    case 'Brain': return <Brain className={iconClass} />;
    case 'GraduationCap': return <GraduationCap className={iconClass} />;
    case 'Gamepad2': return <Gamepad2 className={iconClass} />;
    
    default: return null;
  }
};

export default function About() {
  return (
    // CAMBIO CLAVE 1: 'min-h-screen' asegura altura completa. 'py-32' da mucho aire arriba y abajo.
    <section id="about" className="relative min-h-screen pt-10! pb-32! overflow-hidden flex items-center">
   
      
      <div className="max-w-[1700px] items-center  relative z-10">
        
        <SectionTitle title={aboutData.sectionTitle} />

        {/***********Inicio del contenedor Grid de dos columnas, priemra columna la foto, segunda columna Quien soy yo */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.0fr_2.0fr] gap-12 lg:gap-10 xl:gap-18 xl:ml-20! items-center ">
          
          {/* COLUMNA 1: FOTO CON MARCO CYBER */}
            {/* COLUMNA 1: FOTO CON MARCO CYBER */}
          <div className="flex justify-center lg:justify-end relative lg:order-1">
            
            {/* --- CAMBIO 1: EL NUEVO JEFE (TRIGGER) --- */}
            {/* Agregamos la clase 'group' aquí en el contenedor padre */}
            <div className="relative w-[290px]! h-[400px]! md:w-[350px] md:h-[450px] group">
              
              {/* --- CAMBIO 2: LA ANIMACIÓN DEL MARCO NARANJA --- */}
              {/* Agregamos transition y el movimiento al hacer hover */}
              <div className="absolute top-6 left-6 w-full h-full border-2 border-accent rounded-xl z-0 box-border shadow-[0_0_20px_rgba(249,115,22,0.9)] transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.9)]"></div>

              {/* Contenedor de la Foto y Bordes Azules */}
              {/* (Opcional: Puede quitar la palabra 'group' de las clases de este div si quiere, ya no hace falta) */}
              <div className="relative w-full h-full z-10 bg-neutral-900 border border-white/10 shadow-2xl rounded-xl">

                {/* Esquinas Azules (sin cambios) */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-600 z-20 rounded-tl-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-blue-600 z-20 rounded-br-xl"></div>

                {/* La Imagen (Sigue reaccionando al grupo con scale-105) */}
                <Image
                    src={aboutData.image}
                    alt="Profile"
                    fill
                    className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    priority
                />
              </div>
            </div>
          </div>

          {/* COLUMNA 2: TARJETA DE BIO */}
          <div className="order-2">
            {/* CAMBIO CLAVE 3: Fondo oscuro sólido para que resalte sobre los puntos */}
            <div className="mx-4! lg:mx-0! bg-[#1a1512]/70 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-sm min-h-[650px] flex flex-col transition-all duration-500 ease-out hover:border-accent hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] hover:scale-[1.02] hover:-translate-y-1">
              
              {/* Título de la tarjeta */}
              <h3 className="relative text-3xl md:text-4xl font-extrabold text-white mt-10! pl-10!">
                {aboutData.greeting.prefix} 
                <span className="text-accent drop-shadow-[0_0_15px_rgba(249,115,22,0.7)] ml-4!">
                  { aboutData.greeting.name}
                </span>
              </h3>

              {/* Frase Intro con barra azul */}
              <div className="flex flex-row mt-8! ">
                <div className="h-22 w-2 bg-accent-secondary rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] ml-8!"></div>
                <p className="text-lg md:text-xl text-gray-200  font-medium pl-2! pr-6! text-justify">
                    {aboutData.intro.text }<strong className="text-white">{aboutData.intro.highlighted[0] }</strong> and <strong className="text-white">{aboutData.intro.highlighted[1] }</strong>.
                </p>
              </div>

              {/* Texto Bio */}
              <p className="text-gray-400 text-base leading-relaxed mt-6! text-justify pl-8! pr-6! whitespace-pre-line">
                {aboutData.bio}
              </p>

              {/* Grid de Datos */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6! px-10! pb-6!">
                {aboutData.stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 bg-[#0000004d] p-4! rounded-xl border border-white/25 transition-all duration-300 group hover:border-blue-500 hover:bg-blue-600/20 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1"
                  >
                    <div className="p-1! rounded-lg text-accent group-hover:text-white transition-colors">
                      {getIcon(stat.icon)}
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">{stat.label}</span>
                      <span className="text-sm text-white font-medium">{stat.text}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
        {/***********Final del contenedor Grid de dos columnas, priemra columna la foto, segunda columna Quien soy yo */}
      </div>
    </section>
  );
}