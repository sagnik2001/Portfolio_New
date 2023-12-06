import { React, useState, useEffect } from "react"
import Navbar from "./components/Navbar.js"
import About from "./components/About/About.js"
import Projects from "./components/Projects/Projects.js"
import Resume from "./components/Resume/Resume.js"
import Contact from "./components/Contact.js"
import Footer from "./components/Footer.js"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Pre from "./components/Pre.js"
function App() {
  const [load, upadateLoad] = useState(false);

 
  return (

    <Router>
      <Pre load={load} />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contacts" element={<Contact />} className="main-content" />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
