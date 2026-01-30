"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import MomentsCarousel from "@/components/ui/MomentsCarousel";
import ScrollAnimation from "@/components/ui/ScrollAnimation"; // 👈 1. IMPORTAR LA ANIMACIÓN
import { momentsData } from "@/data/moments";

export default function Moments() {
  return (
    <section
      id="moments"
      className="relative min-h-screen py-20! overflow-hidden flex flex-col items-center justify-center"
    >
      {/* 1. FONDO */}
      <SectionBackground img={momentsData.backgroundImage} />

      {/* 2. CONTENIDO */}
      <div className="w-full max-w-[90%] xl:max-w-[1500px] mx-auto relative z-10 text-center">
        {/* TÍTULO: Sube suave */}
        <ScrollAnimation direction="up">
          <SectionTitle
            title={momentsData.sectionTitle}
            subtitle={momentsData.sectionSubtitle}
          />
        </ScrollAnimation>

        {/* CARRUSEL: Sube después (delay 0.2) */}
        <ScrollAnimation
          direction="up"
          delay={0.2}
          className="mt-12 md:mt-20 w-full"
        >
          <MomentsCarousel items={momentsData.moments} />
        </ScrollAnimation>
      </div>
    </section>
  );
}
