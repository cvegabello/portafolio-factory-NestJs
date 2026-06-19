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
  details?: string;
  image?: string;
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
      value: "~33",
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
      year: "2022 - 2023",
      title: "Literary Award & Early STEM",
      school: "Schalmont High School",
      description:
        "Winner of the prestigious Patriot's Pen Essay Award and member of the Science Olympiad team.",
      details:
        "Winner of the first-place district award in the national writing competition 'Patriot's Pen Essay Award'. Additionally, initiated competitive participation in the Science Olympiad team, demonstrating a unique balance between humanities and scientific rigor from an early age.",
      image: "/img/PatriotPenEssayAwardSanti.jpeg",
      iconName: "trophy",
    },
    {
      id: 2,
      year: "2023 - 2024",
      title: "Freshman Year: High Honor Roll",
      school: "Schalmont High School",
      description:
        "Entered high school excelling academically, achieving High Honor Roll and joining the Spanish Club.",
      details:
        "Began high school education at Schalmont High School, earning 'High Honor Roll' distinction every single quarter. In parallel, actively participated in the Spanish Club to promote bilingualism and cultural heritage within the school community.",
      image: "/img/spanishHonorSInduc.png",
      iconName: "book",
    },
    {
      id: 3,
      year: "2024 - 2025",
      title: "Sophomore: Engineering & Varsity Soccer",
      school: "Schalmont High School",
      description:
        "Started college-level STEM coursework and debuted on the Varsity Soccer team as regional runner-up.",
      details:
        "Began rigorous engineering coursework with RIT Principles of Engineering (college credits via Rochester Institute of Technology) and Siena College Multimedia Python. Simultaneously debuted on Schalmont's Varsity Soccer team (#18), scoring two goals in the Sabres win and reaching the sectional regional finals (Runner-up).",
      image: "/img/gallery-1.jpg",
      iconName: "cpu",
    },
    {
      id: 4,
      year: "2025 - 2026",
      title: "Junior Year: Honor Societies & SAT",
      school: "Schalmont High School",
      description:
        "Inducted into Science, English, and Spanish Honor Societies. Scored 1390 on the SAT and maintained a 102.98 GPA.",
      details:
        "A year of exceptional academic milestones: simultaneous induction into the Science Honor Society, English Honor Society, and Spanish Honor Society. Achieved an outstanding SAT score of 1390 (730 in math, top national percentile) and a record weighted GPA of 102.98, while completing university-level courses through SUNY and HVCC.",
      image: "/img/ScienceHonorSocInd.jpeg",
      iconName: "code",
    },
    {
      id: 5,
      year: "March 2026",
      title: "Rensselaer Medalist & Scholarship",
      school: "Schalmont High School",
      description:
        "Awarded the prestigious Rensselaer Medal, including a $40k/year scholarship to RPI.",
      details:
        "Nominated and confirmed as the Rensselaer Medalist by the Rensselaer Polytechnic Institute (RPI). This historic award recognizes the top mathematics and science student in the high school class. It awards a guaranteed $40,000 annual scholarship ($160,000 total over four years) upon application and enrollment at RPI.",
      iconName: "trophy",
    },
    {
      id: 6,
      year: "June 2026",
      title: "National Recognition Program",
      school: "CollegeBoard",
      description:
        "Awarded the School Recognition Award for Outstanding Academic Achievement.",
      details:
        "Earned the prestigious National Recognition Program School Recognition Award from the College Board, awarded for outstanding academic achievement.",
      iconName: "award",
    },
    {
      id: 7,
      year: "2025 - 2026",
      title: "Leadership & Community Impact",
      school: "Schalmont High School",
      description:
        "Selected for the Colonial Council Sportsmanship Summit and volunteered in child literacy programs.",
      details:
        "Selected as one of the exclusive six school representatives for the prestigious Colonial Council Sportsmanship Summit in 2026. Additionally, served the community by volunteering in the English Honor Society's program to assist kindergarten students in developing early reading and writing skills.",
      image: "/img/EHSHelp.png",
      iconName: "star",
    },
    {
      id: 8,
      year: "2026 - 2027",
      title: "Senior Year: College Credits & Leadership",
      school: "Schalmont High School",
      description:
        "Projected to accumulate ~33 college credits and lead as a Senior on the Varsity Soccer team.",
      details:
        "Currently taking multiple advanced AP courses (Physics, US History) and college-credit courses, accumulating ~33 transferable college credits before graduation. Leading the varsity soccer team and finalizing the university recruiting process for a Computer Science / Finance degree.",
      iconName: "work",
    },
    {
      id: 9,
      year: "2027",
      title: "Graduation & College Transition",
      school: "Schalmont High School / College",
      description:
        "Graduation with Advanced Regents Diploma and transition to university as a Computer Science Student-Athlete.",
      details:
        "Scheduled to graduate in June 2027 with the prestigious 'Advanced Regents Diploma'. Transitioning to a top-tier university to pursue a degree in Computer Science or Finance, aiming to compete in collegiate soccer as a student-athlete while maintaining rigorous academic standards.",
      iconName: "trophy",
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
          name: "RPIMedalProgramSanti",
          url: "/docs/RPIMedalProgramSanti.pdf",
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
        {
          name: "National Recognition Program Certificate",
          url: "/docs/NationalRecognitionCertificateSanti.pdf",
          type: "download",
        },
      ],
    },
    /* 
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
    */
    {
      title: "Academic Ceremonies & Honors",
      iconName: "Video",
      files: [
        {
          name: "Official Rensselaer Medalist Presentation",
          url: "https://www.youtube.com/embed/jpReQAvbz_k",
          type: "video",
        },
        {
          name: "Memorial Award for Character & Outstanding Friendship",
          url: "https://www.youtube.com/embed/cZ1o68NPIIU",
          type: "video",
        },
        {
          name: "Academic Honors & Photos Recap",
          url: "https://www.youtube.com/embed/5-NTUAA2UaY",
          type: "video",
        },
      ],
    },
  ],
};
