# Acrena Estate - Real Estate Website

A modern, responsive real estate website built with **Tailwind CSS v4** featuring a beautiful dark/light mode toggle.

## 🚀 Features

- ✨ Built with **Tailwind CSS v4**
- 🌓 **Dark/Light Mode** with smooth transitions
- 📱 Fully **Responsive** design
- 🎨 Custom **Design Tokens** using CSS variables
- ⚡ **Fast** and optimized
- 🎯 Clean, maintainable code structure

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Farok-ahmed/Acrena-html.git
   cd Acrena-html
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Running the Project

### Development Mode (Watch for changes)
```bash
npm run dev
```
This will watch your files and automatically rebuild CSS when you make changes.

### Build for Production
```bash
npm run build
```
This creates a minified, production-ready CSS file.

### Quick Build (Development)
```bash
npm run build:css
```

## 📁 Project Structure

```
Acrena-html/
├── src/
│   ├── css/
│   │   ├── listing.css      # Listing page specific styles
│   │   └── home-v2.css      # Home v2 specific styles
│   ├── js/
│   │   ├── init-theme.js    # Theme initialization (runs before page load)
│   │   └── theme-toggle.js  # Theme toggle functionality
│   ├── index.html           # Main homepage
│   ├── listing.html         # Property listing page
│   ├── home-v2.html         # Alternative homepage v2
│   ├── home-v3.html         # Alternative homepage v3
│   ├── input.css            # Tailwind source file (ALL CONFIG HERE!)
│   └── output.css           # Generated CSS (don't edit)
├── package.json             # Project dependencies
└── README.md                # This file
```

**Note:** In Tailwind v4, there's **no `tailwind.config.js`** needed! Everything is configured in CSS.

## 🎨 Tailwind CSS v4 Setup

### What's Different in v4?

Tailwind CSS v4 uses a **CSS-first** approach - **no config file needed!**

1. **Single Import**: Only need `@import "tailwindcss";` (no more `@tailwind base`, etc.)
2. **CSS Variables**: Design tokens are defined as CSS custom properties
3. **No Config File**: Everything is configured directly in CSS using `@theme`
4. **Simpler**: Less JavaScript, more CSS - cleaner and faster!

### Custom Design Tokens

All colors are defined in `src/input.css`:

```css
:root {
  --color-primary: #f73c4d;
  --bg-page: #ffffff;
  --text-default: #1a1a1a;
  /* ... more tokens */
}

html.dark {
  --bg-page: #121212;
  --text-default: #ffffff;
  /* ... dark mode overrides */
}
```

### Using Custom Colors

In your HTML:
```html
<div class="bg-page text-default">
  <h1 class="text-primary">Welcome!</h1>
</div>
```

The corresponding CSS classes are defined in `input.css`:
```css
.bg-page { background-color: var(--bg-page); }
.text-default { color: var(--text-default); }
.text-primary { color: var(--color-primary); }
```

## 🌓 Dark Mode Implementation

### How It Works

1. **Theme Initialization** (`init-theme.js`):
   - Runs **before** page renders (no flash)
   - Checks `localStorage` for saved theme
   - Falls back to system preference
   - Adds `dark` class to `<html>` if needed

2. **Theme Toggle** (`theme-toggle.js`):
   - Handles button clicks
   - Toggles `dark` class on `<html>`
   - Updates icon (sun ↔ moon)
   - Saves preference to `localStorage`

3. **CSS Variables**:
   - When `dark` class is added, CSS variables change
   - All elements using these variables update automatically

### Adding Dark Mode to New Pages

1. Add theme initialization in `<head>`:
   ```html
   <script src="./js/init-theme.js"></script>
   ```

2. Add the toggle button:
   ```html
   <button id="theme-toggle">
     <i id="theme-icon" class="fa-solid"></i>
   </button>
   ```

3. Load the toggle script before `</body>`:
   ```html
   <script src="./js/theme-toggle.js"></script>
   ```

## 🎯 Available NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development with watch mode |
| `npm run build` | Build minified CSS for production |
| `npm run build:css` | Build CSS for development |
| `npm run watch:css` | Watch mode (alias for dev) |

## 🔧 Customization

### Adding New Colors

1. **Define CSS variable** in `src/input.css`:
   ```css
   :root {
     --my-new-color: #123456;
   }
   
   html.dark {
     --my-new-color: #654321;
   }
   ```

2. **Create utility class**:
   ```css
   .bg-my-color {
     background-color: var(--my-new-color);
   }
   
   .text-my-color {
     color: var(--my-new-color);
   }
   ```

3. **Rebuild CSS**:
   ```bash
   npm run build:css
   ```

4. **Use in HTML**:
   ```html
   <div class="bg-my-color text-white">Hello!</div>
   ```

### Modifying Existing Colors

Just update the values in `src/input.css`:

```css
:root {
  --color-primary: #ff5733; /* Change from #f73c4d */
}
```

Then rebuild:
```bash
npm run build:css
```

## 🐛 Troubleshooting

### Dark mode not working?

1. **Check if CSS is rebuilt**:
   ```bash
   npm run build:css
   ```

2. **Verify utility classes exist** in `output.css`:
   ```bash
   grep ".bg-page" src/output.css
   ```

3. **Check browser console** for JavaScript errors (F12)

4. **Clear localStorage** and refresh:
   ```javascript
   localStorage.removeItem('theme');
   location.reload();
   ```

### Tailwind classes not working?

1. **Make sure you're using the generated `output.css`**:
   ```html
   <link rel="stylesheet" href="./output.css" />
   ```

2. **Rebuild CSS after changes**:
   ```bash
   npm run build:css
   ```

3. **Check if file is in `content` paths** (tailwind.config.js)

## 📚 Learn More

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Dark Mode Best Practices](https://web.dev/prefers-color-scheme/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Farok Ahmed**
- GitHub: [@Farok-ahmed](https://github.com/Farok-ahmed)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Made with ❤️ using Tailwind CSS v4**
