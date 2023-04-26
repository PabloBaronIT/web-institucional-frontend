import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className={styles.carrouselImage}
          src="/programas-municipales-banner.jpg"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className={styles.carrouselImage}
          src="/banner-prog-municipal-locro.jpg"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
