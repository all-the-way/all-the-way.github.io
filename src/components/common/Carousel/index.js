import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import Button from "../Button";
import ptImage from "./pt.jpeg";
import teamImage from "./team.jpeg";
import phpImage from "./php.jpg";
import personalFollowUpImage from "./personlig_uppfoljning.jpeg";

const Carousel = () => {
  const handleClick = () => {
    const element = document.getElementById("medlemskap");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Slider {...settings} style={{ marginTop: 100, marginBottom: 100 }}>
      <CarouselItem image={ptImage} heading="Personlig träning" position="top">
        <p>
          Vi på ATW är en unik träningsanläggning med ett nytt sätt att se på
          träning. Våra tränare är välutbildade med garanterad erfarenhet som
          ger dig en holistic och resultatfokuserad coaching för att bemöta dina
          behov och vara en del av din resa för att nå din unika målsättning. Vi
          förstår att du tränar för att leva, du lever inte för att träna.
        </p>
        <Button onClick={handleClick}>Skaffa PT</Button>
      </CarouselItem>
      <CarouselItem image={teamImage} heading="TEAM-grupper" position="bottom">
        <p>
          Vi tror att excellens och livskvalité uppnås genom kontinuerligt
          lärande och förbättring, en filosofi som ytterligare genomsyras av
          våra omfattande och effektiva TEAM.  Träna i en grupp av fem deltagare
          med samma målsättning som dig själv. Varje grupp styrs av en personlig
          tränare.
        </p>
      </CarouselItem>
      <CarouselItem
        image={phpImage}
        heading="Personlig hälsoplan"
        position="top"
      >
        <p>
          Varje medlem börjar med att göra en anpassad personlig hälsoplan där
          vi går igenom kompletterande hälsoinformation som din; bakgrund,
          målsättning, förutsättningar och skador för att anpassa din start
          efter dina förutsättningar och behov.
        </p>
      </CarouselItem>
      <CarouselItem
        image={personalFollowUpImage}
        heading="Personliga uppföljningar"
        position="bottom"
      >
        <p>
          Vi följer upp dig fem gånger om året. Livet är ett dynamiskt pussel
          och ändras med tiden, därför är det viktigt att vara flexibel i sin
          planering. Genom våra uppföljningar så anpassas din träning efter hur
          livet ser ut för att du ska lyckas.
        </p>
      </CarouselItem>
    </Slider>
  );
};

const settings = {
  centerMode: true,
  dots: true,
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
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        centerPadding: "0px",
      },
    },
  ],
};

export default Carousel;
