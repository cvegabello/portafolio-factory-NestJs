import { Trophy, Ruler, Weight, User, MapPin, Shirt } from 'lucide-react';

export const athleticsData = {
  sectionTitle: "Athletics",
  sectionSubtitle: "High Performance & Stats",
  
  // Asegúrese de que la imagen exista en public/img/Athletics.jpg (o .png)
  backgroundImage: "/img/Athletics.png", 

  // --- CAJA IZQUIERDA: VIDEO ---
  highlight: {
    title: "Senior Season Highlights",
    description: "Midfielder | Playmaker | Captain",
    // Aquí pone el ID de su video de YouTube (lo que va después de v=)
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=example", 
  },

  // --- CAJA DERECHA: PERFIL NCSA ---
  ncsa: {
    logoUrl: "/img/ncsa-logo.png", // Si tiene el logo de NCSA, súbalo a public/img
    profileUrl: "https://www.ncsasports.org/", // Su link real de NCSA
    title: "Official NCSA Profile",
    stats: [
      { id: 1, label: "Position", value: "CAM / Winger", icon: "User" },
      { id: 2, label: "Jersey", value: "#10", icon: "Shirt" },
      { id: 3, label: "Height", value: "5' 9\"", icon: "Ruler" },
      { id: 4, label: "Weight", value: "160 lbs", icon: "Weight" },
      { id: 5, label: "Club", value: "Elite FC", icon: "Trophy" },
      { id: 6, label: "Location", value: "Bogotá, COL", icon: "MapPin" },
    ]
  }
};