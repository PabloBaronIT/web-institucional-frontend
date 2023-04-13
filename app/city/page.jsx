import { Navigation } from "../components/Navigation/Navigation";
import styles from "./CityPage.module.css";

export default function CityPage() {
  return (
    <>
      <Navigation />
      <br />
      <div className={styles.overflowContainer}>
        <div className={styles.divContainerHead}>
          <h2 className={styles.h2}>Nuestra ciudad: Sacanta</h2>
          <h3 className={styles.h3}>
            Bienvenido a la ciudad de Sacanta. Nuestro hogar
          </h3>
          <div className={styles.imgCollageContainer}>
            <img src="/collage-sacanta.png" className={styles.collageSacanta} />
          </div>
        </div>
      </div>
    </>
  );
}
