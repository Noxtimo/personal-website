import { Outlet, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import myImage from "../images/myImage.jpeg";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="content-left">
            <div className="social-links">
              <Link to="#">
                <FaLinkedin className="social-link" />
              </Link>
              <Link to="#">
                <FaInstagram className="social-link" />
              </Link>
              <Link to="#">
                <FaGithub className="social-link" />
              </Link>
              <Link to="#">
                <FaYoutube className="social-link" />
              </Link>
            </div>
            <div className="social-speach">
              <h1 className="space-bottom start-speach">
                I'm A Web Developer Mahamed M. Abdirahman.
              </h1>
              <h5 className="space-bottom">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                labore quibusdam sequi perspiciatis, vitae adipisci cumque
                quisquam magni magnam consequuntur.
              </h5>
              <Link to="#" className="learn-more">
                Learn More
              </Link>
            </div>
          </div>
          <img src={myImage} className="my-image" />
        </div>
      </div>
    </>
  );
};

export default Home;
