'use client';

import { useState } from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import Timeline from "@/components/ui/TimeLine"; 
import { academicsData } from '@/data/academics'; 
import { 
  BookOpen, 
  PenTool, 
  GraduationCap, 
  Laptop, 
  Code, 
  FileText, 
  Trophy, 
  Video,
  LucideIcon
} from 'lucide-react';

// Función auxiliar para iconos
const getIcon = (iconName: string) => {
  const icons: { [key: string]: LucideIcon } = {
    BookOpen, PenTool, GraduationCap, Laptop, Code, FileText, Trophy, Video
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent size={24} /> : <BookOpen size={24} />;
};

export default function Academics() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // AGREGADO: 'items-center' para forzar el centrado vertical de todos los hijos
    <section id="academics" className="relative min-h-screen pt-20! overflow-hidden flex flex-col items-center">
      
      <SectionBackground img={academicsData.backgroundImage} />

      {/* AGREGADO: 'flex flex-col items-center' extra por seguridad */}
      <div className="w-full max-w-8xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        <SectionTitle title={academicsData.sectionTitle} />

        {/* --- 1. GRID DE TARJETAS (STATS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-y-6 mb-20! w-fit! mx-auto! justify-center gap-x-8!">
            {academicsData.stats.map((stat) => (
              <div key={stat.id} className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-accent rounded-2xl xl:w-58! xl:h-22! opacity-50 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>
                <div className="relative h-full bg-linear-to-b from-blue-950/85 to-orange-900/85 border border-white/10 rounded-xl xl:w-56! xl:h-19! pt-4! pb-4! flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-1">
                  <div className={`mb-4 p-3 rounded-full bg-white/5 ${stat.color === 'blue' ? 'text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'text-accent shadow-[0_0_15px_rgba(249,115,22,0.3)]'} group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(stat.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>
        
        {/* --- 2. ZONA MAESTRA: TIMELINE + ACORDEÓN --- */}
        {/* CAMBIOS CLAVE AQUÍ:
            1. 'justify-center': Alinea las columnas al centro del Grid.
            2. 'mx-auto': Centra el Grid en la pantalla.
            3. 'w-full': Asegura que use el ancho disponible para calcular el centro.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-start w-full max-w-7xl mx-auto pb-32">
          
          {/* === COLUMNA IZQUIERDA: EL TIMELINE === */}
          {/* justify-end: Empuja el timeline hacia la derecha (hacia el centro de la pantalla) */}
          <div className="w-full flex justify-center lg:justify-end">
            <Timeline items={academicsData.timeline} />
          </div>

          {/* === COLUMNA DERECHA: FUTURO ACORDEÓN === */}
          {/* justify-start: Empuja el acordeón hacia la izquierda (hacia el centro de la pantalla) */}
          <div className="w-full flex justify-center lg:justify-start">
            
            {/* CAJA TEMPORAL (PLACEHOLDER) */}
            <div className="
              w-full max-w-2xl h-[520px] rounded-3xl 
              bg-gray/10 backdrop-blur-md border border-white/10 border-dashed
              flex flex-col items-center justify-center text-center p-8
              shadow-[inset_10px_10px_20px_rgba(0,0,0,0.5)]
            ">
              <span className="text-6xl mb-4 opacity-50">🎹</span>
              <h3 className="text-2xl font-bold text-white mb-2">Zona del Acordeón</h3>
              <p className="text-gray-400 text-sm">
                Reservado para el contenido expandible.<br/>
                Listo para implementar.
              </p>
            </div>

          </div>

        </div>
       
      </div>
    </section>
  );
}