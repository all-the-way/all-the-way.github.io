import { Link } from "gatsby"
import React from "react"
import * as styles from "./button.module.css"

const Button = ({
  onClick,
  name,
  id,
  light,
  className,
  submit,
  link,
  external,
  disabled,
  children,
  ...rest
}) => {
  if (link && !external) {
    return (
      <Link
        to={link}
        className={`${styles.button}  ${light ? styles.light : ""} ${
          className ? className : ""
        }`}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  if (link && external) {
    return (
      <a
        href={link}
        className={`${styles.button} ${light ? styles.light : ""} ${
          className ? className : ""
        }`}
        {...rest}
      >
        {children}
      </a>
    )
  }

  if (submit) {
    return (
      <input
        type="submit"
        value={children}
        name={name}
        disabled={disabled}
        id={id}
        className={`${styles.button} ${light ? styles.light : ""} ${
          className ? className : ""
        }`}
        onClick={onClick}
        {...rest}
      />
    )
  }
  return (
    <button
      className={`${styles.button} ${light ? styles.light : ""} ${
        className ? className : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
