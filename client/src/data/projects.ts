import soccerImage from '@assets/image_1761539280980.png';
import skyPeachImage from '@assets/image_1761532590122.png';
import atelierImage from '@assets/screencapture-ateliermariemac-2025-10-26-22_35_32_1761532586456.png';
import westLoftsImage from '@assets/screencapture-westloftsinromega-2025-10-26-22_35_42_1761532586456.png';
import maestroImage from '@assets/Desktop UI 1_1761539760517.png';
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
    summary: "Full-stack soccer coaching job board built with Next.js and Supabase. Features advanced filtering (position, league level, age group, job type), real-time job postings, and dual user flows for coaches and clubs.",
    impact: [
      "Multi-filter search system: Position (GK, Assistant, Youth Coach), League Level (Professional to Youth), Age Group (U6-Senior), Job Type (Full-time/Part-time/Volunteer)",
      "Dual authentication flows: Coaches can browse jobs, apply, and create profiles; Clubs can post jobs, search candidates, and access career resources",
      "Built with Next.js 14, Supabase PostgreSQL, Row Level Security (RLS) for data protection, and optimized queries for sub-second filtering across hundreds of listings"
    ],
    heroImage: soccerImage,
    tags: ["Next.js", "React", "Supabase", "PostgreSQL", "Auth", "RLS"],
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
