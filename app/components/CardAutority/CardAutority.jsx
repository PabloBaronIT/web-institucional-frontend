import styles from "./CardAutority.module.css";

export default function CardAutority({
  srcImg,
  nameAutority,
  position,
  pathContact,
}) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <h2 className={styles.h2Card}>{position}</h2>
        <img src={srcImg} className={styles.imgAutority} />
        <p className={styles.pName}>
          <strong>{nameAutority}</strong>
        </p>
        <p className={styles.pName}>
          <strong>Contacto: </strong>
          {pathContact}
        </p>
      </div>
    </div>
  );
}
