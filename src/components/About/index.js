import React from "react";
import Scroll from "../Scroll";
import aboutImage from "../../assets/images/about.png";

const About = () => {
  return (
    <section id="upplev-oss" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-6 col-lg-4">
            <img
              className="img-fluid mb-3 mb-lg-0"
              src={aboutImage}
              alt="Bild på Oscar och Zakarias"
            />
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="featured-text text-center text-lg-left">
              <h2 className="heading">
                Exklusivt gym i Helsingborg med unik service och miljö
              </h2>
              <p className="text-black-50 mb-3">
                Vi vill att du skall lyckas med din träning! Därför bjuder vi in
                dig på en personlig hälsoplan där ni, tillsammans med en av våra
                rådgivare, går igenom var du befinner dig just nu i din
                träningsresa. Utöver detta får du även en personlig rundtur av
                gymmet och får möjlighet att ställa frågor om oss på ATW i
                Helsingborg. Allt för att du skall känna dig så trygg som
                möjligt inför starten, eller fortsättningen, på din
                träningsresa!
              </p>
            </div>
          </div>
        </div>

        <div className="row no-gutters d-flex justify-content-end mb-4 mb-lg-5">
          <Scroll type="id" element="intresseanmalan">
            <a href="#intresseanmalan" className="btn btn-primary">
              Boka visning
            </a>
          </Scroll>
        </div>
      </div>
    </section>
  );
};

export default About;
