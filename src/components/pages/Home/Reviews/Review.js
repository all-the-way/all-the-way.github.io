import React from "react";
import { IconStar } from "../../../common/SvgIcon";
import * as styles from "./reviews.module.css";

const Review = ({ image, name, stars, children }) => {
  return (
    <div className={styles.review}>
      <div className={styles.avatar}>
        {image ? (
          <img src={image} alt={`Bild på ${name}`}></img>
        ) : (
          <div className={styles.placeholder}>{name.charAt(0)}</div>
        )}
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <div className={styles.stars}>{renderStars(stars)}</div>
        {children}
      </div>
    </div>
  );
};

const renderStars = (numberOfStars) => {
  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<IconStar className={styles.star} key={i} />);
  }

  return stars;
};

export default Review;
