import React from "react";
import * as styles from "./checkbox.module.css";

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
