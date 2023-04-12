import { Navigation } from "@/app/components/Navigation";
import styles from "./WeAsGovernmentPage.module.css";

export default function WeAsGovernmentPage() {
  return (
    <>
      <Navigation />
      <br />
      <h2 className={styles.h2Title}>¿Quiénes somos?</h2>
      <div className={styles.organigrama}>
        <div className={styles.intendente}>
          <h2>Intendente</h2>
          <img src="/img-autoridad.png" className={styles.imgAutority} />
        </div>
        <div className={styles.arrow}></div>
        <div className={styles.secretario}>
          <h2>Secretario de Gobierno</h2>
          <img src="/img-autoridad.png" className={styles.imgAutority} />
        </div>
      </div>
    </>
  );
}
