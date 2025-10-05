# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application that visualizes organizational environmental analysis (Análise Ambiental Organizacional). The app presents a three-layer model showing the relationship between contextual (macro), operational, and internal organizational environments in Portuguese.

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router and Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with @tailwindcss/postcss
- **React**: Version 19.1.0
- **Fonts**: Geist Sans and Geist Mono via next/font

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build production application with Turbopack
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

The dev server runs on http://localhost:3000

## Project Structure

- **app/**: Next.js App Router directory
  - `layout.tsx`: Root layout with font configuration (Geist Sans, Geist Mono)
  - `page.tsx`: Main landing page with organizational environment visualization
  - `globals.css`: Global Tailwind styles
- **public/**: Static assets including `macro_micro.png` diagram
- **Configuration files**:
  - `next.config.ts`: Next.js configuration (minimal/default)
  - `tsconfig.json`: TypeScript config with path alias `@/*` mapping to root
  - `eslint.config.mjs`: ESLint config using next/core-web-vitals and next/typescript

## Key Architecture Details

### App Structure
The application is a single-page informational site using Next.js App Router. The main page (app/page.tsx) is a server component that renders static content about three organizational environment layers:

1. **Ambiente Contextual** (Contextual/Macro): Technology, demographics, politics, socioculture, economics
2. **Ambiente Operacional** (Operational): Suppliers, competitors, customers, banks, media
3. **Ambiente Interno** (Internal): Structure, culture, HR, processes, technology, finances

### Styling Approach
The app uses Tailwind CSS 4 with a gradient-based design system:
- Background gradients: slate-50/slate-100 (light) to slate-900/slate-800 (dark)
- Color-coded sections: orange (contextual), purple (operational), blue (internal)
- Responsive design with mobile-first approach (sm:, md:, lg: breakpoints)
- Dark mode support via Tailwind's `dark:` variant

### TypeScript Configuration
- Path alias: `@/*` points to root directory for cleaner imports
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler (for Next.js/Turbopack)

## Content Language

All user-facing content is in **Portuguese (pt-BR)**. When adding or modifying text, maintain Portuguese language consistency.
