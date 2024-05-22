import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
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
          toast.success("Message sent successfully!");
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
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Get In Touch</label>
        <input
          className="label"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="label"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Message"
          required
        ></textarea>
        <input
          className="submit-button"
          type="submit"
          value="Send"
          disabled={isSubmitting}
        />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
