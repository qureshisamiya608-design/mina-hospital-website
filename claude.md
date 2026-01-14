# MINA Multi & Super Speciality Hospitals

A modern hospital website built with React, TypeScript, and Vite for MINA Hospitals in Hyderabad, India.

## Tech Stack

| Category | Technology |
|----------|------------|
| **Runtime** | Bun |
| **Framework** | React 18.3.1 + TypeScript 5.8 |
| **Build Tool** | Vite 6.2 |
| **Styling** | Tailwind CSS (via CDN), CSS Variables |
| **Routing** | React Router DOM 6.22 (HashRouter) |
| **Animations** | GSAP 3.14 with ScrollTrigger |
| **UI Components** | Radix UI (dropdown-menu, slot) |
| **AI Integration** | Google Gemini AI (@google/genai) |
| **Icons** | Lucide React, Font Awesome 6 |
| **Fonts** | Plus Jakarta Sans, Playfair Display |

## Project Structure

```
├── index.html          # Entry HTML with Tailwind config, SEO meta, Schema.org
├── index.tsx           # React app entry point
├── App.tsx             # Main app with routing and layout
├── vite.config.ts      # Vite configuration with path aliases
├── components/         # Reusable UI components
│   ├── ui/             # Base components (button, card, input, dropdown-menu)
│   ├── Navbar.tsx      # Site navigation
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Homepage hero section
│   ├── AIAssistant.tsx # Gemini-powered chat widget
│   └── ...             # Feature components
├── pages/              # Route pages
│   ├── Home.tsx        # Homepage (composition of many components)
│   ├── About.tsx       # About page
│   ├── Doctors.tsx     # Doctor listings
│   ├── Departments.tsx # Medical departments
│   ├── Appointment.tsx # Appointment booking
│   └── ...             # Other pages
└── lib/
    └── utils.ts        # Utility functions (cn for classnames)
```

## Commands

```bash
# Development
bun run dev           # Start dev server on port 3000

# Build
bun run build         # Build for production

# Preview
bun run preview       # Preview production build
```

## Key Architectural Patterns

### Routing
Uses `HashRouter` for client-side routing. Routes defined in `App.tsx`:
- `/` - Home
- `/about`, `/mission`, `/vision` - Information pages
- `/doctors`, `/departments` - Listings
- `/appointment` - Booking
- `/emergency`, `/events` - Special pages

### Styling System
- CSS Variables in `:root` (defined in `index.html`)
- Tailwind extended with custom colors: `primary`, `secondary`, `muted`, etc.
- `cn()` utility from `lib/utils.ts` for conditional class merging

### Component Patterns
- Functional components with `React.FC` type
- GSAP animations via `useEffect` with `ScrollTrigger`
- UI components follow shadcn/ui patterns with CVA for variants
- Path alias: `@/` maps to project root

### AI Integration
`AIAssistant.tsx` provides a floating chat widget powered by Google Gemini API.
- API key accessed via `process.env.GEMINI_API_KEY`
- System prompt configured for hospital concierge context

## Environment Variables

Create `.env.local`:
```
GEMINI_API_KEY=your_api_key_here
```

## Code Conventions

- **TypeScript**: Strict typing with `React.FC` for components
- **Imports**: Use `@/` alias for project root imports
- **Components**: One component per file, default export
- **Styling**: Tailwind utility classes, avoid inline styles
- **State**: React hooks (`useState`, `useEffect`, `useRef`)

## Hospital Information

- **Name**: MINA Multi & Super Speciality Hospitals
- **Location**: Hyderabad, Telangana, India
- **Branches**: Mehdipatnam (Main), Shivarampally (Super Speciality)
- **Phone**: 040 2353 1881 (24/7)
- **Colors**: Blue (#003366 primary), Gold (#C78A3B secondary)
