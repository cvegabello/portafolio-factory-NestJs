// 1. DEFINIMOS LAS INTERFACES AQUÍ MISMO (Para mantener el orden de la Fábrica)

export interface StatItem {
    id: number;
    value: string;
    label: string;
    iconName: string; // El nombre del icono en texto
    color: 'blue' | 'orange'; // Restringimos los colores a los que soporta nuestro tema
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
  
  export interface AcademicsData {
    sectionTitle: string;
    backgroundImage?: string;
    stats: StatItem[];
    lockerTitle: string;
    lockerSubtitle: string;
    lockerItems: LockerItem[];
  }
  
  // 2. APLICAMOS LA INTERFACE A NUESTROS DATOS
  // Esto asegura que si falta algo, TypeScript nos avise de una vez.
  
  export const academicsData: AcademicsData = {
    // Configuración General
    sectionTitle: "Academic Record",
    backgroundImage: "/img/Academics.JPEG", 
    
    // Las Tarjetas de arriba (Stats)
    stats: [
      { 
        id: 1, 
        value: "3.8", 
        label: "Cumulative GPA", 
        iconName: "BookOpen", 
        color: "blue" 
      },
      { 
        id: 2, 
        value: "1250", 
        label: "SAT Score", 
        iconName: "PenTool", 
        color: "orange" 
      },
      { 
        id: 3, 
        value: "2025", 
        label: "Graduation Year", 
        iconName: "GraduationCap", 
        color: "blue" 
      },
      { 
        id: 4, 
        value: "CompSci", 
        label: "Intended Major", 
        iconName: "Laptop", 
        color: "orange" 
      },
      { 
        id: 5, 
        value: "AP CS A", 
        label: "Relevant Course", 
        iconName: "Code", 
        color: "blue" 
      },
    ],
  
    // El Acordeón (Digital Locker)
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
          { name: "Community Service Project", url: "https://youtu.be/SU_ID_VIDEO", type: "video" },
          { name: "School Speech / Presentation", url: "https://youtu.be/SU_ID_VIDEO", type: "video" }
        ]
      }
    ]
  };