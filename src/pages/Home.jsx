import { Outlet, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import myImage from "../images/myImage.png";
import macbook from "../images/macbook.jpeg";
import ux from "../images/ux.png";
import digital from "../images/digital.png";
import web from "../images/web.png";

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
                Hey there! Welcome to my personal website. I'm all about
                creating cool, user-friendly websites that not only look great
                but work perfectly too. Whether it's front-end design or
                back-end development, I love bringing ideas to life on the web.
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
              I specialize in building responsive and visually engaging
              websites.
            </h5>
            <hr></hr>
          </div>
          <div className="about-me-bottom">
            <div className="about-me-bottom-left">
              <div>
                <h1>This website was made with Reactjs</h1>
                <hr></hr>
              </div>

              <h5>
                This website was crafted using React.js, a powerful and flexible
                JavaScript library for building user interfaces. With its
                component-based architecture, React.js allows for creating
                dynamic and responsive web experiences. I chose React.js to
                ensure this site is both efficient and enjoyable to use.
              </h5>
              <Link to="#" className="learn-more">
                Contact Me
              </Link>
            </div>
            <div className="about-me-bottom-middle">
              <h5>
                Here's an image of my MacBook Pro, the trusty companion I use to
                bring all my web development projects to life.
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
              Are you curious about which services I am providing? Well great
              louck, look no further!
            </h5>
            <hr></hr>
          </div>
          <div className="service-bottom">
            <div className="service">
              <img src={ux} className="service-img" />
              <h2>UI/UX Design</h2>
              <h5>
                I provide UX design services, focusing on creating intuitive and
                engaging user experiences. From research to prototyping, I
                ensure your digital products meet user needs.
              </h5>
              <Link className="learn-more" to="#">
                Learn More
              </Link>
            </div>
            <div className="service">
              <img src={digital} className="service-img" />
              <h2>Digital Marketing</h2>
              <h5>
                I provide digital marketing services focused on boosting online
                visibility and driving results through strategic campaigns
                across social media, search engines, and email.
              </h5>
              <Link className="learn-more" to="#">
                Learn More
              </Link>
            </div>
            <div className="service">
              <img src={web} className="service-img" />
              <h2>Web Development</h2>
              <h5>
                I specialize in crafting custom websites that bring your ideas
                to life online. With expertise in design and development, I
                deliver high-quality solutions tailored to your needs.
              </h5>
              <Link className="learn-more" to="#">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container white-container">
        <div className="about-me">
          <h1>Technologies I know</h1>
          <h5>I'm well-versed in various technologies.</h5>
          <hr></hr>
        </div>
        <div className="img-content">
          <img src="images/image1.png" className="img-logo" />
          <img src="images/image2.png" className="img-logo" />
          <img src="images/image3.png" className="img-logo" />
          <img src="images/image4.png" className="img-logo" />
          <img src="images/image6.jpeg" className="img-logo" />
          <img src="images/image7.png" className="img-logo" />
          <img src="images/image10.png" className="img-logo" />
          <img src="images/image11.jpeg" className="img-logo" />
          <img src="images/image12.jpeg" className="img-logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
