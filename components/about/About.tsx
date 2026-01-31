"use client";

import Image from "next/image";
import { aboutData } from "@/data/about";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import {
  MapPin,
  Calendar,
  Trophy,
  Languages,
  Brain,
  GraduationCap,
  Gamepad2,
  Home,
  FileText, // 👈 NUEVO: Icono de archivo
  Download, // 👈 NUEVO: Icono de descarga
} from "lucide-react";

const getIcon = (iconName: string) => {
  const iconClass =
    "w-7 h-7 text-accent drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]";

  switch (iconName) {
    case "MapPin":
      return <MapPin className={iconClass} />;
    case "Calendar":
      return <Calendar className={iconClass} />;
    case "Trophy":
      return <Trophy className={iconClass} />;
    case "Languages":
      return <Languages className={iconClass} />;
    case "Brain":
      return <Brain className={iconClass} />;
    case "GraduationCap":
      return <GraduationCap className={iconClass} />;
    case "Gamepad2":
      return <Gamepad2 className={iconClass} />;
    default:
      return null;
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-6! overflow-hidden flex items-center"
    >
      <div className="max-w-[1700px] items-center relative z-10">
        {/* 2. Título animado hacia arriba */}
        <ScrollAnimation direction="up">
          <SectionTitle title={aboutData.sectionTitle} />
        </ScrollAnimation>

        {/***********Inicio del contenedor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.0fr_2.0fr] gap-12 lg:gap-10 xl:gap-18 xl:ml-28! items-center ">
          {/* COLUMNA 1: FOTO */}
          <ScrollAnimation
            direction="right"
            className="flex flex-col items-center lg:items-end relative lg:order-1"
          >
            <div className="relative w-[290px]! h-[400px]! md:w-[350px] md:h-[450px] group">
              <div className="absolute top-6 left-6 w-full h-full border-2 border-accent rounded-xl z-0 box-border shadow-[0_0_20px_rgba(249,115,22,0.9)] transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.9)]"></div>
              <div className="relative w-full h-full z-10 bg-neutral-900 border border-white/10 shadow-2xl rounded-xl">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-600 z-20 rounded-tl-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-blue-600 z-20 rounded-br-xl"></div>
                <Image
                  src={aboutData.image}
                  alt="Profile"
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* 👇👇👇 AQUÍ INICIA EL BOTÓN NUEVO 👇👇👇 */}
            <div className="mt-14! flex justify-center lg:justify-end px-4! lg:pl-20!">
              <a
                href="/docs/resume.pdf" // ⚠️ RECUERDE: El archivo debe estar en la carpeta 'public'
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group flex items-center gap-3 px-4! py-4! 
                    border-2 border-accent hover:bg-orange-600 text-white 
                    font-bold text-lg rounded-2xl 
                    transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
                  "
              >
                <FileText className="w-5! h-5!" />
                <span>Download Resume</span>
                <Download className="w-5! h-5! opacity-70 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
            {/* 👆👆👆 AQUÍ TERMINA EL BOTÓN NUEVO 👆👆👆 */}
          </ScrollAnimation>

          {/* COLUMNA 2: TARJETA DE BIO + BOTÓN */}
          <ScrollAnimation direction="left" delay={0.2} className="order-2">
            <div className="mx-4! mb-8! pb-4! lg:pb-0! lg:mb-0! lg:mx-0! bg-[#1a1512]/70 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-sm min-h-[580px] flex flex-col transition-all duration-500 ease-out hover:border-accent hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] hover:scale-[1.02] hover:-translate-y-1">
              <h3 className="relative text-3xl md:text-4xl font-extrabold text-white mt-6! pl-10!">
                {aboutData.greeting.prefix}
                <span className="text-accent drop-shadow-[0_0_15px_rgba(249,115,22,0.7)] ml-4!">
                  {aboutData.greeting.name}
                </span>
              </h3>

              <div className="flex flex-row mt-6! ">
                <div className="h-22 w-2 bg-accent-secondary rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] ml-8!"></div>
                <p className="text-lg md:text-xl text-gray-200  font-medium pl-2! pr-6! text-justify">
                  {aboutData.intro.text}
                  <strong className="text-white">
                    {aboutData.intro.highlighted[0]}
                  </strong>{" "}
                  and{" "}
                  <strong className="text-white">
                    {aboutData.intro.highlighted[1]}
                  </strong>
                  .
                </p>
              </div>

              <p className="text-gray-400 text-base leading-relaxed mt-6! text-justify pl-8! pr-6! whitespace-pre-line">
                {aboutData.bio}
              </p>

              {/* Grid de Datos */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8! px-6! xl:mx-2!">
                {aboutData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#0000004d] p-4! rounded-xl border border-white/25 transition-all duration-300 group hover:border-blue-500 hover:bg-blue-600/20 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1"
                  >
                    <div className="p-1! rounded-lg text-accent group-hover:text-white transition-colors">
                      {getIcon(stat.icon)}
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                        {stat.label}
                      </span>
                      <span className="text-[14px] text-white font-bold">
                        {stat.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
