import React from "react";
import styles from "./testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./testimonial.js";
import placeholder from "./images/portrait_placeholder.png";
import mariaLeonora from "./images/maria_leonora.jpeg";
import katrin from "./images/katrin.jpg";
import andreas from "./images/andreas.jpg";
import matilda from "./images/matilda.jpg";
import sara from "./images/sara.jpg";
import elina from "./images/elina.jpg";

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

      <div className={"container wide"}>
        <Slider {...settings}>
          <Testimonial
            name="Maria"
            text="Jag har blivit starkare psykiskt och fysiskt efter 4,5 år med PT. Tack vare kunskap, coachning och uppmuntran gav jag inte upp och nu är styrketräning roligt."
            image={mariaLeonora}
          ></Testimonial>
          <Testimonial
            name="Katrin"
            text="Jag har lärt mig så mycket om träning. Har aldrig känt mig så stark som jag är idag. Jag har känt mig sedd och har fått den dära extra pushen för att orka mer. Fick även hjälp med hur man håller en god kosthållning, vilket syns på min kropp idag."
            image={katrin}
          ></Testimonial>
          <Testimonial
            name="Matilda"
            text="Jag ville ta tag i mitt liv, känna mig fin, få ett bättre självförtroende och gå ned 10 kg. Planen jag fick var anpassad efter mig och passade verkligen.
             Jag kände ingen stress och idag har jag lärt mig hur jag ska gå tillväga för att leva på ett hållbart sätt. Jag har haft världens bästa PT."
            image={matilda}
          ></Testimonial>
          <Testimonial
            name="Sara"
            text="Jag hade några extra kilon jag ville bli av med. Jag fick ett enkelt upplägg att följa. Trodde det skulle vara mycket jobbigare än vad det faktiskt var. Jag har tidigare trott att kolhydraterna var min värsta fiende, vilket inte stämde. Jag har aldrig ätit såhär mycket och ändå går jag ned i vikt, och så klarade jag min första pull-up. "
            image={sara}
          ></Testimonial>
          <Testimonial
            name="Elina"
            text="Jag har aldrig haft så stora framsteg i min träning som nu. Fått hjälp med mina rygg och nacksmärtor. Fått noggrann träningsplan som var anpassad efter mina smärtor men trots det så har jag gjort nya rekord hela tiden. Jag har insett att nivåer jag bara har drömt om är räckbara!"
            image={elina}
          ></Testimonial>
          <Testimonial
            name="Andreas"
            text="Jag har alltid varit smal och har känt att jag har svårt att gå upp i vikt. Jag har lärt mig hur enkelt det är med hjälp av träning och mycket mat att nå de mål man har. Har även fått lära mig hur jag ska äta för att nå mina mål utan att följa en tråkig mall var dag. "
            image={andreas}
          ></Testimonial>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
