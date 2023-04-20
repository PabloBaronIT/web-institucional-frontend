import styles from "./HistoryCard.module.css";

export default function HistoryCard({ srcImg, imgDescription }) {
  return (
    <div className={styles.card}>
      <img src={srcImg} className={styles.historyCardImg} />
      <p className={styles.pDescription}>{imgDescription}</p>
    </div>
  );
}
