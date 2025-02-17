import React from "react"
import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Sidebar from "./Components/Sidebar";
import Skills from "./Components/skills";
import Contact from "./Components/contact";
function App() {

  return (
    <>
      <div>
       <Navbar />
       <Home />
       <About />
       <Education />
       <Project />
       <Skills />
       <Contact />

       
       <Sidebar />
      </div>
    </>
  )
}

export default App;
