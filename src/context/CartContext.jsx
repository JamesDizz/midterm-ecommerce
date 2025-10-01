import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const indexToRemove = prevCart.findIndex(item => item.id === productId);
      if (indexToRemove === -1) return prevCart;
      const newCart = [...prevCart];
      newCart.splice(indexToRemove, 1);
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]); // Reset sa cart, so mu empty sya
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};