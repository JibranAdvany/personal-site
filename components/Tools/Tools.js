import React from "react";
import styles from "./Tools.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Tools = () => {
  return (
    <div className={styles.container}>
      <div className={styles.technology}>
        <FontAwesomeIcon
          icon={faHtml5}
          className={`${styles.icon} ${styles.html}`}
        />
        <small className={styles.text}>HTML</small>
        <small className={styles.text}>pug, ejs</small>
      </div>

      <div className={styles.technology}>
        <FontAwesomeIcon
          icon={faCss3Alt}
          className={`${styles.icon} ${styles.css}`}
        />
        <small className={styles.text}>CSS</small>
        <small className={styles.text}>Tailwind</small>
      </div>

      <div className={styles.technology}>
        <FontAwesomeIcon
          icon={faSass}
          className={`${styles.icon} ${styles.sass}`}
        />
        <small className={styles.text}>Sass</small>
      </div>

      <div className={styles.technology}>
        <FontAwesomeIcon
          icon={faJs}
          className={`${styles.icon} ${styles.js}`}
        />
        <small className={styles.text}>Javascript</small>
      </div>

      <div className={styles.technology}>
        <FontAwesomeIcon
          icon={faReact}
          className={`${styles.icon} ${styles.react}`}
        />
        <small className={styles.text}>React</small>
        <small className={styles.text}>Next</small>
      </div>

      <div className={styles.technology}>
        <FontAwesomeIcon
          icon={faNodeJs}
          className={`${styles.icon} ${styles.node}`}
        />
        <small className={styles.text}>Node</small>
        <small className={styles.text}>Express</small>
      </div>

      <div className={styles.technology}>
        <FontAwesomeIcon
          icon={faDatabase}
          className={`${styles.icon} ${styles.mongo}`}
        />
        <small className={styles.text}>MongoDB</small>
        <small className={styles.text}>Mongoose</small>
      </div>
    </div>
  );
};

export default Tools;
