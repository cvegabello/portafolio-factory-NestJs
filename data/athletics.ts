export const athleticsData = {
  sectionTitle: "Athletics",
  sectionSubtitle: "High Performance & Stats",

  // Asegúrese de que la imagen exista en public/img/Athletics.jpg (o .png)
  backgroundImage: "/img/Athletics.png",

  // --- CAJA IZQUIERDA: VIDEO ---
  highlight: {
    title: "Season Highlights",
    description:
      "Full Season Recap | Goals, Assists & Key Plays (Sophomore Year)",
    // Aquí pone el ID de su video de YouTube (lo que va después de v=)
    videoUrl: "https://www.youtube.com/embed/1AWeV39cuzg",
  },

  // --- CAJA DERECHA: PERFIL NCSA ---
  ncsa: {
    logoUrl: "/img/ncsa-logo.png", // Si tiene el logo de NCSA, súbalo a public/img
    profileUrl:
      "https://recruit-match.ncsasports.org/clientrms/athlete_profiles/10702612", // Su link real de NCSA
    title: "Official NCSA Profile",
    stats: [
      {
        id: 1,
        label: "VARSITY TEAM",
        value: "Schalmont HS #18",
        icon: "Shield",
      },
      {
        id: 2,
        label: "CLUB / TRAVEL",
        value: "Rotterdam Utd #10",
        icon: "Globe",
      },
      { id: 3, label: "POSITION", value: "Midfielder", icon: "Activity" },
      { id: 4, label: "DOMINANT FOOT", value: "Left", icon: "Footprints" },
      { id: 5, label: "2025 Goals", value: "8", icon: "Trophy" },
      { id: 6, label: "2025 Assists", value: "2", icon: "Play" },
    ],
  },

  trainingCarousel: {
    title: "MORE ACTION & TRAINING",
    subtitle: "More Highlights, Technical drills, agility & speed sessions.",
    videos: [
      {
        id: 1,
        title: "Regional Championship Winner",
        description:
          "Fall 2024 (Sophomore) |  TV Announcer highlights OT Winner",
        // Use un video real o de prueba
        videoUrl: "https://www.youtube.com/embed/oCL0zLujO6I",
      },
      {
        id: 2,
        title: "The Winning Goal (Regional Final)",
        description: "Fall 2024 (Sophomore) | Overtime Goal | Santiago #18",
        videoUrl: "https://www.youtube.com/embed/Bx9pc3nOPoc",
      },
      {
        id: 3,
        title: "Coach's Season Evaluation",
        description: '"Best Left Foot I\'ve Seen" & "Huge Heart" | 8 Goals',
        videoUrl: "https://www.youtube.com/embed/BCkPWYlY_-Y",
      },
      {
        id: 4,
        title: "Strength Training",
        description: "Gym & Core work",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 5,
        title: "Tactical Analysis",
        description: "Positional play review",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
};
