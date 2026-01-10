# Shubham Portfolio

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and an elegant design.

## 🚀 Features

- **Modern UI/UX** - Clean and professional design with smooth animations
- **Responsive Design** - Fully responsive across all devices
- **Interactive Components** - Built with React and enhanced with Framer Motion
- **Fast Performance** - Powered by Vite for lightning-fast development and builds
- **Sections Included**:
  - Home/About
  - Skills
  - Education
  - Projects
  - Achievements
  - Contact

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite 6** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) and npm
- **Docker** and Docker Compose (optional, for containerized deployment)

## 🔧 Installation

### Local Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd port
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🐳 Docker Setup

### Build the Docker Image

Build the Docker image with the tag `shubham-port`:

```bash
docker build -t shubham-port .
```

### Run the Docker Container

Run the container with volume mounting for hot-reload and port mapping:

```bash
docker run -it -p 5173:5173 -v ${PWD}:/app -v /app/node_modules shubham-port
```

**For Windows PowerShell:**
```bash
docker run -it -p 5173:5173 -v ${PWD}:/app -v /app/node_modules shubham-port
```

**For Windows CMD:**
```bash
docker run -it -p 5173:5173 -v %CD%:/app -v /app/node_modules shubham-port
```

**For Linux/Mac:**
```bash
docker run -it -p 5173:5173 -v $(pwd):/app -v /app/node_modules shubham-port
```

The application will be available at `http://localhost:5173`

### Docker Volume Mounts Explained

- `-v ${PWD}:/app` - Mounts the current directory to `/app` in the container for live code changes
- `-v /app/node_modules` - Creates an anonymous volume to prevent overwriting node_modules from host

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
port/
├── src/
│   ├── Components/       # React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── contact.jsx
│   │   ├── Education.jsx
│   │   ├── Home.jsx
│   │   ├── navbar.jsx
│   │   ├── Project.jsx
│   │   ├── Sidebar.jsx
│   │   └── skills.jsx
│   ├── assets/          # Images and static assets
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── Dockerfile           # Docker configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🌐 Production Build

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment.

## 📝 License

This project is private and proprietary.

## 👤 Author

**Shubham**

---

For questions or issues, please open an issue on the repository.
