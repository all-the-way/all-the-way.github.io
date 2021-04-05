import React from "react";
import styles from "./checkbox.module.scss";

const Checkbox = ({ name, onChange, children }) => (
  <React.Fragment>
    <label className={styles.container}>
      {children}
      <input type="checkbox" name={name} onChange={(e) => onChange(e)} />
      <span className={styles.checkmark}></span>
    </label>
  </React.Fragment>
);

export default Checkbox;
