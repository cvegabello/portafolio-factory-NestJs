import React from 'react';

interface SectionBackgroundProps {
  img?: string;
  overlayClass?: string;
}

export default function SectionBackground({ 
  img, 
  // CAMBIO 1: Reemplazamos el color plano por el gradiente original (de 0.65 a 0.75)
  // Usamos clases arbitrarias de Tailwind [] para ser exactos con su CSS
  overlayClass = "bg-gradient-to-b from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0.75)]" 
}: SectionBackgroundProps) {
  
  if (!img) return null;

  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          // CAMBIO 2: La clave del éxito. Cambiamos 'scroll' por 'fixed'
          backgroundAttachment: 'fixed' 
      }}
    >
      {/* La capa oscura con el gradiente exacto */}
      <div className={`absolute inset-0 ${overlayClass}`}></div>
    </div>
  );
}