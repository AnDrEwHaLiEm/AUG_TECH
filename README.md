# Aug Tech Landing Page

A modern, responsive landing page for Aug Tech built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth scroll animations, dark/light mode, and full RTL support for Arabic content.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌗 **Dark/Light Mode** with next-themes
- 🎭 **Smooth Animations** with Framer Motion
- 🌍 **RTL Support** for Arabic language
- 📱 **Fully Responsive** design
- ♿ **SEO Optimized** with metadata API
- 🎯 **Type-Safe** with TypeScript
- 🧩 **Component-Based** architecture

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── animations/        # Animation wrappers
│   ├── layout/           # Header, Footer, Theme Toggle
│   ├── sections/         # Page sections (Hero, About, etc.)
│   ├── ui/              # Reusable UI components
│   └── providers/       # Context providers
├── lib/
│   ├── constants.ts     # Site configuration & content
│   └── utils.ts        # Utility functions
├── public/
│   └── images/         # Static images
└── types/
    └── index.ts        # TypeScript type definitions
```

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:
- Primary colors: Golden/brown theme
- Dark mode colors: Configured for optimal contrast

### Content

Update content in `lib/constants.ts`:
- Site configuration
- Services
- Features
- Contact information
- Navigation links

### Images

Replace images in `public/images/`:
- `logo.png` - Company logo
- `hero-bg.jpg` - Hero background
- `team.png` - About section image
- `legal-icon.png` - Legal services icon
- `safety-icon.png` - Safety services icon

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **next-themes** - Dark mode
- **Lucide React** - Icons
- **Cairo Font** - Arabic typography

## License

Copyright © 2024 Aug Tech. All rights reserved.
