import { Outlet, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import myImage from "../images/myImage.jpeg";
import macbook from "../images/macbook.jpeg";
import ux from "../images/ux.png";
import digital from "../images/digital.png";
import web from "../images/web.png";

const Subscribe = () => {
  return (
    <>
      <div className="sub-container">
        <div className="sub-top">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At magnam
            atque corrupti. Voluptatum, rem iste impedit aspernatur ullam amet
            molestiae.
          </h5>
          <hr className="sub-hr"></hr>
        </div>

        <div className="sub-bottom">
          <input
            className="sub-input"
            placeholder="Enter Your Email Address To Recieve A Message From Me"
          ></input>
          <Link className="sub-btn">Subscribe</Link>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
