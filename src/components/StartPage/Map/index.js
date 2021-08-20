import React from "react";
import MapContainer from "../../common/MapContainer";
import styles from "./map.module.scss";

const Map = () => (
  <section className={styles.container}>
    <div className={styles.mapContainer}>
      <MapContainer></MapContainer>
    </div>
    <div className={styles.address}>
      <p>Djäknegatan 33</p>
      <p>211 35 Malmö</p>
    </div>
  </section>
);

export default Map;
