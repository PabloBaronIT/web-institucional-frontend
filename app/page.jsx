"use client";
import styles from "./HomePage.module.css";
import Link from "next/link";
import { Navigation } from "./components/Navigation/Navigation";
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

export default function HomePage() {
  return (
    <>
      <body className={styles.bodyContainer}>
        <Navigation />
        <br />
        {/* VIDEO CIUDAD */}
        <div className={styles.container}>
          <video autoPlay muted loop className={styles.bgvideo}>
            <source src="/videoSacanta.mp4" type="video/mp4" />
          </video>
        </div>
        {/* REDES SOCIALES */}
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
        {/* OFICINA VIRTUAL */}
        <div class={styles.oficinaContainer}>
          <h1 className={styles.h1HomePage}>Oficina Virtual</h1>
          <div className={styles.logoContainer}>
            <a
              href="https://pablobaronit.github.io/frontend-oficina-virtual/#/login"
              target="_blank"
            >
              <img
                src="/logo-oficina-virtual.png"
                alt="Logo de Oficina Virtual"
                className={styles.logo}
              />
            </a>
            <div className={styles.logoDescription}>
              <h2 className={styles.pContainer}>Nueva Oficina Virtual</h2>
              <p className={styles.pContainer}>
                Presentamos la nueva Oficina Virtual de Sacanta. Un lugar online
                donde usted podrá realizar sus trámites de manera rápida y
                sencilla. Además, contamos con un equipo de profesionales
                dispuesto a brindarle la asistencia que necesite.
              </p>
              <p className={styles.pContainer}>
                Nuestro objetivo fue simplificar y facilitar el hecho de poder
                presentar trámites, desarrollando así este espacio virtual para
                nuestros habitantes. Por otra parte, sustituimos el papel,
                logrando así aportar a la ecología al reducir el uso casi total
                de este.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        {/* PROGRAMAS MUNICIPALES */}
        <h1 className={styles.h1HomePage}>Programas municipales</h1>
        <div className={styles.programasContainer}>
          <img
            src="/programas-municipales-banner.jpg"
            className={styles.logoProgramasContainer}
          />
        </div>
        <br />
        <br />
        {/* MAPA DE LA CIUDAD */}
        <div>
          <h1 className={styles.h1HomePage}>Mapa de la ciudad</h1>
          <img src="/mapa-sacanta.png" className={styles.mapSacanta} />
        </div>
        {/* ESTADÍSTICAS */}
      </body>
    </>
  );
}
