import Card from "@/app/components/Card/Card";
import { Navigation } from "@/app/components/Navigation/Navigation";
import styles from "./GovernmentNewsPage.module.css";

export default function GovernmentNewsPage() {
  return (
    <>
      <Navigation />
      <br />
      <div className={styles.overflowContainer}>
        <h2 className={styles.h2Title}>Lo último en acción</h2>
        <div className={styles.cards}>
          <Card
            titleCard="Boleto Adulto Mayor"
            srcImg="/banner-card3.jpg"
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
            srcImg="/banner-card.jpg"
            textButton="Ver programa"
            link="https://www.google.com/"
            description="Novedades del COE Sacanta"
          />
        </div>
      </div>
    </>
  );
}
