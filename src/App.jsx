import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Sidebar from "./Components/Sidebar";
import Skills from "./Components/skills";
import Contact from "./Components/contact";
import Achievements from "./Components/Achievements";
function App() {

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[5%] top-[20%] h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-[15%] right-[8%] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Navbar />

      <main>
        <Home />
        <About />
        <Education />
        <Project />
        <Achievements />
        <Skills />
        <Contact />
      </main>

      <Sidebar />
    </div>
  )
}

export default App;
