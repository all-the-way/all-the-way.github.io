import React from "react";
import MapContainer from "../../common/MapContainer";
import styles from "./map.module.scss";

const Map = () => (
  <section className={styles.container}>
    <div className={styles.mapContainer}>
      <MapContainer></MapContainer>
    </div>
    <div className={styles.address}>
      <div>
        <p>Djäknegatan 33</p>
        <p>211 35 Malmö</p>
      </div>
      <div className={styles.openingHours}>
        <h4 className="text-white">Öppettider</h4>
        Öppet varje dag kl 05:00-23:00
        <h4 className="text-white">Bemannade tider:</h4>
        <p>Måndag-torsdag: 08:00-20:00</p>
        <p>Fredag: 08:00-18:00</p>
        <p>Lördag-söndag: 09:00-17:00</p>
      </div>
    </div>
  </section>
);

export default Map;
