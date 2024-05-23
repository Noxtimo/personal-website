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
import photography from "../images/photography.avif";
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
            <img src={photography} className="photography" />
            <div className="about-middle">
              {" "}
              <h1>I also enjoy photography</h1>
              <h5>
                I have a passion for photography, finding joy in capturing
                moments that tell stories and evoke emotions. Through my lens, I
                explore the world, seeking beauty in the ordinary and preserving
                memories that last a lifetime.
              </h5>
              <h2>mahamedharrow@gmail.com</h2>
            </div>
            <div className="photography-speach-right">
              {" "}
              <h1> Checkout my social media.</h1>
              <h5>
                I love running social media accounts, as it allows me to share
                my journey and experiences with a wider audience. It's
                incredibly rewarding to connect with people, share insights, and
                spark conversations that resonate deeply.
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
              <h2>Below you can find a copy of resume/CV</h2>
              <h5>
                I've dabbled in a bit of everything – from internships to
                freelancing gigs. Whether I was working with a team or flying
                solo, I've learned how to adapt and solve problems along the
                way. I'm ready to bring that experience to the table as a junior
                developer!
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
              Here I make tutorial videoes showing people how to use various
              technologies.
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
              I have educatin in computer science. Below you can find links to
              my University courses.
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
