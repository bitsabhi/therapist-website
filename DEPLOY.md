# Deployment Guide

## Local Development Setup
[Previous local setup steps remain the same...]

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

3. Ensure `netlify.toml` in project root has:
```toml
[build]
  command = "npm run build"
  publish = "out"
```

4. Deploy:
```bash
# Initialize Netlify site
netlify init

# Test build locally
netlify build

# Deploy to production
netlify deploy --prod
```

### Method 2: Deploy via Netlify UI

1. Push your code to GitHub

2. On Netlify:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
     - Set environment variables:
       - Key: `NEXT_PUBLIC_WHATSAPP_NUMBER`
       - Value: Your WhatsApp number (e.g., `918800807548`)

3. Important Checks:
   - Ensure `next.config.js` has:
     ```js
     /** @type {import('next').NextConfig} */
     const nextConfig = {
       output: 'export',
       images: {
         unoptimized: true
       },
     }
     ```
   - Remove `@netlify/plugin-nextjs` from `netlify.toml` if present
   - Verify environment variables are set in Netlify UI

### Testing Before Deploy

1. Test build locally:
```bash
# Clean previous builds
rm -rf .next out
npm ci
npm run build

# Test the output
npx serve out
```

2. Check WhatsApp Integration:
```bash
# Verify env variable is set
echo $NEXT_PUBLIC_WHATSAPP_NUMBER

# Test booking form locally
npm run dev
```
