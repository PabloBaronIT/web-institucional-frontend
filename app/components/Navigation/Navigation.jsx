"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.css";

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Ciudad",
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
    label: "Gobierno",
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
    label: "Noticias",
    route: "/news",
  },
  {
    label: "Áreas",
    route: "/areas",
  },
];

export function Navigation() {
  const [showSubmenu, setShowSubmenu] = useState({});

  const handleMouseEnter = (route) => {
    setShowSubmenu({ ...showSubmenu, [route]: true });
  };

  const handleMouseLeave = (route) => {
    setShowSubmenu({ ...showSubmenu, [route]: false });
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
                  <ul className={styles.navigation}>
                    {links.map(({ label, route, submenu }) => (
                      <li
                        key={route}
                        onMouseEnter={() => handleMouseEnter(route)}
                        onMouseLeave={() => handleMouseLeave(route)}
                      >
                        <Link href={route}>{label}</Link>
                        {submenu && showSubmenu[route] && (
                          <ul className={styles.submenu}>
                            {submenu.map(({ label, route }) => (
                              <li key={route}>
                                <Link href={route}>{label}</Link>
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