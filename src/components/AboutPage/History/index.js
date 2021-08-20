import React from "react";
import styles from "./history.module.scss";
import placeholder from "./placeholder.jpeg";
import Vignette from "./Vignette";

const History = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container d-flex flex-column align-items-center">
          <h1 className="highlight text-center mb-4">Vår historia</h1>
          <h2 className="text-center text-white">
            Vi är inte bara Malmös mest personliga träningsklubb - genom våra
            hälsoplaner och mentorskapsprogram hjälper vi dig att skapa hållbara
            och långsiktiga vanor för att du ska bli starkare, smärtfri, nå din
            målvikt och må bättre.
          </h2>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gray}`}>
        <div className="container">
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
        </div>
      </section>
    </>
  );
};

export default History;
