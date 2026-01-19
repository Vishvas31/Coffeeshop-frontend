import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; // adjust path if needed
import { Facebook, Instagram, Twitter,Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: Logo + Text */}
        <div className="paragraph">
          <div className="brand">
            <img src={logo} alt="Coffee Logo" className="footer-logo" />
            {/* <h2>Coffee</h2> */}
          </div>
          {/* <p>
            Brewing happiness one cup at a time. Premium coffee made with love.
          </p> */}
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <div className="links">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/menu"><li>Menu</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </div>


          <div className="time">
            <span>Mon – Fri: 7am – 10pm</span>
            <span>Sat – Sun: 8am – 11pm</span>
          </div>

          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="letter">
          <h3>Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Join</button>
          </div>
        </div>

      </div>

      <div className="copyright">
        © 2026 Coffee. All rights reserved.
      </div>
    </footer>
  );
}
