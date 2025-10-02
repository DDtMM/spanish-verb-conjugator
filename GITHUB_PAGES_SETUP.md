# GitHub Pages Deployment Setup

## Overview
This document explains how to deploy your Spanish Verb Conjugator Angular app to GitHub Pages using GitHub Actions.

## Files Created/Modified

### 1. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
**Purpose**: Automatically builds and deploys the app to GitHub Pages on every push to main branch.

**Key Features**:
- Triggers on push to `main` branch
- Uses Node.js 20 and npm cache for faster builds
- Builds Angular app with correct base href for GitHub Pages
- Creates 404.html for client-side routing support
- Deploys to GitHub Pages automatically

### 2. Package.json Updates
**Added Script**:
```json
"build:github-pages": "ng build --base-href /spanish-verb-conjugator/ && npx cpy dist/spanish-verb-conjugator/browser/index.html dist/spanish-verb-conjugator/browser/ --rename 404.html"
```

**Added Dev Dependency**:
```json
"cpy-cli": "^5.0.0"
```

## Setup Instructions

### Step 1: Create GitHub Repository
```bash
# In your project directory
git init
git add .
git commit -m "Initial commit: Spanish Verb Conjugator Angular app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/spanish-verb-conjugator.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run on your next push

### Step 3: Configure Repository Name (if different)
If your repository name is different from `spanish-verb-conjugator`, update:

**In `package.json`**:
```json
"build:github-pages": "ng build --base-href /YOUR_REPO_NAME/ && ..."
```

**In `.github/workflows/deploy.yml`**: No changes needed (it uses the build script)

## How It Works

### Build Process
1. **Install Dependencies**: `npm ci` for faster, reliable installs
2. **Build Angular App**: 
   - Sets `--base-href` to `/spanish-verb-conjugator/` for GitHub Pages subdirectory
   - Builds to `dist/spanish-verb-conjugator/browser/`
3. **Create 404.html**: 
   - Copies `index.html` to `404.html` for Angular router support
   - Enables client-side routing to work on GitHub Pages

### Deployment Process
1. **Upload Artifacts**: GitHub Actions uploads the built files
2. **Deploy to Pages**: Automatically deploys to GitHub Pages
3. **URL Available**: App available at `https://YOUR_USERNAME.github.io/spanish-verb-conjugator/`

## Important Notes

### Base Href Configuration
- **Development**: Uses `/` (root path)
- **GitHub Pages**: Uses `/spanish-verb-conjugator/` (subdirectory)
- **Angular Router**: Handles both configurations automatically

### 404.html for SPAs
- GitHub Pages serves `404.html` for unknown routes
- We copy `index.html` to `404.html` so Angular router can handle all routes
- This enables direct links to `/present-tense` and `/preterite` to work

### Workflow Permissions
```yaml
permissions:
  contents: read    # Read repository contents
  pages: write      # Write to GitHub Pages
  id-token: write   # Required for secure deployment
```

## Automatic Deployment

### Triggers
- **Push to main**: Automatically builds and deploys
- **Pull requests**: Builds but doesn't deploy (for testing)

### Build Status
- Check the **Actions** tab in your GitHub repository
- Green checkmark = successful deployment
- Red X = build/deployment failed (check logs)

## Local Testing

### Test GitHub Pages Build Locally
```bash
# Install dependencies
npm install

# Build for GitHub Pages
npm run build:github-pages

# Serve locally (install http-server if needed)
npx http-server dist/spanish-verb-conjugator/browser --push-state
```

### Verify Build
- Check that files exist in `dist/spanish-verb-conjugator/browser/`
- Verify `404.html` is created alongside `index.html`
- Test that routing works with the base href

## Troubleshooting

### Common Issues

1. **404 on GitHub Pages**
   - Check repository name matches base-href
   - Ensure GitHub Pages is enabled in repository settings
   - Verify workflow completed successfully

2. **Routing Issues**
   - Ensure `404.html` exists in build output
   - Check that base-href is set correctly

3. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are properly listed
   - Review workflow logs in GitHub Actions

### Debug Steps
1. Check workflow status in **Actions** tab
2. Review build logs for errors
3. Test build locally with `npm run build:github-pages`
4. Verify repository settings in **Settings** > **Pages**

## Result
Once set up, your Spanish Verb Conjugator will be automatically deployed to GitHub Pages at:
`https://YOUR_USERNAME.github.io/spanish-verb-conjugator/`

The app will update automatically whenever you push changes to the main branch!