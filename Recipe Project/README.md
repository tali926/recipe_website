# Recipe Hub Website

A recipe management website with text-to-speech functionality, user authentication, and personalized settings.

## Features
- User login/registration
- Personal settings (theme, font size, voice preferences)
- Recipe browsing and searching
- Add new recipes
- **Text-to-speech: Read recipes aloud**
- All data stored in localStorage

## Demo Accounts
- Username: `demo` | Password: `demo123`
- Username: `chef` | Password: `chef123`

## How to Run Locally
1. Open `index.html` in your web browser
2. Login with demo account or register a new account
3. Browse recipes and click "Read Recipe" button to hear them read aloud

## How to Deploy (Get Your Own Link)

### Option 1: GitHub Pages (Recommended - Easiest)
1. Create a GitHub account at https://github.com
2. Create a new repository (name it anything, e.g., "recipe-website")
3. Upload all files (index.html, recipes.html, settings.html, recipe-detail.html, app.js, styles.css)
4. Go to Settings → Pages
5. Under "Source", select "main" branch
6. Click Save
7. Your link will be: `https://YOUR-USERNAME.github.io/recipe-website/`

### Option 2: Netlify
1. Go to https://www.netlify.com
2. Sign up for free
3. Drag and drop your project folder
4. Get instant link like: `https://your-site-name.netlify.app`

### Option 3: Vercel
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Get link like: `https://your-project.vercel.app`

### Option 4: Render
1. Go to https://render.com
2. Sign up for free
3. Create new "Static Site"
4. Connect your GitHub repo
5. Get link like: `https://your-site.onrender.com`

## File Structure
```
/
├── index.html          (Login/Register page)
├── recipes.html        (Recipe list with search and add)
├── recipe-detail.html  (Individual recipe view with text-to-speech)
├── settings.html       (User preferences)
├── app.js             (JavaScript logic and localStorage)
├── styles.css         (Styling)
└── README.md          (This file)
```

## Text-to-Speech Feature
- Click "🔊 Read Recipe" button on any recipe detail page
- The computer will read the entire recipe aloud
- Customize voice, speed, and auto-read in Settings
- Click "⏹️ Stop" to stop reading

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Web Speech API (for text-to-speech)
- localStorage (for data persistence)

## Browser Compatibility
Works best in:
- Chrome
- Edge
- Safari
- Firefox

Note: Text-to-speech requires a modern browser with Web Speech API support.
