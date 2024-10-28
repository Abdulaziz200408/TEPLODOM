import { createContext, useContext, useState } from "react";

const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const isProductInBasket = prev.some((item) => item.id === product.id);
      if (!isProductInBasket) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const deleteFromBasket = (product) => {
    setBasket((prev) => prev.filter((item) => item.id !== product.id));
  };

  const addToFavorite = (product) => {
    setFavorite((prev) => [...prev, product]);
    console.log(`Добавлен в избранное: ${product.title}`);
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
