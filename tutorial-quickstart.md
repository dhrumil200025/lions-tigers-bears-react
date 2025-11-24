
# 15‑Minute Quickstart: React App + Azure Static Web Apps (CI/CD)

> Goal: Run locally, push to GitHub, and deploy automatically to Azure Static Web Apps.

## 0) Fork or Use as Template
- Click **Use this template** in GitHub, name your repo.

## 1) Run Locally
```bash
npm install
npm run dev
```
Visit http://localhost:5173

## 2) Create Azure Static Web App
- In Azure Portal, **Create Resource → Static Web App**.
- **Build Presets**: *Custom*
- **App location**: `/`
- **Output location**: `dist`
- Connect to your GitHub repo/branch (main). Let Azure create a GitHub Action.

> If you instead use the included workflow, copy your **deployment token** from the Static Web App → **Deployment tokens**, then add it to your GitHub repo as a secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`.

## 3) Push to Deploy
- Commit and push to `main`.
- GitHub Actions will build (`npm ci && npm run build`) and upload `dist/` to Azure automatically.

## 4) Verify
- Open the Static Web App URL from Azure. You should see the slideshow.
