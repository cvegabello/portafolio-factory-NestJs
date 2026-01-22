import React from 'react';
import { GraduationCap, Code, BookOpen, Trophy, Briefcase, Star, Cpu, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: string | number;
  year: string;
  title: string;
  description: string;
  details?: string;
  school: string;
  iconName: string;
}

interface ReactorProps {
  item: TimelineItem;
  buttonRef?: React.Ref<HTMLButtonElement>;
  onOpen: (item: TimelineItem) => void;
  side: 'left' | 'right';
}

const getIcon = (iconName: string, size: number = 20) => {
  switch (iconName.toLowerCase()) {
    case 'code': return <Code size={size} />;
    case 'book': return <BookOpen size={size} />;
    case 'trophy': return <Trophy size={size} />;
    case 'work': return <Briefcase size={size} />;
    case 'star': return <Star size={size} />;
    case 'cpu': return <Cpu size={size} />;
    default: return <GraduationCap size={size} />;
  }
};

export default function ReactorTimeLine({ item, buttonRef, onOpen, side }: ReactorProps) {
  const isRightSide = side === 'right'; // El reactor va a la DERECHA (para items de la izquierda)

  return (
    <div className={`
      hidden md:flex absolute top-1/2 -translate-y-1/2 items-center z-20
      /* Posición base: pegado al borde del contenedor de texto */
      ${isRightSide ? 'right-0' : 'left-0'}
    `}>
       
       {/* BRAZO CONECTOR */}
       <div className={`
          h-1 w-10! bg-accent/40 absolute group-hover:bg-accent transition-colors 
          shadow-[0_0_10px_rgba(249,115,22,0)_group-hover:shadow-[0_0_10px_rgba(249,115,22,0.5)]
          /* El brazo sale hacia afuera buscando el centro */
          ${isRightSide ? 'right-4 translate-x-full' : 'left-4 -translate-x-full'}
       `}></div>
       
       {/* BOTÓN CÍRCULO */}
       <motion.button 
          ref={buttonRef} 
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onOpen(item)}
          className={`
              w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shrink-0
              bg-[#252525] border-2 border-[#1a1a1a] text-accent/70 shadow-[inset_2px_2px_5px_#000,inset_-2px_-2px_5px_#333]
              hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
              group/icon
              absolute
              
              /* 🔥 LA FORMULA MÁGICA RESTAURADA 🔥 */
              /* 1.75rem es la MITAD del gap-x-14. */
              /* 50% es la MITAD del botón. */
              /* Esto lo pone EXACTAMENTE en el centro del carril. */
              
              ${isRightSide 
                ? 'right-0 translate-x-[calc(1.75rem+50%)]' 
                : 'left-0 -translate-x-[calc(1.75rem+50%)]'
              }
          `}
       >
          {getIcon(item.iconName, 24)}

          {/* TOOLTIP */}
          <div className="
              absolute -top-9 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 
              whitespace-nowrap px-3! py-1! rounded bg-black/90 text-white text-[11px] font-medium tracking-wide pointer-events-none 
              border border-white/10 shadow-lg translate-y-2 group-hover/icon:translate-y-0
          ">
              See more... <MousePointerClick className="inline ml-1 w-3 h-3"/>
          </div>
       </motion.button>
    </div>
  );
}