// CatalogPage.jsx
import React, { useState, useRef } from "react"; // ← добавили useRef
import styles from "./CatalogPage.module.css";

import { CATEGORIES_DATA, SUBCATEGORIES_MAP } from "./catalogData";
import useFilteredProducts from "./useFilteredProducts";

function CatalogPage() {
  const [activeTab, setActiveTab] = useState("equipment");
  const [activeSubcategory, setActiveSubcategory] = useState("Все товары");
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputRef = useRef(null);

  const handleRequest = () => {
    alert("Вы оставили заявку на обратный звонок!");
  };

  // Фокус на поле поиска при нажатии на кнопку
  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const productsForActiveTab = CATEGORIES_DATA[activeTab] || [];

  const filteredProducts = useFilteredProducts(
    productsForActiveTab,
    activeSubcategory,
    searchTerm
  );

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setActiveSubcategory("Все товары");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setActiveSubcategory("Все товары");
  };

  return (
    <main>
      <h1>Каталог спортивных товаров</h1>

      {/* 🔥 Кнопка, демонстрирующая работу с ref */}
      <button
        type="button"
        className={styles.focusSearchButton}
        onClick={focusSearchInput}
      >
        Перейти к поиску
      </button>

      <div className={styles.searchBar}>
        <input
          ref={searchInputRef} // ← вот здесь используем ref
          type="text"
          placeholder="Поиск по названию товара..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      {/* дальше всё как было */}
      <div className={styles.menu}>
        <button
          onClick={() => handleTabChange("equipment")}
          className={
            activeTab === "equipment" ? styles.activeMenu : styles.menuButton
          }
        >
          Тренажеры и инвентарь
        </button>
        <button
          onClick={() => handleTabChange("clothes")}
          className={
            activeTab === "clothes" ? styles.activeMenu : styles.menuButton
          }
        >
          Одежда и аксессуары
        </button>
      </div>

      {activeTab && searchTerm === "" && (
        <div className={styles.subMenu}>
          {SUBCATEGORIES_MAP[activeTab].map((subName) => (
            <button
              key={subName}
              onClick={() => setActiveSubcategory(subName)}
              className={
                activeSubcategory === subName
                  ? styles.activeSubMenu
                  : styles.subMenuButton
              }
            >
              {subName}
            </button>
          ))}
        </div>
      )}

      <section className={`${styles.productList} ${styles.active}`}>
        <h2 className={styles.productCategory}>
          {searchTerm !== ""
            ? `Результаты поиска в текущей категории: ${filteredProducts.length}`
            : activeTab === "equipment"
            ? "Тренажеры и инвентарь"
            : "Одежда и аксессуары"}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className={styles.productGrid}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={styles.product}
                style={{ "--i": index }}
              >
                <img src={product.image} alt={product.name} />
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productPrice}>{product.price} руб.</div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noResults}>
            {searchTerm !== ""
              ? `По запросу "${searchTerm}" ничего не найдено в текущей категории.`
              : "В этой категории нет товаров."}
          </p>
        )}

        {filteredProducts.length > 0 && (
          <button className={styles.requestButton} onClick={handleRequest}>
            Оставить заявку
          </button>
        )}
      </section>
    </main>
  );
}

export default CatalogPage;
