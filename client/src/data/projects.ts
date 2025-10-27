import soccerImage from '@assets/image_1761539280980.png';
import skyPeachImage from '@assets/image_1761532590122.png';
import atelierImage from '@assets/screencapture-ateliermariemac-2025-10-26-22_35_32_1761532586456.png';
import westLoftsImage from '@assets/screencapture-westloftsinromega-2025-10-26-22_35_42_1761532586456.png';
import maestroImage1 from '@assets/Desktop UI 1_1761539760517.png';
import maestroImage2 from '@assets/Desktop UI 2_1761539760518.png';
import maestroImage3 from '@assets/Desktop UI 3_1761539760518.png';
import maestroImage4 from '@assets/Desktop UI 4_1761539760519.png';
import chocoChill1 from '@assets/chocochillCHOCO-CHILL-MAIN_1761540709794.png';
import chocoChill2 from '@assets/chocochill-mainCHOCO-CHILL-MAIN_1761540709795.png';
import chocoChill3 from '@assets/chocochillBasic-Ad_1761540748931.png';
import chocoChill4 from '@assets/chocochillBilboard_1761540748931.png';
import chocoChill5 from '@assets/chocochillHydrant_1761540748931.png';
import chocoChill6 from '@assets/chocochillSnowman-ad_1761540748932.png';
import badgeClash1 from '@assets/Athletico x Barca_1761540080344.png';
import badgeClash2 from '@assets/Bayern x Dynamo_1761540080345.png';
import badgeClash3 from '@assets/Benfica x Barca_1761540080345.png';
import badgeClash4 from '@assets/Brighton x Arsenal_1761540080345.png';
import badgeClash5 from '@assets/Chelsea x Juve_1761540080346.png';
import badgeClash6 from '@assets/ManU x Villareal_1761540080346.png';
import badgeClash7 from '@assets/Porco x Mineiro_1761540080347.png';
import badgeClash8 from '@assets/Rennes x PSG_1761540080347.png';

export interface Project {
  slug: string;
  title: string;
  category: string[];
  summary: string;
  impact: string[];
  heroImage: string;
  gallery?: string[];
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
    summary: "Atlanta-based professional aerial photography service delivering high-impact drone photography and video. FAA-certified piloting for commercial real estate, residential properties, construction monitoring, and land surveying.",
    impact: [
      "Services include commercial/residential real estate, urban development, and construction documentation",
      "Advanced photogrammetry for detailed models and point clouds",
      "Serves Greater Atlanta area with testimonials from real estate agents and project managers"
    ],
    heroImage: skyPeachImage,
    tags: ["Drone Photography", "Real Estate", "Construction"],
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
    heroImage: maestroImage1,
    gallery: [maestroImage1, maestroImage2, maestroImage3, maestroImage4],
    tags: ["UI Design", "Prototyping", "Animations"],
    link: "#"
  },
  {
    slug: "chocochill",
    title: "Hershey's ChocoChill",
    category: ["Concept Design", "Advertising", "Product Mockup"],
    summary: "Instant sprayable chocolate in a can - 'One Bottle. Two Options.' Campaign concept featuring photorealistic mockups, billboard ads, and playful brand activations.",
    impact: [
      "Created comprehensive ad campaign with billboards, product shots, and seasonal promotions",
      "Dual-flavor concept: warm chocolate ('Choco') and cooling chocolate ('Chill') in one innovative can",
      "Built photorealistic 3D product renders with multiple campaign executions including guerrilla marketing concepts"
    ],
    heroImage: chocoChill2,
    gallery: [chocoChill2, chocoChill1, chocoChill3, chocoChill4, chocoChill5, chocoChill6],
    tags: ["Concept Design", "3D Mockup", "Advertising", "Campaign"],
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
    heroImage: badgeClash1,
    gallery: [badgeClash1, badgeClash2, badgeClash3, badgeClash4, badgeClash5, badgeClash6, badgeClash7, badgeClash8],
    tags: ["Illustration", "Brand Humor", "Social Media"],
    link: "#"
  }
];
