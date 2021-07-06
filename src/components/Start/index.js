import React from "react";
import styles from "./start.module.scss";
import Fade from "react-reveal/Fade";

const Start = () => (
  <div className={styles.container}>
    <div className="container">
      <Fade left>
        <h1 className={styles.heading}>
          Första gången du får <span className="highlight">avkastning</span> på
          ditt medlemskap
        </h1>
      </Fade>
      <Fade left delay={500}>
        <h2 className="light white">
          Du ska få de resultat du förtjänar. Vi anser att branschen har svikit
          sina medlemmar, men inte längre.
        </h2>
      </Fade>
    </div>
  </div>
);
export default Start;
