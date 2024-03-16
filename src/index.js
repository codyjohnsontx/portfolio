import React from "react";

const ContactForm = () => {
  return (
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>
  );
};

export default ContactForm;
