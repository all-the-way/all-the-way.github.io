import React from "react";
import Fade from "react-reveal/Fade";
import Button from "../../../common/Button";
import styles from "./offering.module.scss";
import pt from "./pt.svg";
import team from "./team.svg";
import gym from "./gym.svg";

const Offering = ({ onClickMembership }) => {
  return (
    <section id="utbud" className={styles.offeringsSection}>
      <div className="container wide">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <p className={styles.sub}>För bästa möjliga resultat</p>
            <h2 className="heading">Erbjuder vi dig</h2>
          </div>
        </div>

        <div className="row" style={{ marginTop: 20 }}>
          <Fade bottom>
            <div className="col-md-4 mb-4 mb-md-0">
              <Card heading="Gym" icon={gym}>
                Vi erbjuder en välutrustad maskinpark med den senaste
                teknologin, varierade redskap i toppkvalité och generösa
                utrymmen. Gymmet är utrustat för att du ska kunna känna dig
                trygg och utveckla dig själv över tid. ATW – ett gym som måste
                upplevas.
              </Card>
            </div>
          </Fade>

          <Fade bottom delay={500}>
            <div className="col-md-4 mb-4 mb-md-0">
              <Card heading="PT" icon={pt}>
                För oss är det viktigt att du når din målsättning. Tillsammans
                med en PT så får du individanpassad hjälp för att göra träningen
                rolig och utmanade. Våra PTs utbildas regelbundet för att kunna
                förse dig med den senaste kunskapen inom hälsa, träning och kost
                för att du ska lyckas med ditt hälsomål.
              </Card>
            </div>
          </Fade>

          <Fade bottom delay={1000}>
            <div className="col-md-4 mb-4 mb-md-0">
              <Card heading="Team" icon={team}>
                TEAM – Together Everyone Achieves More. Träna tillsammans med
                fyra till sex deltagare i ett TEAM. Vi peppar varandra, har
                roligt tillsammans och uppnår ett gemensamt träningsmål. Allt
                under ledning utav en personlig tränare! Fråga oss för mer
                information.
              </Card>
            </div>
          </Fade>
        </div>
      </div>
      <div
        className="row d-flex justify-content-center no-gutters mb-4 mb-lg-5"
        style={{ marginTop: 60 }}
      >
        <Button onClick={onClickMembership} text="Upplev All The Way"></Button>
      </div>
    </section>
  );
};

const Card = ({ heading, icon, children }) => (
  <div className={`${styles.card}`}>
    <div className="card-body text-center">
      <img src={icon} className={styles.icon}></img>
      <h3 className="text-uppercase m-b2">{heading}</h3>
      <p>{children}</p>
    </div>
  </div>
);

export default Offering;
