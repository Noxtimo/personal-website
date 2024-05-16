import React, { useState } from "react";

const ContactForm = () => {
  return (
    <>
      <form className="contact-form">
        {" "}
        <label>Get In Touch</label>{" "}
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
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ContactForm;
