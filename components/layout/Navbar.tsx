'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks, contactButton } from '@/data/navigation';
import { 
  Home, 
  User, 
  GraduationCap, 
  Trophy, 
  Code, 
  MessageSquareQuote, 
  Camera, 
  Send,
  X 
} from 'lucide-react';


const getIcon = (name: string) => {
  switch (name) {
    case 'Home': return <Home size={20} />;
    case 'Profile': return <User size={20} />;
    case 'Academics': return <GraduationCap size={20} />;
    case 'Athletics': return <Trophy size={20} />;
    case 'Projects': return <Code size={20} />;
    case 'References': return <MessageSquareQuote size={20} />;
    case 'Moments': return <Camera size={20} />;
    default: return <Home size={20} />;
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 1. BARRA DE NAVEGACIÓN (Desktop & Mobile Header) */}
      <nav className="fixed top-0 w-full z-50 flex justify-center transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-white/10">
        
        {/* Usamos px-12 como acordamos para separar de los bordes */}
        <div className="w-full max-w-[1200px] mx-auto px-12 md:px-24 h-full">
          
          <div className="flex items-center justify-between h-20 ml-10!">
            
            {/* LOGO RESPONSIVO */}
            <Link href="/" className="flex items-center hover:scale-110 transition-all duration-300 shrink-0 hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.9)]">
              <Image
                src="/img/logoSanti.png"
                alt="Logo"
                width={65} 
                height={65}
                // CAMBIO 1: w-12 (48px en móvil) | md:w-[65px] (Original en PC)
                // Esto hace que se vea pequeñito y elegante en el celular
                className="object-contain w-12 h-12 md:w-[65px] md:h-[65px]"
                priority
              />
            </Link>

            {/* MENÚ DESKTOP (Solo PC) */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-[15px] font-semibold text-foreground hover:text-accent transition-colors whitespace-nowrap uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                href={contactButton.href}
                className="nav-link inline-flex items-center justify-center px-8! py-2 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-black! text-[15px] font-bold transition-all duration-300 whitespace-nowrap ml-8"
              >
                {contactButton.name}
              </Link>
            </div>

            {/* BOTÓN HAMBURGUESA (MÓVIL) */}
            {/* CAMBIO 2: Agregué 'cursor-pointer' explícito y mantuve tu '!mr-10' */}
            <div className="md:hidden flex items-center mr-10!">
              <button
                onClick={toggleMenu}
                className="cursor-pointer text-accent hover:text-white transition-colors p-2 border-2 border-accent rounded-lg hover:bg-accent "
                aria-label="Toggle menu"
              >
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. OVERLAY OSCURO */}
      <div 
        className={`fixed inset-0 bg-black/70 z-90 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={toggleMenu} 
      />

      {/* 3. SIDEBAR MENÚ (MÓVIL) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#0a0a0a] z-100 shadow-[-5px_0_20px_rgba(0,0,0,0.8)] border-l border-accent/20 transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
          <div className="flex flex-col h-full overflow-y-auto relative p-6">
            
            {/* BOTÓN CERRAR */}
            <button 
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-white hover:text-accent transition-transform hover:rotate-90 p-2 z-50 cursor-pointer"
            >
              <X size={28} />
            </button>

            {/* CABECERA DE PERFIL */}
            <div 
              className="flex flex-col items-center mb-10 text-center"
              style={{ marginTop: '120px' }} 
            >
              <div className="p-[3px] rounded-full border-2 border-dashed border-accent mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-black bg-neutral-900">
                  <Image 
                    src="/img/profile-about.png" 
                    alt="Profile" 
                    width={80} 
                    height={80} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">Santiago Vega</h3>
              <span className="bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-bold border border-accent/20">
                Student-Athlete
              </span>
            </div>

            {/* LISTA DE NAVEGACIÓN */}
            <div className="flex flex-col pb-10" style={{ gap: '20px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  // CAMBIO 3: 'rounded-xl' (más redondeado) y 'hover:bg-accent/15'
                  // Esto crea el efecto de "rectangulito" o cápsula al pasar el mouse
                  className="group flex items-center p-3 rounded-xl transition-all duration-300 hover:bg-accent/15 hover:translate-x-2 border border-transparent hover:border-accent/10"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent mr-4 transition-colors group-hover:bg-accent group-hover:text-black shadow-sm shrink-0">
                    {getIcon(link.name)}
                  </div>
                  
                  <span className="text-gray-300 font-medium text-[16px] group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}

              <Link
                href={contactButton.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center p-3 rounded-xl transition-all duration-300 hover:bg-accent/15 hover:translate-x-2 mt-2 border border-transparent hover:border-accent/10"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4 transition-colors group-hover:bg-accent group-hover:text-black border border-accent/20 shrink-0">
                  <Send size={20} />
                </div>
                <span className="text-accent font-bold text-[16px]">
                  {contactButton.name}
                </span>
              </Link>
            </div>

          </div>
      </div>
    </>
  );
}