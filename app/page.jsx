"use client";
import styles from "./HomePage.module.css";
import CoverVideo from "./components/CoverVideo/CoverVideo";

export default function HomePage() {
  return (
    <>
      <br />
      {/* VIDEO CIUDAD */}
      <CoverVideo srcVideo="/videoSacanta.mp4" />
      {/* OFICINA VIRTUAL */}
      <div className={styles.oficinaContainer}>
        <h1 className={styles.h1HomePage}>OFICINA VIRTUAL</h1>
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
            <button className={styles.oficinaVirtualButton}>
              Ir a la <strong>Oficina Virtual</strong>
            </button>
          </a>
          <div className={styles.logoDescription}>
            <p className={styles.pContainer}>
              Presentamos la nueva Oficina Virtual de Sacanta. Un lugar online
              donde usted podrá realizar sus trámites de manera rápida y
              sencilla. Además, contamos con un equipo de profesionales
              dispuesto a brindarle la asistencia que necesite.
            </p>
            <br />
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
      <br />
      {/* PROGRAMAS MUNICIPALES */}
      <h1 className={styles.h1HomePage}>PROGRAMAS MUNICIPALES</h1>
      <div className={styles.muniProgrammer}></div>
      <br />
      <br />
      <br />
    </>
  );
}
