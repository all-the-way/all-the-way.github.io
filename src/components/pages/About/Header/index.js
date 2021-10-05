import React from "react";
import gym from "./gym.jpg";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header} style={{ backgroundImage: `url(${gym})` }}>
      <h1 className="highlight">Vår historia</h1>
    </div>
  );
};

export default Header;
