# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. This project showcases professional information, skills, and contact details in a clean, user-friendly interface.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface using Tailwind CSS
- **Smooth Navigation**: Client-side routing with React Router
- **Loading Animation**: Custom loading screen with progress indicator
- **State Management**: Redux Toolkit for efficient state management
- **Fast Development**: Hot module replacement with Vite
- **SEO Ready**: Structured for search engine optimization

## 📋 Pages

- **Home**: Welcome page with introduction
- **About**: Professional background and skills
- **Contact**: Contact information and form
- **Footer**: Social links and additional information

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Routing**: React Router DOM 7.6.2
- **State Management**: Redux Toolkit 2.8.2
- **Package Manager**: npm/bun
- **Linting**: ESLint 9.25.0

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my_portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact page
├── routing/            # Routing configuration
│   └── routes.jsx      # Route definitions
├── store/              # Redux store
│   ├── store.js        # Store configuration
│   └── mainSlice.js    # Redux slices
├── constants/          # Application constants
│   ├── config.js       # Configuration values
│   └── constants.js    # Static text and links
├── assets/             # Static assets
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## 🎨 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/routing/routes.jsx`
3. Update navigation in `src/components/Header.jsx`

### Styling

- The project uses Tailwind CSS for styling
- Custom styles can be added in `src/index.css`
- Component-specific styles can be added using Tailwind classes

### Content Management

- Update static text in `src/constants/constants.js`
- Modify configuration in `src/constants/config.js`
- Update social links and contact information

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or support, please reach out through the contact page or LinkedIn profile.

---

**Built with ❤️ using React and Vite**
