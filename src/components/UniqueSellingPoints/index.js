import React from "react";
import Usp from "./usp";
import styles from "./usp.module.scss";
import fellowship from "./fellowship.svg";
import healthplan from "./healthplan.svg";
import mentorship from "./mentorship.svg";
import Fade from "react-reveal/Fade";

const UniqueSellingPoints = () => (
  <div className={styles.container}>
    <div className="container">
      <Fade bottom>
        <p className="subheading text-center">Ryggraden i vår värdegrund</p>
      </Fade>
      <Fade bottom delay={500}>
        <h2 className="text-center">
          Välutformat koncept för att du ska lyckas
        </h2>
      </Fade>

      <div className={styles.usps}>
        <div class="row">
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
                heading="Tillgänglighet"
                icon={mentorship}
                text="Du har alltid tillgång till gymmet mellan 05-23 alla dagar på året."
              ></Usp>
            </Fade>
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-center">
            <Fade bottom delay={2000}>
              <Usp
                heading="Mentorskap"
                icon={mentorship}
                text="För att du ska få anpassad hjälp följer vi upp dig fem gånger under årets gång"
              ></Usp>
            </Fade>
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-center">
            <Fade bottom delay={2500}>
              <Usp
                heading="Bemanning"
                icon={fellowship}
                text="Vi bemannar 12h/dag för att du ska få den support du behöver"
              ></Usp>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UniqueSellingPoints;
