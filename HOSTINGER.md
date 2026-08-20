# Hostinger Node.js Web App

Use a **Business** or **Cloud** plan with Node.js Web Apps.

## hPanel settings (recommended)

| Field | Value |
| --- | --- |
| Framework | `next` |
| Node.js | `20` |
| Build command | `npm run build` |
| Output directory | `.next` |
| Entry / start | leave empty — Hostinger runs `npm start` |

`npm start` binds to `0.0.0.0` so Hostinger’s proxy can reach the app.
Node is pinned to `20.x` in `package.json` for Hostinger stability.

## Optional: standalone entry (smaller runtime)

After build, assets are copied into `.next/standalone/`.
If you prefer the minimal server, set the start command to:

```bash
npm run start:standalone
```

That script binds `HOSTNAME=0.0.0.0` and uses Hostinger’s `PORT`.

## Deploy from GitHub

1. Push this repo to GitHub.
2. hPanel → **Websites** → **Add Website** → **Node.js web app**.
3. Connect the GitHub repo and use the settings above.
4. After deploy shows **Running**, assign `creativeclustersmarketing.com`.
5. **Important:** purge Hostinger CDN / clear cache after every redeploy.
   Stale HTML + new `/_next/static` chunk hashes = JS 404s in the browser.

## Why chunk 404s happen

Hostinger’s CDN sometimes keeps HTML with a long `s-maxage`. The page then
requests old hashed files under `/_next/static/chunks/...` that no longer
exist after a new build. This project sets:

- HTML / pages → `Cache-Control: public, max-age=0, must-revalidate`
- `/_next/static/*` → long-lived `immutable` (safe; filenames are hashed)

Still purge the Hostinger CDN after each production deploy.

## Notes

- Contact / newsletter forms use Server Actions — keep SSR mode
  (do **not** switch to `output: 'export'`).
- Image optimization needs `sharp` (already in dependencies).
- Videos live under `public/videos/reels/` (already compressed).
- Do not upload `node_modules`, `.next`, `gora/`, or `tools/` in a zip deploy.
