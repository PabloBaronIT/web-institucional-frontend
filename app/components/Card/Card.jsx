"use client";
import styles from "./Card.module.css";

export default function Card({
  srcImg,
  textButton,
  link,
  titleCard,
  description,
}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.h2Card}>{titleCard}</h2>
      <img src={srcImg} className={styles.img} />
      <br />
      <span className={styles.span}>{description}</span>
      <a href={link} target="_blank">
        <button className={styles.button}>{textButton}</button>
      </a>
    </div>
  );
}
