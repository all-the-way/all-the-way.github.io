import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styles from "./references.module.scss";
import "./carousel.scss";

const References = () => {
  const CarouselUI = ({ children }) => (
    <div className={styles.container}>{children}</div>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <section className={`${styles.referencesSection} text-center`}>
      <Carousel defaultWait={7000} maxTurns={1000}>
        <Slide left>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p>
                Jag trodde nog aldrig att det skulle vara så pass lätt att gå
                ner i vikt! 15kg bort och jag har inte varit hungrig en enda
                gång!
              </p>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p>
                För ett halvår sedan kunde jag inte springa 1km utan smärta.
                Idag springer jag över 5km utan problem.
              </p>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p>
                Jag har lärt mig ofantligt mycket om mig själv och hur min kropp
                fungerar! Att träna med PT är verkligen utbildande!
              </p>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p>
                Jag gick ner ca 20kg! Från att ha haft ont i knä och blivit
                andfådd av att gå i trappor är jag nu som en helt annan person.
              </p>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p>Jag har alltid ogillat träning, nu älskar jag det!</p>
            </div>
          </div>
        </Slide>
      </Carousel>
      <div className={styles.info}>
        <h2>Vårt rykte</h2>
        <p>Så här tycker tidigare kunder till anställda på All The Way</p>
      </div>
    </section>
  );
};

export default References;
