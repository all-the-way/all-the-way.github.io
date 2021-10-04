import React from "react";
import styles from "./testimonials.module.scss";

const Testimonial = ({ text, name, image }) => (
  <div className={styles.card}>
    <div className={styles.cardContent}>
      <p>{text}</p>
    </div>
    <div className={styles.customer}>
      <div className={styles.image}>
        <img src={image} alt={`Bild på ${name}`}></img>
      </div>
      <p>{name}</p>
    </div>
  </div>
);

export default Testimonial;
