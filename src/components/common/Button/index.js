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
        id={id}
        className={`${styles.button} ${light ? styles.light : ""}`}
        onClick={onClick}
      />
    );
  }
  return (
    <button
      className={`${styles.button} ${light ? styles.light : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
