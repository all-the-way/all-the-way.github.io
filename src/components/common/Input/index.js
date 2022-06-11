import React from "react"
import * as styles from "./input.module.css"

const Input = ({ type, label, name, value, onChange }) => {
  if (type === "textarea") {
    return (
      <>
        <textarea
          className={styles.input}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      </>
    )
  }
  return (
    <>
      <input
        type={type}
        className={styles.input}
        id={name}
        name={name}
        value={value}
        onChange={e => onChange(e)}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </>
  )
}

export default Input
