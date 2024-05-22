'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  category: string;
  size: string;
  quantity: number;
  price: number;
}

interface CartItem extends Product {
  variant: string;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  isSidecartOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  toggleSidecart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isSidecartOpen, setSidecarOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleSidecart = () => {
    setSidecarOpen((prevOpen) => !prevOpen);
  }

  return (
    <CartContext.Provider value={{
      cart,
      isSidecartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleSidecart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
