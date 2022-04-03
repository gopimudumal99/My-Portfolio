import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Proficiency from "./components/Proficiency/Proficiency";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Proficiency />
      <Experience />
      <Works/>
    </div>
  );
}

export default App;
