"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.css";

const links = [
  {
    label: "INICIO",
    route: "/",
  },
  {
    label: "CIUDAD",
    route: "/city",
    submenu: [
      {
        label: "La localidad hoy",
        route: "/city/today",
      },
      {
        label: "Puntos de interés",
        route: "/city/interestPoints",
      },
      {
        label: "Descubrí Sacanta",
        route: "/city/discover",
      },
      {
        label: "Nuestra historia",
        route: "/city/history",
      },
    ],
  },
  {
    label: "ÁREAS",
    route: "/areas",
  },
  {
    label: "GOBIERNO",
    route: "/government",
    submenu: [
      {
        label: "Últimas novedades",
        route: "/government/news",
      },
      {
        label: "¿Quiénes somos?",
        route: "/government/we",
      },
    ],
  },
  {
    label: "NOTICIAS",
    route: "/news",
  },
];

export function Navigation() {
  const [showSubmenu, setShowSubmenu] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [weather, setWeather] = useState(0);

  const handleMouseEnter = (route) => {
    setShowSubmenu({ ...showSubmenu, [route]: true });
  };

  const handleMouseLeave = (route) => {
    setShowSubmenu({ ...showSubmenu, [route]: false });
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

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
                  <button
                    className={styles.menuButton}
                    onClick={handleMenuClick}
                  >
                    {showMenu ? "Close" : "Menu"}
                  </button>
                  <ul
                    className={`${styles.navigation} ${
                      showMenu ? styles.show : ""
                    }`}
                  >
                    {links.map(({ label, route, submenu }) => (
                      <li
                        className={styles.liNavBar}
                        key={route}
                        onMouseEnter={() => handleMouseEnter(route)}
                        onMouseLeave={() => handleMouseLeave(route)}
                      >
                        <Link href={route}>{label}</Link>
                        {submenu && showSubmenu[route] && (
                          <ul className={styles.submenu}>
                            {submenu.map(({ label, route }) => (
                              <li className={styles.liSubMenu} key={route}>
                                <Link
                                  href={route}
                                  className={styles.subMenuLink}
                                >
                                  {label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
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
