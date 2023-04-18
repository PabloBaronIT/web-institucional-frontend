import { Navigation } from "@/app/components/Navigation/Navigation";
import CardAutority from "@/app/components/CardAutority/CardAutority";
import styles from "./WeAsGovernmentPage.module.css";

export default function WeAsGovernmentPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className={styles.overflowContainer}>
        <h2 className={styles.h2Title}>¿Quiénes somos?</h2>
        {/* CARDS Y ORGANIGRAMA */}
        <div className={styles.organigrama}>
          <div className={styles.intendente}>
            <CardAutority
              position="Intendente"
              srcImg="/img-autoridad.png"
              nameAutority="Daniel Gustavo Garnero"
              pathContact="intendente@sacanta.gob.ar"
            />
          </div>
          <div className={styles.arrow}></div>
          <div className={styles.secretario}>
            <CardAutority
              position="Secretario de Gobierno"
              srcImg="/img-autoridad.png"
              nameAutority="José Luis Mecchia"
              pathContact="secretariodegobierno@sacanta.gob.ar"
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 className={styles.h2Title}>Honorable Consejo Deliberante</h2>
          <div className={styles.hcd}>
            <CardAutority
              position="Presidente"
              srcImg="/img-autoridad.png"
              nameAutority="Pisani Martín Adrían"
              pathContact="ejemplo@sacanta.gob.ar"
            />
            <CardAutority
              position="Vicepresidente 1°"
              srcImg="/img-autoridad.png"
              nameAutority="Contrini Jésica Daniela"
              pathContact="ejemplo@sacanta.gob.ar"
            />
            <CardAutority
              position="Vicepresidente 2°"
              srcImg="/img-autoridad.png"
              nameAutority="Chiaraviglio Marta Noemí María"
              pathContact="ejemplo@sacanta.gob.ar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
