import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header} id="Home">
      <div className={styles.content}>
        <p className={styles.lead}>Hello, I'm</p>
        <h1 className={styles.name}>Jibran Advani</h1>
        <p className={styles.title}>Auditor &mdash; Fullstack Developer</p>
      </div>

      <div className={styles.cta}>
        <Link href="#Portfolio">
          <a className={`${styles.btn} ${styles.btnSecondary}`}>My portfolio</a>
        </Link>
        <Link href="#Contact">
          <a className={`${styles.btn} ${styles.btnSecondary}`}>Contact Me</a>
        </Link>
      </div>

      <div className={styles.socials}>
        <a href="https://github.com/JibranAdvany" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className={`${styles.github} ${styles.icon}`}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/hafiz-muhammad-jibran-3b4706a5/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`${styles.github} ${styles.icon}`}
          />
        </a>

        <Link href="#">
          <a href="https://twitter.com/advani_jibran" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className={`${styles.github} ${styles.icon}`}
            />
          </a>
        </Link>

        {/* <a>
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className={`${styles.github} ${styles.icon}`}
            />
          </a> */}
      </div>
    </header>
  );
};

export default Header;
