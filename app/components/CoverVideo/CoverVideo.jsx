"use client";
import styles from "./CoverVideo.module.css";

export default function CoverVideo({ srcVideo }) {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.bgvideo}>
        <source src={srcVideo} type="video/mp4" />
      </video>
    </div>
  );
}
