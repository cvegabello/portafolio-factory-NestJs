// src/data/contact.ts
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaYoutube, FaFutbol } from "react-icons/fa";

export const contactData = {
  sectionTitle: "Get in Touch",
  sectionSubtitle: "Let's Team Up",
  description:
    "Whether it's for university recruitment, a coding project, or just to talk soccer strategy, I'm always open to new opportunities. Let's build something great together.",

  contactInfo: [
    {
      id: 1,
      icon: Mail,
      text: "santiveganeira@gmail.com",
      href: "mailto:santiveganeira@gmail.com",
    },
    {
      id: 2,
      icon: MapPin,
      text: "Schenectady, NY, USA",
      href: null,
    },
  ],

  socials: [
    {
      id: "github",
      icon: FaGithub,
      url: "https://github.com/SantiVega321?tab=repositories", // Puedes enlazar aquí el GitHub de Santiago
      label: "GitHub",
    },
    {
      id: "youtube",
      icon: FaYoutube,
      url: "https://www.youtube.com/watch?v=1AWeV39cuzg", // Enlace directo a su video principal de Highlights
      label: "YouTube",
    },
    {
      id: "ncsa",
      icon: FaFutbol,
      url: "https://recruit-match.ncsasports.org/clientrms/athlete_profiles/10702612", // Su perfil real verificado de NCSA
      label: "NCSA Recruiting Profile",
    },
  ],
};
