'use client';

// AGREGUE ', Fragment' AQUÍ ADENTRO 👇
import { useState, Fragment } from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
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
        
        {/* --- 2. CÁPSULA DEL TIEMPO (NEUMORFISMO + SCROLL) --- */}
        {/* CAMBIO 1: Agregamos 'px-4 md:px-8' al wrapper principal para separarlo de los bordes de la pantalla */}
        <div className="mb-32 relative w-full max-w-5xl mx-auto px-4 md:px-8">
          
          <div className="text-center mb-12">
             <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
               <span className="text-accent">My Path.</span> {academicsData.timelineTitle}
            </h3>
          </div>

          {/* LA CÁPSULA (CONTENEDOR PRINCIPAL) */}
          <div className="
            relative w-full h-[600px] bg-[#252525] rounded-3xl p-4 md:p-8 
            overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-[#1a1a1a]
            shadow-[inset_10px_10px_20px_#1a1a1a,inset_-10px_-10px_20px_#303030]
            border border-white/5
          ">

            {/* LÍNEA CENTRAL */}
            <div className="absolute left-4 md:left-1/2 top-8 bottom-8 w-1 md:-translate-x-1/2 rounded-full bg-[#1a1a1a] shadow-[inset_2px_2px_5px_#000] z-0"></div>

            <div className="relative z-10 flex flex-col gap-8 py-8">
              {academicsData.timeline?.map((item, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={item.id} className={`flex flex-col md:flex-row items-start w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* --- LADO DEL CONTENIDO --- */}
                    {/* CAMBIO 2: Quitamos el 'md:px-12' que causaba el desorden. Ahora es limpio. */}
                    <div className="w-full md:w-1/2 px-4 md:px-0 flex flex-col items-center md:block">
                      
                      {/* TARJETA NEUMÓRFICA 3D */}
                      <div className={`
                        w-full max-w-[300px] p-5 rounded-2xl bg-[#252525] transition-transform duration-300 hover:scale-[1.02]
                        shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#303030]
                        mb-8 md:mb-0  /* Espacio vertical en celular */
                        
                        /* CAMBIO 3: LÓGICA DE CENTRADO CORRECTA */
                        ${isEven 
                          ? 'md:ml-auto md:mr-12'  /* IZQUIERDA: Se pega a la derecha y empuja 12 unidades desde el centro */
                          : 'md:mr-auto md:ml-12'  /* DERECHA: Se pega a la izquierda y empuja 12 unidades desde el centro */
                        }
                      `}>
                        
                        {/* HEADER: Icono + Año */}
                        <div className="flex justify-between items-start mb-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full text-accent bg-[#252525] shadow-[inset_3px_3px_6px_#1a1a1a,inset_-3px_-3px_6px_#303030]">
                            {getIcon(item.iconName)}
                          </div>
                          <span className="text-[10px] font-mono font-bold text-accent/80 bg-[#252525] px-2 py-1 rounded-md shadow-[2px_2px_5px_#1a1a1a,-2px_-2px_5px_#303030]">
                            {item.year}
                          </span>
                        </div>

                        {/* TEXTOS */}
                        <h4 className="text-base font-bold text-gray-200 leading-tight mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.description}</p>
                        
                        {/* TAG COLEGIO */}
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-medium">
                          <GraduationCap size={12} /> {item.school}
                        </div>

                      </div>
                    </div>

                    {/* --- NODO CENTRAL (BOLITA) --- */}
                    {/* Ajuste fino para que la bolita quede centrada con la parte superior de la tarjeta */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-5 w-4 h-4 rounded-full bg-accent border-4 border-[#252525] shadow-[4px_4px_8px_#1a1a1a,-4px_-4px_8px_#303030] z-20"></div>

                    {/* --- LADO VACÍO --- */}
                    <div className="hidden md:block w-1/2"></div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}