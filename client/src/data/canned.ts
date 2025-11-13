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
  contact: {
    title: "Let's Connect",
    bullets: [
      "📧 Email: marco9a99@gmail.com",
      "📱 Phone: +1 (404) 956-1624",
      "💼 LinkedIn: linkedin.com/in/marcoalibaksh",
      "💻 GitHub: https://github.com/Marcuavius",
      "📚 Goodreads: https://www.goodreads.com/user/show/183662523-marco",
      "📄 View Full Resume"
    ]
  },
  about: {
    title: "About Marco",
    bullets: [
      "👋 My name is Marco Alibaksh, and I was born and raised in Atlanta, GA.",
      "💻 I'm a web designer with experience building full-stack websites, UX/UI front-end experiences, and designing visual assets for marketing campaigns.",
      "🧠 Skills: Web Design, SQL, Python, Tableau, Microsoft Excel, Power BI, Google Analytics 360, Adobe Creative Suite, Figma",
      "🌍 Languages: English (native), French (native), Spanish (professional).",
      "⚽ Hobbies & Interests: Soccer, Chess, Web Development, Financial Markets & Blockchain, Artificial Intelligence"
    ]
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
      "Map Operations Specialist @ StubHub (Jan 2025 - Present, Atlanta)",
      "Venue data validation, automation scripts, global team collaboration",
      "Product Designer @ Omadeus/XEBA (Jul 2021 - Jul 2024, Berlin)",
      "100+ web app screens, UX/UI design, developer collaboration",
      "Junior Operations Analyst @ Nuesoft (Dec 2018 - Oct 2020, Atlanta)",
      "Data analysis, client support, French-language services",
      "Waiter @ Apres Diem (Nov 2015 - Jun 2020, Atlanta)",
      "Customer service, team training, operational excellence"
    ],
    cta: { label: "View Full Resume", action: "open-resume" }
  }
};
