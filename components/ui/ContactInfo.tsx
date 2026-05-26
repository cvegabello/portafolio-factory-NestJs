"use client";

import { contactData } from "@/data/contact";
import { motion } from "framer-motion";

export default function ContactInfo() {
  const { sectionSubtitle, description, contactInfo, socials } = contactData;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col justify-center text-left"
    >
      {/* Title & Description */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-3xl font-bold text-white mb-6!">
          {sectionSubtitle}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-10!">
          {description}
        </p>
      </div>

      {/* Contact List */}
      <div className="space-y-6! mb-12!">
        {contactInfo.map((item) => (
          <div key={item.id} className="flex items-center gap-4 group">
            <div className="p-5! rounded-full bg-white/15 group-hover:bg-accent/30 transition-colors duration-300">
              <item.icon className="w-6 h-6 text-accent" />
            </div>
            {item.href ? (
              <a
                href={item.href}
                className="text-lg text-white group-hover:text-accent transition-colors duration-300"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-lg text-white">{item.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Socials */}
      <div className="flex items-center gap-8">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="relative p-5! rounded-full border border-gray-700 hover:border-accent text-white hover:text-accent hover:scale-110 transition-all duration-300 group cursor-pointer"
          >
            <social.icon className="w-6! h-6!" />
            
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-black/95 backdrop-blur-sm text-xs font-semibold text-white rounded-lg border border-white/15 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap shadow-[0_0_15px_rgba(249,115,22,0.3)] z-30 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-black/95">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
