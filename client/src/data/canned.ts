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
      "Designer–developer blending UX, data, and creativity",
      "Worked across startups, studios, and personal ventures",
      "Currently based in Germany · Fluent in English & French"
    ],
    cta: { label: "View Resume", action: "open-resume" }
  }
};
