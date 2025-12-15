import { useMemo } from "react";
function useFilteredProducts(products, activeSubcategory, searchTerm) {
  return useMemo(() => {
    if (!products || products.length === 0) {
      return [];
    }

    let result = products;
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    // 1. Фильтрация по поисковому запросу (ПРИОРИТЕТ)
    if (lowerCaseSearchTerm !== "") {
      return result.filter((product) =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    // 2. Фильтрация по подкатегории (если поиска нет)
    if (activeSubcategory !== "Все товары") {
      result = result.filter(
        (product) => product.subcategory === activeSubcategory
      );
    }

    return result;
  }, [products, activeSubcategory, searchTerm]);
}

export default useFilteredProducts;
