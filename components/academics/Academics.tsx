'use client';

// AGREGUE ', Fragment' AQUÍ ADENTRO 👇
import { useState, Fragment } from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import Timeline from "@/components/ui/TimeLine"; // <--- IMPORTANTE
import { academicsData } from '@/data/academics'; // 👈 IMPORTAMOS LA DATA
import { 
  BookOpen, 
  PenTool, 
  GraduationCap, 
  Laptop, 
  Code, 
  FileText, 
  Download, 
  PlayCircle,
  Plus,
  Minus,
  Trophy,
  Video,
  LucideIcon
} from 'lucide-react';

// Función auxiliar para mapear string -> Icono
// Esto es vital para cuando los datos vengan de una Base de Datos
const getIcon = (iconName: string) => {
  const icons: { [key: string]: LucideIcon } = {
    BookOpen,
    PenTool,
    GraduationCap,
    Laptop,
    Code,
    FileText,
    Trophy,
    Video
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
    <section id="academics" className="relative min-h-screen pt-20! overflow-hidden flex ">
      
      <SectionBackground img={academicsData.backgroundImage} />

      <div className="w-full max-w-8xl relative z-10">
        
        <SectionTitle title={academicsData.sectionTitle} />

        
          {/* --- GRID DE TARJETAS (STATS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-y-6 mb-16! w-fit! mx-auto! justify-center gap-x-8!">
            {academicsData.stats.map((stat) => (
              <div key={stat.id} className="group relative">
                {/* Borde Neón */}
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-accent rounded-2xl xl:w-58! xl:h-22! opacity-50 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>
                
                <div className="relative h-full bg-linear-to-b from-blue-950/85 to-orange-900/85 border border-white/10 rounded-xl xl:w-56! xl:h-19! pt-4! pb-4! flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-1">
                  
                  {/* Icono Dinámico */}
                  <div className={`mb-4 p-3 rounded-full bg-white/5 ${stat.color === 'blue' ? 'text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'text-accent shadow-[0_0_15px_rgba(249,115,22,0.3)]'} group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(stat.iconName)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>
        
        {/* --- 2. CÁPSULA DEL TIEMPO (VERSIÓN FINAL: ICONOS CENTRALES ACTIVOS) --- */}
        
        <div className="mb-32 w-full flex justify-center px-4">
          <Timeline items={academicsData.timeline} />
          
        </div>
       
      </div>
    </section>
  );
}