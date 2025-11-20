# Marco Cornacchia Portfolio - Design System Analysis

## Overview
Portfolio website for Marco Cornacchia (marco.fyi) - Product Designer
Built with Webflow, featuring interactive tiles and animations

---

## Typography

### Font Family
- **Primary Font**: Lato
- **Weights Used**: 100, 100italic, 300, 300italic, 400, 400italic, 700, 700italic, 900, 900italic
- **Font Smoothing**: `-webkit-font-smoothing: antialiased`

### Text Styles
```css
/* Hero/Display Headings */
.display-heading {
  /* Large emphasis text */
}

.display-2-heading {
  /* Secondary display text */
}

/* Body Text */
body {
  -webkit-font-smoothing: antialiased;
}
```

---

## Color Palette

### Project Colors
```css
/* DotOS Blue */
--dotos-blue: rgb(114, 116, 242);

/* Take-Out Colors */
--takeout-green: rgb(16, 185, 129);
--takeout-orange: rgb(249, 115, 22);
--takeout-red: rgb(255, 65, 65);
--takeout-yellow: #fbbf24;
--takeout-pink: #ec4899;

/* CommandDot Colors */
--cd-purple: #7274f2;
--cd-green: #10b981;
--cd-orange: #f97316;
--cd-red: #ff4141;
--cd-blue: #4697f6;

/* Neutral Colors */
--neutral-bg: rgb(247, 247, 249);
--white: #ffffff;
--black: #000000;
--gray: rgb(148, 148, 148);
--gray-border: rgba(0, 0, 0, 0.1);
```

---

## Layout System

### Grid Layout
```css
.w-layout-grid {
  display: grid;
  grid-auto-columns: 1fr;
}

.home-grid {
  /* Main grid container for tiles */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
```

### Tile Sizes
```css
/* Tile size classes */
.tile.sm { /* Small tile */ }
.tile.md { /* Medium tile */ }
.tile.lg { /* Large tile */ }
.tile.xl { /* Extra large tile */ }
```

### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

---

## Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 992px) {
  /* Desktop styles */
}

/* Tablet */
@media (max-width: 991px) and (min-width: 768px) {
  /* Tablet styles */
}

/* Mobile Landscape */
@media (max-width: 767px) and (min-width: 480px) {
  /* Mobile landscape styles */
}

/* Mobile Portrait */
@media (max-width: 479px) {
  /* Mobile portrait styles */
}
```

---

## Animation Patterns

### Transform Animations
```css
/* Initial hidden states */
[data-w-id="..."] {
  transform: translate3d(0, 100%, 0) scale3d(1, 1, 1)
             rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
  opacity: 0;
}

/* Rotation effects */
.element {
  transform: translate3d(64px, 0, 0) scale3d(1, 1, 1)
             rotateX(0) rotateY(0) rotateZ(-10deg) skew(0, 0);
}

/* Scale effects */
.element {
  transform: translate3d(0px, 48px, 0) scale3d(0.8, 0.8, 1)
             rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
}
```

### Opacity Transitions
```css
/* Fade in/out */
.element {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.element:hover {
  opacity: 1;
}
```

### Custom Animations
```css
/* Rainbow gradient animation */
.arch-gradient {
  animation: animateBg 1s linear infinite;
  background-image: linear-gradient(0deg,
    #ff6570, #ff842a, #19d175,
    #4697f6, #7646ff, #ff6570, #ff842a);
  background-size: 100% 600%;
}

@keyframes animateBg {
  0% { background-position: 0% 100%; }
  100% { background-position: 0% 0%; }
}
```

---

## Component Styles

### Navigation
```css
.nav-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-item {
  /* Navigation link styles */
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-item:hover {
  /* Hover state */
}
```

### Tiles (Project Cards)
```css
.tile {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.tile:hover {
  transform: scale(1.02);
}

/* Project-specific backgrounds */
.tile.dotos { background-color: #f7f7f9; }
.tile.takeout { background-color: #fff; }
.tile.colors { background-color: #000; }
```

### iPhone Mockups
```css
.iphone-shell {
  position: relative;
  width: 100%;
  max-width: 390px;
}

.iphone-status-bar {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
}

.iphone-time {
  font-size: 14px;
  font-weight: 600;
}
```

### Buttons
```css
.button {
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.button:hover {
  transform: scale(1.05);
}

/* Project link buttons */
.project-link-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## Interactive States

### Hover Effects
```css
/* Scale hover */
.element:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Opacity hover */
.element:hover {
  opacity: 0.8;
}

/* Background change */
.element:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
```

### Active States
```css
.element:active {
  transform: scale(0.98);
}
```

---

## Scrollbar Customization
```css
/* Hide scrollbars */
.tilda-bar::-webkit-scrollbar,
.cmd-dock::-webkit-scrollbar,
.availability-overscroll::-webkit-scrollbar {
  display: none;
}

.element {
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
```

---

## Special Effects

### Shadow Effects
```css
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-elevated {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

### Blur Effects
```css
.backdrop-blur {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.8);
}
```

### Gradient Overlays
```css
.gradient-overlay {
  background: linear-gradient(180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%);
}
```

---

## Sound Design Integration

The site uses audio feedback for interactions:
- App clicks
- Tab clicks
- Item selections
- Color selections
- Button presses
- Navigation

```javascript
// Sound playback pattern
var audioClick = document.querySelector('#sound-id');
element.addEventListener('mousedown', function() {
  audioClick.currentTime = 0;
  audioClick.play();
});
```

---

## Key Design Principles

1. **Microinteractions**: Every clickable element has sound and visual feedback
2. **Transform-based animations**: Uses translate3d for GPU acceleration
3. **Layered depth**: Z-index and shadows create depth hierarchy
4. **Responsive scaling**: Elements scale proportionally across breakpoints
5. **Performance**: Uses will-change for animated properties
6. **Accessibility**: Maintains focus states and semantic HTML

---

## Performance Optimizations

```css
/* GPU acceleration */
.animated-element {
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

/* Reduce paint */
.element {
  backface-visibility: hidden;
  perspective: 1000px;
}
```
