# WEDE_POE
# The Daily Grind ☕

## Project Overview

**The Daily Grind** is a fully responsive, modern website for an artisan coffee shop located in Johannesburg, South Africa. Built with semantic HTML5, CSS3, and vanilla JavaScript, the site showcases the café's offerings, atmosphere, and services while providing visitors with an intuitive browsing experience.

### Purpose
To create a professional online presence that allows customers to:
- Explore the café's menu and offerings
- View gallery of coffee, pastries, and ambiance
- Make enquiries and reservations
- Contact the establishment with location details
- Learn about the café's story and values

### Key Features
- ✅ **Responsive Design** — Mobile-first approach, works on all devices
- ✅ **Interactive Gallery** — Lightbox with keyboard navigation
- ✅ **Location Mapping** — Leaflet/OpenStreetMap integration
- ✅ **Form Validation** — Contact and enquiry forms with client-side validation
- ✅ **Smooth Animations** — Scroll reveals, transitions, and hover effects
- ✅ **Accessible** — ARIA labels, semantic HTML, keyboard navigation
- ✅ **SEO Optimized** — Meta tags, descriptive content, structured markup
- ✅ **Mobile Navigation** — Hamburger menu toggle for small screens

---

## Project Structure

```
WEDE_PART_3/
├── index.html              # Home page
├── about.html              # About Us page
├── gallery.html            # Interactive gallery with lightbox
├── menu.html               # Menu/services showcase
├── services.html           # Services offerings
├── enquiries.html          # Enquiry form page
├── contact.html            # Contact form & Leaflet map
├── README.md               # This file
├── css/
│   └── style.css           # Main stylesheet (responsive, animations, layout)
├── js/
│   └── main.js             # Core JavaScript (nav toggle, lightbox, forms, map)
└── images/
    ├── artisan coffee.jpg
    ├── Latte.jpg
    ├── pastry.jpg
    ├── cafe.jpg
    ├── team.jpg
    └── [other assets]
```

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup, forms, accessibility |
| **CSS3** | Responsive layout, animations, gradients |
| **JavaScript (Vanilla)** | DOM manipulation, form validation, interactivity |
| **Leaflet.js** | Interactive mapping (Contact page) |
| **OpenStreetMap** | Map tile provider |
| **Google Fonts** | Montserrat (headings), Open Sans (body) |
| **Font Awesome 6.5** | Icons (hamburger, chevrons, etc.) |
| **Git** | Version control |

---

## Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Microsoft Edge)
- Optional: VS Code with Live Server extension, or any local server

### Quick Start
1. **Clone or download** the repository:
   ```bash
   git clone https://github.com/your-tshepoc123/WEDE_PART_3.git
   cd WEDE_PART_3
   ```

2. **Open in browser**:
   - Double-click `index.html` to open directly, OR
   - Use VS Code Live Server: right-click `index.html` → "Open with Live Server"

3. **Test all pages**:
   - Navigate using the top navigation bar
   - Try mobile view (press F12 → toggle device toolbar)

---

## Features & Functionality

### 1. **Navigation Bar**
- Sticky header with logo and links
- Active page highlight
- **Mobile**: Hamburger menu toggle (visible on screens < 600px)
- **Colorful gradient background** for better visibility
- Smooth hover animations

### 2. **Home Page (index.html)**
- Hero section with welcome image and CTA button
- Highlights grid showcasing café features
- Reveal-on-scroll animations
- Links to menu and services

### 3. **Gallery Page (gallery.html)**
- Grid layout of café/coffee images
- **Lightbox modal** on image click
- Keyboard navigation (← → arrows, Esc to close)
- Previous/Next buttons for browsing
- Image captions and alt text for accessibility

### 4. **Contact Page (contact.html)**
- **Leaflet map** showing café location (Johannesburg)
- Contact form with validation
- Form submission opens mail client (mailto:)
- Required fields: Name, Email, Message

### 5. **Enquiry Page (enquiries.html)**
- Enquiry form with date/time selection
- Client-side validation
- Success message on submission
- Fields: Name, Email, Date, Time, Party Size, Special Requests

### 6. **Menu & Services Pages**
- Showcase café offerings
- Responsive grid/list layout
- Links to enquiries/contact

### 7. **Mobile Responsiveness**
- Hamburger navigation toggle
- Stacked layout on mobile
- Touch-friendly buttons and links
- Optimized images with lazy loading

---

## JavaScript Features (main.js)

### Mobile Navigation Toggle
```javascript
// Toggles .nav-links visibility on mobile
// Hamburger icon animates to X when open
```

### Lightbox Gallery
- Click any image to open modal
- Navigate with arrow buttons or keyboard arrows
- Close with X button or Esc key
- Shows captions from `<figcaption>`

### Back-to-Top Button
- Appears after scrolling 400px
- Smooth scroll to top on click
- Auto-generated if not in DOM

### Reveal-on-Scroll
- `.highlight` and `.hero-text` fade in on view
- Uses Intersection Observer API
- Smooth CSS transitions

