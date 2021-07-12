import React from "react";
import styles from "./testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "130px",
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "50px",
        },
      },
    ],
  };
  return (
    <section className={styles.testimonials}>
      <div className="container mb-5">
        <h2 className="text-center text-white">Vårt rykte</h2>
        <p className="subheading text-center text-white">
          Så här tycker tidigare kunder till anställda på All The Way
        </p>
      </div>

      <div className={`container ${styles.container}`}>
        <Slider {...settings}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <p>
                Jag trodde nog aldrig att det skulle vara så pass lätt att gå
                ner i vikt! 15kg bort och jag har inte varit hungrig en enda
                gång!
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <p>
                För ett halvår sedan kunde jag inte springa 1km utan smärta.
                Idag springer jag över 5km utan problem.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <p>
                Jag har lärt mig ofantligt mycket om mig själv och hur min kropp
                fungerar! Att träna med PT är verkligen utbildande!
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <p>
                Jag gick ner ca 20kg! Från att ha haft ont i knä och blivit
                andfådd av att gå i trappor är jag nu som en helt annan person.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <p>Jag har alltid ogillat träning, nu älskar jag det!</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
