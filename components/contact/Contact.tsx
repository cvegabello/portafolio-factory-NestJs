"use client";

import ContactInfo from "@/components/ui/ContactInfo";
import ContactForm from "@/components/ui/ContactForm";
// Borramos la importación directa de motion porque ya la usa ScrollAnimation
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollAnimation from "@/components/ui/ScrollAnimation"; // 👈 Importamos nuestra arma secreta
import { contactData } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen! bg-[#050505] py-20! px-4! sm:px-6! lg:px-8! overflow-hidden"
    >
      <div className="max-w-7xl mx-auto!">
        {/* El título puede entrar desde arriba o abajo, como prefiera */}
        <ScrollAnimation direction="up">
          <SectionTitle title={contactData.sectionTitle} />
        </ScrollAnimation>

        {/* 👇 OJO: Cambié motion.div por un div normal. 
            El grid ya no se anima, se animan los de adentro. */}
        <div className="grid mt-18! grid-cols-1 lg:grid-cols-2 gap-12! lg:gap-16! items-start">
          {/* COLUMNA IZQUIERDA: Entra moviéndose hacia la DERECHA (direction="right") */}
          <div className="w-full">
            <ScrollAnimation direction="right" className="h-full">
              <ContactInfo />
            </ScrollAnimation>
          </div>

          {/* COLUMNA DERECHA: Entra moviéndose hacia la IZQUIERDA (direction="left") */}
          <div className="w-full">
            <ScrollAnimation direction="left" delay={0.2} className="h-full">
              <ContactForm />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
