import React from "react";
import styles from "./AboutMe.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className={`section ${styles.sectionAbout}`} id="About">
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
              software/front-end development, UX/UI design, web development, and
              more. Dedicated leader who is known for producing high-quality
              code, with the skill set to analyze complex information, manage
              key projects, efficiently resolve issues, and deliver outstanding
              digital experiences. Out-of-the-box thinker who is comfortable
              working in teams or independently to ensure solutions consistently
              meet or exceed business goals. Strong training and academic
              qualifications, including Coder Foundry Bootcamp and coursework in
              Web and Mobile Application Development at NBCC.
            </p>
          </div>
        </div>

        <div className={styles.status}>
          <div>
            <p>
              <span>Name: </span>Jibran Advani
            </p>
            <p>
              <span>Languages: </span>ENG / URDU / HIDI
            </p>
          </div>
          <div>
            <p>
              <span>Location: </span>Dubai &mdash; UAE
            </p>
            <p>
              <span>Freelancing: </span>Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
