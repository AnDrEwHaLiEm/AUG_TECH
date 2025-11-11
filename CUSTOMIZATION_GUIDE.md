# Customization Guide

This guide will help you customize every aspect of your Aug Tech landing page without needing to understand the entire codebase.

## 📝 Updating Content

### Site Information

**File**: `lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  name: 'أوج تك',              // Arabic name
  nameEn: 'Aug Tech',           // English name
  description: 'نبني المستقبل الرقمي...',  // Site description
  url: 'https://augtech.com',   // Your domain
  keywords: ['...'],            // SEO keywords
};
```

### Navigation Menu

**File**: `lib/constants.ts`

```typescript
export const NAV_LINKS = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'عن أوج تك' },
  // Add more links:
  { href: '#new-section', label: 'قسم جديد' },
];
```

### Services Section

**File**: `lib/constants.ts`

```typescript
export const SERVICES: Service[] = [
  {
    id: 'legal',                    // Unique ID
    title: 'استشارات قانونية',       // Service title
    description: 'نقدم استشارات...',  // Description
    icon: '/images/legal-icon.png', // Icon path
  },
  // Add new service:
  {
    id: 'tech-consulting',
    title: 'استشارات تقنية',
    description: 'حلول تقنية متقدمة',
    icon: '/images/tech-icon.png',
  },
];
```

### Features (Why Us Section)

**File**: `lib/constants.ts`

```typescript
export const FEATURES: Feature[] = [
  {
    id: 'transparency',
    title: 'الشفافية التامة',
    description: 'نلتزم بالشفافية الكاملة...',
    icon: 'Eye',  // Lucide icon name
  },
  // Available icons: Eye, Award, Lightbulb, Headphones, Shield, Zap, etc.
];
```

### Contact Information

**File**: `lib/constants.ts`

```typescript
export const CONTACT_INFO: ContactInfo = {
  phone: '+966 50 123 4567',
  email: 'info@augtech.com',
  address: 'الرياض، المملكة العربية السعودية',
};
```

### Social Media Links

**File**: `lib/constants.ts`

```typescript
export const SOCIAL_LINKS: SocialLinks = {
  facebook: 'https://facebook.com/yourpage',
  twitter: 'https://twitter.com/yourhandle',
  linkedin: 'https://linkedin.com/company/yourcompany',
  instagram: 'https://instagram.com/yourpage',
};
```

## 🎨 Changing Colors

### Brand Color

**File**: `tailwind.config.ts`

```typescript
primary: {
  50: '#faf8f3',
  // ... other shades
  400: '#c9a961',  // 👈 Main brand color - CHANGE THIS
  500: '#b8934e',
  // ... other shades
}
```

### Gradient Generator

