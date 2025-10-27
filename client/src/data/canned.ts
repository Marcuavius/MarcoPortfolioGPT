export interface CannedResponse {
  title: string;
  bullets: string[];
  disclaimer?: string;
  cta?: {
    label: string;
    action: string;
  };
}

export const CANNED: Record<string, CannedResponse> = {
  tour: {
    title: "Quick Tour",
    bullets: [
      "7 unique projects across design, web apps, and branding",
      "Full-stack builds + creative campaigns",
      "Pick a focus: UX · Photography · Branding · Concepts"
    ],
    cta: { label: "Start Tour", action: "tour-start" }
  },
  process: {
    title: "My Process",
    bullets: [
      "Discovery: align goals, audience, and constraints",
      "Design: prototypes, testing, and feedback loops",
      "Build: functional, fast, and flexible deliverables"
    ],
    cta: { label: "View Example Flow", action: "open-process" }
  },
  pricing: {
    title: "Typical Project Ranges",
    bullets: [
      "Landing sites: $1k–$2k",
      "Full web apps: $3k–$6k",
      "Branding & design packages: $800+"
    ],
    disclaimer: "Estimates vary by scope and complexity.",
    cta: { label: "Book Intro Call", action: "open-contact" }
  },
  contact: {
    title: "Let's Talk",
    bullets: [
      "Email: hello@marcoalibaksh.com",
      "Calendly: /intro-call",
      "Download: PDF Portfolio"
    ],
    cta: { label: "Contact Me", action: "open-contact" }
  },
  about: {
    title: "About Marco",
    bullets: [
      "My name is Marco Alibaksh, I'm a web designer who has experience building full stack websites, frontend UX/UI, as well as graphic design for marketing campaigns.",
      "In the past I've had the opportunity to design products across a variety of settings from advertising agencies and large corporations, to small businesses as well as my own start-up projects."
    ],
    cta: { label: "View Resume", action: "open-resume" }
  },
  outsideWork: {
    title: "Outside of Work",
    bullets: [
      "Outside of designing and building things, I'm usually on a soccer pitch ⚽",
      "Hiking somewhere quiet 🏔️",
      "Or experimenting in the kitchen 🍝"
    ]
  },
  soccer: {
    title: "Soccer & Sports",
    bullets: [
      "Football (soccer) has always been a big part of my life",
      "I play, coach, and built SoccerCoachConnect to help other coaches around the world find jobs in the soccer world",
      "My favorite club is Chelsea 💙"
    ]
  },
  howIWork: {
    title: "How I Work",
    bullets: [
      "I work best when things are clear, collaborative, and a little fun",
      "I'm detail-oriented on builds, but I like fast environments",
      "Where I constantly prototype, test, and improve"
    ]
  },
  stubhub: {
    title: "Map Operations Specialist @ StubHub",
    bullets: [
      "January 2025 - PRESENT, Atlanta",
      "Validated and enriched complex venue-map data to ensure accuracy and completeness, directly supporting sales enablement by optimizing coverage and identifying new data opportunities",
      "Built and deployed custom automation scripts that streamlined repetitive mapping tasks, boosting personal productivity by roughly 40% and freeing time for higher-value analysis",
      "Handled 200+ daily seller requests and mapping updates while collaborating with international teams to migrate and modernize legacy map data, ensuring global consistency and platform compatibility"
    ]
  },
  omadeus: {
    title: "Product Designer @ Omadeus (XEBA Technologies)",
    bullets: [
      "July 2021 - July 2024, Berlin, Germany",
      "Independently designed and implemented over 100 web application screens, enhancing functionality and user experience for existing and new features within the company's primary software",
      "Collaborated with Product Managers and Product Owners to translate concepts into compelling visual designs and user-friendly interfaces",
      "Communicated and worked closely with developers to refine designs, facilitating smoother integration to reduce development time estimates"
    ]
  },
  nuesoft: {
    title: "Junior Operations Analyst @ Nuesoft Technologies Inc.",
    bullets: [
      "December 2018 - October 2020, Atlanta",
      "Conducted operational data analysis to identify trends and improve workflows, resolving hundreds of client inquiries related to services, billing, and technical issues",
      "Coordinated with international development teams to align projects and handled client inquiries in French, providing tailored solutions that enhanced service satisfaction"
    ]
  },
  apresdiem: {
    title: "Waiter @ Apres Diem",
    bullets: [
      "November 2015 - June 2020, Atlanta",
      "Trained new hires to accelerate orientation, while advancing from busser to waiter, building strong customer-service skills and ensuring patron satisfaction"
    ]
  },
  experience: {
    title: "Professional Experience",
    bullets: [
      "Map Operations Specialist @ StubHub (Jan 2025 - Present, Atlanta) - Venue data validation, automation scripts, global team collaboration",
      "Product Designer @ Omadeus/XEBA (Jul 2021 - Jul 2024, Berlin) - 100+ web app screens, UX/UI design, developer collaboration",
      "Junior Operations Analyst @ Nuesoft (Dec 2018 - Oct 2020, Atlanta) - Data analysis, client support, French-language services",
      "Waiter @ Apres Diem (Nov 2015 - Jun 2020, Atlanta) - Customer service, team training, operational excellence"
    ],
    cta: { label: "View Full Resume", action: "open-resume" }
  }
};
