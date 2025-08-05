import { IProjectProps } from "./components/Project/types";

export const projects: Record<string, IProjectProps> = {
  goingapp: {
    name: "Going / Empik Bilety",
    description: [
      "Over six years at Going / Empik Bilety, I progressed from CMS administrator, through QA testing, project management, and UX/UI design, to become a full-stack developer.",
      "I designed and implemented a custom Strapi-powered UI builder that now drives the main pages of goingapp.pl, empikbilety.pl, and the Expo mobile app. I crafted responsive Next.js e-commerce applications and landing pages, for company's partners. I leveraged Firebase Cloud, Braze and Firebase Functions to build a system of push notifications. During my time at the company I was building both client-side interfaces and a comprehensive admin panel.",
      "On the mobile front, I cooperated on an Expo-based app that mirrors the web functionality. I architected a cross-platform design system using Material UI, ensuring consistent theming across web, mobile, and partner platforms. Additionally, I developed a Firestore-driven “likes“ and “follows” features for artists and venues, enabling personalized content recommendations.",
      "Collaborating with every IT department, I gained end-to-end insight into delivering services used by millions of customers.",
    ],
    image: "/going_mobile_app.webp",
    url: "https://goingapp.pl",
  },
  simpleEcommerce: {
    name: "simple-ecommerce",
    description: [
      "Simple-Ecommerce is a self-designed Next.js project — a fully customizable e-commerce template that can be bootstrapped in minutes. It integrates seamlessly with Stripe to manage product catalogs and payments, while a simple login system built on Firebase Auth stores user sessions server-side (with additional logged-in features in progress).",
      "The app leverages SSR for blazing-fast initial loads, and its Tailwind CSS–based theme ensures a clean, responsive UI out of the box. Shopping cart state persists across sessions thanks to Zustand, delivering a smooth, frictionless experience.",
      "Meticulous performance tuning yields perfect Web Vitals scores (around 100 on both web and mobile), translating to top-tier SEO. Its minimal, modular codebase makes it easily maintainable and instantly pluggable into any Stripe account for rapid deployment.",
    ],
    image: "/se_tablet_black.png",
    url: "https://simple-ecommerce-rho-nine.vercel.app/",
    codeUrl: "https://github.com/ttrebicki/simple-ecommerce",
  },
};