Use [UIColors](https://uicolors.app/create) to generate full color scale:
1. Enter your brand color
2. Copy the generated shades
3. Replace in `tailwind.config.ts`

### Dark Mode Colors

**File**: `tailwind.config.ts`

```typescript
dark: {
  50: '#f6f6f7',
  // ... shades for dark mode backgrounds
  950: '#1a1b1e',  // Darkest shade
}
```

## 🖼️ Replacing Images

### Image Locations

All images are in: `public/images/`

**Current Images**:
- `logo.png` - Company logo (used in header & footer)
- `hero-bg.jpg` - Hero section background
- `team.png` - About section team photo
- `legal-icon.png` - Legal services icon
- `safety-icon.png` - Safety services icon

### How to Replace

1. **Keep same filenames** OR
2. Update paths in components:

**Logo**:
```tsx
// components/layout/Header.tsx & Footer.tsx
<Image src="/images/YOUR-LOGO.png" ... />
```

**Hero Background**:
```tsx
// components/sections/Hero.tsx
<Image src="/images/YOUR-HERO-BG.jpg" ... />
```

**Team Photo**:
```tsx
// components/sections/About.tsx
<Image src="/images/YOUR-TEAM.png" ... />
```

**Service Icons**:
```typescript
// lib/constants.ts
icon: '/images/YOUR-ICON.png'
```

### Image Requirements

- **Logo**: PNG with transparency, ~200x60px
- **Hero**: JPG/PNG, min 1920x1080px
- **Team**: JPG/PNG, ~600x400px
- **Icons**: PNG with transparency, 80x80px minimum

## ✏️ Editing Text Content

### Hero Section

**File**: `components/sections/Hero.tsx`

```tsx
<h1>أوج تك</h1>  // Main title
<h2>نبني المستقبل الرقمي بتقنيات متقدمة</h2>  // Subtitle
<p>نقدم الحلول الإبداعية...</p>  // Description
```

### About Section

**File**: `components/sections/About.tsx`

```tsx
<h3>رؤيتنا في أوج تك</h3>
<p>في أوج تك، نؤمن بأن...</p>

// Stats
<div className="text-4xl">15+</div>
<div>سنة خبرة</div>
```

### Footer

**File**: `components/layout/Footer.tsx`

```tsx
// Working hours
<li>الأحد - الخميس</li>
<li>9:00 ص - 6:00 م</li>
```

## 🎬 Customizing Animations

### Animation Speed

**File**: `components/animations/ScrollFadeIn.tsx`

```tsx
// Default values
duration = 0.5    // Animation duration (seconds)
delay = 0         // Delay before animation (seconds)

// To change globally, update default values
// Or pass custom values when using:
<ScrollFadeIn duration={0.8} delay={0.3}>
```

### Animation Direction

```tsx
// Available directions:
<ScrollFadeIn direction="up">      // From bottom
<ScrollFadeIn direction="down">    // From top
<ScrollFadeIn direction="left">    // From right (RTL)
<ScrollFadeIn direction="right">   // From left (RTL)
```

### Disable Animations

To disable for a section, remove the `<ScrollFadeIn>` wrapper:

```tsx
// Before
<ScrollFadeIn>
  <Card>Content</Card>
</ScrollFadeIn>

// After
<Card>Content</Card>
```

## 🌓 Theme Customization

### Default Theme

**File**: `components/providers/ThemeProvider.tsx`

```tsx
defaultTheme="light"  // Change to "dark" or "system"
```

### Theme Colors

**File**: `app/globals.css`

```css
/* Scrollbar in light mode */
::-webkit-scrollbar-thumb {
  background-color: #c9a961;  /* Your color */
}

/* Scrollbar in dark mode */
.dark ::-webkit-scrollbar-thumb {
  background-color: #b8934e;  /* Your color */
}
```

## 📱 Form Customization

### Contact Form Fields

**File**: `components/sections/Contact.tsx`

**Add New Field**:
```tsx
// 1. Update state
const [formData, setFormData] = useState({
  // ... existing fields
  company: '',  // New field
});

// 2. Add input
<div>
  <label htmlFor="company">اسم الشركة</label>
  <input
    type="text"
    id="company"
    name="company"
    value={formData.company}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg..."
  />
</div>
```

### Form Submission

**Connect to Email Service**:

```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Replace with your email service
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('تم إرسال رسالتك بنجاح!');
      setFormData({ /* reset */ });
    }
  } catch (error) {
    alert('حدث خطأ، يرجى المحاولة مرة أخرى');
  }

  setIsSubmitting(false);
};
```

## 🔤 Typography

### Font Family

**File**: `app/layout.tsx`

```tsx
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  // To change font, replace Cairo with another Google Font
});
```

**Available Arabic Fonts**:
- Cairo (current)
- Tajawal
- Almarai
- Amiri
- Noto Sans Arabic

### Font Sizes

**File**: `tailwind.config.ts`

```typescript
fontSize: {
  'xs': '0.75rem',
  'sm': '0.875rem',
  'base': '1rem',     // Default
  'lg': '1.125rem',
  // Add custom sizes:
  'custom': '1.5rem',
}
```

## 📏 Spacing & Layout

### Container Width

**File**: `components/ui/Container.tsx`

```tsx
const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',    // Default, change if needed
  full: 'max-w-full',
};
```

### Section Padding

**Files**: All section components

```tsx
// Vertical padding
<section className="py-20 md:py-32">  // Adjust values
```

## 🔘 Button Styles

**File**: `components/ui/Button.tsx`

```tsx
// Primary button color
primary: 'bg-primary-400 text-white hover:bg-primary-500'

// To change, edit the variantClasses
```

## 📦 Adding New Sections

### Step-by-Step

1. **Create Component**:
```tsx
// components/sections/NewSection.tsx
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollFadeIn from '@/components/animations/ScrollFadeIn';

export default function NewSection() {
  return (
    <section id="new-section" className="py-20 bg-white dark:bg-dark-950">
      <Container>
        <ScrollFadeIn>
          <SectionHeader title="عنوان القسم" />
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <p>محتوى القسم</p>
        </ScrollFadeIn>
      </Container>
    </section>
  );
}
```

2. **Add to Page**:
```tsx
// app/page.tsx
import NewSection from '@/components/sections/NewSection';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <NewSection />  {/* Add here */}
      <Services />
      // ...
    </main>
  );
}
```

3. **Update Navigation**:
```typescript
// lib/constants.ts
export const NAV_LINKS = [
  // ... existing links
  { href: '#new-section', label: 'القسم الجديد' },
];
```

## 🌍 SEO Optimization

### Meta Tags

**File**: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  keywords: ['keyword1', 'keyword2'],
  // Update with your content
};
```

### Google Verification

**File**: `app/layout.tsx`

```tsx
verification: {
  google: 'your-verification-code-here',
},
```

### Sitemap URL

**File**: `lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  url: 'https://your-domain.com',  // Update with your domain
};
```

## 💡 Quick Tips

1. **Hot Reload**: Changes appear automatically in development
2. **Type Safety**: If you see TypeScript errors, check type definitions
3. **Dark Mode**: Always test both light and dark modes
4. **Responsive**: Test on mobile, tablet, and desktop sizes
5. **RTL**: Preview in Chrome DevTools with RTL direction

## 🆘 Common Customizations

### Change Primary CTA Text
```tsx
// components/layout/Header.tsx
<Button>تواصل معنا</Button>  // Change text here
```

### Update Copyright Year
```tsx
// components/layout/Footer.tsx
const currentYear = new Date().getFullYear();  // Auto-updates
```

### Modify Social Icons
```tsx
// components/layout/Footer.tsx
// Add/remove social icons from the grid
```

---

**Need more help?** Check the `ARCHITECTURE.md` for technical details or `CLAUDE.md` for AI-assisted development guidance.
