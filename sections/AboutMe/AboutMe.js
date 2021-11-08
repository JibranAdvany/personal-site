import React from "react";
import styles from "./AboutMe.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className={`section`} id="About">
      <div className="row">
        <h2 className="section-heading">About Me</h2>

        <div className={styles.meContainer}>
          <div className={styles.image}>
            <Image
              src="/profileImage.jpg"
              alt="Picture of Jibran Advani"
              width={300}
              height={300}
            />
          </div>

          <div className={styles.content}>
            <h3 className={styles.meHeading}>Who am I?</h3>
            <p className={styles.meBrief}>
              A dynamic and bilingual professional with the educational
              background and proven work ethic to guide and support
              software/front-end development, web development, and more. I have
              start coding professionally, as freelancer, since 2019 and I have
              been producing decent-quality code, with the skill set to analyze
              complex information, manage key projects, efficiently resolve
              issues, and deliver outstanding digital experiences.
              Out-of-the-box thinker who is comfortable working in teams or
              independently to ensure solutions consistently meet or exceed
              business goals. Strong training and academic qualifications,
              including Zero to Mastery Academy Bootcamp.
            </p>
          </div>
        </div>

        <div className={styles.status}>
          <div>
            <p>
              <span className={styles.key}>Name: </span>
              <span className={styles.value}>&nbsp;Jibran Advani</span>
            </p>
            <p>
              <span className={styles.key}>Languages: </span>
              <span className={styles.value}>&nbsp;ENG / URDU</span>
            </p>
          </div>
          <div>
            <p>
              <span className={styles.key}>Location: </span>

              <span className={styles.value}>&nbsp;Dubai &mdash; UAE</span>
            </p>
            <p>
              <span className={styles.key}>Freelancing: </span>
              <span className={styles.value}>&nbsp;Available</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
