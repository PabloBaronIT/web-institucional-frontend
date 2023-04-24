"use client";
import styles from "./CardsInterestPoints.module.css";

export default function CardInterestPoints({
  srcImg,
  textButton,
  link,
  titleCard,
  description,
}) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <img src={srcImg} className={styles.img} />
        <h2 className={styles.h2Card}>{titleCard}</h2>
        <span className={styles.span}>{description}</span>
        <a href={link} target="_blank">
          <button className={styles.button}> – {textButton} –</button>
        </a>
      </div>
    </div>
  );
}
