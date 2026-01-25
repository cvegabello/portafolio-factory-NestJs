// src/data/projects.ts
export const projectsData = {
    sectionTitle: "My Projects",
    sectionSubtitle: "Code, Deploy, Innovate",
    backgroundImage: "/img/Projects.jpeg", // <--- La imagen que me pidió
  
    projects: [
      {
        id: 1,
        title: "Team Management App",
        // Use una imagen real suya o un placeholder
        image: "/img/EHSHelp.PNG", 
        description: "A comprehensive dashboard for coaches to track player performance, attendance, and schedule matches in real-time.",
        techStack: ["React", "Node", "Database", "Css"],
        demoUrl: "https://demo.com",
        codeUrl: "https://github.com",
      },
      {
        id: 2,
        title: "Grade Calculator AI",
        image: "/img/project2.jpg",
        description: "Smart tool that helps students calculate their current grades and predicts what they need to score to pass.",
        techStack: ["Python", "Brain", "Code"],
        demoUrl: "https://demo.com",
        codeUrl: "https://github.com",
      },
      {
        id: 3,
        title: "Player Analytics AI",
        image: "/img/project3.jpg",
        description: "Using Computer Vision to analyze soccer highlights and generate heatmaps of player movement automatically.",
        techStack: ["Cpu", "Python", "Database"],
        demoUrl: "https://demo.com",
        codeUrl: "https://github.com",
      },
       {
        id: 4,
        title: "E-Commerce Platform",
        image: "/img/project4.jpg",
        description: "Full-stack shopping experience with payment integration and inventory management system.",
        techStack: ["React", "Database", "Lock"],
        demoUrl: "https://demo.com",
        codeUrl: "https://github.com",
      },
    ]
  };