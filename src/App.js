import {React,useState,useEffect} from "react"
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
  Switch,
  Route,
} from "react-router-dom";
import Pre from "./components/Pre.js"
function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    
    <Router>
       <Pre load={load} />
      <div className="App">
       <Navbar/>
       <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contacts" component={Contact} className="main-content" />
       </Switch>
       <Footer/>
     </div>
    </Router>
  );
}

export default App;
