import Navbar from "./components/Navbar/Navbar";
// require("dotenv").config();
import "./App.css";
import Intro from "./components/Intro/Intro";
import Proficiency from "./components/Proficiency/Proficiency";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Proficiency />
      <Experience />
      <Works />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
