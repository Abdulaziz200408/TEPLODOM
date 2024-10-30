import { createContext, useContext, useState } from "react";

const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const isProductInBasket = prev.some((item) => item.id === product.id);
      if (!isProductInBasket) {
        return [...prev, product];
      }
      return prev;
    });

    return !basket.some((item) => item.id === product.id);
  };

  const deleteFromBasket = (product) => {
    setBasket((prev) => prev.filter((item) => item.id !== product.id));
  };

  const addToFavorite = (product) => {
    let isProductAdded = false;

    setFavorite((prev) => {
      const isProductInFavorites = prev.some((item) => item.id === product.id);
      if (!isProductInFavorites) {
        isProductAdded = true; // Mahsulot yangi qo'shilsa, true bo'ladi
        return [...prev, product];
      }
      return prev; // Agar mavjud bo'lsa, o'zgarishsiz qaytaradi
    });

    return isProductAdded; // Mahsulot qo'shilganligini qaytaradi
  };

  const deleteFromFavorite = (productId) => {
    setFavorite((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <ProductContext.Provider
      value={{
        basket,
        favorite,
        addToBasket,
        deleteFromBasket,
        addToFavorite,
        deleteFromFavorite,
        searchTerm,
        setSearchTerm,
        filteredProducts,
        setFilteredProducts,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
