import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.title = "";
  }, []);

  return (
    <div>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Home />
      <About />
      <Projects />
      <Contact setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
