import { MapPin, Calendar, Trophy, Languages } from "lucide-react";
// Importamos iconos de Lucide (versión moderna de FontAwesome)

export interface AboutConfig {
  sectionTitle: string;
  image: string;
  greeting: {
    prefix: string;
    name: string;
  };
  intro: {
    text: string;
    highlighted: string[]; // Palabras clave en negrilla (Technology, Sports Strategy)
  };
  bio: string;
  stats: {
    icon: string; // Nombre del icono para identificarlo
    label: string;
    text: string;
  }[];
}

export const aboutData: AboutConfig = {
  sectionTitle: "Profile & Bio",
  image: "/img/profile-about.png", // Asegúrese de tener esta imagen en public/img/
  greeting: {
    prefix: "Who is",
    name: "Santiago?",
  },
  // Nota: Aquí separamos el texto para poder estilizar palabras clave.
  // En una versión V2 más pro, podríamos usar Markdown.
  intro: {
    text: "I was born in Bogotá, Colombia, but have lived and grown in the United States since the age of five. Fluent in both English and Spanish, I navigate both cultures with ease, and I bring the same balance to my ",
    highlighted: ["Academic", "Athletic Life"],
  },
  bio: "Mathematics and Computer Science challenge me to think critically. Consistently ranking at the top of my class at Schalmont High School, my goal is to pursue a degree in Computer Science or Finance at a top-tier university, combining analytical logic with strategic thinking. \n\n Driven by the unconditional support of my family, I channel the discipline of Soccer—patience, vision, and teamwork—into my academic work. Whether on the field or in the classroom, I am a competitor and a creator, ready for the next level.",
  stats: [
    {
      icon: "MapPin",
      label: "Current Base",
      text: "Schenectady, NY, USA",
    },
    {
      icon: "Calendar",
      label: "Born",
      text: "Jan 12, 2009",
    },
    {
      icon: "Languages",
      label: "Languages",
      text: "Eng (C1) / Spa (Nat)",
    },
    {
      icon: "Brain", // Icono de cerebro para el Major
      label: "Academic Focus",
      text: "Computer Science & Finance",
    },
    {
      icon: "GraduationCap", // Gorrito de grado
      label: "School/Class",
      text: "Schalmont High School / 2027",
    },
    {
      icon: "Gamepad2", // O 'Music', 'Plane' dependiendo del hobby
      label: "Interests",
      text: "Soccer, Chess, Programming",
    },
  ],
};
