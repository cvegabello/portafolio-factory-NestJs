export const projectsData = {
  sectionTitle: "My Projects",
  sectionSubtitle: "Code, Deploy, Innovate",
  backgroundImage: "/img/Projects.jpeg",

  projects: [
    {
      id: 1,
      title: "Personal Link Manager",
      image: "/img/personalLinkManager.png",
      description:
        "A practical tool to organize and group favorite website links for quick access. Built with HTML, CSS, and JS, using Firebase to save data. This was a learning initiative co-developed with my father and AI assistance to understand how to connect a frontend to a real database.",
      // CAMBIO: Puse "Firebase" en lugar de Google para usar el icono de la llamita
      techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
      demoUrl: "https://santivega321.github.io/shortcuts-cloud-dashboard/",
      codeUrl: "https://github.com/SantiVega321/shortcuts-cloud-dashboard",
    },
    {
      id: 2,
      title: "World Cup Prediction Platform",
      image: "/img/worldCupPrediction.png",
      description:
        "A fun game for friends to predict World Cup scores and compete on a leaderboard. We used Firebase to store the predictions and results. I developed this project with my father's guidance and AI support to learn how to apply game rules and logic into code.",
      techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
      demoUrl: "https://santivega321.github.io/world-cup-predictor/",
      codeUrl: "https://github.com/SantiVega321/world-cup-predictor",
    },
    {
      id: 3,
      title: "Modern Layout System",
      image: "/img/vegaNews.png",
      description:
        "A static news website created specifically to practice responsive design. My goal was to learn how to use CSS Grid and Flexbox to make pages look good on mobile and desktop. Used AI as a tutor to understand layout structures.",
      techStack: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://santivega321.github.io/news-homepage-layout/",
      codeUrl: "https://github.com/SantiVega321/news-homepage-layout",
    },
  ],
};
