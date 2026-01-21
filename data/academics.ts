import { LucideIcon } from 'lucide-react';

// 1. DEFINIMOS LAS INTERFACES
export interface StatItem {
  id: number;
  value: string;
  label: string;
  iconName: string;
  color: 'blue' | 'orange';
}

export interface LockerFile {
  name: string;
  url: string;
  type: 'download' | 'video';
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
  backgroundImage: "/img/Academics.JPEG", 
  
  stats: [
    { id: 1, value: "3.8", label: "Cumulative GPA", iconName: "BookOpen", color: "blue" },
    { id: 2, value: "1250", label: "SAT Score", iconName: "PenTool", color: "orange" },
    { id: 3, value: "2027", label: "Graduation Year", iconName: "GraduationCap", color: "blue" },
    { id: 4, value: "CompSci", label: "Intended Major", iconName: "Laptop", color: "orange" },
    { id: 5, value: "Finaces", label: "Intended Minor", iconName: "Code", color: "blue" },
    { id: 6, value: "AP CS A", label: "Relevant Course", iconName: "Code", color: "blue" },
  ],

  // --- NUEVA DATA DEL TIMELINE ---
  timelineTitle: "My Journey",
  timeline: [
    {
      id: 1,
      year: "2025 - Present",
      title: "Senior Year (12th)",
      school: "Shaker High School",
      description: "Liderando el equipo Varsity y finalizando aplicaciones universitarias.",
      iconName: "Trophy"
    },
    {
      id: 2,
      year: "2024",
      title: "Junior Year (11th)",
      school: "Shaker High School",
      description: "Año crítico: AP Computer Science A y enfoque en STEM.",
      iconName: "Code"
    },
    {
      id: 3,
      year: "2023",
      title: "Sophomore Year (10th)",
      school: "Shaker High School",
      description: "Inicio de profundización en ciencias y matemáticas avanzadas.",
      iconName: "BookOpen"
    }
  ],

  lockerTitle: "Digital Locker",
  lockerSubtitle: "(Click to expand)",
  lockerItems: [
    {
      title: "Official Transcripts",
      iconName: "FileText",
      files: [
        { name: "Academic Records (Full)", url: "/assets/docs/transcripts.pdf", type: "download" }
      ]
    },
    {
      title: "Standardized Tests",
      iconName: "PenTool",
      files: [
        { name: "SAT Official Report", url: "/assets/docs/sat-score.pdf", type: "download" }
      ]
    },
    {
      title: "Resume & Honors",
      iconName: "Trophy",
      files: [
        { name: "Official Athlete Resume", url: "/assets/docs/resume.pdf", type: "download" },
        { name: "Honor Roll Certificate", url: "/assets/docs/honor-roll.pdf", type: "download" }
      ]
    },
    {
      title: "Leadership & Volunteering",
      iconName: "Video",
      files: [
        { name: "Community Service Project", url: "#", type: "video" },
        { name: "School Speech", url: "#", type: "video" }
      ]
    }
  ]
};