import React from "react";
import styles from "./textarea.module.scss";

const Textarea = ({ label, name, value, onChange }) => (
  <>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <textarea
      className={styles.input}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    ></textarea>
  </>
);

export default Textarea;
