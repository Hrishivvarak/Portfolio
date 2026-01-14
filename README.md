# 👨‍💻 Hrishikesh Varak - Personal Portfolio

A modern, responsive, and interactive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS v4**. This project showcases my skills, projects, and professional background with a clean UI, dark mode support, and smooth animations.

🔗 **Live Demo:** [https://Hrishivvarak.github.io/Portfolio](https://Hrishivvarak.github.io/Portfolio)

## ✨ Features

- **🎨 Modern UI/UX:** Clean, minimalist design with a focus on readability and user experience.
- **🌓 Dark/Light Mode:** Fully supported theme toggling that respects system preferences.
- **📱 Fully Responsive:** Optimized for all devices, from mobile phones to large desktop screens.
- **⚡ Fast Performance:** Powered by Vite for lightning-fast development and production builds.
- **🌊 Smooth Animations:** Custom CSS animations (floating blobs, fade-ins) for a dynamic feel.
- **📄 Resume Download:** Direct link to download the resume PDF.
- **🛠️ Tech Stack Section:** Visual representation of skills and tools.

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Hrishivvarak/Portfolio.git](https://github.com/Hrishivvarak/Portfolio.git)
   cd Portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
Open `http://localhost:5173` in your browser to view the app.

---

## 📂 Project Structure

```plaintext
src/
├── assets/          # Static assets (images, resume.pdf)
├── components/      # Reusable React components (Navbar, Hero, etc.)
├── data/            # Centralized data file (portfolioData.js)
├── App.jsx          # Main application layout
├── main.jsx         # Entry point
└── index.css        # Tailwind imports and custom animations
```
## 📝 Customization

All the content (Profile info, Skills, Projects) is stored in a single data file for easy updates.

### Open
```plaintext
src/data/portfolioData.js
```
### Update the DATA Object

```js
export const DATA = {
  profile: {
    name: "Your Name",
    role: "Your Role",
    // ...
  },
  // ...
};
```
## 🌍 Deployment

This project is configured for **GitHub Pages** deployment.

### Configure Vite

Ensure the `base` property in `vite.config.js` matches your repository name:

```js
base: "/Portfolio/",
```
### Deploy

Run the following command:

```bash
npm run deploy
```
This builds the project and pushes the `dist` folder to the `gh-pages` branch.

---

## 🤝 Contact

**Hrishikesh Varak**

- 📧 Email: hrishikeshvarak20@gmail.com  
- 💼 LinkedIn: Hrishikesh Varak  
- 🐙 GitHub: @Hrishivvarak  

---

## 📄 License

This project is open source and available under the **MIT License**.
