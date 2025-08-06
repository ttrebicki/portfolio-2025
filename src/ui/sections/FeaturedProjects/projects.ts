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
  partnerProfile: {
    name: "Partner profile",
    description: [
      "In 2021, I was tasked with the design of 'Partner Profile' — a system for a quick creation of partner-specific marketplaces from scratch. The solution was built around composable layout blocks (homepage, events, search, news/articles) and could be deployed as a standalone application on custom domains, isolating partner logic from the core product while still leveraging mainline features. A detailed cheat sheet enabled the support team to onboard new partner profiles independently.",
      "I delivered a reusable Next.js frontend for event organizers and promoters, powered by a custom Strapi backend and an admin-panel page builder I architected in Strapi. We experimented with a React Native (Expo) adapter to share components between partner frontends and the main Expo app; despite initial successes, maintenance complexity led us to migrate to a simpler approach in the next iteration. The original partner app, however, served for over three years for major industry clients like Winiary Bookings and SBM.",
      "The partner app featured a custom homepage, search page, event detail pages, and a ticket purchase form, all driven by the same backend APIs used by the company's primary products.",
      "The original app is now defunct and current version (linked below) is based on Framer. For this iteration of the partner profile idea, I contributed Custom React Components that were used in Frame page builder (event lists, search, event page and buy form embed).",
    ],
    image: "/winiary.webp",
    url: "https://winiarybookings.pl",
  },
  simpleEcommerce: {
    name: "simple-ecommerce",
    description: [
      "simple-ecommerce is a self-designed Next.js full-stack project — a fully customizable e-commerce template that can be bootstrapped in minutes. It integrates seamlessly with Stripe to manage product catalogs and payments, while a simple login system built on Firebase Auth stores user sessions server-side (with additional logged-in features in progress).",
      "The app leverages SSR for blazing-fast initial loads, and its Tailwind CSS–based theme ensures a clean, responsive UI out of the box. Shopping cart state persists across sessions thanks to Zustand, delivering a smooth, frictionless experience.",
      "Meticulous performance tuning yields perfect Web Vitals scores (around 100 on both web and mobile), translating to top-tier SEO. Its minimal, modular codebase makes it easily maintainable and instantly pluggable into any Stripe account for rapid deployment.",
    ],
    image: "/se_tablet_black.png",
    url: "https://simple-ecommerce-rho-nine.vercel.app/",
    codeUrl: "https://github.com/ttrebicki/simple-ecommerce",
  },
  artificialNewsAnchor: {
    name: "Artificial News Anchor",
    description: [
      "In 2018, as part of the radicalzz.studio team — a boutique consultancy focusing on UX/UI, prototyping, sustainable tech, and cultural trends—I was tasked with crafting a way of presentation for a Instagram news content plan. Leveraging CrazyTalk, I created a CGI ‘News Anchor’ character that presented daily updates on ecology, sustainability, and future technologies in a memorable, human-like style.",
      "Each campaign installment was delivered as a set of four Instagram Stories: the first story featured a short video of the anchor introducing the news, each followed by a slides of extended text. I designed the character in thematic consistency with other provided engaging visuals.",
      "Running for over a year, this state-of-the-art campaign hugely impacted radicalzz.studio’s brand recognition and Instagram following.",
    ],
    image: "/anchor.gif",
  },
};
