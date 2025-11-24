
# Lions • Tigers • Bears — Oh My! (React + Vite)

A minimal slideshow app that cycles images for **Lions**, **Tigers**, and **Bears** using public Wikimedia image URLs.
This repo is intentionally simple so a student team can practice **CI/CD** with **GitHub** and **Azure Static Web Apps**.

> Format matches the earlier "dogs" example: React client only, static hosting, CI/CD, quickstart tutorial, and credits.

## ✨ Features
- React + Vite single-page app
- No backend / no API keys (assets are in `public/animals.json` using Wikimedia URLs)
- Slideshow with play/pause, prev/next, speed, and animal selector
- Production build via `npm run build`
- Azure Static Web Apps GitHub Action for CI/CD

## 🧰 Prerequisites
- Node 18+ (we test with Node 20)
- GitHub account
- (For deployment) An Azure account to create a Static Web App

## 🚀 Quickstart (Local)
```bash
npm install
npm run dev
```
Open http://localhost:5173

## 📦 Build
```bash
npm run build
npm run preview   # serves dist on http://localhost:4173
```

## 🌐 Deploy (Azure Static Web Apps)
1. Create a new **Static Web App** in the Azure Portal (Build Presets: *Custom*).
2. In your GitHub repo, add a repository secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` with the deployment token from Azure.
3. Ensure the GitHub workflow at `.github/workflows/azure-static-web-apps.yml` exists (provided).
4. Push to `main` → GitHub Actions will build and deploy `dist/` automatically.

> You can also set this up from Azure Portal which will create the workflow for you. If it does, keep *either* the generated one or this template—don’t use both.

## 🗂 Project Structure
```
/src
  /components
    Slideshow.jsx
  App.jsx
  main.jsx
/styles.css
/public
  animals.json
  favicon.svg
```

## 📝 Credits
- Images are from **Wikimedia Commons** and hotlinked under the original licenses. Credits are shown beneath each image in the UI and noted inside `public/animals.json`.
- Inspired by “Lions and Tigers and Bears, Oh My!” from *The Wizard of Oz* (1939).

## 🔒 License
MIT © 2025. See [LICENSE](LICENSE).

## 📚 Tutorials
- See `docs/tutorial-quickstart.md` (15‑minute deploy)
- See `docs/custom-domain-azure.md` (custom domain)
