import React from "react";
import styles from "./textarea.module.scss";

const Textarea = ({ label, name, value, onChange }) => (
  <>
    <textarea
      className={styles.input}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    ></textarea>{" "}
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
  </>
);

export default Textarea;
