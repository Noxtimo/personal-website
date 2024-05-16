import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "../components/ContactForm.jsx";
import { Outlet, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="container-contact">
        <div className="content-contact">
          <div className="contact-top">
            <div className="phone">
              <FaPhone />
              <h4>+1 (2222 54748 7)</h4>
              <h4>Monday - Friday from 7am - 5pm</h4>
            </div>
            <div className="email">
              <MdEmail /> <h4>example@domain.com</h4>
            </div>
            <div>
              <FaLocationDot /> <h4>London, England</h4>
            </div>
          </div>
          <div className="contact-bottom">
            <ContactForm />
            <div className="contact-social">
              <div className="message-me">
                <div>
                  <h2>Message Me</h2>
                  <hr></hr>
                </div>
                <div>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus consequuntur quod in molestias quia, voluptatibus
                    voluptatum. Perspiciatis accusantium sapiente magni
                    recusandae a pariatur aut ea facere saepe reiciendis,
                    perferendis vitae cum soluta animi optio nihil ex. Beatae,
                    dignissimos quibusdam est eligendi sit cum? Consequuntur
                    nesciunt nobis harum alias repellat sequi.
                  </h5>
                </div>
              </div>

              <div className="social-links-contact">
                <Link to="#">
                  <FaLinkedin className="social-link-contact" />
                </Link>
                <Link to="#">
                  <FaInstagram className="social-link-contact" />
                </Link>
                <Link to="#">
                  <FaGithub className="social-link-contact" />
                </Link>
                <Link to="#">
                  <FaYoutube className="social-link-contact" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
