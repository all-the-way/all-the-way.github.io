import React from "react";
import video from "./hero.mp4";
import startImage from "./start.jpeg";
import aboutImage from "./om.jpeg";
import * as styles from "./home.module.css";
import Panel from "../../common/Panel";
import Content from "../../Layout/Content";
import Button from "../../common/Button";
import Carousel from "../../common/Carousel";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <header className={styles.wrapper} id="start">
        <div className={styles.videoContainer}>
          <video playsInline autoPlay muted loop className={styles.video}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className={styles.content}>
          <h1>
            Vi satsar på <span className="highlight">vägledning</span>,
            <span className="highlight"> tillgänglighet</span> och{" "}
            <span className="highlight">kvalité</span> för att du ska känna dig
            trygg
          </h1>
        </div>
      </header>
      <Content>
        <Panel
          firstContent={
            <div className={styles.panelContent}>
              <h2>All The Way Gym</h2>
              <p>
                All The Way Gym är först med framtidens träningsklubb i Sverige
                med exklusiv tillgång endast för medlemmar. Vi är stolta av att
                vara den första träningsanläggningen som satsar fullt ut på
                vägledning, tillgänglighet och kvalité tillsammans. Baserat
                centralt i Malmö på Djäknegatan så är vi lättillgängliga för
                alla via buss, bil, cykel eller promenad.
              </p>
            </div>
          }
          secondContent={
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${startImage}` }}
            ></div>
          }
        ></Panel>

        <Carousel></Carousel>
        <Reviews></Reviews>

        <Panel
          firstContent={
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${aboutImage}` }}
            ></div>
          }
          secondContent={
            <div className={styles.panelContent}>
              <h2>Om oss</h2>
              <p>
                All the way är mer än en träningsanläggning där svett,
                träningvärk och resultat sker på 917kvm träningsyta. I en
                inbjudande miljö så tränar vi i en familjär lokal med bra
                utrustad gymyta med gott om utrymme där du aldrig behöver tänka
                på trängsel eller när dina redskap kommer vara tillgängliga.{" "}
              </p>
              <p>
                Du har tillgång till personal som är utbildade och har gott om
                erfarenhet 280h i månaden för att assistera dig när fantasin
                tryter eller om du har glömt hur du ska utföra en övning. Hos
                oss behöver du inte vara tränad innan du startar eller veta
                exakt vad du ska göra. Ta beslutet att investera i dig själv så
                hjälper vi dig med resten.
              </p>
              <Button light style={{ alignSelf: "flex-start" }}>
                Ansök om medlemskap
              </Button>
            </div>
          }
        ></Panel>
      </Content>
    </>
  );
};

export default Home;
