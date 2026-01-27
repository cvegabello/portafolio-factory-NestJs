"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import Timeline from "@/components/ui/TimeLine";
import Accordion from "@/components/ui/Accordion"; // <--- Importante
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
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent size={24} /> : <BookOpen size={24} />;
};

export default function Academics() {
  return (
    <section
      id="academics"
      className="relative min-h-screen pt-20! overflow-hidden flex flex-col items-center"
    >
      <SectionBackground img={academicsData.backgroundImage} />

      <div className="w-full max-w-8xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <SectionTitle title={academicsData.sectionTitle} />

        {/* --- 1. GRID DE TARJETAS (STATS) --- */}
        {/* CAMBIOS RESPONSIVE APLICADOS:
            - grid-cols-2       -> Celular
            - md:grid-cols-3    -> iPad / Tablet Vertical
            - xl:grid-cols-6    -> Pantallas Grandes
            
            También ajusté el ancho del contenedor a 'w-full xl:w-fit!' para que en celular
            ocupe toda la pantalla y quepan las 2 columnas, pero en PC se ajuste al centro.
        */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 
            gap-x-4 gap-y-6 xl:gap-x-8! 
            mb-14! 
            w-full xl:w-fit! px-6! justify-center
        "
        >
          {academicsData.stats.map((stat) => (
            <div key={stat.id} className="group relative w-full">
              {" "}
              {/* w-full para llenar la celda en móvil */}
              {/* Fondo Blur: w-full en móvil para que se adapte, xl:w-58! fijo en PC */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-accent rounded-2xl w-full h-full xl:w-58! xl:h-22! opacity-50 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200 animate-tilt"></div>
              {/* Tarjeta: w-full en móvil para que se adapte, xl:w-56! fijo en PC */}
              <div className="relative h-full bg-linear-to-b from-blue-950/85 to-orange-900/85 border border-white/10 rounded-xl w-full xl:w-56! xl:h-19! pt-4! pb-4! flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-1">
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
              </div>
            </div>
          ))}
        </div>

        {/* --- 2. ZONA MAESTRA: TIMELINE + ACORDEÓN --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start w-full max-w-7xl mx-auto pb-32">
          {/* === COLUMNA IZQUIERDA: TIMELINE === */}
          <div className="w-full flex justify-center lg:justify-end">
            <Timeline items={academicsData.timeline} title="My Journey" />
          </div>

          {/* === COLUMNA DERECHA: ACORDEÓN (DIGITAL LOCKER) === */}
          <div className="w-full flex justify-center lg:justify-start">
            {/* Aquí llamamos al componente limpio, sin títulos extra */}
            <Accordion items={academicsData.lockerItems} title="The Evidence" />
          </div>
        </div>
      </div>
    </section>
  );
}
