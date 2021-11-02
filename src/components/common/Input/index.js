import React from "react";
import styles from "./input.module.scss";

const Input = ({ type, label, name, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        className={styles.input}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </>
  );
};

export default Input;
