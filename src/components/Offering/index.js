import React from "react";
import Button from "../common/Button";
import styles from "./offering.module.scss";

const Offering = ({ onClickMembership }) => {
  return (
    <section id="utbud" className={styles.packagesSection}>
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <p className="small">Platserna är begränsade</p>
            <h2 className="heading">Vi erbjuder dig</h2>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-building text-primary mb-2"></i>
                <h3 className="text-uppercase m-0">Gym</h3>
                <hr className="my-4" />
                <div className="small text-black">
                  <p>
                    Vi erbjuder en välutrustad maskinpark med den senaste
                    teknologin, varierade redskap i toppkvalité och generösa
                    utrymmen. Gymmet är utrustat för att du ska kunna känna dig
                    trygg och utveckla dig själv över tid. ATW – ett gym som
                    måste upplevas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-dumbbell text-primary mb-2"></i>
                <h3 className="text-uppercase m-0">PT</h3>
                <hr className="my-4" />
                <div className="small text-black">
                  <p>
                    För oss är det viktigt att du når din målsättning.
                    Tillsammans med en PT så får du individanpassad hjälp för
                    att göra träningen rolig och utmanade. Våra PTs utbildas
                    regelbundet för att kunna förse dig med den senaste
                    kunskapen inom hälsa, träning och kost för att du ska lyckas
                    med ditt hälsomål.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-users text-primary mb-2"></i>
                <h3 className="text-uppercase m-0">Team</h3>
                <hr className="my-4" />
                <div className="small text-black">
                  <p>
                    TEAM – Together everyone achieves more. Träna tillsammans
                    med fyra till sex deltagare i ett TEAM. Vi peppar varandra,
                    har roligt tillsammans och uppnår ett gemensamt träningsmål.
                    Allt under ledning utav en personlig tränare! Fråga oss för
                    mer information.
                  </p>
                </div>
              </div>
            </div>
          </div>
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

export default Offering;
