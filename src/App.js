import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from "./Components/Homepage/HomePage";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import HeaderMobile from "./Components/HeaderMobile";
import { useLocation } from 'react-router-dom';
import {useEffect} from "react";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <HeaderMobile />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
