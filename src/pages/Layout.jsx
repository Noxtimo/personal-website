import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.png";

const Layout = () => {
  return (
    <>
      <nav className="navigation-bar">
        <div className="div-nav-bar">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <ul className="navigation-links">
            <li>
              <Link to="/" className="Link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="Link">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="Link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="Link">
                Contact
              </Link>
            </li>
          </ul>
          <Link to="https://www.fiverr.com/noxtimo" className="hire-me-nav">
            Hire Me
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
