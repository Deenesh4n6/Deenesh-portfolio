# Deenesh A. — Portfolio

A dark-themed, cybersecurity/networking-styled personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## 1. Setup

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

Build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## 2. What to edit first

| What | Where |
|---|---|
| Email, LinkedIn, GitHub, resume link, Groot Grid Instagram/phone, contact form endpoint | `src/data/config.js` |
| The three featured networking case studies (Small Office Network, Secure Office Network, 25-User Company Network Proposal) — objectives, diagrams, VLAN/IP tables, equipment, AMC packages, GitHub/documentation links | `src/data/networkProjects.js` |
| General project descriptions, tech tags, GitHub/live links | `src/data/projects.js` |
| Certification titles, descriptions, certificate/verify URLs | `src/data/certifications.js` |
| Skill lists per category | `src/data/skills.js` |
| Any section copy (About text, Education, career goals, etc.) | the matching file in `src/components/` |

## 2a. About the "Practical Networking Projects" section

This is the most detailed part of the site and lives in `src/data/networkProjects.js` plus a few dedicated components:

- `src/components/NetworkProjects.jsx` — the section that lists all three project cards.
- `src/components/NetworkProjectCard.jsx` — a single summary card with its topology preview and a "View Case Study" button.
- `src/components/CaseStudyModal.jsx` — the full-screen case study (problem, architecture, IP/VLAN tables, security design, installation plan, testing checklist, AMC packages, etc.), adapting automatically to whichever fields exist on a given project.
- `src/components/diagrams/TrunkBranchDiagram.jsx` and `CompanyNetworkDiagram.jsx` — the topology visuals, both horizontally scrollable so they stay readable on mobile.
- `src/components/TestingChecklist.jsx` — an interactive, checkable testing checklist (client-side only, resets each time the modal opens).
- `src/components/CostEstimator.jsx` — an editable equipment/cost table for the 25-user proposal; quantities and unit costs are typed in and the total updates live. All costs start blank (`₹____`) since no real quotations were provided.

Every project is clearly labeled **"Networking Lab / Portfolio Project"** — update `deploymentNote` in `src/data/networkProjects.js` only if you later have a real deployment to describe.

Every placeholder is marked with a `// TODO:` comment so they're easy to find with a project-wide search for `TODO`.

## 3. Connecting the contact form

The form currently only logs submissions to the console (see `submitContactForm` in `src/components/Contact.jsx`). To make it actually send messages:

- **Formspree**: create a form at formspree.io, then set `formEndpoint` in `src/data/config.js` to your form's endpoint URL (e.g. `https://formspree.io/f/xxxxxxx`). The existing `fetch` call in `submitContactForm` will POST to it as JSON.
- **EmailJS**: install `@emailjs/browser` and swap the body of `submitContactForm` for an `emailjs.send(...)` call.
- **Your own backend**: point `formEndpoint` at your API route; adjust the request body shape as needed.

## 4. Resume file

Add your resume PDF to the `public/` folder (e.g. `public/resume.pdf`) and set:

```js
resumeUrl: '/resume.pdf'
```

in `src/data/config.js`.

## 5. Deploying

### Vercel
1. Push this project to a GitHub repository.
2. Go to vercel.com → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

### Netlify
1. Push this project to a GitHub repository.
2. Go to netlify.com → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

Both platforms auto-redeploy whenever you push changes to your repository.

## 6. Project structure

```
src/
├── components/       # One component per section (Navbar, Hero, About, ...)
├── data/             # Editable content: config.js, projects.js, skills.js, certifications.js
├── App.jsx           # Assembles all sections
├── main.jsx          # React entry point
└── index.css         # Tailwind + global styles (grid background, glass cards, etc.)
```

## 7. Notes on accuracy

Per the original brief, no fake statistics, testimonials, certificate URLs, project links, employment history, or credentials (e.g. CCNA) have been added. All such fields are left as clearly marked placeholders in `src/data/` for you to fill in once available.
