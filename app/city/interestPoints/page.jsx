import { Navigation } from "@/app/components/Navigation/Navigation";
import styles from "./InterestPointsPage.module.css";

export default function InterestPointsPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className={styles.overflowContainer}>
        <h2 className={styles.h2Title}>Mapa Actual</h2>
        <div className={styles.containerImg}>
          <img src="/puntos-interes.png" className={styles.imgInterestPoints} />
        </div>
        {/* PUNTOS DE INTERES */}
        <br />
        <br />
        <h2 className={styles.h2Title}>Puntos de interés 📌</h2>
        <div className={styles.containerList}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Plaza San Martín
              <br />
              <img src="/plaza-sacanta.png" className={styles.imgList} />
            </li>
            <li className={styles.listItem}>
              Rally Autos Antiguos
              <br />
              <img src="/sacanta-rally.jpg" className={styles.imgList} />
            </li>
            <li className={styles.listItem}>
              Barrica
              <br />
              <img src="/barrica-sacanta.jpg" className={styles.imgList} />
            </li>
            <li className={styles.listItem}>
              Vacunación COVID-19
              <br />
              <img src="/sacanta-covid.png" className={styles.imgList} />
            </li>
            <li className={styles.listItem}>
              Bomberos Voluntarios
              <br />
              <img src="/bomberos-sacanta.jpg" className={styles.imgList} />
            </li>
            <li className={styles.listItem}>
              Hotel Matosa
              <br />
              <img src="/sacanta-comedor.jpg" className={styles.imgList} />
            </li>
            <li className={styles.listItem}>
              La Lagunita
              <br />
              <img src="/lagunita-sacanta" className={styles.imgList} />
            </li>
            <li className={styles.listItem}>
              Estación Shell
              <br />
              <img src="/shell.jpg" className={styles.imgList} />
            </li>
            <li className={styles.listItem}>
              Club de Cazadores
              <br />
              <img src="/club-cazadores" className={styles.imgList} />
            </li>
            <li className={styles.listItem}>
              Sportivo Sacanta
              <br />
              <img src="/club-sacanta.png" className={styles.imgList} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
