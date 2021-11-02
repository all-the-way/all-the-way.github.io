import React from "react";
import styles from "./header.module.scss";

const Header = ({ image, heading, fixed }) => {
  return (
    <div
      className={`${styles.header} ${fixed ? styles.fixed : ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {heading}
    </div>
  );
};

export default Header;
