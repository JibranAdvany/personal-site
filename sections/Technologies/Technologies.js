import React from "react";
import Tools from "../../components/Tools/Tools";
import styles from "./Technologies.module.css";

const Technologies = () => {
  return (
    <section className={`section ${styles.sectionTechnologies}`}>
      <div className="row">
        <h2 className="section-heading">Technologies I've worked with</h2>

        <Tools />
      </div>
    </section>
  );
};

export default Technologies;
