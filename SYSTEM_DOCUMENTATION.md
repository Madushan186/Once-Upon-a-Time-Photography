# System Documentation
**Once Upon a Time Photography by Ruvani**

This document serves as the master blueprint for the photography portfolio website. It details the technical stack, design system, file architecture, and instructions for maintaining the site.

---

## 1. Technical Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Icons:** Lucide React

## 2. Design System
The aesthetic is built around a premium, minimalist, and organic "beige/editorial" theme.

### Colors
Defined in `src/app/globals.css`:
- **Cream (Backgrounds/Pills):** `#F5F0E6`
- **Espresso (Primary Text/Accents):** `#4A4238`
- **Oat (Dividers/Borders):** `#D8CBB4`
- **Taupe (Muted backgrounds):** `#E8DCC6`
- **Wicker (Highlight text):** `#C7A374`
- **Clay (Buttons):** `#B8875C`

### Typography
- **Headings:** Playfair Display (Elegant, Serif)
- **Body:** Inter (Clean, Sans-Serif)

### Interactions
- Interactive elements utilize buttery-smooth upward translations (`hover:-translate-y-1`) with soft drop shadows (`shadow-xl shadow-espresso/10`).
- Scroll-based reveal animations are handled by custom `FadeUp` wrapper components utilizing Framer Motion's `whileInView`.

---

## 3. Project Architecture

The project follows the standard Next.js App Router structure:

```text
src/
├── app/                      # Application Routes
│   ├── globals.css           # Tailwind configuration and design tokens
│   ├── layout.tsx            # Global layout (Navigation, Footer, Background)
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx        # About & Investment Page
│   ├── contact/page.tsx      # Contact Form Page
│   └── portfolio/page.tsx    # Masonry Portfolio Gallery
├── components/               # Reusable UI Components
│   ├── Navigation.tsx        # Animated frosted-glass navbar
│   ├── Hero.tsx              # Cinematic homepage hero with 30s zoom
│   ├── Portfolio.tsx         # Homepage category grid
│   ├── StrengthAndCourage.tsx# Cancer journey complimentary sessions
│   ├── Testimonials.tsx      # Client reviews
│   └── GlobalBackground.tsx  # Persistent subtle background texture
├── config/                   # Site Configuration
│   └── mediaConfig.ts        # The Single Source of Truth for all images
└── lib/                      # Utilities
    └── navigation.ts         # Navigation links
```

---

## 4. How to Update Content

The website is designed so you **never have to touch UI code** to update your photos.

### Updating Images (`src/config/mediaConfig.ts`)
The `mediaConfig.ts` file acts as the central brain for all media on the site.

**To add a new photo to the Portfolio:**
1. Drop your new `.jpg` file into the appropriate folder (e.g., `public/images/portfolio/family/`).
2. Open `src/config/mediaConfig.ts`.
3. Locate the `portfolio` object, and add your file path to the correct `gallery` array.
   ```typescript
   family: {
     cover: "/images/portfolio/family/family-cover.jpg",
     gallery: [
       "/images/portfolio/family/family-1.jpg",
       "/images/portfolio/family/family-2.jpg",
       "/images/portfolio/family/new-photo.jpg", // <-- Just add this line!
     ],
   }
   ```
The masonry grid and all modals will automatically update across the site.

### Updating the About Profile Image
We built a custom cross-fade hover effect for the About page.
- Base Image: `public/images/about/ruvani-profile-1.jpg`
- Hover Image: `public/images/about/ruvani-profile-2.jpg`

To change these, simply replace the files in that folder with the exact same file names.

---

## 5. Key Features & Components

- **Global Background:** A fixed, `z-index: -50` image (`window-shadow-bg.jpg`) layered behind a transparent body to give the entire site a subtle, cohesive texture.
- **Hero Section:** Features a 30-second infinite, subtle zoom (`scale: [1, 1.05, 1]`) to create a "breathing" cinematic effect. Uses a high-contrast inverted typography pill for maximum legibility.
- **Strength & Courage:** A dedicated, respectful layout highlighting complimentary sessions, separated visually from standard offerings.
- **Investment Section:** Clearly outlines the $300 session fee, $50 booking fee, and 20 digital images on the About page.

---

## 6. Deployment Guide (Vercel)

1. Ensure all code is committed and pushed to the `main` branch on GitHub.
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New > Project** and import the `Once-Upon-a-Time-Photography` repository.
4. Click **Deploy**. Vercel will automatically detect the Next.js setup.
5. To link your custom `.com` domain, navigate to the project's **Settings > Domains** in Vercel and add your URL. Vercel will provide the DNS records to paste into your domain registrar (e.g., GoDaddy).
