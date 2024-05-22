import { Outlet, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import macbook from "../images/macbook.jpeg";
import ux from "../images/ux.png";
import digital from "../images/digital.png";
import web from "../images/web.png";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          toast.success("You Subscribed successfully!");
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          toast.error("Something went wrong, please try again later");
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
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

        <form className="sub-bottom" onSubmit={sendEmail}>
          <form></form>
          <input
            className="sub-input"
            placeholder="Enter Your Email Address To Recieve A Message From Me"
            name="email"
            type="email"
            required
          ></input>
          <input
            type="submit"
            value="Send"
            disabled={isSubmitting}
            className="sub-btn"
          />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Subscribe;