### Form Validation
- **Contact form**: Validates email format, required fields
- **Enquiry form**: Checks date/time, party size, email
- Shows error messages for invalid input
- Prevents submission on errors

### Leaflet Map
- Displays café location on contact page
- Interactive pan/zoom controls
- OpenStreetMap tiles
- Marker with popup showing address

### Lazy Image Loading
- All images get `loading="lazy"` attribute
- Improves page performance

### Dynamic Footer Year
- Updates copyright year automatically

---

## CSS Structure

### Variables (in :root)
```css
--bg: #fff                 /* Main background */
--accent: #c96b3d          /* Coffee/accent color */
--muted: #6b6b6b           /* Secondary text */
--nav-bg: #fff             /* Navigation background */
--card-bg: #fbfbfb         /* Card/highlight background */
--radius: 12px             /* Border radius */
--max-width: 1100px        /* Content max-width */
```

### Responsive Breakpoints
- **Desktop**: 900px+ (3-column grid for highlights)
- **Tablet**: 600px–899px (2-column grid)
- **Mobile**: < 600px (1-column, hamburger nav)

### Key Animations
- Fade-in on scroll (reveals)
- Hover scale & shadow (buttons, cards)
- Smooth color transitions (links)
- Hamburger menu animation (rotate, cross)

---

## How to Test

### 1. **Test Navigation**
- Click each nav link; verify page loads
- Mobile: Tap hamburger → menu should open/close
- Click active page → should highlight

### 2. **Test Gallery**
- Go to Gallery page
- Click any image → lightbox opens
- Use arrow buttons or keyboard ← → to browse
- Press Esc → lightbox closes
- Verify captions display

### 3. **Test Contact Form**
- Go to Contact page
- Leave fields blank, click Send → error appears
- Enter invalid email → error appears
- Fill all fields → clicking Send opens mail client

### 4. **Test Enquiry Form**
- Go to Enquiries page
- Submit empty form → errors show
- Fill all fields correctly → success message
- Clear form → can submit again

### 5. **Test Map**
- Go to Contact page
- Verify map loads with marker
- Try pan/zoom controls
- Click marker → popup shows address

### 6. **Test Mobile**
- Press F12 (DevTools)
- Toggle device toolbar (Ctrl+Shift+M)
- Verify layout stacks properly
- Test hamburger menu toggle
- Verify touch targets are adequate (> 44px)

### 7. **Test Accessibility**
- Press Tab to navigate links
- Verify focus outline visible on all interactive elements
- Test keyboard-only navigation (no mouse)
- Verify image alt text is descriptive

---

## Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome/Edge 90+ | ✅ Full support |
| Firefox 88+ | ✅ Full support |
| Safari 14+ | ✅ Full support |
| IE 11 | ⚠️ Partial (no modern CSS/JS features) |

---

## Performance Optimizations

- Lazy loading for images
- CSS gradients instead of image backgrounds
- Minified Font Awesome (CDN)
- Efficient event delegation
- CSS animations (GPU-accelerated)
- Optimized media queries

---

## Accessibility Features

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels on buttons and modals
- Keyboard navigation (Tab, Enter, Esc, arrows)
- Color contrast ratios meet WCAG AA standards
- Descriptive alt text on images
- Focus indicators on interactive elements
- Skip-to-main-content link (optional addition)

---

## SEO Optimizations

- Meta descriptions on each page
- Relevant keywords in meta tags
- Semantic HTML structure
- Image alt text
- Proper heading hierarchy (H1 → H3)
- Mobile-responsive design
- Fast load times (lazy images)
- Open Graph meta tags (optional enhancement)

---

## Future Enhancements

- [ ] Add SSL/HTTPS certificate
- [ ] Implement backend for form submissions (Node.js/PHP)
- [ ] Add email notifications for enquiries
- [ ] Create admin dashboard for menu management
- [ ] Add social media integration
- [ ] Implement online ordering system
- [ ] Add blog/news section
- [ ] Add multilingual support
- [ ] Analytics tracking (Google Analytics)
- [ ] PWA (Progressive Web App) features

---

## Troubleshooting

### Map not loading?
- Check internet connection (Leaflet requires CDN)
- Verify Leaflet CSS and JS are loaded in `<head>`
- Check browser console for errors (F12)

### Images not showing?
- Verify image file paths in HTML
- Check that `images/` folder contains files
- Ensure file names match exactly (case-sensitive)

### Hamburger menu not working?
- Open DevTools console (F12) for JS errors
- Verify `main.js` is loaded (check Network tab)
- Check that `.nav-toggle` and `.nav-links` exist in HTML

### Forms not validating?
- Check browser console for JavaScript errors
- Verify form `id` attributes match in JS
- Test in different browser to isolate issue

---

## Development Notes

### Adding a New Page
1. Create new `.html` file with same header/nav structure
2. Add link to navbar in all existing pages
3. Use same CSS classes for consistency
4. Update this README

### Customizing Colors
1. Edit CSS variables in `css/style.css` (`:root` section)
2. Update `--accent`, `--bg`, `--nav-bg` as needed
3. Test across all pages

