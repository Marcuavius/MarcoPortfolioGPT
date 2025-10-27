# Design Guidelines: ChatGPT-Style Portfolio — Theater Mode

## Design Approach
**Reference-Based:** ChatGPT dark interface aesthetic with conversational UX patterns. This is a simulated AI chat experience where all responses are pre-written and keyword-matched—no actual AI backend.

## Core Design Principles
1. **Conversational Feel:** Every interaction should feel like a natural chat, complete with typing animations and casual microcopy
2. **Dark ChatGPT Aesthetic:** Modern dark theme with clean typography and subtle contrast
3. **Theater Mode:** Simulated intelligence through smart keyword matching and canned responses
4. **Fast & Alive:** Instant feedback, smooth transitions, minimal loading states

---

## Layout System

### Spacing
Use Tailwind spacing units: **2, 4, 6, 8, 12, 16** for consistent rhythm throughout the interface.

### Structure
**Desktop Layout:**
- Collapsible left sidebar (280px expanded, 60px collapsed)
- Main chat area (flexible width, max-w-3xl for optimal reading)
- Sticky bottom input bar

**Mobile Layout:**
- Hidden sidebar (slide-in overlay when toggled)
- Full-width chat area
- Sticky bottom input

---

## Typography

**Font Stack:** System fonts for optimal performance and ChatGPT familiarity
- Primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- Monospace (for code/tags): `"SF Mono", Monaco, monospace`

**Hierarchy:**
- Welcome Message: text-lg, font-normal
- Chat Bubbles (User): text-base, font-normal
- Chat Bubbles (Bot): text-base, font-normal
- Project Titles: text-xl, font-semibold
- Section Headers: text-sm, font-medium, uppercase tracking-wide
- Quick Chips: text-sm, font-medium
- Input Placeholder: text-base, opacity-50

---

## Component Library

### Left Sidebar
**Top Section:**
- "New Chat" button (full-width, primary action)

**Quick Prompts Section:**
- Label: "Quick Prompts" (text-xs, uppercase, opacity-60)
- Interactive chips: Tour, Recent Work, Case Studies, Process, Pricing, Contact, About
- Chips: rounded-full, px-4 py-2, hover state

**Project Categories Section:**
- Label: "Project Categories" (text-xs, uppercase, opacity-60)
- Toggle buttons: Web Apps, Design, Branding, UI/UX, Photography, Concepts, Marketing

**Footer:**
- "Portfolio Chat — Theater Mode" (text-xs, opacity-40, centered)

### Main Chat Area
**Header:**
- Monogram left (small, 32px circle)
- Nav links right: Work, About, Contact (text-sm)

**Chat Messages:**
- User bubbles: align-right, max-w-lg, rounded corners (sharp on bottom-right)
- Bot bubbles: align-left, max-w-lg, rounded corners (sharp on bottom-left)
- Avatar icons for bot messages only
- Timestamp: text-xs, opacity-40

**Reply Component Types:**

1. **ReplyCanned** (Text-based)
   - Title + bullet list + optional CTA button
   
2. **ReplyProjectCard** (Single project)
   - Hero image (16:9 aspect ratio)
   - Project title + category tags
   - Summary text
   - Impact bullets
   - "View Project" link + project tags

3. **ReplyReel** (Multi-project grid)
   - Grid layout: 2 columns on desktop, 1 on mobile
   - Compact project cards with hover effects

4. **ReplyContact** (Call-to-action)
   - Large formatted contact block with email/calendar/download options

### Input Area
**Sticky Bottom Bar:**
- Input field: full-width, px-4 py-3, rounded-lg
- Placeholder: "Ask about my work (e.g., 'Show me the soccer site' or 'process')"
- Send button: icon-only, positioned right inside input
- Quick chips row below input: Tour · Projects · Process · Contact · About

---

## Interactions & Animations

**Typing Animation:**
- 600ms delay before bot response appears
- Three-dot "thinking" indicator during delay
- Smooth fade-in for messages

**Sidebar Toggle:**
- Smooth slide transition (300ms ease-in-out)
- Icon rotation for collapse/expand indicator

**Chat Scrolling:**
- Auto-scroll to bottom on new messages
- Smooth scroll behavior enabled

**Hover States:**
- Quick chips: subtle background change + slight scale (1.02)
- Project cards: lift effect (shadow increase)
- Links: opacity change or underline

**No Complex Animations:** Keep it minimal and ChatGPT-like—focus on clarity over flair

---

## Keyword Routing Behavior

The system matches user input (case-insensitive) to trigger specific responses:

**Canned Routes:** tour, process, pricing, contact, about  
**Project Routes:** soccer, drone/aerial, fashion, lofts, maestro, hershey, badge  
**General:** projects, work, portfolio  
**Fallback:** "I might not know that one yet! Try Tour, Process, or tap a prompt below."

**Multi-Match Handling:** Show "Results Reel" with up to 3 relevant projects

---

## Microcopy

**Welcome Message:**  
"👋 Hi, I'm Marco's portfolio copilot. Ask me about a project, my process, or try a quick tour."

**Fallback Response:**  
"I might not know that one yet, but here's what I can show you 👇"

**Empty State:**  
When chat is reset, show welcome message with quick action chips

---

## Images

**Hero Images Required:** Each of the 7 projects needs a hero image:
1. `/images/soccercoachconnect.jpg` - Job board interface screenshot
2. `/images/skypeach.jpg` - Aerial photography sample
3. `/images/ateliermariemac.jpg` - Fashion website homepage
4. `/images/westloftsrome.jpg` - Real estate landing page
5. `/images/maestro-login.jpg` - Login UI concept mockup
6. `/images/hershey.jpg` - Product concept render
7. `/images/badge-clash.jpg` - Illustrated badge caricatures

**Image Treatment:**
- Project cards: 16:9 aspect ratio, object-cover, rounded corners
- Results reel: smaller thumbnails (4:3 or square crops)
- Placeholder backgrounds until images are provided

---

## Color Guidance (Deferred)
Dark ChatGPT-inspired theme with neutral backgrounds and subtle accents—specific color values to be defined in implementation phase.