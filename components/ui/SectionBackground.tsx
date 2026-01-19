// Archivo: src/components/ui/SectionBackground.tsx
import React from 'react';

interface SectionBackgroundProps {
  img?: string; // Opcional: puede venir o no venir
  overlayClass?: string; // Opcional: por si quiere más o menos oscuridad (default: bg-black/80)
}

export default function SectionBackground({ 
  img, 
  overlayClass = "bg-black/80 backdrop-blur-[1px]" // Valor por defecto igual al que usted tenía
}: SectionBackgroundProps) {
  
  // LA MAGIA: Si no mandan imagen, el componente se autodestruye (no pinta nada)
  // Esto permite que se vea el fondo rojo global "Death Star" si no hay foto específica.
  if (!img) return null;

  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none" // pointer-events-none para que no bloquee clics
      style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // El efecto Parallax elegante
      }}
    >
      {/* La capa oscura para que el texto se lea bien */}
      <div className={`absolute inset-0 ${overlayClass}`}></div>
    </div>
  );
}

