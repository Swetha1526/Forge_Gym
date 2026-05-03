# 🏋️ FORGE GYM — Homepage

A fully responsive gym website built with pure HTML & CSS.

## 📁 File Structure

```text
forge-gym/
├── index.html              ← Main HTML file (open this in browser)
├── styles/                 ← CSS stylesheets
│   ├── variables.css       ← CSS custom properties (colors, fonts)
│   ├── base.css            ← Reset, shared buttons, animations
│   ├── navbar.css          ← Navigation styles
│   ├── sections.css        ← All section styles (hero, services, etc.)
│   └── responsive.css      ← Mobile & tablet breakpoints
├── js/
│   └── main.js             ← Mobile nav, form, scroll reveal
├── *.jpg                   ← Local image assets (e.g., gym_1.jpg, gym_2.jpg)
├── *.mp4                   ← Local video assets (e.g., Fitness Cinematic video...)
└── README.md
```

## 🚀 Getting Started

1. Open the `forge-gym/` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **"Open with Live Server"**
4. The site opens at `http://127.0.0.1:5500`

## 🎨 Customization Guide

### Change Colors
Edit `styles/variables.css`:
```css
:root {
  --red: #e8281a;      /* Primary accent color */
  --black: #0a0a0a;    /* Background */
  --white: #f5f5f0;    /* Text */
}
```

### Change Gym Name / Content
Edit sections directly in `index.html`.

### Change the Background Video
In `index.html`, find the `#video-section` and the `<video>` element to replace the `src` with your video file:
```html
<video id="gym-reel" class="video-bg-iframe" autoplay muted loop playsinline>
  <source src="Your New Video.mp4" type="video/mp4">
</video>
```

### Connect the Contact Form
In `js/main.js`, find the `handleSubmit` function and replace the
`setTimeout` with a real API call (e.g. EmailJS, Formspree, or your backend).

### Replace Images
Swap image URLs in `index.html` with your own files in the directory:
```html
<!-- Before -->
src="gym_6.jpg"

<!-- After -->
src="your_new_image.jpg"
```

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 900px | Full desktop layout |
| ≤ 900px | 2-column grids, hamburger menu |
| ≤ 600px | Single column, stacked layout |

## 🔤 Fonts Used
- **Bebas Neue** — Display / headings
- **Barlow Condensed** — Labels, nav, buttons
- **Barlow** — Body text

All loaded via Google Fonts (internet required). To use offline, download and host locally.
