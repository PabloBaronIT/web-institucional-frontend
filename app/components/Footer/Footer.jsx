import styles from "./Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faPhone,
  faEnvelopeCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const socialLinks = [
  {
    label: <FontAwesomeIcon icon={faWhatsapp} />,
    route: "http://wa.me/5493533417923",
  },
  {
    label: <FontAwesomeIcon icon={faGlobeAmericas} />,
    route: "https://www.sacanta.gob.ar/",
  },
  {
    label: <FontAwesomeIcon icon={faFacebookF} />,
    route: "https://www.facebook.com/MuniSacanta/?locale=es_LA",
  },
  {
    label: <FontAwesomeIcon icon={faInstagram} />,
    route: "https://www.instagram.com/municipalidad_de_sacanta/?hl=es ",
  },
  {
    label: <FontAwesomeIcon icon={faPhone} />,
    route: "tel:03533492222",
  },
  {
    label: <FontAwesomeIcon icon={faEnvelopeCircleCheck} />,
    route: "mailto:contacto@sacanta.gob.ar",
  },
];

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <a
        href="https://pablobaronit.github.io/frontend-oficina-virtual/#/login"
        className={styles.linkLogo}
        target="_blank"
      >
        <img src="/logo-oficina-virtual.png" className={styles.logoImg} />
      </a>
      <div className={styles.pDivFooter}>
        <p>Municipalidad de Sacanta</p>
        <p>Siempre a tu lado</p>
      </div>
      <div className={styles.socialMedia}>
        <ul className={styles.navigationSocialMedias}>
          <p className={styles.pSocialMedia}>Contacto</p>
          {socialLinks.map(({ label, route }) => (
            <li key={route} className={styles.liNavigSocialMedia}>
              <Link href={route} target="_blank">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
