# Ntsako Titidi — Portfolio

A minimal, profile-led portfolio for Ntsako Titidi. Built with React, TypeScript, and Vite.

The page introduces Ntsako as an agentic developer, shows three featured software projects, one additional code project, and five website examples. It links to contact, GitHub, and LinkedIn. Portfolio copy lives in `src/portfolio-data.ts`.

The profile image is a local copy of the public LinkedIn profile photo at `public/profile/ntsako.jpg`, so the deployed page does not depend on LinkedIn's image URL.

Shaka is marked as work in progress. Its public GitHub repository is explicitly described as an earlier version. Website demos and concepts are labeled as such. Traffic Eye and MzansiPedia are omitted from the featured set because they derive from forks.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
```

This runs ESLint, TypeScript, and a production Vite build.

The build first checks an explicit allowlist of files in `public/`. Vite copies
everything in that directory into the published site, including files that are
not linked from the page. Add only intentionally public assets and update
`scripts/verify-public-assets.mjs` when a new one is approved. Unused legacy
previews were moved to `/home/ntsako/Projects/portfolio-asset-archive/previews/`
on this machine; that archive is outside the deployment folder.

## Deployment

`vercel.json` is configured for the Vite build (`npm run build`, output `dist`). Run `npm run check` before publishing. The production site is [ntsakotitidi.vercel.app](https://ntsakotitidi.vercel.app/). The source lives in [titidintsako-bit/ntsako-titidi](https://github.com/titidintsako-bit/ntsako-titidi); pushes to its `main` branch are deployed through the Vercel project.

After publishing, inspect the live response headers for the configured CSP,
`X-Content-Type-Options`, and `Cross-Origin-Opener-Policy`, and confirm that
Vercel serves the site over HTTPS with HSTS. A clean local build and dependency
audit do not verify deployment settings or account security.

Do not add Shaka development screenshots to `public/` until they have been
reviewed for credentials, local paths, private code, session details, and
version accuracy. A screenshot is optional evidence, not a launch requirement.
