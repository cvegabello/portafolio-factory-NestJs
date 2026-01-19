import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string; // Opcional: por si necesitamos meterle clases extra desde afuera
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    // Juntamos las clases base con las que vengan extra (className)
    <div className={`flex flex-col items-center mb-10! mt-10! ml-0 lg:ml-40 ${className}`}>
      
      {/* El Título */}
      <h2 className="text-4xl! md:text-5xl font-bold text-white tracking-tight text-center lg:text-left">
        {title}
      </h2>
      
      {/* La Barrita Naranja (Accent) */}
      <div className="w-24 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)] mt-5!"></div>
    
    </div>
  );
}