### Customizing Content
1. Edit text directly in `.html` files
2. Replace image paths in `src` attributes
3. Update form field names and validation logic if needed

---

## Credits & References

- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Mapping**: [Leaflet.js](https://leafletjs.com/), [OpenStreetMap](https://www.openstreetmap.org/)
- **Documentation**: [MDN Web Docs](https://developer.mozilla.org/)
- **Web Standards**: [W3C](https://www.w3.org/)

---

## License

This project is created for educational purposes. Please respect intellectual property rights when reusing code.

---

## Contact & Support

For issues or suggestions, please contact or open a GitHub issue at:
👉 https://github.com/your-tshepoc123/WEDE_PART_3

---

# Changelog

## Version History

### v3.0 (2025-11-16) — Part 3: Full Feature Release
**Major Updates:**
- ✅ Implemented complete multi-page website structure (7 pages)
- ✅ Added interactive JavaScript features for enhanced UX
- ✅ Implemented accessible lightbox gallery with keyboard navigation
- ✅ Integrated Leaflet.js mapping with OpenStreetMap
- ✅ Created form validation for Contact and Enquiry pages
- ✅ Enhanced navigation with mobile hamburger toggle
- ✅ Implemented reveal-on-scroll animations using Intersection Observer
- ✅ Added back-to-top button with smooth scroll
- ✅ Full SEO optimization (meta tags, descriptions, keywords)
- ✅ Responsive design across all devices (mobile, tablet, desktop)
- ✅ Accessibility features (ARIA, semantic HTML, keyboard navigation)

**New Files:**
- `gallery.html` — Interactive gallery page with lightbox
- `contact.html` — Contact form + Leaflet map
- `enquiries.html` — Enquiry form with date/time picker
- `menu.html` — Menu showcase page
- `services.html` — Services offerings page
- `about.html` — About Us page
- `js/main.js` — Core JavaScript functionality
- `css/style.css` — Complete responsive stylesheet

**CSS Updates (v3.0):**
- Gradient navbar with coffee-themed colors (#4a3021 → #8b5d3b)
- Colorful navigation with hover animations and underline effects
- Responsive grid layouts (3-col → 2-col → 1-col)
- Smooth transitions and animations throughout
- Mobile hamburger menu styling
- Card/highlight box shadows and hover effects
- Reveal-on-scroll animations
- Back-to-top button styling
- Lightbox modal styling
- Form input styling and validation states

**JavaScript Features (v3.0):**
- Mobile navigation toggle (hamburger menu)
- Smooth anchor link scrolling
- Back-to-top button (auto-generated, appears after 400px scroll)
- Lightbox gallery with modal functionality
- Image navigation (previous/next buttons)
- Keyboard controls (arrow keys, Esc)
- Form validation (Contact & Enquiry)
- Leaflet map initialization with marker/popup
- Lazy image loading
- Dynamic footer year
- Reveal-on-scroll using Intersection Observer

**Accessibility Improvements:**
- ARIA labels on all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Proper focus indicators
- High contrast color scheme
- Descriptive image alt text

**Performance Optimizations:**
- Lazy loading on images
- CSS-based animations (GPU-accelerated)
- Efficient event listeners
- Minified external dependencies (CDN)
- Optimized media queries

---

### v2.0 (2025-10-24) — Part 2: Styling & Layout
**Updates:**
- Created responsive CSS framework
- Added hero section styling
- Implemented highlights grid layout
- Added button and card components
- Created footer styling
- Mobile breakpoint testing

**Files Modified:**
- `css/style.css` — Initial styling framework
- `index.html` — Added semantic structure

---

### v1.0 (2025-10-01) — Part 1: Initial Setup
**Initial Release:**
- Basic HTML structure
- Navigation framework
- Hero section markup
- Highlights section template
- Meta tags and SEO basics

---

## Known Issues & Limitations

- ⚠️ Map requires internet connection (CDN dependency)
- ⚠️ Contact form uses `mailto:` (no backend server)
- ⚠️ Enquiry form data not persisted (demo only)
- ⚠️ No email notifications (would require backend)

## Future Roadmap

### v4.0 (Planned)
- [ ] Backend API for form submissions
- [ ] Email notification system
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Online ordering system
- [ ] Payment integration (Stripe/PayPal)
- [ ] Database (MongoDB/PostgreSQL)

### v5.0 (Planned)
- [ ] Mobile app (React Native)
- [ ] Progressive Web App (PWA)
- [ ] Push notifications
- [ ] Social media integration
- [ ] Blog/news section
- [ ] Customer reviews system
- [ ] Analytics dashboard

---

## Commit History

See Git commits at: https://github.com/your-tshepoc123/WEDE_PART_3/commits

Major commits:
- `initial-setup` — v1.0 HTML structure
- `add-styling` — v2.0 CSS framework
- `add-js-features` — v3.0 JavaScript interactivity
- `colorful-nav` — Enhanced navigation styling
- `detailed-readme` — Comprehensive documentation
