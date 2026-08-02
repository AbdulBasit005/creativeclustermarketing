# Hostinger Node.js Web App

Use a **Business** or **Cloud** plan with Node.js Web Apps.

## hPanel settings

| Field | Value |
| --- | --- |
| Framework | `next` |
| Node.js | `20` (or `22`) |
| Build command | `npm run build` |
| Output directory | `.next` |
| Entry / start | leave empty — Hostinger runs `npm start` |

`npm start` binds to `0.0.0.0` so Hostinger’s proxy can reach the app.

## Optional: standalone entry

After build, assets are copied into `.next/standalone/`.
If you prefer the minimal server, set the start command to:

```bash
node .next/standalone/server.js
```

## Deploy

1. Push this repo to GitHub (or upload a zip without `node_modules`, `.next`, `gora*`, `tools`).
2. hPanel → **Add Website** → **Node.js web app**.
3. Connect the repo (or upload) and use the settings above.
4. Point your domain’s DNS to Hostinger when the app shows **Running**.

## Notes

- Contact form uses a Server Action — keep SSR mode (do not use `output: 'export'`).
- Image optimization needs `sharp` (already in dependencies).
- Videos live under `public/videos/reels/` (~16MB total, already compressed).
