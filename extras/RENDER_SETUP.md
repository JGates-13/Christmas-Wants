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
## Note

The full Render setup instructions were moved into `extras/RENDER_SETUP.md`.

Please see `extras/RENDER_SETUP.md` for step-by-step deployment instructions, troubleshooting tips, and an optional `render.yaml` example.
# then open http://localhost:3000 in your browser
