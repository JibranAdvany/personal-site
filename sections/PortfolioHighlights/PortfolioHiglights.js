import React from "react";
import styles from "./PortfolioHiglights.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const PortfolioHiglights = () => {
  return (
    <section className={`section ${styles.sectionPortfolio}`} id="Portfolio">
      <div className="row">
        <h2 className="section-heading">Portfolio</h2>

        <div className={styles.projects}>
          {/* SIDE PROGRAMMER */}
          <div className={styles.project}>
            <h3 className={styles.projectHeading}>Side Programmer</h3>
            <p className={styles.projectDescription}>
              This is the live blog that I have coded and currently maintaining.
              The blog is about various tech topics which range from front-end
              to back-end.
            </p>
            <h3 className={styles.projectTech}>Technologies used</h3>
            <div className={styles.projectTechnologies}>
              <small>Next JS</small>
              <small>Tailwind CSS</small>
              <small>Contentful CMS</small>
            </div>
            <div className={styles.actions}>
              <a
                href="https://github.com/JibranAdvany/personal-site"
                target="_blank"
                className={`${styles.btn} ${styles.githubBtn}`}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.github} ${styles.icon}`}
                />{" "}
                See Github
              </a>

              <a
                href="https://www.sideprogrammer.com/"
                target="_blank"
                className={`${styles.btn} ${styles.liveBtn}`}
              >
                View Live &nbsp;
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className={`${styles.live} ${styles.icon}`}
                />
              </a>
            </div>
          </div>

          {/* NATOURS */}
          <div className={styles.project}>
            <h3 className={styles.projectHeading}>Natours</h3>
            <p className={styles.projectDescription}>
              This is the landing page of a fictional company that offers tours.
              The project is front-end only and is built in order to learn Sass
              and advanced CSS concepts as part of an online course.
            </p>
            <h3 className={styles.projectTech}>Technologies used</h3>
            <div className={styles.projectTechnologies}>
              <small>HTML</small>
              <small>CSS</small>
              <small>Sass</small>
            </div>
            <div className={styles.actions}>
              <a
                href="https://github.com/JibranAdvany/natours_css"
                target="_blank"
                className={`${styles.btn} ${styles.githubBtn}`}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.github} ${styles.icon}`}
                />{" "}
                See Github
              </a>

              <a
                href="https://project-natours-css.netlify.app/"
                target="_blank"
                className={`${styles.btn} ${styles.liveBtn}`}
              >
                View Live &nbsp;
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className={`${styles.live} ${styles.icon}`}
                />
              </a>
            </div>
          </div>

          {/* THEME TOGGLE */}
          <div className={styles.project}>
            <h3 className={styles.projectHeading}>Theme Toggle</h3>
            <p className={styles.projectDescription}>
              This is the landing page of a fictional company that offers
              software development and design services. The project is front-end
              only and is built in order to learn Javascript concepts and to
              learn the theme change effect on a website.
            </p>
            <h3 className={styles.projectTech}>Technologies used</h3>
            <div className={styles.projectTechnologies}>
              <small>HTML</small>
              <small>CSS</small>
              <small>Javascript</small>
            </div>
            <div className={styles.actions}>
              <a
                href="https://github.com/JibranAdvany/theme-toggle"
                target="_blank"
                className={`${styles.btn} ${styles.githubBtn}`}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.github} ${styles.icon}`}
                />{" "}
                See Github
              </a>

              <a
                href="https://theme-toggle-project.netlify.app/"
                target="_blank"
                className={`${styles.btn} ${styles.liveBtn}`}
              >
                View Live &nbsp;
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className={`${styles.live} ${styles.icon}`}
                />
              </a>
            </div>
          </div>

          {/* JOKE TELLER */}
          <div className={styles.project}>
            <h3 className={styles.projectHeading}>Text to Speech</h3>
            <p className={styles.projectDescription}>
              This is the page that is built in order to learn how to perform
              text to speech using Javascript on the website.
            </p>
            <h3 className={styles.projectTech}>Technologies used</h3>
            <div className={styles.projectTechnologies}>
              <small>HTML</small>
              <small>CSS</small>
              <small>Javascript</small>
            </div>
            <div className={styles.actions}>
              <a
                href="https://github.com/JibranAdvany/text-to-speech"
                target="_blank"
                className={`${styles.btn} ${styles.githubBtn}`}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.github} ${styles.icon}`}
                />{" "}
                See Github
              </a>

              <a
                href="https://text-to-speech-project.netlify.app/"
                target="_blank"
                className={`${styles.btn} ${styles.liveBtn}`}
              >
                View Live &nbsp;
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className={`${styles.live} ${styles.icon}`}
                />
              </a>
            </div>
          </div>

          {/* PICTURE IN PICTURE */}
          <div className={styles.project}>
            <h3 className={styles.projectHeading}>Picture in Picture</h3>
            <p className={styles.projectDescription}>
              This project is built in order to learn how to understand the
              picture in picture API of the browser. This project only works on
              chrome.
            </p>
            <h3 className={styles.projectTech}>Technologies used</h3>
            <div className={styles.projectTechnologies}>
              <small>HTML</small>
              <small>CSS</small>
              <small>Javascript</small>
            </div>
            <div className={styles.actions}>
              <a
                href="https://github.com/JibranAdvany/picture-in-picture"
                target="_blank"
                className={`${styles.btn} ${styles.githubBtn}`}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.github} ${styles.icon}`}
                />{" "}
                See Github
              </a>

              <a
                href="https://js-picture-in-picture.netlify.app/"
                target="_blank"
                className={`${styles.btn} ${styles.liveBtn}`}
              >
                View Live &nbsp;
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className={`${styles.live} ${styles.icon}`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHiglights;
