import soccerImage from '@assets/generated_images/Soccer_coach_job_board_interface_4b03c269.png';
import skyPeachImage from '@assets/generated_images/Aerial_drone_photography_portfolio_4472b5e9.png';
import atelierImage from '@assets/generated_images/Fashion_e-commerce_website_homepage_457c3aa7.png';
import westLoftsImage from '@assets/generated_images/Real_estate_loft_landing_page_c14ea75b.png';
import maestroImage from '@assets/generated_images/Modern_login_interface_concept_c6213f53.png';
import hersheyImage from '@assets/generated_images/Hershey_chocolate_spray_concept_27d74066.png';
import badgeClashImage from '@assets/generated_images/Football_badge_caricature_illustrations_87b7047f.png';

export interface Project {
  slug: string;
  title: string;
  category: string[];
  summary: string;
  impact: string[];
  heroImage: string;
  tags: string[];
  link: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "soccercoachconnect",
    title: "SoccerCoachConnect.com",
    category: ["Web App", "Database", "Authentication", "Sports"],
    summary: "A full-stack job board connecting soccer coaches and clubs. Includes authentication, searchable database, and role-based dashboards.",
    impact: [
      "Built full-stack platform with Supabase + React",
      "Integrated coach/club authentication flows",
      "Optimized database queries for sub-second search results"
    ],
    heroImage: soccerImage,
    tags: ["Full Stack", "React", "Supabase", "Next.js", "Database", "Auth"],
    link: "https://soccercoachconnect.com"
  },
  {
    slug: "skypeach",
    title: "SkyPeach.net",
    category: ["Photography", "Web Design", "Drone Media"],
    summary: "A portfolio for aerial photography and real estate visuals, featuring interactive galleries and category filtering for construction, nature, and real estate.",
    impact: [
      "Showcases 50+ aerial shots via dynamic gallery",
      "Categorized galleries by purpose and client type",
      "Integrated responsive UX for both mobile and desktop"
    ],
    heroImage: skyPeachImage,
    tags: ["Web Design", "Photography", "UX", "Portfolio"],
    link: "https://skypeach.net"
  },
  {
    slug: "ateliermariemac",
    title: "AtelierMarieMac.com",
    category: ["Branding", "E-Commerce", "Fashion"],
    summary: "A minimal fashion site showcasing handmade garments and collections, optimized for storytelling and visual clarity.",
    impact: [
      "Developed modern layout emphasizing photography",
      "Integrated simple e-commerce catalog",
      "Created dynamic CMS-driven content updates"
    ],
    heroImage: atelierImage,
    tags: ["Shopify", "Branding", "Design", "Storytelling"],
    link: "https://ateliermariemac.com"
  },
  {
    slug: "westloftsrome",
    title: "WestLoftsInRomeGA.com",
    category: ["Real Estate", "Branding", "Landing Page"],
    summary: "A responsive one-page site for a Rome, GA loft community, built for conversions and easy navigation.",
    impact: [
      "Created interactive map for floor plans",
      "Integrated contact forms and SEO optimization",
      "Delivered brand identity aligned with modern real estate aesthetics"
    ],
    heroImage: westLoftsImage,
    tags: ["Real Estate", "Landing Page", "UI", "SEO"],
    link: "https://westloftsinromega.com"
  },
  {
    slug: "maestro-login",
    title: "Maestro Login Interface",
    category: ["UI/UX Design", "Internal Tools"],
    summary: "Designed multiple login page UI concepts for a company's internal platform, refining layouts and interactions before final selection.",
    impact: [
      "Explored 5+ visual directions and animations",
      "Focused on simplicity and fast user recognition",
      "Delivered polished final handoff for dev team"
    ],
    heroImage: maestroImage,
    tags: ["UI Design", "Prototyping", "Animations"],
    link: "#"
  },
  {
    slug: "hershey-concept",
    title: "Hershey's Freeze & Choc-ify (Concept)",
    category: ["Concept Design", "Advertising", "Product Mockup"],
    summary: "A creative concept for a 'Freeze & Choc-ify' spray can that instantly coats food in chocolate, with mock ads and brand extension ideas.",
    impact: [
      "Created full visual campaign with mock ads",
      "Explored real-world brand partnership angles",
      "Built photorealistic product renders"
    ],
    heroImage: hersheyImage,
    tags: ["Concept Design", "3D Mockup", "Advertising"],
    link: "#"
  },
  {
    slug: "badge-clash",
    title: "Badge Clash",
    category: ["Graphic Design", "Marketing", "Sports"],
    summary: "A humorous series of modern football badge caricatures blending identity and satire for media outlets.",
    impact: [
      "Produced 20+ vector illustrations",
      "Featured by football media pages",
      "Explored visual humor within brand limits"
    ],
    heroImage: badgeClashImage,
    tags: ["Illustration", "Brand Humor", "Social Media"],
    link: "#"
  }
];
