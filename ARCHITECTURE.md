# Architecture Overview

## Design Philosophy

This Aug Tech landing page follows modern web development best practices with a focus on:

1. **Component Reusability**: Shared components in `components/ui/`
2. **Content Separation**: All text/data centralized in `lib/constants.ts`
3. **Type Safety**: Full TypeScript coverage
4. **Performance**: Next.js App Router with Server Components
5. **Maintainability**: Clear folder structure and naming conventions

## Component Hierarchy

```
RootLayout (app/layout.tsx)
└── ThemeProvider
    └── HomePage (app/page.tsx)
        ├── Header
        │   ├── Container
        │   ├── Navigation Links
        │   ├── ThemeToggle
        │   └── Button (CTA)
        ├── Hero
        │   ├── Container
        │   ├── Motion Animations
        │   └── Buttons
        ├── About
        │   ├── Container
        │   ├── SectionHeader
        │   ├── ScrollFadeIn (Image)
        │   └── ScrollFadeIn (Content)
        ├── Services
        │   ├── Container
        │   ├── SectionHeader
        │   └── ScrollFadeIn → Card (×2)
        ├── WhyUs
        │   ├── Container
        │   ├── SectionHeader
        │   └── ScrollFadeIn → Card (×4)
        ├── Contact
        │   ├── Container
        │   ├── SectionHeader
        │   ├── ScrollFadeIn (Contact Info Cards ×3)
        │   └── ScrollFadeIn (Form)
        └── Footer
            └── Container
```

## Data Flow

### Content Management
```
lib/constants.ts
    ↓
Components (via imports)
    ↓
Rendered UI
```

**Example**:
```typescript
// lib/constants.ts
export const SERVICES = [...]

// components/sections/Services.tsx
import { SERVICES } from '@/lib/constants';
SERVICES.map(service => <Card>...</Card>)
```

### Theme Management
```
ThemeProvider (next-themes)
    ↓
localStorage (persistence)
    ↓
ThemeToggle component
    ↓
Tailwind dark: classes
```

### Animation Flow
```
ScrollFadeIn component
    ↓
useInView hook (Framer Motion)
    ↓
Detect scroll position
    ↓
Trigger animation when in viewport
```

## Styling Strategy

### Tailwind CSS Approach

1. **Utility-First**: Primary styling method
2. **Component Classes**: Only when utilities become repetitive
3. **CSS Variables**: Minimal use, mainly for complex scrollbar styling

### Color System

```
Primary (Brand Gold):
- 50-900 shades in tailwind.config.ts
- Main: primary-400 (#c9a961)

Dark Mode:
- Custom dark-50 to dark-950 scale
- Optimized for contrast

Usage:
- bg-primary-400 (light mode)
- dark:bg-primary-500 (dark mode)
```

### Responsive Design Pattern

**Mobile-First Approach**:
```tsx
<div className="
  text-sm           // Mobile default
  md:text-base      // Tablet+
  lg:text-lg        // Desktop+
">
```

**Container Sizing**:
```tsx
<Container size="xl">  // max-w-7xl
<Container size="lg">  // max-w-6xl
```

## Animation System

### ScrollFadeIn Component

**Purpose**: Trigger animations when elements enter viewport

**Parameters**:
- `direction`: 'up' | 'down' | 'left' | 'right'
- `delay`: number (in seconds)
- `duration`: number (in seconds)

**Usage Pattern**:
```tsx
<ScrollFadeIn direction="up" delay={0.2}>
  <Card>Content</Card>
</ScrollFadeIn>
```

**How It Works**:
1. Uses Framer Motion's `useInView` hook
2. Monitors element position relative to viewport
3. Triggers animation once when element is 100px from viewport
4. Uses `once: true` to prevent re-animation on scroll up

### Hero Animations

**Staggered Entrance**:
```
Title → delay: 0.2s
Divider → delay: 0.4s
Subtitle → delay: 0.6s
Description → delay: 0.8s
Buttons → delay: 1.0s
```

## SEO Architecture

### Metadata Strategy

**Location**: `app/layout.tsx`

**Includes**:
- Basic metadata (title, description, keywords)
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Canonical URLs
- Robots directives

**Dynamic**: Can be extended per-page using Next.js metadata API

