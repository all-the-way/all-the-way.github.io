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
        <Fade bottom delay={1000}>
          <Usp
            heading="Hälsoplan"
            text="Vi skapar en trygg och hjälpsam miljö genom en personlig hälsoplan och vårt team. Vi tar större ansvar för att hitta verktygen för dig!"
            icon={healthplan}
          ></Usp>
        </Fade>
        <Fade bottom delay={1500}>
          <Usp
            heading="Mentorskap"
            icon={mentorship}
            text="I ditt medlemskap ingår fem träffar med våra erfarna coacher. Vi hjälper dig hela vägen och ger dig bästa möjliga förutsättningar att lyckas."
          ></Usp>
        </Fade>
        <Fade bottom delay={2000}>
          <Usp
            heading="Gemenskap"
            icon={fellowship}
            text="Hos oss finns det plats för ett begränsat antal medlemmar för att vi ska kunna ge dig tiden du förtjänar. Hos oss får du alltid hjälp."
          ></Usp>
        </Fade>
      </div>
    </div>
  </div>
);

export default UniqueSellingPoints;
