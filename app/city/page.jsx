import CoverVideo from "../components/CoverVideo/CoverVideo";
import styles from "./CityPage.module.css";

export default function CityPage() {
  return (
    <>
      <div className={styles.overflowContainer}>
        <CoverVideo srcVideo="/nuestra-ciudad-video.mp4" />
      </div>
    </>
  );
}
