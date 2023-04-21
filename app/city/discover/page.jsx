"use client";
import { useState } from "react";
import styles from "./DiscoverSacanta.module.css";

export default function DiscoverSacanta() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className={styles.overflowContainer}>
        <h2 className={styles.h2Title}>DESCUBRÍ SACANTA</h2>
      </div>
      <br />
      {/* PUNTOS TURISTICOS */}
      <div className={styles.overflowContainer}>
        <div className={styles.containerPoints}>
          <ul className={styles.turisticList}>
            <li
              className={styles.turisticPoint}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.imageWrapper}>
                <img
                  src="/banner-museo-descubri-sacanta.jpg"
                  className={styles.imgTuristicPoint}
                />
                <h3 className={styles.imageTitle}>MUSEO REGIONAL SACANTA</h3>
                {activeIndex === 0 && (
                  <p className={styles.pImgDescription}>
                    Reuniendo los <strong>más de 100 años de historia</strong>{" "}
                    que fue escribiendo esta comunidad del este cordobés,
                    funciona en la conservada{" "}
                    <strong>Ex - Estación del Ferrocarril</strong>
                  </p>
                )}
              </div>
            </li>
            <br />
            <br />
            <li
              className={styles.turisticPoint}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.imageWrapper}>
                <img
                  src="/banner-iglesia-descubri-sacanta.jpg"
                  className={styles.imgTuristicPoint}
                />
                <h3 className={styles.imageTitle}>
                  IGLESIA SAN MIGUEL ARCÁNGEL
                </h3>
                {activeIndex === 1 && (
                  <p className={styles.pImgDescription}>
                    Iglesia{" "}
                    <strong>
                      construida durante en la segunda década del siglo XX
                    </strong>
                    , por el Ingeniero Ignacio Rodríguez y su ayudante Don Pinot
                    Ferrero. El templo es una{" "}
                    <strong>
                      réplica de una construcción de Piemonte, en Italia.
                    </strong>
                  </p>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
