"use client";

import Link from "next/link";
import Image from "next/image";
import { useTypewriter } from "@/hooks/useTypewriter";
import { ArrowRight, BookOpen } from "lucide-react";
import { heroData } from "@/data/hero";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
// 👇 1. IMPORTANTE: Importamos motion para animar el fondo
import { motion } from "framer-motion";

export default function Hero() {
  const text = useTypewriter(heroData.typewriterWords);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center overflow-hidden bg-black"
    >
      {/* === 1. FONDO GENERAL ANIMADO (BLUR + ZOOM) === */}
      {/* Cambiamos 'div' por 'motion.div' para darle vida */}
      <motion.div
        initial={{ filter: "blur(15px)", scale: 1.1 }} // Empieza borroso y con zoom
        animate={{ filter: "blur(0px)", scale: 1 }} // Termina nítido y normal
        transition={{ duration: 1.5, ease: "easeOut" }} // Se demora 1.5s en aclarar
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroData.images.mainBackground}
          alt="Background Hero"
          fill
          className="object-cover opacity-100"
          priority
          quality={90}
        />
        {/* Gradiente oscuro general */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/90"></div>
      </motion.div>

      {/* === 2. CONTENEDOR DE POSICIONAMIENTO === */}
      <div className="relative z-10 w-full h-full flex items-center justify-center xl:justify-start pl-6 md:pl-16 xl:pl-48! pr-6">
        {/* 👇 ANIMACIÓN DE LA TARJETA (Aparición Fantasma) */}
        <ScrollAnimation
          direction="none"
          delay={0.8} // 👈 Le subí un poquito el delay para que primero se aclare el fondo y LUEGO aparezca el texto
          className="w-full flex justify-center xl:justify-start"
        >
          {/* === 3. LA TARJETA (CARD) === */}
          <div className="w-[90%] mx-auto! md:w-full xl:w-full xl:mx-0! max-w-xl min-h-[420px] relative z-40 rounded-3xl border border-accent shadow-[0_0_30px_rgba(249,115,22,0.6)] overflow-hidden flex flex-col justify-center items-center text-justify">
            {/* Fondo de la tarjeta */}
            <div className="absolute inset-0 -z-20">
              <Image
                src={heroData.images.cardBackground}
                alt="Card Background"
                fill
                className="object-cover scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 -z-10 "></div>

            {/* Contenido Texto */}
            <div className="relative z-10 px-8 py-6! md:p-10 lg:p-12 flex flex-col items-center xl:items-start">
              <h2 className="text-accent text-lg md:text-2xl font-medium tracking-wide mb-3 ">
                {heroData.greeting}
              </h2>

              <h1 className="text-xl md:text-2xl lg:text-[2rem] font-extrabold mb-[10px]! leading-none mt-[25px]! uppercase text-white">
                {heroData.name}{" "}
                <span className="text-accent">{heroData.surname}</span>
              </h1>

              <h3 className="text-blue-500 text-lg md:text-xl font-medium font-mono tracking-wider mb-[20px]!">
                {heroData.subtitle}
              </h3>

              <div className="h-8 md:h-10 mb-[20px]! flex items-center gap-3">
                <span className="text-lg md:text-2xl font-bold text-blue-500 font-mono shrink-0">
                  I am
                </span>
                <span className="text-lg md:text-2xl font-bold text-accent font-mono whitespace-nowrap">
                  {text}
                  <span className="animate-pulse text-white ml-1">|</span>
                </span>
              </div>

              <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-[20px]! leading-relaxed py-4 border-y border-white/10 text-center italic">
                {heroData.description}
              </p>

              <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-center relative z-30">
                <a
                  href={heroData.buttons.primary.link}
                  className="group relative px-6! py-3! bg-black text-accent border-2 border-accent font-bold text-base rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(249,115,22,0.9)] active:scale-95 text-center shadow-[0_0_20px_rgba(249,115,22,0.8)] flex items-center justify-center gap-2"
                >
                  <span>{heroData.buttons.primary.text}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={heroData.buttons.secondary.link}
                  className="relative cursor-pointer px-6! py-3! bg-black border-2 border-white/70 text-white font-bold text-base rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-center hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>{heroData.buttons.secondary.text}</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
