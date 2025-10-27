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
    summary: "A full-stack job board connecting soccer coaches with clubs worldwide. Browse coaching opportunities from youth to professional levels, with filters by position, level, and salary range.",
    impact: [
      "Active job listings for GK coaches, assistant coaches, and academy positions",
      "Real-time job posting system with salary disclosure and location data",
      "Built with Supabase backend and React frontend for fast, scalable search"
    ],
    heroImage: soccerImage,
    tags: ["Full Stack", "React", "Supabase", "Next.js", "Database", "Auth"],
    link: "https://soccercoachconnect.com"
  },
  {
    slug: "skypeach",
    title: "SkyPeach.net",
    category: ["Photography", "Web Design", "Drone Media"],
    summary: "Atlanta-based professional aerial photography service delivering high-impact drone photography and video. FAA-certified piloting for commercial real estate, residential properties, construction monitoring, land surveying, and 3D modeling.",
    impact: [
      "Services include commercial/residential real estate, urban development, and construction documentation",
      "Advanced photogrammetry for detailed 3D models and point clouds",
      "Serves Greater Atlanta area with testimonials from real estate agents and project managers"
    ],
    heroImage: skyPeachImage,
    tags: ["Drone Photography", "Real Estate", "3D Modeling", "Construction"],
    link: "https://skypeach.net"
  },
  {
    slug: "ateliermariemac",
    title: "AtelierMarieMac.com",
    category: ["Branding", "E-Commerce", "Fashion"],
    summary: "Linen clothing e-commerce site inspired by Provençal lifestyle. Features handmade dresses, pants, skirts, sweaters, and accessories with elegant product photography and customer testimonials.",
    impact: [
      "Shopify-powered store with organized collections (Dresses, Kaftans, Overalls, Accessories)",
      "Featured products include Monette shirts, Juliette silk skirts, and Cloud crewneck sweaters (~$110)",
      "Customer testimonials highlight quality craftsmanship and Provence-inspired design"
    ],
    heroImage: atelierImage,
    tags: ["Shopify", "E-Commerce", "Linen Fashion", "Branding"],
    link: "https://ateliermariemac.com"
  },
  {
    slug: "westloftsrome",
    title: "WestLoftsInRomeGA.com",
    category: ["Real Estate", "Branding", "Landing Page"],
    summary: "Modern apartment rental website for West Lofts in downtown Rome, Georgia. Features rooftop lounge, elevator access, designated parking, with sections for apartments, gallery, and neighborhood highlights.",
    impact: [
      "Responsive multi-page site showcasing apartment amenities and downtown Rome charm",
      "Integrated contact forms (706-573-6473) and SEO optimization for local search",
      "Clean navigation with Gallery, Neighborhood, and Apartments sections for easy browsing"
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
