import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  const navigationLinks = [
    { title: "Каталог", path: "/catalog" },
    { title: "Программы", path: "/programs" },
    { title: "О нас", path: "/about" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.contactSection}>
          <p className={styles.contactTitle}>Свяжитесь с нами:</p>
          <p>Контактный телефон: +375 (29) 608-38-11</p>
          <p>Email: info.streamix@gymshop.by</p>
        </div>

        <div className={styles.linksSection}>
          <p className={styles.linksTitle}>Быстрый переход</p>
          <ul className={styles.linksList}>
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={styles.footerLink}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
