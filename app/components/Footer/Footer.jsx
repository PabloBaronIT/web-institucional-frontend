import styles from "./Footer.module.css";

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
      <div className={styles.pContact}>
        <p>Teléfono: 3564 690283</p>
        <p>Email: administracion@sacanta.gob.ar</p>
      </div>
    </div>
  );
}
