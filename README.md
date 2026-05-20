# Portfolio

A professional, interactive portfolio website built with Next.js, Framer Motion, and Tailwind CSS. The design showcases both systems programming expertise and creative video editing skills, featuring a high-performance, dark-themed "hacker" aesthetic with smooth parallax scroll animations.

## Tech Stack
- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Architecture & Components
The site is built as a single-page scrolling experience (`src/app/page.tsx`) utilizing components structured into specialized directories:

*   **`src/components/layout/`**: Structural layout components.
    *   **`Navbar.tsx`**: Main header navigation.
    *   **`FloatingNav.tsx`**: Dot navigation linked to page sections.
    *   **`Footer.tsx`**: Standard copyright and links page footer.
    *   **`ParticleBackground.tsx`**: Custom canvas node constellation background animation.
*   **`src/components/sections/`**: Modular sections of the landing page experience.
    *   **`Hero.tsx`**: Headline banner, status badge, and call-to-actions.
    *   **`Deployments.tsx`**: Project cards list with procedural SVG art.
    *   **`Integrity.tsx`**: Technical expertise matrix dashboard.
    *   **`ProjectPreview.tsx`**: Auto-advancing slides highlighting project details.
    *   **`History.tsx`**: Career path timeline with node indicators.
    *   **`Contact.tsx`**: Latency-simulated network form.
*   **`src/components/ui/`**: Global reusable user interface elements.
    *   **`ParallaxWrapper.tsx`**: Scroll-driven opacity and viewport mapping wrapper.

### Centralized Data & Types
*   **`src/types/index.ts`**: Unified TypeScript interfaces (`Project`, `TimelineItem`, `MetricItem`, `TechnologyItem`).
*   **`src/constants/portfolio.ts`**: Decoupled copywriting, navigation configurations, timelines, and metrics data definitions to enable fast, single-file content maintenance.

## Local Development

Follow these steps to run the portfolio website locally:

1. **Install Dependencies**:
   Ensure you have Node.js installed, then install the package dependencies:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   Start the Next.js development server:
   ```bash
   npm run dev
   ```
   *Note for Windows users:* If you hit a `PSSecurityException` script execution policy restriction in PowerShell, run this command instead:
   ```powershell
   cmd.exe /c npm run dev
   ```

3. **Verify Locally**:
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Application Preview
Here is a live screenshot preview of the portfolio's Hero section:

![Portfolio Live Hero Preview](./public/screenshot.png)

## Changelog

**[2026-05-20]**
- Refactored folder layout by organizing flat components into `layout/`, `sections/`, and `ui/` directories.
- Centralized all TypeScript definitions inside `src/types/index.ts`.
- Extracted hardcoded copy list elements (metrics, timelines, technologies, navigation links) into `src/constants/portfolio.ts`.
- Updated page references and component imports across layouts, landing page, and details page to align with the new structure.
- Fixed JSX literal comment syntax errors and removed unused imports/parameters to resolve all ESLint compiler warnings and errors.
- Verified successful, zero-warning production build compilation.

**[2026-05-17]**
- Initialized the `README.md` with comprehensive project documentation.
- Created core documentation structure to be maintained continuously.
- Added step-by-step local running guide and embedded a live preview screenshot in `README.md`.
- Stored live preview screenshot under `public/screenshot.png`.

