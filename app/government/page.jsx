import { Navigation } from "../components/Navigation/Navigation";
import styles from "./GovernmentPage.module.css";

export default function GovernmentPage() {
  return (
    <>
      <Navigation />
      <br />
      <br />
      <br />
      <div>
        <div className={styles.container}>
          <video autoPlay muted loop className={styles.bgvideo}>
            <source src="/video-gobierno.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
