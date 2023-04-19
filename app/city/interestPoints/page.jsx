import styles from "./InterestPointsPage.module.css";
import CardInterestPoints from "@/app/components/CardInterestPoints/CardInterestPoints";

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
        <div className={styles.containerList}>
          <div className={styles.divRestaurants}>
            <h2 className={styles.h2Title}>Bares y comedores</h2>
            <CardInterestPoints
              titleCard="Comedor La Estación"
              srcImg="/comedor-la-estacion.jpg"
              textButton="Como ir"
              link="https://www.google.com/"
            />
            <CardInterestPoints
              titleCard="Comedor Barrica"
              srcImg="/comedor-barrica.jpg"
              textButton="Como ir"
              link="https://www.google.com/"
            />
            <CardInterestPoints
              titleCard="Bar Comedor Matoza"
              srcImg="/bar-comedor-matoza.jpg"
              textButton="Como ir"
              link="https://www.google.com/"
            />
            <CardInterestPoints
              titleCard="Comedor Facultad"
              srcImg="/facultad-sacanta.jpg"
              textButton="Como ir"
              link="https://www.google.com/"
            />
          </div>
          <br />
          <div className={styles.divActividades}>
            <h2 className={styles.h2Title}>Puntos turísticos</h2>
            <CardInterestPoints
              titleCard="Museo de Sacanta"
              srcImg="/museo.png"
              textButton="Como ir"
              link="https://www.google.com/"
            />
            <CardInterestPoints
              titleCard="Iglesia San Miguel Arcángel"
              srcImg="/iglesia-sacanta.jpg"
              textButton="Como ir"
              link="https://www.google.com/"
            />
            <CardInterestPoints
              titleCard="Plaza del pueblo"
              srcImg="/plaza.jpg"
              textButton="Como ir"
              link="https://www.google.com/"
            />
            <CardInterestPoints
              titleCard="Festival del locro"
              srcImg="/actividad-locro.jpg"
              textButton="Como ir"
              link="https://www.google.com/"
            />
          </div>
        </div>
      </div>
    </>
  );
}
