import React from "react";
import styles from "./hero.module.scss";
import video from "./hero.mp4";

const Hero = ({ children }) => (
  <header className={styles.masthead} id="start">
    <video
      playsInline
      autoPlay
      muted
      loop
      poster="polina.jpg"
      className={styles.video}
    >
      <source src={video} type="video/mp4" />
    </video>
    {children}
  </header>
);

export default Hero;
