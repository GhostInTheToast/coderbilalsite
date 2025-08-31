# 🚀 Alex Chen - Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and modern web technologies. Features a sleek Apple-inspired design with smooth animations and excellent user experience.

## ✨ Features

- **Modern Design**: Clean, Apple-inspired aesthetic with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized with React 19 and modern build tools
- **Accessibility**: Built with accessibility best practices
- **SEO Ready**: Optimized for search engines
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Build Tool**: Create React App with custom configuration
- **Development**: Hot reloading, Fast Refresh, TypeScript checking

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will open at [http://localhost:3000](http://localhost:3000) with hot reloading enabled!

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm start` - Start development server (same as dev)
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Development Features

### Hot Reloading
The development server automatically reloads when you make changes to your code. No need to manually refresh the browser!

### Fast Refresh
React Fast Refresh is enabled for instant updates to your components while preserving component state.

### TypeScript Support
Full TypeScript support with strict type checking and excellent IntelliSense support.

### Styled Components
CSS-in-JS styling with hot reloading support for styles.

### Performance Monitoring
Built-in performance monitoring and development utilities for debugging.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── utils/               # Utility functions
│   └── dev.ts          # Development utilities
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, and description
- `src/components/About.tsx` - Personal background and experience
- `src/components/Projects.tsx` - Your projects and GitHub links
- `src/components/Skills.tsx` - Your technical skills
- `src/components/Contact.tsx` - Contact information

### Styling
The website uses a consistent color scheme and design system. You can customize:
- Colors in individual component files
- Typography in `src/index.css`
- Layout and spacing in component styled-components

### Projects
Add your own projects by updating the `projects` array in `src/components/Projects.tsx`. Each project should include:
- Title and description
- Technology stack
- GitHub link
- Live demo link (optional)
- Featured status

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure your domain

## 🔧 Development Tips

### Component Development
- Use the `useRenderCount` hook to debug component re-renders
- Use `devLog`, `devWarn`, and `devError` for development logging
- Use `measurePerformance` to track component performance

### Styling
- Styled Components provide hot reloading for styles
- Use the design system colors and spacing consistently
- Test responsive design on different screen sizes

### Performance
- Monitor bundle size with `npm run build`
- Use React DevTools for component profiling
- Check Lighthouse scores for performance metrics

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

**TypeScript errors:**
```bash
npm run type-check
```

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Getting Help
- Check the console for error messages
- Use React DevTools for debugging
- Check the Network tab for API issues
- Verify all dependencies are installed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- Styled Components for CSS-in-JS
- Create React App for the build setup

---

**Happy coding! 🎉**

For questions or support, reach out at [your-email@example.com](mailto:your-email@example.com)
