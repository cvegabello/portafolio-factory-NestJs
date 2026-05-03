import { LucideIcon } from "lucide-react";

// 1. DEFINIMOS LAS INTERFACES
export interface StatItem {
  id: number;
  value: string;
  label: string;
  iconName: string;
  color: "blue" | "orange";
}

export interface LockerFile {
  name: string;
  url: string;
  type: "download" | "video";
}

export interface LockerItem {
  title: string;
  iconName: string;
  files: LockerFile[];
}

// --- NUEVA INTERFAZ PARA EL TIMELINE ---
export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  school: string;
  description: string;
  iconName: string;
}

export interface AcademicsData {
  sectionTitle: string;
  backgroundImage?: string;
  stats: StatItem[];

  // Agregamos esto para el Timeline
  timelineTitle: string;
  timeline: TimelineItem[];

  lockerTitle: string;
  lockerSubtitle: string;
  lockerItems: LockerItem[];
}

// 2. LA DATA MAESTRA
export const academicsData: AcademicsData = {
  sectionTitle: "Academic Record",
  backgroundImage: "/img/fondo-academics.jpeg",

  stats: [
    {
      id: 1,
      value: "102.98",
      label: "Weighted GPA",
      iconName: "BookOpen",
      color: "blue",
    },
    {
      id: 2,
      value: "1390",
      label: "SAT Score",
      iconName: "PenTool",
      color: "orange",
    },
    {
      id: 3,
      value: "2027",
      label: "Advanced Regents Diploma",
      iconName: "GraduationCap",
      color: "blue",
    },
    {
      id: 4,
      value: "Computer Science",
      label: "Intended Major",
      iconName: "Laptop",
      color: "orange",
    },
    {
      id: 5,
      value: "English & Spanish",
      label: "Languages",
      iconName: "Languages",
      color: "blue",
    },
    {
      id: 6,
      value: "36",
      label: "College Credits",
      iconName: "Scroll",
      color: "orange",
    },
  ],

  // --- NUEVA DATA DEL TIMELINE ---
  timelineTitle: "My Journey",
  timeline: [
    {
      id: 1,
      year: "2025 - Present",
      title: "Senior Year (12th)",
      school: "Shaker High School",
      description:
        "Liderando el equipo Varsity y finalizando aplicaciones universitarias.",
      iconName: "Trophy",
    },
    {
      id: 2,
      year: "2024",
      title: "Junior Year (11th)",
      school: "Shaker High School",
      description: "Año crítico: AP Computer Science A y enfoque en STEM.",
      iconName: "Code",
    },
    {
      id: 3,
      year: "2023",
      title: "Sophomore Year (10th)",
      school: "Shaker High School",
      description:
        "Inicio de profundización en ciencias y matemáticas avanzadas.",
      iconName: "BookOpen",
    },
    {
      id: 4,
      year: "2022",
      title: "Sophomore Year (10th)",
      school: "Shaker High School",
      description:
        "Inicio de profundización en ciencias y matemáticas avanzadas.",
      iconName: "BookOpen",
    },
    {
      id: 5,
      year: "2021",
      title: "Sophomore Year (10th)",
      school: "Shaker High School",
      description:
        "Inicio de profundización en ciencias y matemáticas avanzadas.",
      iconName: "BookOpen",
    },
  ],

  lockerTitle: "Digital Locker",
  lockerSubtitle: "(Click to expand)",
  lockerItems: [
    {
      title: "Official Transcripts/Report Cards",
      iconName: "FileText",
      files: [
        {
          name: "Transcript June 2025",
          url: "/docs/santiago-transcript-june-2025.pdf",
          type: "download",
        },
        {
          name: "Report Card 10th Grade",
          url: "/docs/santiago-reportcard_10th.pdf",
          type: "download",
        },
        {
          name: "Report Card 11th Grade Qtr 3",
          url: "/docs/santiago-reportcard-11-qtr3.pdf",
          type: "download",
        },
        {
          name: "Progress Report 11th Grade",
          url: "/docs/santiago-progress-report-march-2026.pdf",
          type: "download",
        },
      ],
    },
    {
      title: "Tests & Assessments",
      iconName: "PenTool",
      files: [
        {
          name: "SAT Official Report March 2026",
          url: "/docs/sat-score-march-2026.pdf",
          type: "download",
        },
        {
          name: "Assessments January 2026",
          url: "/docs/santiago-assessments-jan-2026.pdf",
          type: "download",
        },
      ],
    },
    {
      title: "Resume & Honors",
      iconName: "Trophy",
      files: [
        {
          name: "Official Student Resume",
          url: "/docs/resume.pdf",
          type: "download",
        },
        {
          name: "Junior Scholarship",
          url: "/docs/JuniorScholarshipSanti.pdf",
          type: "download",
        },
        {
          name: "Colonial Council Sportsmanship Summit",
          url: "/docs/ColonialCouncilSportsmanshipSanti.pdf",
          type: "download",
        },
      ],
    },
    {
      title: "Images Awards & Honors",
      iconName: "Pictures",
      files: [
        {
          name: "Science Honor Society Inductees",
          url: "/img/ScienceHonorSocInd.jpeg",
          type: "download",
        },
        {
          name: "Science Honor Society Volunteering",
          url: "/img/ScienceHSVol.png",
          type: "download",
        },
        {
          name: "English Honor Society Inductees",
          url: "/img/EHSInductees.png",
          type: "download",
        },
        {
          name: "English Honor Society Helps",
          url: "/img/EHSHelp.png",
          type: "download",
        },
        {
          name: "Spanish Honor Society Inductees",
          url: "/img/spanishHonorSInduc.png",
          type: "download",
        },
        {
          name: "Spanish Honor Society Inductees 2",
          url: "/img/spanishHonorCeremony.jpeg",
          type: "download",
        },
        {
          name: "Patriot Pen Essay Award",
          url: "/img/PatriotPenEssayAwardSanti.jpeg",
          type: "download",
        },
        {
          name: "Science Olympiad Team",
          url: "/img/ScienceOlimp.png",
          type: "download",
        },
      ],
    },
    // {
    //   title: "Leadership & Volunteering",
    //   iconName: "Video",
    //   files: [
    //     { name: "Community Service Project", url: "#", type: "video" },
    //     { name: "School Speech", url: "#", type: "video" },
    //   ],
    // },
  ],
};
