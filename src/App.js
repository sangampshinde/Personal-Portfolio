import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import About from "./About Me/About";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
