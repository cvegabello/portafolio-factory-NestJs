'use client';

import React from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import SectionBackground from "@/components/ui/SectionBackground";
import ReferencesCarousel from "@/components/ui/ReferencesCarousel"; // Importamos el nuevo carrusel
import { referencesData } from '@/data/references'; 

export default function References() {
  return (
    <section id="references" className="relative min-h-screen py-20! overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. FONDO */}
      <SectionBackground img={referencesData.backgroundImage} />

      {/* 2. CONTENIDO */}
      <div className="w-full max-w-[90%] xl:max-w-[1500px] mx-auto relative z-10 text-center">
        
        <SectionTitle 
          title={referencesData.sectionTitle} 
          subtitle={referencesData.sectionSubtitle} 
        />

        <div className="mt-12 md:mt-20 w-full">
           {/* El Carrusel de Referencias */}
           <ReferencesCarousel items={referencesData.testimonials} />
        </div>

      </div>
    </section>
  );
}