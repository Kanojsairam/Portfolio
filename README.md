# Portfolio Website

Professional portfolio website showcasing my projects, skills, and experience as an Electronics & Communication Engineering student and MERN Stack Developer.

## 🚀 Features

- **Modern Design**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Skills**: Progress bars showing proficiency levels
- **Project Showcase**: Featured projects with live demo links
- **Contact Form**: Functional email contact system
- **Resume Download**: PDF resume download functionality
- **Professional Profile**: Circular profile image with gradient border

## 🛠️ Technologies Used

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router
- **Email Service**: Web3Forms integration
- **Styling**: CSS3, Gradient backgrounds, Animations

## 📁 Project Structure

```
src/
├── components/         # Reusable components
├── Home/              # Home page component
├── About/             # About page with skills and experience
├── Contact/           # Contact form with email integration
├── lib/               # Utility functions
└── assets/            # Static assets

public/
├── profile-photo.jpg  # Professional profile image
├── 22EC054 (1).pdf   # Resume PDF
└── vite.svg          # Vite logo
```

## 🎨 Key Sections

### Home Page
- Hero section with introduction
- Featured projects showcase
- Top technical skills with progress bars
- Social media links
- Smooth scroll animations

### About Page
- Professional profile image
- Detailed background and experience
- Comprehensive skills categorization
- Project descriptions with technologies used
- Education and internship details

### Contact Page
- Functional contact form
- Direct email integration
- Professional contact information
- Social media links

## 🌟 Skills Highlighted

- **Programming**: Python (95%), C (90%), Java (88%), JavaScript (85%)
- **Frameworks**: React.js, Node.js, Express.js, Flask
- **Databases**: MongoDB, SQL
- **Specializations**: IoT, Machine Learning, AI Integration
- **Tools**: VS Code, Git, AWS, Figma

## 📞 Contact Information

- **Email**: kanojsairam.sa2022ece@sece.ac.in
- **LinkedIn**: [kanoj-sairam](https://www.linkedin.com/in/kanoj-sairam/)
- **GitHub**: [kanojsairam](https://github.com/kanojsairam)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Kanojsairam/Portfolio.git
   ```

2. Install dependencies:
   ```bash
   cd Portfolio
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ by Kanojsairam S A*
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
---

*Built with ❤️ by Kanojsairam S A*
