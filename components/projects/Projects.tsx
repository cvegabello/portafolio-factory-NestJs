'use client';

import React from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import ProjectsCarousel from "@/components/ui/ProjectsCarousel"; // Importamos el nuevo carrusel
import { projectsData } from '@/data/projects'; 

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-20! overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. FONDO (projectsData.backgroundImage) */}
      <SectionBackground img={projectsData.backgroundImage} />

      {/* 2. CONTENIDO */}
      <div className="w-full max-w-[90%] xl:max-w-[1500px] mx-auto relative z-10 text-center">
        
        <SectionTitle 
          title={projectsData.sectionTitle} 
          subtitle={projectsData.sectionSubtitle} 
        />

        <div className="mt-12 md:mt-20 w-full">
           {/* El Carrusel Volteable */}
           <ProjectsCarousel items={projectsData.projects} />
        </div>

      </div>
    </section>
  );
}