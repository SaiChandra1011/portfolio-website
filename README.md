# Minimalistic Portfolio Website

A beautiful, clean, and minimalistic portfolio website built with React and Framer Motion.

## Features

- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Minimalistic design with bold typography
- ⚡ Fast and lightweight
- 🌟 Modern UI/UX principles
- 🎯 Clean white background with black typography
- 🔗 Smooth scroll navigation

## Design Principles

- **Minimalistic**: Clean, uncluttered design with plenty of white space
- **Bold Typography**: Using Inter font with strong weights for maximum impact
- **Limited Color Palette**: Primarily black text on white background with subtle grays
- **Smooth Transitions**: Elegant animations that enhance user experience
- **Mobile-First**: Responsive design that works perfectly on all devices

## Tech Stack

- React 18
- Framer Motion for animations
- Modern CSS with Grid and Flexbox
- Inter Google Font
- Responsive design

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Install Node.js** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org/)
   - Follow the installation instructions for your operating system

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Customization

### Personal Information

Update the following in `src/App.js`:

1. **Hero Section**: Replace "Your Name" with your actual name
2. **About Section**: Update the description and skills array
3. **Projects**: Replace the sample projects with your actual projects
4. **Contact Links**: Update with your actual social media and contact information

### Styling

The main styles are in `src/index.css`. Key customizable elements:

- **Colors**: Modify the color variables for your brand colors
- **Typography**: Change font sizes and weights
- **Spacing**: Adjust padding and margins
- **Animations**: Customize animation timings in Framer Motion components

### Adding Your Photo

Replace the placeholder in the About section:

1. Add your photo to the `public` folder
2. Update the `placeholder-image` div in the About section with an `<img>` tag

## Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Main component with all sections
│   ├── index.js        # Entry point
│   └── index.css       # All styles
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Customization Tips

1. **Personal Branding**: Update colors and fonts to match your personal brand
2. **Content**: Replace all placeholder content with your actual information
3. **Projects**: Add real project screenshots and descriptions
4. **Skills**: Update the skills array with your actual technologies
5. **Social Links**: Add your real social media and portfolio links

## Performance

- Optimized animations with Framer Motion
- Minimal bundle size with only necessary dependencies
- Responsive images and modern CSS
- Smooth scroll behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and Framer Motion 