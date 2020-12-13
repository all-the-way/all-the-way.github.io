import React from "react";
import Scroll from "../Scroll";

const Packages = () => {
  return (
    <section id="utbud" className="packages-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <h3 className="small">Platser är begränsade</h3>
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
                    Med stora utrymmen, välutrustad maskinpark och varierande
                    redskap i toppkvalité med senaste teknologin ser vi till att
                    möta dina förväntningar och behov. Gymmet är utrustat för
                    att du ska kunna känna dig trygg men även utveckla dig själv
                    över tid.
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
                    Att du ska lyckas med din målsättning är något av det
                    viktigaste för oss. Därför erbjuder vi dig personlig träning
                    så du inte behöver gissa dig fram. Våra PTs utbildas
                    regelbundet för att kunna förse dig med den senaste
                    kunskapen inom hälsa, träning och kost. 
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
                    Träna i en grupp med likasinnade personer med samma
                    målsättningar. Gruppen styrs av en PT och ni kommer vara
                    minst tre men max sex personer. Detta gör att PTn som
                    hjälper dig fortfarande kan göra coachingen individanpassad
                    efter dina behov och förutsättningar.
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

export default Packages;
