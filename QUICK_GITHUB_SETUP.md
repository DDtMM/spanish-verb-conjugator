# Quick GitHub Setup Guide

## 1. Create GitHub Repository
```bash
# Initialize git in your project directory
cd spanish-verb-conjugator
git init
git add .
git commit -m "Initial commit: Spanish Verb Conjugator Angular app"

# Create repository on GitHub.com (recommended name: spanish-verb-conjugator)
# Then connect your local repo:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/spanish-verb-conjugator.git
git push -u origin main
```

## 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section in left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save changes

## 3. Automatic Deployment
- The GitHub Actions workflow will run automatically on push to main
- Check the **Actions** tab to see build progress
- Once complete, your app will be live at:
  `https://YOUR_USERNAME.github.io/spanish-verb-conjugator/`

## 4. If Repository Name is Different
If you use a different repository name, update the base href in `package.json`:
```json
"build:github-pages": "ng build --base-href /YOUR_REPO_NAME/ && ..."
```

## That's it! 🚀
Your Spanish Verb Conjugator will now automatically deploy to GitHub Pages whenever you push changes to the main branch.

For detailed setup instructions, see `GITHUB_PAGES_SETUP.md`.