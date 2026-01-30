"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  delay?: number;
}

export default function ScrollAnimation({
  children,
  direction = "up",
  className = "",
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  // 👇 TRUCO: margin "-100px" obliga a que el elemento entre BASTANTE en pantalla antes de animarse
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getVariants = (): Variants => {
    // 👇 CAMBIO: Aumenté la distancia a 80px para que el movimiento sea más notorio
    const distance = 60;

    if (direction === "none") {
      return {
        hidden: { opacity: 0, scale: 0.95 }, // Un pequeño zoom in para que se note más
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, delay, ease: "easeOut" },
        },
      };
    }

    return {
      hidden: {
        opacity: 0,
        // Lógica de dirección
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x:
          direction === "left"
            ? distance
            : direction === "right"
              ? -distance
              : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          // 👇 CAMBIO: 0.8s es más lento y "cinematográfico"
          duration: 0.9,
          delay: delay,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }} // Sincronizado con el hook
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
