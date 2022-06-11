import React, { useState } from "react";
import { IconAngel } from "../../common/SvgIcon";
import * as styles from "./faq.module.css";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)} className={styles.question}>
        <span>{question}</span>
        <span className={styles.icon}>
          <IconAngel className={`${open ? styles.open : styles.close}`} />
        </span>
      </button>

      <div className={`${styles.answer} ${open ? styles.open : ""}`}>
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
