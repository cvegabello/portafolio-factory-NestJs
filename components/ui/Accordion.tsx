"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  X,
  FileText,
  PenTool,
  Trophy,
  Video,
  Download,
  PlayCircle,
  FolderOpen,
  ExternalLink,
} from "lucide-react";

interface LockerFile {
  name: string;
  url: string;
  type: "download" | "video";
}

interface LockerItem {
  title: string;
  iconName: string;
  files: LockerFile[];
}

interface AccordionProps {
  items: LockerItem[];
  title?: string;
  subtitle?: string;
}

const getIcon = (iconName: string, size: number = 28) => {
  switch (iconName) {
    case "FileText":
      return <FileText size={size} />;
    case "PenTool":
      return <PenTool size={size} />;
    case "Trophy":
      return <Trophy size={size} />;
    case "Video":
      return <Video size={size} />;
    default:
      return <FolderOpen size={size} />;
  }
};

export default function Accordion({ items, title, subtitle }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    // --- CÁPSULA CONTENEDORA ---
    <div
      className="
      relative w-[90%]! md:w-full max-w-2xl h-[520px] rounded-3xl 
      bg-gray/10 backdrop-blur-md
      overflow-y-auto [&::-webkit-scrollbar]:w-[9px] [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-thumb-accent scrollbar-track-[#1a1a1a]/80
      shadow-[inset_10px_10px_20px_rgba(0,0,0,0.5),inset_-10px_-10px_20px_rgba(255,255,255,0.05)]
      border border-white/40
      /* Mantenemos el padding generoso que le gustó */
      p-2! md:px-12! md:pt-6!
    "
    >
      {/* HEADER DECORATIVO (AHORA SIEMPRE CENTRADO) */}
      {(title || subtitle) && (
        <div className="mb-8! flex flex-col items-center justify-center">
          {title && (
            <h3 className="text-2xl font-bold text-white tracking-wider drop-shadow-md">
              {title}
            </h3>
          )}

          {/* Decoración igual a la del Timeline */}
          <div className="h-1 w-12 bg-accent rounded-full mt-2 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>

          {/* Subtítulo opcional */}
          {subtitle && (
            <p className="text-sm text-gray-400 font-mono mt-3">{subtitle}</p>
          )}
        </div>
      )}

      {/* LISTA DE ITEMS */}
      <div className="w-full flex flex-col gap-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-2xl border-2 transition-all duration-300
                ${
                  isOpen
                    ? "bg-[#0a0a0a] border-accent shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                    : "bg-[#1a1a1a] border-accent/30 hover:border-accent/70"
                }
              `}
            >
              <button
                onClick={() => toggleItem(index)}
                // 1. CURSOR MANITA (cursor-pointer) AGREGADO
                className="w-full flex items-center justify-between p-4! text-left group outline-none cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="text-accent">
                    {getIcon(item.iconName, 32)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-medium mt-1">
                      {item.files.length}{" "}
                      {item.files.length === 1 ? "File" : "Files"} inside
                    </p>
                  </div>
                </div>
                <div className="text-accent">
                  {isOpen ? <X size={28} /> : <Plus size={28} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    // 2. FONDO MÁS CLARO (TENUE)
                    // Usamos un gris muy oscuro (#111) que es más claro que el negro puro del header (#0a0a0a)
                    // y le damos un borde superior sutil para separarlo visualmente.
                    className="bg-[#111] border-t border-white/5"
                  >
                    <div className="px-8! pb-6! pt-4!">
                      {" "}
                      {/* pt-6 para darle aire arriba de los links */}
                      {/* Quitamos la línea separadora vieja porque ya pusimos border-t arriba */}
                      <div className="flex flex-col gap-3">
                        {item.files.map((file, i) => (
                          <a
                            key={i}
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center justify-between p-4 rounded-xl bg-[#1a1a1a] border border-white/5
                              hover:bg-accent/10 px-3! hover:border-accent/50 transition-all duration-200 group/file
                              cursor-pointer
                            "
                          >
                            <div className="flex items-center gap-4">
                              <div className="text-gray-500 group-hover/file:text-accent transition-colors">
                                {file.type === "download" ? (
                                  <Download size={20} />
                                ) : (
                                  <PlayCircle size={20} />
                                )}
                              </div>
                              <span className="text-base text-gray-300 group-hover/file:text-white font-medium transition-colors">
                                {file.name}
                              </span>
                            </div>
                            <ExternalLink
                              size={16}
                              className="text-gray-600 group-hover/file:text-accent opacity-0 group-hover/file:opacity-100 transition-all transform group-hover/file:translate-x-1"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
