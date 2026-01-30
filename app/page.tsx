import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Academics from "@/components/academics/Academics";
import Athletics from "@/components/athletics/Athletics";
import Projects from "@/components/projects/Projects";
import References from "@/components/references/References";
import Moments from "@/components/moments/Moments";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {" "}
      {/* Asegúrese del fondo negro global */}
      {/* 1. EL HERO VA SUELTO (Para que cargue de una) */}
      <Hero />
      {/* 2. El resto sí lleva animación al bajar */}
      <About />
      <Academics />
      <Athletics />
      <Projects />
      <References />
      <Moments />
      {/* 3. El Contacto entra por la derecha */}
      <Contact />
      {/* 4. Footer al final */}
      <Footer />
    </main>
  );
}
