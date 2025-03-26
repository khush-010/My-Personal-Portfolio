import React from "react";
import  ContactForm  from "./ContactForm"; // Adjust the path based on where ContactForm is located
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <>
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      {/* Contact Links Section */}
      <ul className={styles.links}>
      <li className={styles.link}>
          <img src={getImageUrl("contact/resume.png")} alt="Resume icon" />
          <a target="_blank" href="https://drive.google.com/file/d/198nxbFLL2e8vJqF83M6R736lLHYDwQlj/view?usp=sharing">Resume</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:khushdhameliya007@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/khush-dhameliya-87ba19275/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/khush-010">GitHub</a>
        </li>
      </ul>
      
    </footer>
    <div className={styles.contactFormSection}>
    <ContactForm />
    </div>
    </>
  );
};
