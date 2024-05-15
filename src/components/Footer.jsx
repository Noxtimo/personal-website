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
        <div>
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
        </div>{" "}
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="footer-h2">example@domain.com</h2>
      </footer>

      <footer className="main-footer second-footer">
        <h2 className="footer-h2">
          <small>Copyright © {year}</small>
        </h2>
      </footer>
    </>
  );
};

export default Footer;
