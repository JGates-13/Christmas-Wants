## Deploying this project to Render

This repository contains a small Node + Express site that serves static files from `public/` and `static/`.

Two deployment options are provided below. The recommended approach for this repo is the Web Service (Node) option because the repo already includes an Express server (`script.js`) and a `start` script in `package.json`.

---

### Option A — Deploy as a Web Service (recommended)

1. Sign in to Render (https://render.com) and click "New" → "Web Service".
2. Connect your GitHub (or Git provider) repository and select the `master` branch (or the branch you want to deploy).
3. Fill in the service settings:
   - Name: choose a name like `christmas-wants`.
   - Environment: `Node` (Render will detect Node from `package.json`).
   - Branch: `master` (or your chosen branch).
   - Build Command: leave blank or use `npm install` (Render runs `npm install` by default for Node services).
   - Start Command: `npm start` (this runs `node script.js` as defined in `package.json`).
   - Instance Type: use the free or starter instance if this is a small static site.
4. Click "Create Web Service". Render will install dependencies and start the server.

Notes and tips:
- The app listens on `process.env.PORT` (Render sets `PORT` automatically), so no changes are required.
- `package.json` contains a `start` script and an `engines.node` entry to recommend using Node 18.x on Render.
- The root route sends `public/index.html` and static assets are served from `public/` and `/static`.

Troubleshooting:
- If Render's deploy logs show errors, open the service's "Logs" page. Common issues:
  - Missing dependency: ensure `dependencies` are listed in `package.json` and committed.
  - Syntax errors: run `node script.js` locally to reproduce errors.
- To test locally: from the repo root run:

```pwsh
npm install
npm start
# then open http://localhost:3000 in your browser
```

Redeploys:
- Any push to the configured branch will trigger a new deploy. Use the Render dashboard to manually trigger a deploy if needed.

---

### Option B — Deploy as a Static Site (alternative)

If you prefer to host this as a static site (no Node server), you can deploy only the `public/` folder as a Static Site on Render. This will serve the HTML, CSS and client-side JS directly. Use this if you don't need server-side routing or Express features.

1. Click "New" → "Static Site" in Render.
2. Connect your repo and select the branch.
3. For the build/publish settings:
   - Build Command: leave empty (unless you add a build step like bundling).
   - Publish Directory: `public`
4. Create the static site. Render will serve files from `public/`.

Notes:
- With the Static Site option, your Express server (`script.js`) will not run — it's purely for static hosting.
- If you use client-side routing (single-page-app), you may need to add redirect rules. For a plain static site with separate HTML files, no special rules are required.

---

### Environment variables and extras

- PORT: Render will provide a `PORT` env var automatically for Web Services; you don't need to set it.
- If you add secrets (API keys, etc.) later, set them under the service's "Environment" → "Environment Variables" section in the Render dashboard.

### Optional: render.yaml (in-repo configuration)

You can add an in-repo `render.yaml` manifest to define the service configuration and make deployments reproducible. Render's docs show the schema; the simplest form for this project (Web Service) would be:

```yaml
# render.yaml (optional)
services:
  - type: web
    name: christmas-wants
    env: node
    branch: master
    plan: free
    buildCommand: npm install
    startCommand: npm start
```

Save this file at the repository root if you wish to commit it.

---

### Verification checklist

- [ ] Deploy succeeded on Render and the service state is "Live".
- [ ] The site root (`/`) returns `public/index.html`.
- [ ] Static assets such as CSS and images load successfully from `/static` or relative paths.
- [ ] Logs show the server started on the Render-provided port (e.g. `Server running at http://localhost:3000` message will appear in logs when running locally; in Render logs you'll see that the process started).

---

If you want, I can also:
- Add a `render.yaml` file to the repo with the example manifest above.
- Add a small health check endpoint (e.g., `/health`) that returns 200 for Render's health checks.

Tell me which of those (if any) you'd like me to add and I'll make the changes.
