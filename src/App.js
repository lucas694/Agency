import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from "./Components/Homepage/HomePage";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
