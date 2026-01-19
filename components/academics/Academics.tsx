'use client';

import { useState } from 'react';
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
    <section id="academics" className="relative min-h-screen pt-10! pb-32! overflow-hidden flex items-center">
      
      <SectionBackground img={academicsData.backgroundImage} />

      <div className="w-full max-w-[1700px] items-center relative z-10">
        
        <SectionTitle title={academicsData.sectionTitle} />

        {/* --- GRID DE TARJETAS (STATS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-14 gap-x-2 mb-16! ml-40!">
          {academicsData.stats.map((stat) => (
            <div key={stat.id} className="group relative">
              {/* Borde Neón */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-accent rounded-2xl xl:w-72! opacity-50 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>
              
              <div className="relative h-full bg-[#111] border border-white/10 rounded-xl xl:w-70! pt-4! pb-4! flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-1">
                
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

        {/* --- DIGITAL LOCKER --- */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <span className="text-accent">{academicsData.lockerTitle}</span> 
            <span className="text-gray-500 text-sm font-normal">{academicsData.lockerSubtitle}</span>
          </h3>

          <div className="space-y-4">
            {academicsData.lockerItems.map((item, index) => (
              <div 
                key={index}
                className="bg-[#1a1512]/60 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-accent/30"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-accent">{getIcon(item.iconName)}</div>
                    <span className="font-semibold text-lg">{item.title}</span>
                  </div>
                  <div className={`text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-white/5 bg-black/20">
                    <div className="flex flex-col gap-3">
                      {item.files.map((file, fIndex) => (
                        <a 
                          key={fIndex}
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-accent/10 hover:text-accent border border-transparent hover:border-accent/20 transition-all group"
                        >
                          <span className="text-gray-300 group-hover:text-white font-medium text-sm">
                            {file.name}
                          </span>
                          {file.type === 'download' ? (
                            <Download size={18} className="text-gray-500 group-hover:text-accent" />
                          ) : (
                            <PlayCircle size={18} className="text-gray-500 group-hover:text-accent" />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}