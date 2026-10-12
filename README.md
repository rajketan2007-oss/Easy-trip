# Easy Trip Tour & Travels — Landing Page (React + TypeScript)

> Cinematic, award-level single-page landing page for **Easy Trip Tour & Travels** (Durgapur & Asansol, West Bengal).

---

## 🌟 Overview & Design Concept

This landing page is designed around a **"Golden-Hour Cinematic Adventure"** concept inspired by modern film portfolio aesthetics ([travelproductions.film](https://travelproductions.film/)), enriched with warm Indian travel tones:
- **Palette Tokens**: Deep ink navy (`#0B1220`), warm sand (`#F6EFE4`), sunset orange (`#FF6B35`), mountain gold (`#F4B942`), and lagoon teal (`#19B5A5`).
- **Motion & Scrolling**: **Lenis** smooth scrolling synchronized with **GSAP ScrollTrigger**, split masked typography, and **Framer Motion** overlays.
- **Micro-Interactions**: Magnetic buttons, custom trailing cursor with "EXPLORE" states on desktop, 3D tilt cards, and celebratory confetti upon booking request.
- **Conversion Paths**: Floating hero booking card, quick WhatsApp & phone click-to-call links, interactive domestic tour cards that auto-populate the booking form, and a sticky mobile action bar.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
├── index.html                  # SEO tags, OpenGraph, JSON-LD (TravelAgency & FAQPage), Google Fonts
├── tailwind.config.js          # Design tokens (ink, sand, sunset, gold, lagoon) & typography
├── src/
│   ├── App.tsx                 # Root application assembling all sections
│   ├── index.css               # Film grain overlay, Lenis classes, dark autofill styles
│   ├── main.tsx                # React entry point
│   ├── data/
│   │   └── content.ts          # Central source of truth for all text copy, phone numbers, and images
│   ├── hooks/
│   │   └── useReducedMotion.ts # Accessibility hook respecting prefers-reduced-motion
│   ├── utils/
│   │   └── scroll.ts           # Lenis smooth scroll and GSAP integration
│   └── components/
│       ├── Preloader.tsx       # Branded compass SVG animated intro (<2s)
│       ├── CustomCursor.tsx    # Desktop trailing cursor with interactive & explore states
│       ├── Navbar.tsx          # Scroll-aware glass header with magnetic CTA
│       ├── MenuOverlay.tsx     # Full-screen overlay menu with focus trap & Esc support
│       ├── Hero.tsx            # Cinematic background video, masked titles & stats strip
│       ├── BookingForm.tsx     # Validated quote form with confetti & direct WhatsApp link
│       ├── About.tsx           # P1 pull-quote, multi-speed image collage & "Why Choose Us"
│       ├── DomesticTours.tsx   # 10 tour cards with instant form pre-fill & marquee chip cloud
│       ├── InternationalTours.tsx # Outlined text marquee & 3D tilt destination cards
│       ├── Reviews.tsx         # Verified press & customer review cards + video modal
│       ├── FAQ.tsx             # Accessible accordion with smooth height animation
│       ├── Contact.tsx         # Full-screen closing section with 3 branch offices & map links
│       ├── Footer.tsx          # Massive edge-to-edge wordmark & quick links
│       └── StickyMobileBar.tsx # Mobile bottom bar (Call, WhatsApp, Get Quote)
```

---

## 🛠️ Customization Guide

### 1. How to Replace Images and Videos
All images and video links are centralized in `src/data/content.ts` with explicit `TODO: replace with own photos` comments:
- **Hero Video & Poster**: Edit `hero.videoUrl` and `hero.posterImage` in `src/data/content.ts`.
- **Tour Photos**: Edit `domesticTours.destinations[i].image` and `internationalTours.cards[i].image`.
- **Office Map Links**: Update `contact.offices[i].address` and `mapQuery`.

### 2. How to Edit Phone Numbers & WhatsApp
Open `src/data/content.ts`:
```ts
agency: {
  phones: [
    { raw: "9233300333", formatted: "92333 00333", isPrimary: true },
    { raw: "8900761848", formatted: "89007 61848", isPrimary: false },
    { raw: "8617398804", formatted: "86173 98804", isPrimary: false },
  ],
  whatsappNumber: "919233300333",
  email: "easytripdgpasn@gmail.com",
}
```
Updating these values automatically updates the Navbar, Menu Overlay, Booking Form redirect, Contact Section, and Footer.

### 3. How to Connect the Booking Form to a Backend / Email
In `src/components/BookingForm.tsx`, locate the `onSubmit` handler (line ~60):
```ts
// TODO: Replace or connect with backend / email API hook
// Example:
// await fetch('/api/travel-enquiry', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data),
// });
```
By default, submitting the form immediately opens a **pre-filled WhatsApp chat** to `92333 00333` with the customer's full details (destination, travel dates, passenger count, and budget).

---

## 🚀 Deployment

### Deploy to Vercel
1. Push this repository to GitHub/GitLab.
2. In Vercel, click **Add New Project** and select the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Deploy to Netlify
1. Run `npm run build`.
2. Drag and drop the `dist/` directory into Netlify, or connect via Git.
3. Publish directory: `dist`.

---

## ♿ Accessibility & Performance Features
- **WCAG AA Contrast**: High-contrast text on dark cinematic backgrounds.
- **Prefers Reduced Motion**: Automatically disables smooth scrolling, tilt, and complex animations if the user has requested reduced motion in their OS.
- **Accessible Accordions & Overlays**: Full ARIA markup (`aria-expanded`, `aria-controls`, `aria-modal`), keyboard trap in the menu, and `Esc` key handler.
- **SEO & Structured Data**: Rich JSON-LD for `TravelAgency` (specifying Durgapur & Asansol branches) and `FAQPage` included.

---

© 2026 Easy Trip Tour & Travels. All rights reserved.
