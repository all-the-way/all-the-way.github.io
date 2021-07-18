import React from "react";
import Usp from "./usp";
import styles from "./usp.module.scss";
import limitation from "./limitation.svg";
import healthplan from "./healthplan.svg";
import mentorship from "./mentorship.svg";
import bemanning from "./bemanning.svg";
import Fade from "react-reveal/Fade";

const UniqueSellingPoints = () => (
  <div className={styles.container}>
    <div className="container wide">
      <Fade bottom>
        <p className="subheading text-center">Ryggraden i vår värdegrund</p>
      </Fade>
      <Fade bottom delay={500}>
        <h2 className="text-center">
          Välutformat koncept för att du ska lyckas
        </h2>
      </Fade>

      <div className="row mt-5">
        <div className="col-lg-3 col-md-6 d-flex justify-content-center">
          <Fade bottom delay={1000}>
            <Usp
              heading="Hälsoplan"
              text="Tillsammans sätter vi upp en plan efter dina behov och förutsättningar"
              icon={healthplan}
            ></Usp>
          </Fade>
        </div>
        <div className="col-lg-3 col-md-6 d-flex justify-content-center">
          <Fade bottom delay={1500}>
            <Usp
              heading="Mentorskap"
              icon={mentorship}
              text="För att du ska få anpassad hjälp följer vi upp dig fem gånger under årets gång"
            ></Usp>
          </Fade>
        </div>
        <div className="col-lg-3 col-md-6 d-flex justify-content-center">
          <Fade bottom delay={2000}>
            <Usp
              heading="Medlemstak"
              icon={limitation}
              text="För att vi ska kunna hjälpa alla, så begränsar vi antal medlemmar vi tar in"
            ></Usp>
          </Fade>
        </div>
        <div className="col-lg-3 col-md-6 d-flex justify-content-center">
          <Fade bottom delay={2500}>
            <Usp
              heading="Bemanning"
              icon={bemanning}
              text="Vi bemannar 12h timmar per dag för att du ska få den support du behöver"
            ></Usp>
          </Fade>
        </div>
      </div>
    </div>
  </div>
);

export default UniqueSellingPoints;
