import Card from "@/app/components/Card/Card";
import { Navigation } from "@/app/components/Navigation/Navigation";
import styles from "./GovernmentNewsPage.module.css";

export default function GovernmentNewsPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className={styles.overflowContainer}>
        <h2 className={styles.h2Title}>LO ÚLTIMO EN ACCIÓN</h2>
        <div className={styles.cards}>
          <Card
            titleCard="Boleto Adulto Mayor"
            srcImg="/banner-card.jpg"
            textButton="Ver programa"
            link="https://www.google.com/"
            description="Los adultos pudieron realizar en Córdoba el BAM"
          />
          <Card
            titleCard="Nueva red de agua potable"
            srcImg="/banner-card2.png"
            textButton="Ver programa"
            link="https://www.google.com/"
            description="Se implementó la nueva red de agua potable"
          />
          <Card
            titleCard="COE Sacanta"
            srcImg="/banner-coe.jpg"
            textButton="Ver programa"
            link="https://www.google.com/"
            description="Novedades del COE Sacanta"
          />
          <Card
            titleCard="Bienvenidos concejales"
            srcImg="/banner-gobernante.jpg"
            textButton="Ver programa"
            link="https://www.google.com/"
            description="Concejales provinciales visitaron nuestro pueblo"
          />
          <Card
            titleCard="Nuestro intendente en la radio"
            srcImg="/banner-intendente.jpg"
            textButton="Ver programa"
            link="https://www.google.com/"
            description="Daniel habló en la radio sobre futuros proyectos"
          />
        </div>
      </div>
    </>
  );
}
