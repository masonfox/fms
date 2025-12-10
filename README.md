# Fox Mortuary Services Website

A modern, professional Astro website for Fox Mortuary Services, LLC - a licensed funeral trade establishment serving funeral homes across Northwest Ohio, Southern Michigan, and Northeast Indiana.

## Features

- **Modern Design**: Clean, warm, and professional aesthetic appropriate for a funeral service establishment
- **Custom Color Palette**: Forest green and gold accents with warm neutral backgrounds
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Built-in SEO metadata and Open Graph support
- **Static Site**: Fast, secure, and easy to deploy
- **Reusable Components**: Modular Astro components for easy maintenance

## Tech Stack

- **Astro 4+**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development

## Project Structure

```
/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Section.astro
│   │   └── SEO.astro
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   └── pages/           # Route pages
│       ├── about/
│       │   └── index.astro
│       ├── contact/
│       │   └── index.astro
│       ├── general-information/
│       │   └── index.astro
│       ├── services/
│       │   ├── cremation.astro
│       │   └── index.astro
│       └── index.astro  # Homepage
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

Build the static site:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Color Palette

The site uses a custom color palette defined in `tailwind.config.mjs`:

- **Forest Green**: Primary brand color with shades from 50-900
  - Primary: `forest-700` (#3a614d)
  - Dark: `forest-800` (#273f33)

- **Gold**: Accent color for calls-to-action and highlights
  - Primary: `gold-500` (#efa82a)
  - Light: `gold-400` (#f3c04e)

- **Neutrals**: Warm gray backgrounds using Tailwind's default grays

## Deployment

This is a static site that can be deployed to any static hosting platform:

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your repository
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Build the site: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Other Static Hosts
Upload the contents of the `dist` folder to any static web host (Cloudflare Pages, AWS S3, etc.)

## Contact Form

The contact page includes a form for users to send messages. The form is currently configured to work with **Netlify Forms** (free and automatic when deployed to Netlify).

### Using Netlify Forms (Recommended)

If deploying to Netlify, the form will work automatically - no additional configuration needed. Form submissions will appear in your Netlify dashboard under "Forms".

### Alternative Form Handlers

If not using Netlify, you can connect the form to other services:

**Formspree:**
1. Sign up at [formspree.io](https://formspree.io)
2. Update the form action in `src/pages/contact/index.astro`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Email Service (mailto):**
Replace the form with:
```html
<form action="mailto:foxmortuaryservices@gmail.com" method="POST" enctype="text/plain">
```

**Custom Backend:**
Point the form action to your own API endpoint.

## Customization

### Adding New Pages

Create a new `.astro` file in `src/pages/`:

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import Hero from '@components/Hero.astro';
import Section from '@components/Section.astro';
---

<BaseLayout title="Page Title" description="Page description">
  <Hero title="Page Hero" subtitle="Subtitle text" />
  <Section>
    <!-- Your content here -->
  </Section>
</BaseLayout>
```

### Updating Navigation

Edit the `navItems` array in `src/components/Header.astro`:

```javascript
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  // Add more items...
];
```

### Changing Colors

Modify `tailwind.config.mjs` to adjust the color palette.

### Adding Images

Place images in the `public/images/` directory and reference them as `/images/filename.jpg`.

## Components

### Hero
Large header section with title, subtitle, and gradient background.

```astro
<Hero
  title="Main Title"
  subtitle="Subtitle text"
  height="medium"
/>
```

### Section
Container with consistent padding and background options.

```astro
<Section background="white" padding="large">
  <!-- Content -->
</Section>
```

### Card
Content card with optional title and icon.

```astro
<Card title="Card Title">
  <p>Card content</p>
</Card>
```

### Button
Styled button with multiple variants.

```astro
<Button href="/page/" variant="primary" size="large">
  Click Me
</Button>
```

## License

Copyright © 2025 Fox Mortuary Services, LLC. All rights reserved.

## Support

For questions or issues with the website, contact the web development team or refer to the [Astro documentation](https://docs.astro.build).
