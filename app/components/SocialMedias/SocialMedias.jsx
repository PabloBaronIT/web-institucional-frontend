import styles from "./SocialMedia.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
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
];

export default function SocialMedias() {
  return (
    <div className={styles.socialMedia}>
      <ul className={styles.navigationSocialMedias}>
        {socialLinks.map(({ label, route }) => (
          <li key={route} className={styles.liNavigSocialMedia}>
            <Link href={route} target="_blank">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
