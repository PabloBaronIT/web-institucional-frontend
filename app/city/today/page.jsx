import { Navigation } from "@/app/components/Navigation/Navigation";
import styles from "./TodayPage.module.css";
import Card from "@/app/components/Card/Card";

export default function TodayPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className={styles.containerH2}>
        <h2 className={styles.h2}>LA LOCALIDAD HOY</h2>
      </div>
      <div className={styles.cardContainerOverflow}>
        <div className={styles.cardContainer}>
          <Card
            titleCard="Eventos para Mayo"
            srcImg="/sacanta-card1.jpg"
            textButton="Leer más"
            link="https://www.google.com/"
          />
          <Card
            titleCard="Festival de Cerveza Artesanal"
            srcImg="/sacanta-card2.jpg"
            textButton="Leer más"
            link="https://www.google.com/"
          />
          <Card
            titleCard="¡El campo de golf, renovado!"
            srcImg="/sacanta-card3.jpg"
            textButton="Leer más"
            link="https://www.google.com/"
          />
          <Card
            titleCard="7° Festival de Locro"
            srcImg="/banner-locro.jpg"
            textButton="Leer más"
            link="https://www.google.com/"
          />
          <Card
            titleCard="¡Asado y Folklore!"
            srcImg="/banner-festival-asado.jpg"
            textButton="Leer más"
            link="https://www.google.com/"
          />
          <Card
            titleCard="Novedades en nuestra plaza"
            srcImg="/sacanta-banner-plaza.jpg"
            textButton="Leer más"
            link="https://www.google.com/"
          />
        </div>
        <br />
      </div>
    </>
  );
}
