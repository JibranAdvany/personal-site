import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`section ${styles.sectionContact}`} id="Contact">
      <div className="row">
        <h2 className="section-heading">Contact Me</h2>
        <p>I'd be really happy to take on new projects and deliver them to the best of my ability. If interested, please contact me at:</p>
        <p className={styles.email}>jibranadvany@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
