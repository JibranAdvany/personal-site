import React from "react";
import styles from "./Header.module.css";
import Navigation from "../../components/Navigation/Navigation";
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
    <header className={styles.header} id='Home'>
      <Navigation />

      <div className={styles.content}>
        <p className={styles.lead}>Hello, I'm</p>
        <h1 className={styles.name}>Jibran Advani</h1>
        <p className={styles.title}>Auditor &mdash; Fullstack Developer</p>
      </div>

      <div className={styles.cta}>
          <Link href="#">
              <a className={`${styles.btn} ${styles.btnSecondary}`}>My portfolio</a>
          </Link>
          <Link href="#">
              <a className={`${styles.btn} ${styles.btnSecondary}`}>Contact Me</a>
          </Link>
      </div>

      <div className={styles.socials}>
        <Link href="#">
          <a>
            <FontAwesomeIcon
              icon={faGithub}
              className={`${styles.github} ${styles.icon}`}
            />
          </a>
        </Link>
        <Link href="#">
          <a>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`${styles.github} ${styles.icon}`}
            />
          </a>
        </Link>
        <Link href="#">
          <a>
            <FontAwesomeIcon
              icon={faTwitter}
              className={`${styles.github} ${styles.icon}`}
            />
          </a>
        </Link>
        <Link href="#">
          <a>
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className={`${styles.github} ${styles.icon}`}
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
