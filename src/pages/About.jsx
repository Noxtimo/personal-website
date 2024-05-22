import { Outlet, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import macbook from "../images/macbook.jpeg";
import ux from "../images/ux.png";
import digital from "../images/digital.png";
import web from "../images/web.png";
import about from "../images/about.jpeg";
import { useRef, useEffect } from "react";
import kingston from "../images/kignston.jpeg";
import cs from "../images/cs.jpeg";
const About = () => {
  return (
    <>
      <div className="title">
        <h1>About me</h1>
        <div className="title-hr"></div>
      </div>
      <div className="about-me-container color-container">
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
              <Link to="/images/resume.pdf" target="_blank" download>
                Download CV
              </Link>
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
      <div className="container">
        <div className="content column-content">
          {" "}
          <div className="about-me">
            <h1>Checkout My YouTube Chanel</h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              pariatur?
            </h5>
            <hr></hr>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aYwNeiTcNb4?si=jpaJFb3FqxEoPepc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="container  color-container">
        <div className="content column-content ">
          <div className="about-me">
            <h1>My Education</h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              pariatur?
            </h5>
            <hr></hr>
          </div>
          <div className="education-left">
            <Link
              to="https://www.kingston.ac.uk/undergraduate/courses/computer-science/"
              className="kingston-div"
            >
              <h2>Kingston University London</h2>
              <img src={kingston} className="education-img" />
            </Link>
            <Link className="kingston-div">
              <h2 className="education-text">Computer Science BSc (Hons)</h2>
              <img src={cs} className="education-img" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
