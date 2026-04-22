# Dev Charan Sai P - Portfolio Theme B

AI Research Engineer & Deep Learning Innovator

## 🎨 Design System

Theme B is a premium, research-lab aesthetic portfolio with:
- **Dual-theme support**: Light (pearl/frosted steel) and Dark (obsidian/graphite) modes
- **Glass morphism**: Translucent surfaces with depth and elevation
- **Premium typography**: Boska (display) + Satoshi (body) from Fontshare
- **Restrained color**: Teal/cyan accent with neutral foundations
- **Cinematic motion**: Scroll reveals, hover tilts, marquee rails
- **Professional structure**: Curated home page + detailed Projects & Certificates pages

## 📁 File Structure

```
portfolio/
├── index.html              # Curated home page
├── projects.html           # Detailed projects & patents
├── certifications.html     # Certificates & badges
├── style.css               # Complete design system
├── app.js                  # All interactive features
├── doc/
│   ├── portrait.jpg        # Your profile picture (add this file)
│   └── certificates/       # All certificate PDFs and images
│       ├── IBM-AI-Engineering-Professional-Certificate-Coursera.pdf
│       ├── IBM-s-Machine-Learning-with-Python-Coursera.pdf
│       ├── OpenCV-Bootcamp.pdf
│       └── IBM-s-Building-Deep-Learning-Models-with-Tensorflow-Coursera.pdf
└── README.md
```

## 🚀 Setup Instructions

### 1. Add Your Portrait

Place your portrait image in the `doc/` folder and name it `portrait.jpg`:
```
doc/portrait.jpg
```

If your image has a different name or format, update line 91 in `index.html`:
```html
<img src="doc/YOUR_IMAGE_NAME.jpg" alt="Dev Charan Sai P" class="portrait-img">
```

### 2. Add Certificate Files

Place all your certificate PDFs in the `doc/certificates/` folder. The following files are already referenced in the code:

- `IBM-AI-Engineering-Professional-Certificate-Coursera.pdf`
- `IBM-s-Machine-Learning-with-Python-Coursera.pdf`
- `OpenCV-Bootcamp.pdf`
- `IBM-s-Building-Deep-Learning-Models-with-Tensorflow-Coursera.pdf`

If your certificate filenames are different, update the `pdfPath` values in the `certificates` object in `app.js` (starting around line 200).

### 3. Open in Browser

Simply open `index.html` in your browser. No build process or server required!

For local development with live reload, you can use:
```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx serve
```

Then visit `http://localhost:8000`

## ✨ Features

### Home Page (`index.html`)
- **Hero**: Animated typing, rotating descriptors, glowing portrait
- **About**: Credential cards with updated content (no CGPA)
- **Skills**: Animated progress bars, updated ML/DL domains
- **Featured Projects**: Horizontal scrolling rail (auto-loops)
- **Featured Certificates**: Curated preview grid
- **Leadership Timeline**: Visual role progression
- **Contact**: Premium contact cards

### Projects Page (`projects.html`)
- **Counters**: Animated project/patent counts
- **Filters**: Tag-based filtering system
- **Categories**: Academic, Personal, Patents sections
- **Modal**: Expandable detail view for each project
- **Full dataset**: All projects from Port-report.docx

### Certificates Page (`certifications.html`)
- **Featured**: Top 5 credentials
- **All Certificates**: Complete grid with PDF links
- **Digital Badges**: Credly badge links
- **Actions**: View, Download, Verify buttons

### Interactive Features
- ✅ Theme switching (light/dark with system preference)
- ✅ Mobile-responsive navigation
- ✅ Scroll-aware header
- ✅ Typing animation
- ✅ Descriptor rotation
- ✅ Scroll reveal animations
- ✅ Skill bar animations
- ✅ Counter animations
- ✅ Project marquee rail
- ✅ Filter system
- ✅ Modal system
- ✅ Smooth scrolling
- ✅ Active nav highlighting
- ✅ Reduced motion support

## 🎯 No Manual Changes Needed

All content from your Port-report.docx is already integrated:
- ✅ Updated About section (CGPA removed)
- ✅ Expanded ML/DL domains (MLOps, Gen AI, LLM, Agentic AI)
- ✅ Simplified Tools & Platforms
- ✅ All 11 projects (4 academic + 5 personal + 2 patents)
- ✅ Featured projects for home rail
- ✅ All 15+ certificates
- ✅ Leadership timeline (5 roles)
- ✅ Contact details

**Only requirements:**
1. Add `doc/portrait.jpg` (your picture)
2. Add certificate PDFs to `doc/certificates/`
3. Open `index.html`

## 🎨 Customization

### Change Colors

Edit the design tokens in `style.css` (lines 50-150):
```css
:root {
  --color-primary: #0891b2;        /* Main accent color */
  --color-primary-hover: #0e7490;  /* Hover state */
  /* ... */
}
```

### Change Fonts

The portfolio uses premium Fontshare fonts. To change:
1. Update the `<link>` tag in HTML head
2. Update font variables in `style.css`:
```css
--font-display: 'YourDisplayFont', serif;
--font-body: 'YourBodyFont', sans-serif;
```

### Add/Edit Projects

Edit the project data in `app.js` (lines 1-200):
- `featuredProjects` array for home page rail
- `allProjects` object for full projects page

### Add/Edit Certificates

Edit the certificate data in `app.js` (lines 200-350):
- `certificates.featured` for home page preview
- `certificates.all` for all certificates
- `certificates.badges` for digital badges

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Security

- No analytics or tracking
- No external data collection
- No localStorage for sensitive data (theme preference only)
- All external links use `rel="noopener noreferrer"`

## 📄 License

Personal portfolio website for Dev Charan Sai P.

## 🤝 Contact

- **Email**: devcharansaip@gmail.com
- **LinkedIn**: [linkedin.com/in/dev-charan-sai-p-152938231](https://linkedin.com/in/dev-charan-sai-p-152938231)
- **GitHub**: [github.com/DevCharanSaiP](https://github.com/DevCharanSaiP)

---

Built with precision · Theme B · 2026
