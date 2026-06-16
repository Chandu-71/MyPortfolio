<div align="center">

<img src="portfolio\public\logo.png" alt="SolverCell Logo" width="120" height="120" style="border-radius: 24px;" />

# CHANDU's UNIVERSE

### _A developer portfolio that doesn't just sit on the internet — it orbits it._

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_LAUNCH_MISSION-chandu--universe.vercel.app-0044ff?style=for-the-badge&labelColor=000000)](https://chandu-universe.vercel.app)
&nbsp;

<br/>

> _"I didn't want a portfolio. I wanted a universe."_

<br/>

</div>

## ✦ The Vision

Most portfolios are pages. This one is an **experience**.

When a visitor lands on **Chandu's Universe**, they don't see a website — they witness a launch sequence. Glowing text ignites letter by letter against pure black. Then the void tears open into a living cosmos: **5,000 procedurally generated stars** slowly rotating in 3D space, a **digital planet** pulsing with energy, and **matrix-style text decryption** revealing who I am — one randomized character at a time.

This is what happens when a developer decides their portfolio should feel like a scene from _Interstellar_.

<br/>

---

<br/>

## ✦ The Experience — Section by Section

<br/>

### 🎬 Launch Sequence
The site opens with a cinematic intro — a black screen where the words **"CHANDU's UNIVERSE"** materialize through a custom letter-by-letter glow animation. Each character fades in with a soft radiance and slight delay, like stars winking into existence. After 2.5 seconds, the intro dissolves and the main experience takes over.

### 🪐 Hero — The Digital Planet
A massive looping video of a **digital planet** fills the background inside a perfectly clipped circle, hovering behind the hero text. The title `Hi, I'm Chandu` doesn't just appear — it **decrypts** from random matrix characters (`#$%&@!*?`) into the final text over 1.6 seconds, simultaneously across both the heading and description. Think sci-fi terminal meets hacker aesthetic.

A glowing **Resume** button with a custom scramble animation on hover completes the section.

### 💫 Starfield — The Living Background
Powered by **React Three Fiber** and `@react-three/drei`, a canvas of **5,000 points** rendered as a rotating sphere forms the persistent background of the entire site. The stars drift slowly on two axes, creating a subtle parallax-like depth that follows you through every section.

### ⚡ Skills
Skills are organized by category — **Languages**, **Frameworks**, **Databases**, and **Developer Tools** — displayed as sleek cards with real logos. Each card lifts on hover with a smooth `-translate-y` micro-animation and shadow bloom.

### 🚀 Projects
Each project is a full-width cinematic card with:
- A **looping space-cloth video** as the card background
- A **dark overlay** for readability
- A project screenshot on the left
- Detailed descriptions, tech stack badges, and direct links to **GitHub** and **Live deployments** on the right

### 🎓 Education
An alternating **zigzag timeline** with glowing gradient connector lines and pulsing dots. An **animated floating astronaut** illustration drifts beside the timeline on desktop, adding personality and depth. Cards have glassmorphism styling with `backdrop-blur` and blue-glow hover effects.

### 📡 Contact
Split into two panels:
- **Left**: A profile card with photo, name, and social links (LinkedIn, GitHub, Email)
- **Right**: A full contact form powered by **Web3Forms** with real-time submission states — a custom rocket launch animation on submit, a spinning loader during transmission, and success/error notifications that slide in from above

A **black hole video** loops softly in the background at reduced opacity, because even the contact form deserves atmosphere.

<br/>

---

<br/>

## ✦ Architecture

```
portfolio/
├── public/                     # Static assets
│   ├── digital_planet.mp4      # Hero background video
│   ├── blackhole.mp4           # Contact section background
│   ├── space_cloth.mp4         # Project card backgrounds
│   ├── spacewalker.png         # Floating astronaut illustration
│   ├── profile.jpg             # Contact section photo
│   └── *_logo.png              # Tech stack icons (15+)
│
├── src/
│   ├── main.jsx                # App entry point
│   ├── App.jsx                 # Root component with intro → main transition
│   ├── index.css               # Global styles, animations, space theme
│   │
│   ├── components/
│   │   ├── LandingPage.jsx     # "CHANDU's UNIVERSE" glow intro
│   │   ├── StarCanvas.jsx      # Three.js starfield (5,000 points)
│   │   └── Header.jsx          # Floating pill navbar with scroll tracking
│   │
│   └── sections/
│       ├── Hero.jsx            # Matrix text + digital planet
│       ├── Skills.jsx          # Categorized tech skill grid
│       ├── Projects.jsx        # Cinematic project cards
│       ├── Education.jsx       # Zigzag timeline + astronaut
│       └── Contact.jsx         # Dual-panel form with blackhole BG
│
├── package.json
├── vite.config.js
└── eslint.config.js
```

<br/>

---

<br/>

## ✦ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **3D Engine** | Three.js + React Three Fiber + Drei |
| **Styling** | Tailwind CSS 4 |
| **Math Utilities** | maath (sphere point generation) |
| **Icons** | Tabler Icons for React |
| **Contact API** | Web3Forms |
| **Deployment** | Vercel |

<br/>

---

<br/>

## ✦ Run Locally

```bash
# Clone the repository
git clone https://github.com/Chandu-71/MyPortfolio.git

# Navigate to the project
cd MyPortfolio/portfolio

# Install dependencies
npm install

# Launch the mission 🚀
npm run mission
```

The dev server will start at `http://localhost:5173`.

> **Note:** `npm run mission` is a custom alias for `vite` — because in this universe, we don't just _run_ projects. We _launch_ them.

<br/>

---

<br/>

## ✦ Key Design Decisions

**Why a launch sequence?**
First impressions matter. The 2.5-second intro builds anticipation and sets the tone — this isn't a LinkedIn clone, it's an experience.

**Why Three.js for stars instead of CSS particles?**
CSS particles are flat. Three.js renders actual 3D points in a sphere, rotating on two axes with depth attenuation. The difference is subtle but subconscious — it _feels_ like space.

**Why video backgrounds on project cards?**
Static screenshots tell you what a project looks like. A gently undulating space-cloth video behind the content tells you what the _developer_ cares about: craft, atmosphere, and going the extra mile.

**Why `maath` for point generation?**
The `inSphere` function generates uniformly distributed random points inside a sphere — no clustering, no dead zones. It's mathematically beautiful randomness, which is exactly what a good starfield needs.

**Why a custom scramble animation on the Resume button?**
Because even a button deserves character. The `chitchat` keyframe animation cycles through randomized symbols before resolving, reinforcing the sci-fi terminal aesthetic that runs through the entire site.

<br/>

---

<br/>

## ✦ Performance Notes

- **Video assets** are optimized and lazy-loaded via native `<video>` with `playsInline` and `muted` attributes for autoplay compatibility
- **Three.js canvas** uses `frustumCulled` points and `Suspense` for deferred rendering
- **Tailwind CSS 4** with Vite plugin for zero-runtime CSS generation
- **IntersectionObserver** powers the scroll-aware navigation — no scroll event listeners

<br/>

---

<br/>

<div align="center">

<br/>

**Built with obsession by [Chandu](https://github.com/Chandu-71)**

_If you liked this project, consider leaving a ⭐ — it fuels the rocket._

</div>
