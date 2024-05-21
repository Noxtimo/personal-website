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
import UncontrolledExample from "../components/myCarousel";

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
              <h5 className="space-bottom text-beneath">
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
      <div className="container color-container">
        <div className="content-second">
          <div className="about-me">
            <h1>About Me</h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              pariatur?
            </h5>
            <hr></hr>
          </div>
          <div className="about-me-bottom">
            <div className="about-me-bottom-left">
              <div>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <hr></hr>
              </div>

              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia nesciunt doloribus placeat esse, rem quibusdam
                veritatis ipsa aperiam. Libero laboriosam quis quo? Vero dicta
                ratione eius? In et dicta ipsam a fuga ex eaque recusandae
                voluptatem omnis voluptas maiores quia ipsa at fugit
                repellendus, nobis sapiente mollitia alias. Consectetur,
                doloremque.
              </h5>
              <Link to="#" className="learn-more">
                Contact Me
              </Link>
            </div>
            <div className="about-me-bottom-middle">
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
                officia doloribus! Provident temporibus commodi rem beatae
                ratione. Tempore, dolorum eligendi.
              </h5>
            </div>
            <img src={macbook} className="about-me-img" />
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="content-second">
          {" "}
          <div className="about-me">
            <h1>What Services I'm Providing</h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              pariatur?
            </h5>
            <hr></hr>
          </div>
          <div className="service-bottom">
            <div className="service">
              <img src={ux} className="service-img" />
              <h2>UI/UX Design</h2>
              <h5>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                quod debitis quas enim sed, vitae soluta consectetur consequatur
              </h5>
              <Link className="learn-more" to="#">
                Learn More
              </Link>
            </div>
            <div className="service">
              <img src={digital} className="service-img" />
              <h2>Digital Marketing</h2>
              <h5>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                quod debitis quas enim sed, vitae soluta consectetur consequatur
              </h5>
              <Link className="learn-more" to="#">
                Learn More
              </Link>
            </div>
            <div className="service">
              <img src={web} className="service-img" />
              <h2>Web Development</h2>
              <h5>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                quod debitis quas enim sed, vitae soluta consectetur consequatur
              </h5>
              <Link className="learn-more" to="#">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container color-container">
        <div className="content">
          <UncontrolledExample />
        </div>
      </div>
    </>
  );
};

export default Home;
