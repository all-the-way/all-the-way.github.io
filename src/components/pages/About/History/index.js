import React from "react";
import styles from "./history.module.scss";
import placeholder from "./placeholder.jpeg";
import Vignette from "./Vignette";
import image from "./träningsresa.jpg";

const History = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-white mt-5 mb-5">
            Vi är inte bara Malmös mest personliga träningsklubb - genom våra
            hälsoplaner och mentorskapsprogram hjälper vi dig att skapa hållbara
            och långsiktiga vanor för att du ska bli starkare, smärtfri, nå din
            målvikt och må bättre.
          </h2>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.image}>
          <div
            className={styles.innerImage}
            style={{ backgroundImage: `url(${placeholder})` }}
          ></div>
        </div>
        <div className={styles.content} style={{ backgroundColor: "#00638a" }}>
          <div className={styles.inner}>
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

      <div className={styles.container}>
        <div className={styles.content} style={{ backgroundColor: "#004763" }}>
          <div className={styles.inner}>
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
        <div className={styles.image}>
          <div
            className={styles.innerImage}
            style={{ backgroundImage: `url(${placeholder})` }}
          ></div>
        </div>
      </div>

      {/* <section className={`${styles.section} ${styles.gray}`}>
        <div>
          <Vignette heading="En sen vinterkväll 2019" image={placeholder}>
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
          </Vignette>

          <div className="row">
            <p className={`${styles.quote} ${styles.right}`}>
              ”Alla vet hur man köper ett träningskort, men få vet hur man
              använder det”
            </p>
          </div>
          <Vignette
            heading="Problemet som skulle lösas"
            image={placeholder}
            inverted
          >
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
          </Vignette>
          <div className="row">
            <p className={styles.quote}>
              ”50% avbryter sitt medlemskap för att de antingen inte kommer
              igång eller når sitt önskade träningsresultat”
            </p>
          </div>

          <div className={`row ${styles.journey}`}>
            <div className="col-xl-8">
              <img src={image}></img>
            </div>
            <div className="col-xl-4 d-flex flex-column justify-content-center">
              <p className={styles.heading}>ALL THE WAY - </p>
              <p>
                Första medlemskapet som är en{" "}
                <span className="highlight bold">investering,</span> inte en
                kostnad
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default History;
