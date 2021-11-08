import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

const links = ["Home", "About", "Portfolio", "Contact"];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.links}>
        {links.map((link, i) => (
          <li key={i} className={styles.link}>
            <Link href={`#${link}`}>
              <a>{link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
