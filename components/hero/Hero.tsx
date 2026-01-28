"use client";

import Link from "next/link";
import Image from "next/image";
import { useTypewriter } from "@/hooks/useTypewriter";
import { ArrowRight, Download, BookOpen } from "lucide-react";
// 1. IMPORTAR LA DATA
import { heroData } from "@/data/hero";

export default function Hero() {
  const text = useTypewriter(heroData.typewriterWords);

  return (
    // SECCIÓN PRINCIPAL: Ocupa toda la pantalla (h-screen) y centra verticalmente (items-center)
    <section
      id="hero"
      className="relative w-full h-screen flex items-center overflow-hidden bg-black"
    >
      {/* === 1. FONDO GENERAL DE LA PANTALLA === */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.images.mainBackground} // Fondo general
          alt="Background Hero"
          fill
          className="object-cover opacity-100"
          priority
          quality={90}
        />
        {/* Gradiente oscuro general */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/90"></div>
      </div>
      {/* === 2. CONTENEDOR DE POSICIONAMIENTO (El que arregla el colapso) === */}
      {/* Usamos padding izquierdo (pl-...) para empujar el contenido a la izquierda de forma segura */}
      <div className="relative z-10 w-full h-full flex items-center justify-center xl:justify-start pl-6 md:pl-16 xl:pl-48! pr-6">
        {/* === 3. LA TARJETA (CARD) === */}
        <div className="w-[90%] mx-auto! md:w-full xl:w-full xl:mx-0! max-w-xl min-h-[420px] relative z-40 rounded-3xl border border-accent shadow-[0_0_30px_rgba(249,115,22,0.6)] overflow-hidden flex flex-col justify-center items-center text-justify">
          {/* --- CAPA A: IMAGEN DE FONDO PROPIA DE LA TARJETA --- */}
          {/* ⚠️ VERIFIQUE QUE ESTA IMAGEN EXISTA: public/img/BackGround-hero.jpeg */}
          <div className="absolute inset-0 -z-20">
            <Image
              src={heroData.images.cardBackground}
              alt="Card Background"
              fill
              className="object-cover Scale-110" // Un pequeño zoom para efecto depth
            />
          </div>
          {/* --- CAPA B: OVERLAY OSCURO INTENSO --- */}
          {/* Oscurece el fondo de la tarjeta para que el texto resalte perfecto */}
          <div className="absolute inset-0 bg-black/40 -z-10 "></div>
          {/* --- CAPA C: CONTENIDO DE TEXTO --- */}
          <div className="relative z-10 px-8 py-6! md:p-10 lg:p-12 flex flex-col items-center xl:items-start">
            {/* Título Pequeño */}
            <h2 className="text-accent text-lg md:text-2xl font-medium tracking-wide mb-3 ">
              {heroData.greeting}
            </h2>

            {/* NOMBRE (Tamaños reducidos para elegancia) */}
            <h1 className="text-xl md:text-2xl lg:text-[2rem] font-extrabold mb-[10px]! leading-none mt-[25px]! uppercase text-white">
              {heroData.name}{" "}
              <span className="text-accent">{heroData.surname}</span>
            </h1>

            {/* Subtítulo Azul */}
            <h3 className="text-blue-500 text-lg md:text-xl font-medium font-mono tracking-wider mb-[20px]!">
              {heroData.subtitle}
            </h3>

            {/* MÁQUINA DE ESCRIBIR (Espaciado arreglado) */}
            {/* Usamos 'gap-3' flex para separar el "I am a" del texto cambiante */}
            <div className="h-8 md:h-10 mb-[20px]! flex items-center gap-3">
              <span className="text-lg md:text-2xl font-bold text-blue-500 font-mono shrink-0">
                I am
              </span>
              <span className="text-lg md:text-2xl font-bold text-accent font-mono whitespace-nowrap">
                {text}
                <span className="animate-pulse text-white ml-1">|</span>
              </span>
            </div>

            {/* Descripción */}
            <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-[20px]! leading-relaxed py-4 border-y border-white/10 text-center italic">
              {heroData.description}
            </p>

            {/* BOTONES (Separados y grandes) */}
            <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-center relative z-30">
              {/* Botón 1: Principal Naranja */}
              <a
                href={heroData.buttons.primary.link}
                className="group relative px-6! py-3! bg-black text-accent border-2 border-accent font-bold text-base rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(249,115,22,0.9)] active:scale-95 text-center shadow-[0_0_20px_rgba(249,115,22,0.8)] flex items-center justify-center gap-2"
              >
                <span>{heroData.buttons.primary.text}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Botón 2: Secundario Borde */}
              <a
                href={heroData.buttons.secondary.link} // Asegúrese que esto sea "#academics" en su data
                className="relative cursor-pointer px-6! py-3! bg-black border-2 border-white/70 text-white font-bold text-base rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-center hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
              >
                <BookOpen className="w-5 h-5" />
                <span>{heroData.buttons.secondary.text}</span>
              </a>
            </div>
          </div>{" "}
          {/* Fin Contenido Tarjeta */}
        </div>{" "}
        {/* Fin Tarjeta */}
      </div>{" "}
      {/* Fin Contenedor de Posicionamiento */}
    </section>
  );
}
