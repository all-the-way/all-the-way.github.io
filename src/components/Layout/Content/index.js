import React from "react";
import * as styles from "./content.module.css";

const Content = ({ className, children, ...rest }) => (
  <div className={`${styles.content} ${className ? className : ""}`} {...rest}>
    {children}
  </div>
);

export default Content;
