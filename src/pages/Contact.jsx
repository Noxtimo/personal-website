import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "../components/ContactForm.jsx";
const Contact = () => {
  return (
    <>
      <div className="container">
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
            <div className="contact-form"></div>
            <div className="contact-social"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
