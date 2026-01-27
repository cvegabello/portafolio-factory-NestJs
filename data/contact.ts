// src/data/contact.ts
import { Mail, MapPin, Send } from "lucide-react";
// Importamos las marcas desde FontAwesome (fa) o SimpleIcons (si) usando react-icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const contactData = {
  sectionTitle: "Get in Touch",
  sectionSubtitle: "Let's Team Up",
  description:
    "Whether it's for university recruitment, a coding project, or just to talk soccer strategy, I'm always open to new opportunities. Let's build something great together.",

  contactInfo: [
    {
      id: 1,
      icon: Mail, // Lucide (UI)
      text: "santiagoveganeira@gmail.com",
      href: "mailto:santiagoveganeira@gmail.com",
    },
    {
      id: 2,
      icon: MapPin, // Lucide (UI)
      text: "Schenectady, NY, USA",
      href: null,
    },
  ],

  socials: [
    {
      id: "github",
      icon: FaGithub, // React Icons (Marca)
      url: "https://github.com/santiagovega",
      label: "GitHub",
    },
    {
      id: "linkedin",
      icon: FaLinkedin, // React Icons (Marca)
      url: "https://linkedin.com/in/santiagovega",
      label: "LinkedIn",
    },
    {
      id: "instagram",
      icon: FaInstagram, // React Icons (Marca)
      url: "https://instagram.com/santiagovega",
      label: "Instagram",
    },
  ],
};
