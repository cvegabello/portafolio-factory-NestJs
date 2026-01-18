// Definimos la estructura (Interface) para que TypeScript nos ayude a no cometer errores
export interface HeroConfig {
    greeting: string;
    name: string;
    surname: string;
    subtitle: string;
    typewriterWords: string[];
    description: string;
    images: {
      mainBackground: string; // El fondo de toda la pantalla
      cardBackground: string; // El fondo de la tarjetica
    };
    buttons: {
      primary: { text: string; link: string };
      secondary: { text: string; link: string };
    };
  }
  
  // === AQUÍ ES DONDE SE CONFIGURA TODO ===
  // En el futuro, esto vendrá de una Base de Datos (Firebase, Supabase, MongoDB, etc.)
  export const heroData: HeroConfig = {
    greeting: "Hello, I am",
    name: "SANTIAGO",
    surname: "VEGA",
    subtitle: "Compiling Excellence",
    typewriterWords: [
        "a Disciplined Athlete",
        "an Excelent Scholar Student",
        "a Problem Solver",
        "a Devoted Son",
        "a Loyal Teammate",
        "a Big Dreamer",
        "a Future Leader"
    ],
    description: "Tackling complex algorithms like defensive lines. A prospective Computer Science major ready to deliver performance, logic, and results.",
    images: {
      mainBackground: "/img/hero-bg.png",
      cardBackground: "/img/BackGround-hero.jpeg"
    },
    buttons: {
      primary: {
        text: "View Profile",
        link: "#about"
      },
      secondary: {
        text: "Academics",
        link: "#academics"
      }
    }
  };