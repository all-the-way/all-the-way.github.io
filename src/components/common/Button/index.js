import { Link } from "gatsby";
import React from "react";
import styles from "./button.module.scss";

const Button = ({
  text,
  onClick,
  name,
  id,
  light,
  className,
  submit,
  link,
  disabled,
}) => {
  if (link) {
    return (
      <Link
        to={link}
        className={`${styles.button} ${className ? className : ""}`}
      >
        {text}
      </Link>
    );
  }

  if (submit) {
    return (
      <input
        type="submit"
        value={text}
        name={name}
        disabled={disabled}
        id={id}
        className={`${styles.button} ${light ? styles.light : ""} ${
          className ? className : ""
        }`}
        onClick={onClick}
      />
    );
  }
  return (
    <button
      className={`${styles.button} ${light ? styles.light : ""} ${
        className ? className : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
