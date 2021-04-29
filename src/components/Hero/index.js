import React, { useRef } from "react";
import styles from "./hero.module.scss";
import video from "./hero.mp4";
import heroImage from "./hero.jpg";

const Hero = ({ children }) => {
  return (
    <header className={styles.masthead} id="start">
      <div className={styles.videoContainer}>
        <video
          playsInline
          autoPlay
          muted
          loop
          poster={heroImage}
          className={styles.video}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.content}>{children}</div>
    </header>
  );
};

export default Hero;
