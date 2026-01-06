# Nexus / Hazine Project Context

## Project Overview

**Nexus** (internally "hazine") is a high-performance, visually rich landing page for a financial asset tracking and ecosystem platform. It utilizes modern web technologies to deliver a cinematic user experience with 3D elements, scroll-based animations, and a sleek, dark-themed UI.

### Tech Stack

*   **Framework:** [Next.js 16.1.1](https://nextjs.org/) (App Router)
*   **Language:** TypeScript
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **UI Library:** React 19
*   **3D/Graphics:** Three.js, React Three Fiber, React Three Drei
*   **Utilities:** `clsx`, `tailwind-merge`, `simplex-noise`

## Building and Running

The project follows standard Node.js/Next.js workflows.

*   **Development Server:**
    ```bash
    npm run dev
    ```
    Runs the app on `http://localhost:3000`.

*   **Production Build:**
    ```bash
    npm run build
    ```
    Compiles the application for production deployment.

*   **Start Production Server:**
    ```bash
    npm run start
    ```
    Runs the built application.

*   **Linting:**
    ```bash
    npm run lint
    ```
    Checks for code quality issues using ESLint.

## Development Conventions

### File Structure

*   **`app/`**: Contains the App Router pages and layouts.
    *   `page.tsx`: The main landing page composition.
    *   `layout.tsx`: Root layout including fonts (Inter, Playfair Display) and global styles.
    *   `globals.css`: Global CSS variables and custom animation classes.
*   **`components/`**: Reusable UI components.
    *   Major sections: `Hero.tsx`, `InfrastructureSection.tsx`, `PricingSection.tsx`, etc.
    *   UI primitives: `DemoModal.tsx`, `Header.tsx`, `FooterCTA.tsx`.
    *   Visual effects: `BackgroundBeams.tsx`, `DashboardMockup.tsx`.
*   **`lib/`**: Utility functions.
    *   `utils.ts`: Contains the `cn` helper for conditional Tailwind class merging.

### Coding Style

*   **"Use Client":** Interactive components (using hooks like `useState`, `useEffect`, `useRef`) must start with `"use client";` directive at the top.
*   **Styling:** Use Tailwind CSS utility classes primarily. For complex class conditional logic, use the `cn()` utility from `@/lib/utils`.
*   **Animations:**
    *   CSS-based animations (defined in `globals.css` or via Tailwind config) are preferred for simple transitions (e.g., `animate-fade-in-up`).
    *   Scroll-linked animations are implemented using React hooks (e.g., in `Hero.tsx` for rotation) or `IntersectionObserver`.
*   **Imports:** Use the `@/` alias to import from the root directory (configured in `tsconfig.json`).

### Key Components

*   **`Hero.tsx`**: Features a scroll-driven 3D rotation effect on the dashboard mockup and integrates `BackgroundBeams`.
*   **`InfrastructureSection.tsx`**: A complex grid layout with "glassmorphism" cards, backdrop blur effects, and 3D perspective transforms.
*   **`DemoModal.tsx`**: A modal dialog with open/close animations managed via state and CSS transitions.

## Configuration

*   **`tailwind.config.ts`**: (Implicit via v4 or separate file) Manages theme extensions, colors, and animation definitions.
*   **`next.config.ts`**: Next.js specific configuration.
*   **`tsconfig.json`**: TypeScript configuration, strictly typed.
