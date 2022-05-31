import React from "react";
import logo from "./logo4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar=()=>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      <a href="/" className="navbar-brand" ><img className="logo" src={logo} alt="logo.."/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

        <FontAwesomeIcon icon={faBars} style={{color: "white"}}></FontAwesomeIcon>"
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHome} className="nav_icons"/>
Home </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faUser} className="nav_icons"/>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects"><FontAwesomeIcon icon={faTasks} className="nav_icons"/>Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume"><FontAwesomeIcon icon={faFile} className="nav_icons"/>Resume</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts"><FontAwesomeIcon icon={faPhone} className="nav_icons"/>Contacts</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>

  )
}
export default Navbar;
