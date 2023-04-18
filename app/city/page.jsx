import { Navigation } from "../components/Navigation/Navigation";
import styles from "./CityPage.module.css";

export default function CityPage() {
  return (
    <>
      <div className={styles.overflowContainer}>
        <div className={styles.container}>
          <video autoPlay muted loop className={styles.bgvideo}>
            <source src="/nuestra-ciudad-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
