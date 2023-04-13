import { Navigation } from "@/app/components/Navigation/Navigation";
import styles from "./DiscoverSacanta.module.css";

export default function DiscoverSacanta() {
  return (
    <>
      <Navigation />
      <br />
      <div className={styles.overflowContainer}>
        <h2 className={styles.h2Title}>Descubrí Sacanta</h2>
      </div>
      {/* PUNTOS TURISTICOS */}
      <div className={styles.overflowContainer}>
        <div className={styles.containerPoints}>
          <ul className={styles.turisticList}>
            <div className={styles.containerItemList}>
              <li className={styles.turisticPoint}>
                {/* <span className={styles.title}>Punto turistico N° 1</span> */}
                <br />
                <img
                  src="/banner-iglesia.jpg"
                  className={styles.imgTuristicPoint}
                />
                <br />
              </li>
              <span className={styles.spanDescription}>
                <h3>Descripción</h3>
                Como en la mayoría de las localidades argentinas, en Sacanta una
                Iglesia frente a la Plaza Principal es una de las edificaciones
                más sobresalientes. La Iglesia San Miguel Arcángel fue
                construida durante en la segunda década del siglo XX, por el
                Ingeniero Ignacio Rodríguez y su ayudante Don Pinot Ferrero. El
                templo es una réplica de una construcción de Piemonte, en
                Italia.
              </span>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.containerItemList}>
              <li className={styles.turisticPoint}>
                {/* <span className={styles.title}>Punto turistico N° 1</span> */}
                <br />
                <img
                  src="/museo-sacanta.jpeg"
                  className={styles.imgTuristicPoint}
                />
                <br />
              </li>
              <span className={styles.spanDescription}>
                <h3>Descripción</h3>
                Un lugar imperdible para sumergirse en el pasado que le dio
                origen a la localidad de Sacanta es su Museo Regional. Reuniendo
                los más de 100 años de historia que fue escribiendo esta
                comunidad del este cordobés, funciona en la conservada Ex -
                Estación del Ferrocarril. Tanto el edificio como la colección de
                piezas que cobija fueron declarados de Interés Municipal y
                componentes del Patrimonio Arquitectónico de la ciudad en 2011.
              </span>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}