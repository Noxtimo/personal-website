import { Outlet, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../images/logo.png";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-social-links">
            <Link to="#">
              <FaLinkedin className="social-link-bottom" />
            </Link>
            <Link to="#">
              <FaInstagram className="social-link-bottom" />
            </Link>
            <Link to="#">
              <FaGithub className="social-link-bottom" />
            </Link>
            <Link to="#">
              <FaYoutube className="social-link-bottom" />
            </Link>
          </div>

          <img src={logo} alt="Logo" className="logo" />
          <h2 className="footer-h2">example@domain.com</h2>
        </div>
      </footer>

      <footer className="main-footer second-footer">
        <div className="footer-content2">
          <h2 className="footer-h2">
            <small>Copyright © {year}</small>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
