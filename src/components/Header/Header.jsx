import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const navItems = [
    { name: "Главная", to: "/" },
    { name: "Программы тренировок", to: "/programs" },
    { name: "Каталог", to: "/catalog" },
    { name: "О нас", to: "/about" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="../img/logo.svg"
          alt="Логотип Streamix"
          style={{ height: "50px" }}
        />
      </div>

      <nav className={styles.headerText}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => {
              if (isActive) {
                return `${styles.navLink} ${styles.active}`;
              } else {
                return styles.navLink;
              }
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
