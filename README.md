# FITLOG — Workout Library

Responsive gym companion built with Next.js App Router, React 19, Tailwind CSS 4, Lucide React and localStorage.

## Features
- Twelve workouts with images, muscle tags, equipment and statistics.
- Workout details with key specs and ordered instructions.
- Today's Plan and Saved tabs with live counters and metric totals.
- Completion, removal, duplicate prevention and accessible toast notifications.
- Duration, calorie and rating sorting plus workout/muscle search.
- Reload persistence and five-active-lift cap; completing a lift frees capacity.
- Responsive mobile/tablet/desktop layout, loading animation and custom 404.
- Primary/secondary API retry and clearly labeled bundled snapshot fallback.

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000. Run `npm run build` for production.

## Deployment
Next.js static export generates `out/`, including all twelve workout routes and `/my-plan/`. The verified production build is deployed to Vercel using Drop to Deploy. For updates, upload a fresh export or connect this GitHub repository to Vercel for automatic deployments. Direct navigation and reloads are supported by generated HTML; unknown routes use 404.html.

Live link: https://fitlog-delta-hazel.vercel.app/
GitHub link: https://github.com/devnajmus/fitlog

## Data and credits
API: https://api.abcz.workers.dev/api/fitlog
Alternate: https://api.api-store.workers.dev/api/fitlog
Reference design files, logo and banner: ProgrammingHero1/B14-A6-Fit-Log.
Data stays in the current browser/device. If both APIs fail, an explicit notice accompanies the bundled workout snapshot.