### Sitemap & Manifest

- `app/sitemap.ts`: Auto-generates XML sitemap
- `app/manifest.ts`: PWA manifest for mobile

## Performance Optimizations

### Image Optimization

```tsx
<Image
  src="/images/hero.jpg"
  alt="..."
  quality={90}           // High quality for hero
  priority              // Preload above fold
  fill / width/height   // Prevent layout shift
/>
```

**Formats**: Automatic conversion to WebP/AVIF

### Code Splitting

- **Automatic**: Next.js App Router splits by route
- **Client Components**: Marked with 'use client' directive
- **Server Components**: Default, zero JS to client

### Loading Strategy

1. **Critical Path**: Hero images use `priority`
2. **Below Fold**: Lazy load automatically
3. **Fonts**: Cairo loaded via next/font with `display: swap`

## State Management

### Current Approach

**No Global State Library** - Using React built-ins:

1. **Theme**: next-themes (localStorage + context)
2. **Form State**: Local useState in Contact component
3. **Mobile Menu**: Local useState in Header

### Adding State (If Needed)

For future complex state, consider:
- Zustand (lightweight)
- React Context (for cross-component data)
- Server State: React Query (for API calls)

## Type System

### Type Definitions

**Location**: `types/index.ts`

**Current Types**:
```typescript
Service
Feature
ContactInfo
SocialLinks
```

### Type Safety Benefits

1. Autocomplete in IDE
2. Catch errors at compile time
3. Self-documenting code
4. Refactoring confidence

## Build Process

### Development
```bash
npm run dev
```
- Turbopack (fast refresh)
- TypeScript checking
- Hot Module Replacement

### Production
```bash
npm run build
```
- TypeScript compilation
- CSS optimization
- Image optimization
- Code minification
- Static page generation

### Output
```
.next/
├── static/        # Static assets
├── server/        # Server bundles
└── cache/         # Build cache
```

## Deployment Considerations

### Environment Variables

**Create `.env.local`** for:
```
NEXT_PUBLIC_SITE_URL=https://augtech.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
# Email service API keys, etc.
```

### Build Optimization

**Already Configured**:
- Image optimization
- Font optimization
- CSS minification
- Tree shaking
- React Strict Mode

## Future Enhancements

### Potential Additions

1. **Blog System**: Add `/blog` route
2. **Multi-language**: Add English version
3. **Analytics**: Google Analytics/Plausible
4. **CMS Integration**: Contentful, Sanity, etc.
5. **Email Service**: Connect contact form to EmailJS/SendGrid
6. **More Animations**: Parallax, complex transitions
7. **Portfolio Section**: Showcase projects

### Scalability Path

1. Add more pages → Create in `app/` directory
2. Need database → Add Prisma/Drizzle ORM
3. Authentication → NextAuth.js
4. API Routes → Create in `app/api/`

## Development Workflow

### Making Changes

1. **Content**: Edit `lib/constants.ts`
2. **Styling**: Modify Tailwind classes inline
3. **Components**: Update in `components/`
4. **Types**: Extend in `types/index.ts`

### Testing

```bash
npm run build    # Test production build
npm run lint     # Check code quality
```

### Version Control

**Recommended `.gitignore`** (already included):
- `node_modules/`
- `.next/`
- `.env*.local`

## Best Practices Applied

1. ✅ **Semantic HTML**: Proper heading hierarchy, sections
2. ✅ **Accessibility**: ARIA labels, alt texts, keyboard navigation
3. ✅ **SEO**: Metadata, sitemap, semantic structure
4. ✅ **Performance**: Image optimization, code splitting
5. ✅ **Type Safety**: Full TypeScript coverage
6. ✅ **Responsive**: Mobile-first design
7. ✅ **Dark Mode**: Respects system preference
8. ✅ **RTL Support**: Arabic language optimization

## Troubleshooting

### Common Issues

**Build Fails**:
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Styling Not Updating**:
- Clear browser cache
- Check Tailwind class names
- Verify dark mode is working

**Images Not Loading**:
- Check file paths in `public/images/`
- Verify Image component src props
- Check image formats (jpg, png, webp)

**Type Errors**:
```bash
npm run lint
```

---

**This architecture supports rapid development while maintaining code quality and performance.**
