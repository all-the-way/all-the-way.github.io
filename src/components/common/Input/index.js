import React from "react";
import styles from "./input.module.scss";

const Input = ({ type, label, name, value, onChange }) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className={styles.input}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};

export default Input;
