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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 mb-16! w-fit! mx-auto! justify-center gap-x-8!">
            {academicsData.stats.map((stat) => (
              <div key={stat.id} className="group relative">
                {/* Borde Neón */}
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-accent rounded-2xl xl:w-62! xl:h-25! opacity-50 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>
                
                <div className="relative h-full bg-linear-to-b from-blue-950/85 to-orange-900/85 border border-white/10 rounded-xl xl:w-60! xl:h-23! pt-4! pb-4! flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-1">
                  
                  {/* Icono Dinámico */}
                  <div className={`mb-4 p-3 rounded-full bg-white/5 ${stat.color === 'blue' ? 'text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'text-accent shadow-[0_0_15px_rgba(249,115,22,0.3)]'} group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(stat.iconName)}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>
        
        {/* --- 2. TIMELINE DEFINITIVO: GRID + LÍNEA NEÓN --- */}
        <div className="mb-32 relative w-full">
          <div className="text-center mb-16">
             <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
               <span className="text-accent">Process.</span> {academicsData.timelineTitle}
            </h3>
          </div>

          {/* 🔥 LA LÍNEA CENTRAL MODERNA Y VIVA 🔥
              - w-1: Más gruesa (4px).
              - bg-gradient-to-b: Degradado de transparente -> azul -> morado -> naranja.
              - shadow: Brillo azulito alrededor.
          */}
          <div className="absolute left-1/2 top-20 bottom-0 w-1 -translate-x-1/2 hidden md:block rounded-full bg-gradient-to-b from-transparent via-blue-500/50 via-purple-500/30 to-orange-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>

          {/* EL CONTENEDOR GRID (Con el hueco gigante gap-x-48) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-48 gap-y-12">
            
            {academicsData.timeline?.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <Fragment key={item.id}>
                  
                  {/* --- CASO 1: TARJETA A LA IZQUIERDA --- */}
                  {isEven ? (
                    <>
                      <div className="flex justify-end md:text-right relative group">
                        
                        {/* TARJETA */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full max-w-sm hover:bg-white/10 hover:border-accent/30 transition-all duration-300 relative z-10">
                           <div className="flex flex-col gap-3 items-end">
                              <div className="flex flex-row-reverse items-center gap-3">
                                <span className="text-xs font-mono text-accent py-1 px-2 rounded bg-accent/10 border border-accent/20">{item.year}</span>
                                <div className="text-gray-400">{getIcon(item.iconName)}</div>
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-white leading-tight mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                              </div>
                              <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 bg-black/30 py-1 px-3 rounded-full">
                                <GraduationCap size={14} /> {item.school}
                              </p>
                           </div>
                        </div>

                        {/* CONECTOR DERECHO (Cruza el hueco hacia el centro) */}
                        <div className="hidden md:flex absolute top-1/2 -right-[6rem] w-[6rem] items-center z-0">
                           {/* Línea conectora */}
                           <div className="h-px w-full bg-white/30 group-hover:bg-accent transition-colors"></div>
                           {/* Punto central (El nodo en la línea) */}
                           <div className="w-4 h-4 rounded-full bg-[#111] border-2 border-accent shadow-[0_0_10px_rgba(249,115,22,0.5)] translate-x-[50%]"></div>
                        </div>
                      </div>

                      {/* Espacio vacío derecha */}
                      <div className="hidden md:block"></div>
                    </>
                  ) : (
                    /* --- CASO 2: TARJETA A LA DERECHA --- */
                    <>
                      {/* Espacio vacío izquierda */}
                      <div className="hidden md:block"></div>

                      <div className="flex justify-start md:text-left relative group">
                        
                        {/* CONECTOR IZQUIERDO (Cruza el hueco hacia el centro) */}
                        <div className="hidden md:flex absolute top-1/2 -left-[6rem] w-[6rem] items-center flex-row-reverse z-0">
                           {/* Línea conectora */}
                           <div className="h-px w-full bg-white/30 group-hover:bg-accent transition-colors"></div>
                           {/* Punto central (El nodo en la línea) */}
                           <div className="w-4 h-4 rounded-full bg-[#111] border-2 border-accent shadow-[0_0_10px_rgba(249,115,22,0.5)] -translate-x-[50%]"></div>
                        </div>

                        {/* TARJETA */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full max-w-sm hover:bg-white/10 hover:border-accent/30 transition-all duration-300 relative z-10">
                           <div className="flex flex-col gap-3 items-start">
                              <div className="flex items-center gap-3">
                                <span className="text-xs font-mono text-accent py-1 px-2 rounded bg-accent/10 border border-accent/20">{item.year}</span>
                                <div className="text-gray-400">{getIcon(item.iconName)}</div>
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-white leading-tight mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                              </div>
                              <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 bg-black/30 py-1 px-3 rounded-full">
                                <GraduationCap size={14} /> {item.school}
                              </p>
                           </div>
                        </div>

                      </div>
                    </>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
}