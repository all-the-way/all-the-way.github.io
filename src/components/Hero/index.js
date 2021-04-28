import React, { useRef } from "react";
import styles from "./hero.module.scss";
import video from "./hero.mp4";
import heroImage from "./hero.jpg";

const Hero = ({ children }) => {
  const videoElement = useRef(null);

  const handleSuspend = () => {
    videoElement.current.style.visibility = "hidden";
  };

  const handlePlay = () => {
    videoElement.current.style.visibility = "visible";
  };

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
          onSuspend={handleSuspend}
          onPlay={handlePlay}
          ref={videoElement}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.content}>{children}</div>
    </header>
  );
};

export default Hero;
