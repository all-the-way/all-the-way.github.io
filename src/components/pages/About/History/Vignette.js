import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./history.module.scss";

const Vignette = ({ heading, children, image, inverted }) => {
  if (inverted) {
    return (
      <div className={`row ${styles.vignette}`}>
        <Fade left>
          <div className="col-lg-6">
            <img className={styles.image} src={image}></img>
          </div>
        </Fade>

        <Fade right>
          <div className="col-lg-6">
            <h2>{heading}</h2>
            {children}
          </div>
        </Fade>
      </div>
    );
  }

  return (
    <div className={`row ${styles.vignette}`}>
      <Fade left>
        <div className="col-lg-6">
          <h2>{heading}</h2>
          {children}
        </div>
      </Fade>

      <Fade right>
        <div className="col-lg-6">
          <img className={styles.image} src={image}></img>
        </div>
      </Fade>
    </div>
  );
};

export default Vignette;
