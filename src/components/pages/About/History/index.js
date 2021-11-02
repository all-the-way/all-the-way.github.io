import React from "react";
import styles from "./history.module.scss";
import image1 from "./1.jpeg";
import image2 from "./2.jpeg";
import image3 from "./3.jpeg";
import image4 from "./4.jpeg";
import image5 from "./5.jpeg";
import Header from "../Header";
import gym from "./gym.jpg";

const History = () => {
  return (
    <>
      <Header
        heading={<h1 className="highlight">Vår historia</h1>}
        image={gym}
      ></Header>
      <section className={styles.section}>
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-white mt-5 mb-5">
            Vi är Malmös mest personliga träningsklubb - genom våra hälsoplaner
            och mentorskapsprogram hjälper vi dig att skapa hållbara och
            långsiktiga vanor för att du ska bli starkare, smärtfri, nå din
            målvikt och må bättre.
          </h2>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.image}>
          <div
            className={styles.innerImage}
            style={{
              backgroundImage: `url(${image1})`,
            }}
          ></div>
        </div>
        <div className={styles.content} style={{ backgroundColor: "#00638a" }}>
          <div className={styles.inner}>
            <h2>En sen vinterkväll 2019</h2>
            <p>
              En sen vinterkväll 2019 kom två killar fram till att livet är för
              kort för dålig träning! Alla vet hur man köper ett träningskort
              men få vet hur man använder det.
            </p>
            <p>
              Tänk om vi kunde lära folk att använda sitt träningskort på ett
              bättre sätt och göra träningen mer hållbar?
            </p>
            <p>Vad händer om vi engagerar oss?</p>
          </div>
        </div>
      </div>

      <div className={`${styles.container} ${styles.reverse}`}>
        <div className={styles.content} style={{ backgroundColor: "#004763" }}>
          <div className={styles.inner}>
            <h2>Problemet som skulle lösas</h2>
            <p>
              Killarna visste att problemet som måste lösas är att få medlemmar
              att hitta en anpassad och hållbar träning.
            </p>
            <p>
              Idag avbryter 50% sitt medlemskap för att de antingen inte kommer
              igång eller för att de inte når sitt önskade träningsresultat, och
              av de som har gymkort är enbart 40% aktiva.
            </p>
            <p>
              Dagens produkt är generell och det är en lokal som erbjuds att
              träna i, inte att hjälpa personen som tränar.
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <div
            className={styles.innerImage}
            style={{ backgroundImage: `url(${image4})` }}
          ></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.image}>
          <div
            className={styles.innerImage}
            style={{ backgroundImage: `url(${image3})` }}
          ></div>
        </div>
        <div className={styles.content} style={{ backgroundColor: "#00638a" }}>
          <div className={styles.inner}>
            <h2>Efter förutsättningar och behov</h2>
            <p>
              Genom en personlig hälsoplan så hjälper vi dig att få en anpassad
              start. Vi hjälper dig att starta på en nivå som är realistisk och
              anpassad för ditt vardagsliv och dina egna förutsättningar.
            </p>
            <p>Vi är inte bara en träningsklubb, vi är din gemenskap.</p>
            <p>
              All The Way har gått hela vägen för att bemöta dina vardagsbehov
              så att det inte ska finnas några ursäkter.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.container} ${styles.reverse}`}>
        <div className={styles.content} style={{ backgroundColor: "#004763" }}>
          <div className={styles.inner}>
            <h2>Hälsa - mer än bara träning</h2>
            <p>
              Gymmet och servicen är byggt för att du ska lyckas med din träning
              och få dina träningsresultat. Vi kan inte bara tänka träning om
              livskvalitén ska bli bättre. Loungen är inbjudande för samtal och
              gemenskap med valfri kaffesort.
            </p>
            <p>
              Sätt dig i 20 minuter i våra massagestolar för att släppa
              omvärlden och få lite avslappning. Sätt dig vid vårt arbetsbord
              och få gjort det sista arbetet och ändå ha tid över till träning.
              Ta med dig ditt barn och träna i vårt förälderrum som är anpassat
              för dig som måste ha med dig barnen.
            </p>
            <p>Allt för att du ska kunna möjliggöra din träning!</p>
          </div>
        </div>
        <div className={styles.image}>
          <div
            className={styles.innerImage}
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default History;
