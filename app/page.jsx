"use client";
import styles from "./HomePage.module.css";
import CoverVideo from "./components/CoverVideo/CoverVideo";
import SocialMedias from "./components/SocialMedias/SocialMedias";

export default function HomePage() {
  return (
    <>
      <br />
      {/* VIDEO CIUDAD */}
      <CoverVideo srcVideo="/videoSacanta.mp4" />
      {/* REDES SOCIALES */}
      <SocialMedias />
      {/* OFICINA VIRTUAL */}
      <div className={styles.oficinaContainer}>
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
              logrando así aportar a la ecología al reducir el uso casi total de
              este.
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
      {/* <h1 className={styles.h1HomePage}>Mapa de la ciudad</h1>
      <img src="/mapa-sacanta.png" className={styles.mapSacanta} /> */}
      {/* ESTADÍSTICAS */}
    </>
  );
}
