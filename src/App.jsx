import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "";
  }, []);
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


