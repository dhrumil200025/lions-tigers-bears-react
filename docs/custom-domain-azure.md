
# Add a Custom Domain (Azure Static Web Apps)

## 1) Buy a Low-Cost Domain
- Use a registrar like GoDaddy or Namecheap.

## 2) Add Custom Domain in Azure
- Go to your **Static Web App → Custom domains → Add**.
- Enter your domain (e.g., `www.example.com`). Azure will give you a **CNAME** target.

## 3) Create DNS Record
- In your registrar's DNS settings, create **CNAME**:
  - **Host**: `www`
  - **Value/Target**: the hostname Azure provided (ends with `azurestaticapps.net`)
  - **TTL**: 1 hour

> For root/apex (`example.com`), use ALIAS/ANAME if supported, or forward to `www`.

## 4) Wait for Propagation
- When validated, Azure will issue/attach a free TLS cert. Check the domain in the portal.

## 5) Done
- Visit your site at your custom domain.
