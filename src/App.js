import Navbar from "./components/Navbar/Navbar";
// require("dotenv").config();
import "./App.css";
import Intro from "./components/Intro/Intro";
import Proficiency from "./components/Proficiency/Proficiency";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Proficiency />
      <Experience />
      <Works />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
