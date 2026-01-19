import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";



export default function Navbar() {

    const [open, setOpen] = useState(false);


  

  return (
   

    

    <nav className="nav">

      <div className="nav-container">
        {/* <h1 className="logo">Coffee</h1> */}

         <div className="logo">
          <Link to="/"><img src="src/assets/logo.png" alt="Coffee Logo" /></Link>
         </div>
        <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><li>Home</li></Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>About Us</li></Link>
          <Link to="/our-story" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>Our Story</li></Link>
          {/* <li>Location</li> */}
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>Contact</li></Link>

            <div className="buttons">
          
            <button className="btn light">Login</button>
            <button className="btn dark">Order Now</button>
        </div>
           </ul>

          
       
      </div>
    </nav>

    
  );
}

