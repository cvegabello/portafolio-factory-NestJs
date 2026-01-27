"use client";

import { motion } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right"; // Agregamos soporte para direcciones
}

export default function ScrollAnimation({
  children,
  className = "",
  direction = "up", // Por defecto va hacia arriba
}: ScrollAnimationProps) {
  // Configuramos las variantes según la dirección
  const getVariants = () => {
    const distance = 80; // Qué tanto se mueve (en píxeles)

    const hidden = { opacity: 0, x: 0, y: 0 };

    // Calculamos de dónde viene
    if (direction === "up") hidden.y = distance;
    if (direction === "down") hidden.y = -distance;
    if (direction === "left") hidden.x = distance; // Viene de la derecha
    if (direction === "right") hidden.x = -distance; // Viene de la izquierda

    return {
      hidden,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut", // Movimiento suave al final
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // IMPORTANTE: Se activa un poco antes de llegar
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
