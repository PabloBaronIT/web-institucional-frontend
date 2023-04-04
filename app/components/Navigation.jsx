import Link from "next/link";
import styles from "./Navigation.module.css";

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Ciudad",
    route: "/city",
  },
  {
    label: "Gobierno",
    route: "/government",
  },
  {
    label: "Noticias",
    route: "/news",
  },
  {
    label: "Áreas",
    route: "/areas",
  },
];

export function Navigation() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.container}>
            <header className={styles.header}>
              <nav>
                <div className={styles.navContainer}>
                  <div className={styles.logoContainer}>
                    <img
                      className={styles.logo}
                      src={"/logo.png"}
                      alt="Logo"
                      href="/"
                    />
                  </div>
                  <ul className={styles.navigation}>
                    {links.map(({ label, route }) => (
                      <li key={route}>
                        <Link href={route}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </header>
          </div>
        </header>
      </div>
      <br />
    </>
  );
}
