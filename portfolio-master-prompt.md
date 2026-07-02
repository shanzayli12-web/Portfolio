# Master Prompt: Shanzay Ali Khan — Portfolio Website

Copy everything below into your code-generation LLM (Claude Sonnet, GPT-4o, etc.) as a single prompt.

---

## PROMPT START

You are an expert frontend engineer and product designer. Build a complete, production-ready personal portfolio website. Write clean, component-based, fully responsive code. Do not use placeholder lorem ipsum anywhere — use the exact real content provided below.

### 1. Tech Stack (mandatory)
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (utility-first, custom theme extension — no inline styles except where truly necessary)
- **Animation:** Framer Motion for scroll-triggered reveals, page transitions, and hover/tap micro-interactions
- **Routing:** React Router v6 — this is a **multi-page** site (see Site Structure below)
- **Icons:** lucide-react
- Use functional components and React hooks only. No class components.
- Structure the project with clear separation: `/src/components`, `/src/pages`, `/src/data` (content as structured JS/TS objects, not hardcoded in JSX), `/src/hooks`.

### 2. Design Direction
Aesthetic: **modern, minimalist, "indie tech" warmth** — think Read.cv / LinkedIn-quality layout precision, but with a **beige/brown, earthy, editorial** palette instead of the typical cold black-and-white SaaS look. It should feel premium, calm, and human — not corporate.

- **Palette:**
  - Light mode: warm off-white/cream background (`#F7F3EC` or similar), deep espresso/charcoal-brown text (`#2B241D`), a muted terracotta or clay accent (`#B5613D` or similar) for CTAs/links/highlights.
  - Dark mode: warm near-black background (`#1B1712`), soft cream text (`#EDE6DA`), same clay/terracotta accent for consistency.
  - Implement via Tailwind `dark:` variants and a toggle (see below).
- **Typography:** Use a clean geometric/humanist sans-serif for headings (e.g., "Inter" or "General Sans" via Google Fonts/Fontsource) paired with a slightly warmer serif or editorial sans for large hero/display text if it fits the mood (optional — Inter throughout is also acceptable). Establish a clear type scale: hero headline, section headings, body, captions. Generous line-height and letter-spacing on headlines.
- **Layout:** Generous whitespace, max-width content containers (e.g., `max-w-5xl`), strong grid alignment, subtle dividers instead of heavy borders/shadows. Avoid clutter — every section should breathe.
- **Dark/Light Toggle:** Persistent toggle in the nav (sun/moon icon), store preference in `localStorage`, respect `prefers-color-scheme` on first load.
- **Micro-interactions:** Framer Motion for — fade/slide-up on scroll into view for each section, staggered reveal of project cards, smooth hover states on links/buttons (underline draw, subtle scale/lift on cards), animated page transitions between routes (fade or slide), and a subtle animated nav that condenses/adds a background blur on scroll.

### 3. Site Structure (multi-page)
- `/` — Home (Hero, About, Featured Projects preview, Contact CTA)
- `/projects` — Full projects index/grid
- `/projects/:slug` — Individual project case study page (dynamic route, data-driven)
- Shared persistent `Nav` (with dark/light toggle) and `Footer` across all routes.
- Use React Router's `<Outlet>`/layout pattern so Nav/Footer don't remount on navigation.

### 4. Content — use exactly as written

**Identity**
- Name: **Shanzay Ali Khan**
- Title: **Software Engineer**
- Value proposition (use for Hero subheading / About intro, feel free to lightly tighten for hero-length copy but preserve meaning):
  > "What makes me stand out is that I am a frontend-focused engineer who refuses to be boxed into a specific stack. I specialize in crafting seamless user interfaces using React, JavaScript, and modern CSS, but I treat languages as tools, not identities. Having worked with Python, I've proven my ability to jump across the stack when a project demands it. Tech evolves rapidly, so my true strength lies in my core engineering fundamentals and my ability to rapidly learn, adapt, and ship high-quality code in whatever language the problem requires."

**Featured Project — HireWave**
- Name: **HireWave**
- Tagline: Job Board & Hiring Platform
- Tech stack: TypeScript, React, GraphQL, gRPC, Docker, Redis, PostgreSQL
- Details (present as case study body copy, structured into problem/architecture/highlights, not one wall of text):
  - Architected a full-stack, containerized job platform with 6 independent microservices orchestrated via Docker Compose — frontend, GraphQL gateway, Jobs REST API, User/Application/Notification gRPC services.
  - Built an Apollo Server 4 GraphQL gateway routing requests to Node.js gRPC microservices (ports 50051–50053), with Redis caching for job listings and PostgreSQL for persistent data.
  - Entire infrastructure deployable with a single `docker-compose up --build` command.
- On the case study page, include distinct sections: Overview, Role, Tech Stack (as tag chips), Architecture Highlights (bulleted), and a placeholder image/diagram block for an architecture screenshot (use a clean bordered placeholder div, not a broken image).

**Additional Projects (placeholders)**
- Include 2 additional project card slots on `/projects` styled identically to HireWave, using clearly-marked placeholder data (e.g., "Project Two — Coming Soon") so Shanzay can drop in real content later. Do not invent fake metrics or fake company names — keep placeholder copy generic and obviously a placeholder.

**Contact / Footer (use on every page footer + a dedicated Contact section on Home)**
- Email: shanzayli12@gmail.com — mailto link
- LinkedIn: https://www.linkedin.com/in/shanzay-aly
- GitHub: https://github.com/shanzayli12-web
- Render these as icon + label links (lucide-react `Mail`, `Linkedin`, `Github` icons), open external links in a new tab with `rel="noopener noreferrer"`.

### 5. Component Requirements
Build these as distinct, reusable components:
- `Nav.jsx` — logo/name, route links, dark/light toggle, scroll-aware background
- `Hero.jsx` — name, title, animated value-prop text, primary CTA ("View My Work") and secondary CTA (contact/resume)
- `About.jsx`
- `ProjectCard.jsx` — reusable for grid and preview list
- `ProjectCaseStudy.jsx` — full case study layout for dynamic project route
- `ContactSection.jsx`
- `Footer.jsx`
- `ThemeToggle.jsx` — isolated dark/light logic, exposed via a `useTheme` hook

### 6. Code Quality Requirements
- Fully responsive: mobile-first, test breakpoints at `sm`, `md`, `lg`, `xl`.
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy).
- Accessible: proper `alt` text, focus states, sufficient color contrast in both themes, keyboard-navigable nav and toggle.
- All project/content data centralized in `/src/data/projects.js` (or `.ts`) as an array of objects with `slug`, `name`, `tagline`, `stack`, `overview`, `highlights`, etc., so the case study route can look up by `slug` via `useParams`.
- Include basic SEO: `<title>` and meta description per page (use `react-helmet-async` or manual `document.title` updates).
- Clean, commented code where logic isn't self-evident. No dead code, no console.logs left in.
- Deliver full file structure and full contents of every file — not snippets.

Now generate the complete project.

## PROMPT END
