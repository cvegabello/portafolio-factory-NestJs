import { MapPin, Calendar, Trophy, Languages } from 'lucide-react'; 
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
    name: "Santiago?"
  },
  // Nota: Aquí separamos el texto para poder estilizar palabras clave.
  // En una versión V2 más pro, podríamos usar Markdown.
  intro: {
    text: "I was born in Bogotá, Colombia, but have lived and grown in the United States since the age of five. Fluent in both English and Spanish, I navigate both cultures with ease, and I bring the same balance to my ",
    highlighted: ["Academic", "Athletic Life"] 
  },
  bio: "Mathematics and computer science challenge me to think critically and solve problems creatively, and I consistently rank among the top students at my school. As a proud member of the Class of 2027, my goal is to pursue a degree though I don't know in what yet at one of the best universities in the United States, while continuing to grow as a student-athlete. \n Soccer has been my passion since childhood, and today I play as a left-footed number 10 midfielder. I am not the kind of player who blindly chases every ball; instead, I bring intelligence and vision to the game. \n\n None of this would have been possible without the unconditional support of my parents, who have encouraged me to chase both academic excellence and athletic achievement. Soccer has taught me discipline, patience, and teamwork, while academics have sharpened my curiosity and determination. Together, these shape who I am: a thinker, a creator, and a competitor, ready to take the next step in both my education and athletic journey.",
  stats: [
    {
      icon: "MapPin",
      label: "Location",
      text: "Schenectady, NY, USA"
    },
    {
      icon: "Calendar",
      label: "Age",
      text: "17 Years Old"
    },
    {
      icon: "Trophy", // Usamos Trophy en vez de Futbol porque Lucide no tiene balón, pero se ve pro
      label: "Position",
      text: "Midfielder (CAM)"
    },
    {
      icon: "Languages",
      label: "Languages",
      text: "Eng (C1) / Spa (Nat)"
    }
  ]
};