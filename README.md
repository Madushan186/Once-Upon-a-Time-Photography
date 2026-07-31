# 📷 Once Upon a Time Photography by Ruvani

A bespoke, luxury editorial photography portfolio web application built with **Next.js 15 (App Router)**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**. Designed for Ruvani, a professional photographer in Victoria, Australia, capturing bump-to-beyond family moments, maternity portraits, newborn sessions, and milestone celebrations.

---

## 🌟 Key Features

* **Bespoke Editorial Design System:** Curated warm beige palette featuring Soft Cream (`#F5F0E6`), Deep Espresso (`#4A4238`), and Muted Taupe (`#D4C9B9`) accents with Playfair Display typography.
* **Dynamic Masonry Lightbox Modals:** Smooth Framer Motion modal galleries with staggered micro-animations and zero scroll-bleed background locking.
* **88+ Local Portfolio Photographs:** Fully integrated asset mappings across 4 core categories:
  * 🤱 **Maternity:** 29 curated images (`maternity-1.jpg` – `maternity-29.jpg`)
  * 👶 **Newborn:** 12 curated images (`newborn-1.jpg` – `newborn-12.jpg`)
  * 👨‍👩‍👧‍👦 **Family:** 30 curated images (`family-1.jpg` – `family-30.jpg`)
  * 🎈 **Milestones:** 17 curated images (`milestones-1.jpg` – `milestones-17.jpg`)
* **Single Source of Truth Configuration:** Centralized asset management via `src/config/mediaConfig.ts` for unified Homepage and Portfolio page synchronization.
* **Custom Editorial Scrollbar:** Custom 8px minimalist WebKit and Firefox scrollbar matching brand colors (`#F5F0E6` track, `#D4C9B9` thumb).
* **Direct WhatsApp & Social Integration:** Integrated WhatsApp direct chat CTA (`+61 425 790 079`) and social links for Instagram & Facebook with security attributes (`target="_blank"`, `rel="noopener noreferrer"`).
* **Responsive Header Clearance:** Fixed header spacing (`pt-36 md:pt-44`) ensuring zero layout overlap across all inner pages (`/portfolio`, `/about`, `/contact`).

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS Tokens |
| **Icons** | [Lucide React](https://lucide.dev/) & Custom SVG Icons |

---

## 🎨 Design System & Color Tokens

```css
--color-cream:     #F5F0E6;  /* Soft Warm Cream background */
--color-espresso:  #4A4238;  /* Deep Espresso text & headings */
--color-taupe:     #D4C9B9;  /* Muted Taupe accent borders & buttons */
--color-wicker:    #C7A374;  /* Wicker golden taupe active states */
--color-oat:       #D8CBB4;  /* Soft Oat divider lines */
```

* **Headings:** Playfair Display (Serif)
* **Body Text:** Inter (Sans-serif)

---

## 📁 Project Structure

```
once-upon-a-time-photography/
├── public/
│   └── images/
│       ├── logo/              # Custom brand photography logo
│       └── portfolio/         # 88+ high-resolution portfolio images
│           ├── maternity/     # maternity-1.jpg to maternity-29.jpg
│           ├── newborn/       # newborn-1.jpg to newborn-12.jpg
│           ├── family/        # family-1.jpg to family-30.jpg
│           └── milestones/    # milestones-1.jpg to milestones-17.jpg
├── src/
│   ├── app/
│   │   ├── about/             # About page (/about)
│   │   ├── contact/           # Contact page & form (/contact)
│   │   ├── portfolio/         # Dedicated portfolio page (/portfolio)
│   │   ├── globals.css        # Global CSS & 8px custom scrollbar
│   │   ├── layout.tsx         # Root layout with fonts & metadata
│   │   └── page.tsx           # Homepage (/ )
│   ├── components/
│   │   ├── AboutExperience.tsx# About section component
│   │   ├── Contact.tsx        # Homepage contact section
│   │   ├── Footer.tsx         # Global footer with WhatsApp & social links
│   │   ├── Hero.tsx           # Slow-zoom hero section
│   │   ├── Navigation.tsx     # Responsive sticky header
│   │   ├── Portfolio.tsx      # Homepage category cards & lightbox modal
│   │   └── Testimonials.tsx   # Client reviews carousel
│   ├── config/
│   │   └── mediaConfig.ts     # Single source of truth for portfolio images
│   └── lib/
│       └── navigation.ts      # Navigation routes & metadata
├── tailwind.config.ts         # Tailwind theme extension
└── tsconfig.json              # TypeScript configuration
```

---

## 🚀 Getting Started & Local Development

### 1. Prerequisites
Ensure you have **Node.js 18+** and **npm** installed on your system.

```bash
node -v
npm -v
```

### 2. Installation
Clone the repository and install project dependencies:

```bash
git clone https://github.com/Madushan186/Once-Upon-a-Time-Photography.git
cd once-upon-a-time-photography
npm install
```

### 3. Run Development Server
Start the local Next.js dev server with Turbopack:

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application live.

### 4. Build for Production
To create an optimized production build and verify type safety:

```bash
npm run build
npm run start
```

---

## 📱 Page Summary & Navigation

| Route | Description |
| :--- | :--- |
| `/` | **Home:** Hero slow-zoom, Category Cards, Strength & Courage feature, About preview, Client Testimonials, Contact. |
| `/portfolio` | **Portfolio:** Core category filters (**Maternity**, **Newborn**, **Family**, **Milestones**) and 88+ photo masonry grid with lightboxes. |
| `/about` | **About Me:** Ruvani's story, photography philosophy, and session experience. |
| `/contact` | **Contact:** Enquiry form, session selection, direct phone (`0425 790 079`), location (`Pakenham, Victoria 3810`), and WhatsApp chat. |

---

## 📄 License & Credits

* **Owner & Photography:** Ruvani – Once Upon a Time Photography
* **Design & Development:** Senior Next.js / React Frontend Team
