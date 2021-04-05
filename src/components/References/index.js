import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./references.module.scss";
import "./carousel.scss";

const References = () => {
  return (
    <section className={`${styles.referencesSection} text-center`}>
      <div className="row">
        <div className="col-sm-12">
          <h2 style={{ fontSize: 16 }}>
            Referenser från tidigare kunder till anställda på All The Way
          </h2>
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            transitionTime={1000}
            interval={7000}
          >
            <p className="col-lg-8 mx-auto">
              Jag trodde nog aldrig att det skulle vara så pass lätt att gå ner
              i vikt! 15kg bort och jag har inte varit hungrig en enda gång!
            </p>

            <p className="col-lg-8 mx-auto">
              För ett halvår sedan kunde jag inte springa 1km utan smärta. Idag
              springer jag över 5km utan problem.
            </p>

            <p className="col-lg-8 mx-auto">
              Jag har lärt mig ofantligt mycket om mig själv och hur min kropp
              fungerar! Att träna med PT är verkligen utbildande!
            </p>

            <p className="col-lg-8 mx-auto">
              Jag gick ner ca 20kg! Från att ha haft ont i knä och blivit
              andfådd av att gå i trappor är jag nu som en helt annan person.
            </p>

            <p className="col-lg-8 mx-auto">
              Jag har alltid ogillat träning, nu älskar jag det!
            </p>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default References;
