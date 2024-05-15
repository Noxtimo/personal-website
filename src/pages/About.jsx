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
const About = () => {
  return (
    <>
      <div className="container color-container">
        <div className="content-second">
          <div className="about-bottom">
            <img src={macbook} className="about-me-img" />
            <div className="about-middle">
              {" "}
              <h1>Lorem ipsum dolor sit amet.</h1>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia nesciunt doloribus placeat esse, rem quibusdam
                veritatis ipsa aperiam. Libero laboriosam quis quo? Vero dicta
                ratione eius? In et dicta ipsam a fuga ex eaque recusandae
                voluptatem omnis voluptas maiores quia ipsa at fugit
                repellendus, nobis sapiente mollitia alias. Consectetur,
                doloremque.
              </h5>
              <h2>example@domain.com</h2>
            </div>
            <div>
              {" "}
              <h1>Lorem ipsum dolor sit amet.</h1>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia nesciunt doloribus placeat esse, rem quibusdam
                veritatis ipsa aperiam. Libero laboriosam quis quo? Vero dicta
                ratione eius? In et dicta ipsam a fuga ex eaque recusandae
                voluptatem omnis voluptas maiores quia ipsa at fugit
                repellendus, nobis sapiente mollitia alias. Consectetur,
                doloremque.
              </h5>
              <div className="social-links-about">
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
            </div>
          </div>
          <div className="about-bottom-second">
            <div className="about-bottom-second-left">
              <h2>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odit!
              </h2>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
                nam ullam! Architecto amet officia debitis facere maiores vero
                aperiam dicta accusantium, non suscipit qui a, eos soluta quidem
                asperiores molestias?
              </h5>
              <Link to="#">Download CV</Link>
            </div>
            <div className="about-bottom-second2">
              <div class="progress">
                <div className="progress-bar-individual">
                  <div class="progress-value">
                    <h5 className="text-within">Js</h5>
                  </div>
                </div>
              </div>
              <div class="progress">
                <div className="progress-bar-individual">
                  <div class="progress-value">
                    <h5 className="text-within">Js</h5>
                  </div>
                </div>
              </div>
              <div class="progress">
                <div className="progress-bar-individual">
                  <div class="progress-value">
                    <h5 className="text-within">Js</h5>
                  </div>
                </div>
              </div>
              <div class="progress">
                <div className="progress-bar-individual">
                  <div class="progress-value">
                    <h5 className="text-within">Js</h5>
                  </div>
                </div>
              </div>
              <div class="progress">
                <div className="progress-bar-individual">
                  <div class="progress-value">
                    <h5 className="text-within">Js</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
