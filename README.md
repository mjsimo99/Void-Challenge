# YouCanWin - Landing Page

Production-quality React frontend based on a Figma design. Built with Vite, React, and TailwindCSS.

## Tech Stack

- **React 19** with Vite
- **TailwindCSS v4** for styling
- **Poppins** font from Google Fonts
- Modern ES6+ JavaScript
- Functional components with hooks

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx
│   ├── SectionHeading.jsx
│   └── icons/
├── layouts/          # Layout components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/            # Page-level components
│   └── home/         # Home page sections
│       ├── HeroSection.jsx
│       ├── SecondaryHeroSection.jsx
│       ├── CustomerJourneySection.jsx
│       ├── BrandStorySection.jsx
│       ├── BackofficeSection.jsx
│       ├── KeyMetricsSection.jsx
│       ├── PricingStatsSection.jsx
│       ├── PricingSection.jsx
│       ├── GameCatalogSection.jsx
│       ├── CTASection.jsx
│       └── index.jsx
├── assets/           # Static assets
├── hooks/            # Custom hooks
├── utils/            # Utility functions
├── styles/           # Global styles
├── App.jsx
└── main.jsx
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tailwind Configuration

TailwindCSS v4 is configured via the `@tailwindcss/vite` plugin in `vite.config.ts`. Custom theme values (Poppins font, brand colors) are defined in `src/index.css` using `@theme`.

## Responsive Design

The page is fully responsive with breakpoints:
- **Mobile**: Default (base)
- **Tablet**: `sm` (640px), `md` (768px)
- **Desktop**: `lg` (1024px), `xl` (1280px)

## Accessibility

- Semantic HTML (`header`, `main`, `footer`, `section`, `nav`, `article`)
- Alt attributes for images
- ARIA labels where appropriate
- Keyboard navigation support
