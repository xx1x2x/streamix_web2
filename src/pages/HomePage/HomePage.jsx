import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./HomePage.module.css";
import InfoMessage from "../../components/InfoMessage";
import { fetchNews } from "../../store/newsSlice";

function HomePage() {
  const dispatch = useDispatch();

  const siteTitle = useSelector((state) => state.app.get("siteTitle"));

  // Данные новостей из Redux
  const newsItems = useSelector((state) => state.news.items);
  const newsLoading = useSelector((state) => state.news.loading);
  const newsError = useSelector((state) => state.news.error);

  // Загружаем новости при первом рендере
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <main>
      <h2>Добро пожаловать на {siteTitle}</h2>

      <InfoMessage title="О нашем магазине">
        <p>
          Ваш надежный источник спортивных товаров. Мы предлагаем широкий
          ассортимент товаров и аксессуаров для тренировок, чтобы помочь вам
          достичь ваших фитнес-целей. Исследуйте наш каталог и найдите всё
          необходимое для активного образа жизни.
        </p>
      </InfoMessage>

      <div className={styles.imageRow}>
        <img
          className={styles.imageItem}
          src="/img/image1.jpg"
          alt="Тренировка 1"
        />
        <img
          className={styles.imageItem}
          src="/img/image2.jpg"
          alt="Тренировка 2"
        />
      </div>

      <InfoMessage title="Последние новости (загружаются с сервера)">
        {newsLoading && <p>Загрузка новостей...</p>}
        {newsError && <p>Ошибка: {newsError}</p>}

        {!newsLoading && !newsError && newsItems.length > 0 && (
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {newsItems.map((item) => (
              <li key={item.id} style={{ marginBottom: "8px" }}>
                <strong>{item.title}</strong>
                <br />
                <span>{item.body}</span>
              </li>
            ))}
          </ul>
        )}
      </InfoMessage>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{ marginTop: "20px" }}
      >
        <circle cx="50" cy="50" r="40" fill="#4e4e4e" />
        <text
          x="50%"
          y="50%"
          fontFamily="Montserrat"
          fontSize="16"
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="middle"
        ></text>
      </svg>
    </main>
  );
}

export default HomePage;
