import React from "react";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <main>
      <h1>О нас</h1>

      <section>
        <h2>Наша компания</h2>
        <p>
          Мы являемся лидерами на рынке спортивной одежды и аксессуаров с 2010
          года. Наша миссия — предоставлять качественную продукцию, которая
          помогает каждому достигать целей в спорте и фитнесе.
        </p>
      </section>

      <section>
        <h2>Сколько мы на рынке</h2>
        <p>
          С момента основания мы успешно работаем более 13 лет и зарекомендовали
          себя как надёжный партнёр для клиентов и поставщиков.
        </p>
      </section>

      <section>
        <h2>Наши партнёры</h2>
        <p>
          Мы сотрудничаем с известными брендами — Nike, Adidas, Puma и другими.
        </p>
      </section>

      <section>
        <h2>Где мы находимся</h2>
        <div className={styles.mapWrapper}>
          <img src="/img/map.png" alt="Карта" className={styles.mapImage} />
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
