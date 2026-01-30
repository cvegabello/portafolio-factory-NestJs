"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import ReferencesCarousel from "@/components/ui/ReferencesCarousel";
import ScrollAnimation from "@/components/ui/ScrollAnimation"; // 👈 1. IMPORTAR LA ANIMACIÓN
import { referencesData } from "@/data/references";

export default function References() {
  return (
    <section
      id="references"
      className="relative min-h-screen py-20! overflow-hidden flex flex-col items-center justify-center"
    >
      {/* 1. FONDO */}
      <SectionBackground img={referencesData.backgroundImage} />

      {/* 2. CONTENIDO */}
      <div className="w-full max-w-[90%] xl:max-w-[1500px] mx-auto relative z-10 text-center">
        {/* TÍTULO: Sube suave */}
        <ScrollAnimation direction="up">
          <SectionTitle
            title={referencesData.sectionTitle}
            subtitle={referencesData.sectionSubtitle}
          />
        </ScrollAnimation>

        {/* CARRUSEL: Sube después (delay 0.2) */}
        {/* Cambié el <div> por <ScrollAnimation> conservando las clases */}
        <ScrollAnimation
          direction="up"
          delay={0.2}
          className="mt-12 md:mt-20 w-full"
        >
          <ReferencesCarousel items={referencesData.testimonials} />
        </ScrollAnimation>
      </div>
    </section>
  );
}
