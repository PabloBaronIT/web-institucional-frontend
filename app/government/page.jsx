import CoverVideo from "../components/CoverVideo/CoverVideo";
import styles from "./GovernmentPage.module.css";

export default function GovernmentPage() {
  return (
    <>
      <br />
      <CoverVideo srcVideo="/video-gobierno.mp4" />
      <h1 className={styles.h1Title}>Gobierno de Sacanta</h1>
    </>
  );
}
