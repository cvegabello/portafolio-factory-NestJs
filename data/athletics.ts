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
      { id: 1, label: "HEIGHT", value: "5' 2\"", icon: "Ruler" },
      { id: 2, label: "WEIGHT", value: "116 lbs", icon: "Weight" },
      { id: 3, label: "POSITION", value: "Midfielder", icon: "Activity" },
      { id: 4, label: "DOMINANT FOOT", value: "Left", icon: "Footprints" },
      {
        id: 5,
        label: "VARSITY TEAM",
        value: "Schalmont HS #18",
        icon: "Shield",
      },
      {
        id: 6,
        label: "CLUB / TRAVEL",
        value: "Rotterdam Utd #10",
        icon: "Globe",
      },
    ],
  },

  trainingCarousel: {
    title: "MORE ACTION & TRAINING",
    subtitle: "More Highlights, Technical drills, agility & speed sessions.",
    videos: [
      {
        id: 1,
        title: "Technical Drills",
        description: "Precision & Control",
        // Use un video real o de prueba
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 2,
        title: "Agility Session",
        description: "Speed & ladder drills",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: 3,
        title: "Match Highlights",
        description: "Vs. Rivals FC (2 Goals)",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
