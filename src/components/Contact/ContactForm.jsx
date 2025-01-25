import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css"; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
    };
    console.log(formData);
    emailjs
      .send(
        "service_xgc5asw", 
        "template_aww6dk7",
        formData,
        "_RN2uRYZvWoQ0ljto" 
      )
      .then(
        (response) => {
          setStatus("Message Sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
