import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Proficiency from "./components/Proficiency/Proficiency";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Proficiency/>
    </div>
  );
}

export default App;
