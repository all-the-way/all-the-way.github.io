import React from "react";
import Scroll from "../Scroll";

const Offering = () => {
  return (
    <section id="utbud" className="packages-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <h3 className="small">Platserna är begränsade</h3>
            <h2 className="heading">Vi erbjuder dig</h2>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-building text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Gym</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p>
                    Vi erbjuder en välutrustad maskinpark med den senaste
                    teknologin, varierande redskap i toppkvalité och generösa
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
                <h4 className="text-uppercase m-0">PT</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p>
                    Som medlem på ATW i Helsingborg erbjuder vi dig Personlig
                    Träning av högsta kvalité. Målet. Våra PTs utbildas
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
                <h4 className="text-uppercase m-0">Team</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p>
                    TEAM – Together everyone achieves more. Träna tillsammans
                    med 4-6 deltagare i ett TEAM. Vi peppar varandra, har roligt
                    tillsammans och uppnår ett gemensamt träningsmål. Fråga oss
                    för mer information.
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
        <Scroll type="id" element="intresseanmalan">
          <a href="#intresseanmalan" className="btn btn-primary">
            Upplev All The Way
          </a>
        </Scroll>
      </div>
    </section>
  );
};

export default Offering;
