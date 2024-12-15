# Complete Deployment Guide

## Local Development Setup

1. Initial Setup:
```bash
# Clone the repository
git clone [your-repo-url]
cd therapist-website

# Clean existing files (if needed)
rm -rf node_modules package-lock.json
```

2. Install Dependencies:
```bash
# Core dependencies
npm install next@latest react@latest react-dom@latest
npm install lucide-react zod @hookform/resolvers react-hook-form

# Development dependencies
npm install -D typescript @types/node @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
```

3. Environment Setup:
Create `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER={your number}
```

4. Run Development Server:
```bash
npm run dev
# Site will be available at http://localhost:3000
```

## Deploy to Netlify

### Method 1: Deploy via Netlify CLI (Recommended)

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Create netlify.toml in project root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

4. Deploy:
```bash
# Initialize Netlify site
netlify init

# Deploy to production
netlify deploy --prod
```

### Method 2: Deploy via Netlify UI

1. Prepare Your Repository:
```bash
# Ensure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Netlify UI Setup:
- Go to [Netlify Dashboard](https://app.netlify.com)
- Click "Add new site" → "Import an existing project"
- Connect to your GitHub repository
- Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`
  - Set environment variables:
    - Key: `NEXT_PUBLIC_WHATSAPP_NUMBER`
    - Value: `919811165038`

3. Deploy:
- Click "Deploy site"
- Wait for build completion
- Your site will be live at [your-site].netlify.app

### Troubleshooting Deployment

1. If build fails, check:
```bash
# Local build test
npm run build
```

2. Common issues:
- Missing dependencies: Check package.json
- Environment variables: Ensure they're set in Netlify
- Build errors: Check build logs in Netlify UI

3. Local build verification:
```bash
# Clear cache and node_modules
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

## Required package.json:
```json
{
  "name": "therapist-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.3.2",
    "lucide-react": "^0.298.0",
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.49.2",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

## Post-Deployment Steps

1. Update Domain (Optional):
- Go to Netlify site settings
- Click "Domain settings"
- Add custom domain or use Netlify subdomain

2. Verify Functionality:
- Test booking form
- Check WhatsApp integration
- Verify responsiveness
- Test all links and buttons

3. Monitoring:
- Check Netlify analytics
- Monitor form submissions
- Check deploy logs

## Maintenance

1. Update Dependencies:
```bash
npm update
```

2. Deploy Updates:
```bash
# If using Netlify CLI
netlify deploy --prod

# If using GitHub
git push origin main  # Netlify will auto-deploy
```