import React from "react";
import styles from "./testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./testimonial.js";
import placeholder from "./portrait_placeholder.png";

const Testimonials = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className={styles.testimonials}>
      <div className="container mb-5">
        <h2 className="text-center">Vårt rykte</h2>
        <p className="subheading text-center">
          Så här tycker tidigare kunder till anställda på All The Way
        </p>
      </div>

      <div className={`container ${styles.container}`}>
        <Slider {...settings}>
          <Testimonial
            name="Anonym Anonym"
            text="Jag trodde nog aldrig att det skulle vara så pass lätt att gå
                ner i vikt! 15kg bort och jag har inte varit hungrig en enda
                gång!"
            image={placeholder}
          ></Testimonial>
          <Testimonial
            name="Anonym Anonym"
            text="För ett halvår sedan kunde jag inte springa 1km utan smärta.
                Idag springer jag över 5km utan problem."
            image={placeholder}
          ></Testimonial>
          <Testimonial
            name="Anonym Anonym"
            text="Jag har lärt mig ofantligt mycket om mig själv och hur min kropp
                fungerar! Att träna med PT är verkligen utbildande!"
            image={placeholder}
          ></Testimonial>
          <Testimonial
            name="Anonym Anonym"
            text="Jag gick ner ca 20kg! Från att ha haft ont i knä och blivit
                andfådd av att gå i trappor är jag nu som en helt annan person."
            image={placeholder}
          ></Testimonial>
          <Testimonial
            name="Anonym Anonym"
            text="Jag har alltid ogillat träning, nu älskar jag det!"
            image={placeholder}
          ></Testimonial>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
