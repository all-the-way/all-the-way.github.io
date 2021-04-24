import React from "react";
import Fade from "react-reveal/Fade";
import aboutImage from "./atw.jpg";
import styles from "./about.module.scss";
import Button from "../common/Button";

const About = ({ onClickMembership }) => {
  return (
    <section id="upplev-oss" className={styles.container}>
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5 d-flex flex-column justify-center">
          <div className="col-lg-8">
            <img
              className={`${styles.aboutImage} img-fluid mb-3 mb-lg-0`}
              src={aboutImage}
              alt="Bild på Oscar och Zakarias"
            />
          </div>
        </div>
        <div className="row align-items-center no-gutters mb-4 mb-lg-5 d-flex flex-column justify-center">
          <div className="col-lg-8">
            <div className={`${styles.featuredText} text-center text-lg-left`}>
              <Fade top>
                <h2 className="heading">
                  Träningsklubb i Malmö med unik service och miljö
                </h2>
              </Fade>
              <Fade top delay={650}>
                <p className="text-black mb-3">
                  Vi vill att du skall lyckas med din träning! Därför bjuder vi
                  in dig på en personlig hälsoplan där ni, tillsammans med en av
                  våra rådgivare, går igenom var du befinner dig just nu i din
                  träningsresa. Utöver detta får du även en personlig rundtur av
                  gymmet och får möjlighet att ställa frågor om oss på ATW i
                  Malmö. Allt för att du skall känna dig så trygg som möjligt
                  inför starten, eller fortsättningen, på din träningsresa!
                </p>
              </Fade>
            </div>
          </div>
        </div>

        <div className="row no-gutters d-flex justify-content-center mb-4 mb-lg-5">
          <Button onClick={onClickMembership} text="Boka visning"></Button>
        </div>
      </div>
    </section>
  );
};

export default About;
