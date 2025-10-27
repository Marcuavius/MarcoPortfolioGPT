import { PROJECTS, type Project } from '@/data/projects';
import { CANNED } from '@/data/canned';

export type MatchType = 'canned' | 'project' | 'projects' | 'fallback';

export interface MatchResult {
  type: MatchType;
  key?: string;
  projects?: Project[];
}

const KEYWORD_MAP: Record<string, { type: MatchType; key?: string; projectSlugs?: string[] }> = {
  tour: { type: 'canned', key: 'tour' },
  overview: { type: 'canned', key: 'tour' },
  highlights: { type: 'canned', key: 'tour' },
  'show everything': { type: 'canned', key: 'tour' },
  
  process: { type: 'canned', key: 'process' },
  workflow: { type: 'canned', key: 'process' },
  'build steps': { type: 'canned', key: 'process' },
  method: { type: 'canned', key: 'process' },
  
  pricing: { type: 'canned', key: 'pricing' },
  cost: { type: 'canned', key: 'pricing' },
  rates: { type: 'canned', key: 'pricing' },
  budget: { type: 'canned', key: 'pricing' },
  quote: { type: 'canned', key: 'pricing' },
  range: { type: 'canned', key: 'pricing' },
  estimate: { type: 'canned', key: 'pricing' },
  
  contact: { type: 'canned', key: 'contact' },
  book: { type: 'canned', key: 'contact' },
  email: { type: 'canned', key: 'contact' },
  talk: { type: 'canned', key: 'contact' },
  connect: { type: 'canned', key: 'contact' },
  'reach out': { type: 'canned', key: 'contact' },
  
  about: { type: 'canned', key: 'about' },
  bio: { type: 'canned', key: 'about' },
  background: { type: 'canned', key: 'about' },
  resume: { type: 'canned', key: 'about' },
  experience: { type: 'canned', key: 'about' },
  'who are you': { type: 'canned', key: 'about' },
  
  'outside of work': { type: 'canned', key: 'outsideWork' },
  'outside work': { type: 'canned', key: 'outsideWork' },
  hobbies: { type: 'canned', key: 'outsideWork' },
  personal: { type: 'canned', key: 'outsideWork' },
  'what do you do outside': { type: 'canned', key: 'outsideWork' },
  
  'soccer side': { type: 'canned', key: 'soccer' },
  'tell me about soccer': { type: 'canned', key: 'soccer' },
  'tell me about your soccer': { type: 'canned', key: 'soccer' },
  sports: { type: 'canned', key: 'soccer' },
  chelsea: { type: 'canned', key: 'soccer' },
  
  'how i work': { type: 'canned', key: 'howIWork' },
  'how you work': { type: 'canned', key: 'howIWork' },
  'style of working': { type: 'canned', key: 'howIWork' },
  'work style': { type: 'canned', key: 'howIWork' },
  'working style': { type: 'canned', key: 'howIWork' },
  
  'stubhub experience': { type: 'canned', key: 'stubhub' },
  'stubhub': { type: 'canned', key: 'stubhub' },
  'map operations': { type: 'canned', key: 'stubhub' },
  
  'omadeus experience': { type: 'canned', key: 'omadeus' },
  'omadeus': { type: 'canned', key: 'omadeus' },
  'xeba': { type: 'canned', key: 'omadeus' },
  'product designer': { type: 'canned', key: 'omadeus' },
  
  'nuesoft experience': { type: 'canned', key: 'nuesoft' },
  'nuesoft': { type: 'canned', key: 'nuesoft' },
  'operations analyst': { type: 'canned', key: 'nuesoft' },
  
  'apres diem experience': { type: 'canned', key: 'apresdiem' },
  'apres diem': { type: 'canned', key: 'apresdiem' },
  'waiter': { type: 'canned', key: 'apresdiem' },
  
  'soccercoachconnect.com': { type: 'project', projectSlugs: ['soccercoachconnect'] },
  'soccercoachconnect': { type: 'project', projectSlugs: ['soccercoachconnect'] },
  coach: { type: 'project', projectSlugs: ['soccercoachconnect'] },
  club: { type: 'project', projectSlugs: ['soccercoachconnect'] },
  database: { type: 'project', projectSlugs: ['soccercoachconnect'] },
  supabase: { type: 'project', projectSlugs: ['soccercoachconnect'] },
  'full stack': { type: 'project', projectSlugs: ['soccercoachconnect'] },
  
  'skypeach.net': { type: 'project', projectSlugs: ['skypeach'] },
  sky: { type: 'project', projectSlugs: ['skypeach'] },
  drone: { type: 'project', projectSlugs: ['skypeach'] },
  photo: { type: 'project', projectSlugs: ['skypeach'] },
  aerial: { type: 'project', projectSlugs: ['skypeach'] },
  construction: { type: 'project', projectSlugs: ['skypeach'] },
  
  'ateliermariemac.com': { type: 'project', projectSlugs: ['ateliermariemac'] },
  atelier: { type: 'project', projectSlugs: ['ateliermariemac'] },
  fashion: { type: 'project', projectSlugs: ['ateliermariemac'] },
  shop: { type: 'project', projectSlugs: ['ateliermariemac'] },
  branding: { type: 'project', projectSlugs: ['ateliermariemac'] },
  'e-commerce': { type: 'project', projectSlugs: ['ateliermariemac'] },
  
  'westloftsinromega.com': { type: 'project', projectSlugs: ['westloftsrome'] },
  lofts: { type: 'project', projectSlugs: ['westloftsrome'] },
  rome: { type: 'project', projectSlugs: ['westloftsrome'] },
  'real estate': { type: 'project', projectSlugs: ['westloftsrome', 'skypeach'] },
  'landing page': { type: 'project', projectSlugs: ['westloftsrome'] },
  property: { type: 'project', projectSlugs: ['westloftsrome'] },
  site: { type: 'project', projectSlugs: ['westloftsrome'] },
  
  maestro: { type: 'project', projectSlugs: ['maestro-login'] },
  login: { type: 'project', projectSlugs: ['maestro-login'] },
  ui: { type: 'project', projectSlugs: ['maestro-login'] },
  interface: { type: 'project', projectSlugs: ['maestro-login'] },
  ux: { type: 'project', projectSlugs: ['maestro-login'] },
  
  hershey: { type: 'project', projectSlugs: ['hershey-concept'] },
  concept: { type: 'project', projectSlugs: ['hershey-concept'] },
  chocolate: { type: 'project', projectSlugs: ['hershey-concept'] },
  mockup: { type: 'project', projectSlugs: ['hershey-concept'] },
  advertising: { type: 'project', projectSlugs: ['hershey-concept'] },
  'product design': { type: 'project', projectSlugs: ['hershey-concept'] },
  
  badge: { type: 'project', projectSlugs: ['badge-clash'] },
  clash: { type: 'project', projectSlugs: ['badge-clash'] },
  logo: { type: 'project', projectSlugs: ['badge-clash'] },
  football: { type: 'project', projectSlugs: ['badge-clash'] },
  caricature: { type: 'project', projectSlugs: ['badge-clash'] },
  illustration: { type: 'project', projectSlugs: ['badge-clash'] },
  
  projects: { type: 'projects' },
  'case studies': { type: 'projects' },
  portfolio: { type: 'projects' },
  work: { type: 'projects' },
};

export function matchKeywords(input: string): MatchResult {
  const normalized = input.toLowerCase().trim();
  
  const matchedProjects = new Set<string>();
  let cannedKey: string | undefined;
  let hasProjectsRequest = false;
  
  for (const [keyword, config] of Object.entries(KEYWORD_MAP)) {
    if (normalized.includes(keyword)) {
      if (config.type === 'canned' && config.key) {
        cannedKey = config.key;
      } else if (config.type === 'project' && config.projectSlugs) {
        config.projectSlugs.forEach(slug => matchedProjects.add(slug));
      } else if (config.type === 'projects') {
        hasProjectsRequest = true;
      }
    }
  }
  
  if (cannedKey) {
    return { type: 'canned', key: cannedKey };
  }
  
  if (hasProjectsRequest) {
    return { type: 'projects', projects: PROJECTS };
  }
  
  if (matchedProjects.size > 0) {
    const projects = PROJECTS.filter(p => matchedProjects.has(p.slug));
    return { 
      type: 'project', 
      projects: projects.slice(0, 3)
    };
  }
  
  return { type: 'fallback' };
}
