import React from "react";
import './App.css';


function Navbar() {
  return (
    <div className="navbar">
      <div>
        <nav className="topnav">
          <div>
            <ul>
              <div className="left" >
                <li active-style={{background: "red", color: "white"}}><a href="/App">Home</a></li>
                <li><a href="/Discover">Discover</a></li>
                {/* <li><a href="/Contact">Contact</a></li> */}
              </div>
              <div className="right">
                <li><a href="/Login">Login</a></li>
                <li><a href="/Register">Register</a></li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;