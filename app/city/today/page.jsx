import { Navigation } from "@/app/components/Navigation";
import styles from "./TodayPage.module.css";

export default function TodayPage() {
  return (
    <>
      <Navigation />
      <br />
      <h2 className={styles.h2}>La ciudad hoy</h2>
      <div className={styles.divImgContainer}>
        <img src="/sacanta-hoy.jpg" className={styles.imgSacantaToday} />
      </div>
    </>
  );
}
