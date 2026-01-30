"use client";

import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import ProjectsCarousel from "@/components/ui/ProjectsCarousel";
import ScrollAnimation from "@/components/ui/ScrollAnimation"; // 👈 1. IMPORTAR LA ANIMACIÓN
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20! overflow-hidden flex flex-col items-center justify-center"
    >
      {/* 1. FONDO (projectsData.backgroundImage) */}
      <SectionBackground img={projectsData.backgroundImage} />

      {/* 2. CONTENIDO */}
      <div className="w-full max-w-[90%] xl:max-w-[1500px] mx-auto relative z-10 text-center">
        {/* TÍTULO: Sube suave */}
        <ScrollAnimation direction="up">
          <SectionTitle
            title={projectsData.sectionTitle}
            subtitle={projectsData.sectionSubtitle}
          />
        </ScrollAnimation>

        {/* EL CARRUSEL: Sube un poquito después (delay 0.2) */}
        {/* Cambié el <div> por <ScrollAnimation> conservando sus clases de margen */}
        <ScrollAnimation
          direction="up"
          delay={0.2}
          className="mt-12 md:mt-20 w-full"
        >
          <ProjectsCarousel items={projectsData.projects} />
        </ScrollAnimation>
      </div>
    </section>
  );
}
