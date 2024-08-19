import React, { useState, useEffect, ReactNode } from "react";
import { products } from "./product";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  sale?: number;
}

interface CartManagerProps {
  children: (props: {
    cart: Product[];
    cartTotal: number;
    cartCount: number;
    handleAddToCart: (productId: number) => void;
  }) => ReactNode;
}

const CartManager: React.FC<CartManagerProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const storedCart: Product[] = JSON.parse(
      localStorage.getItem("cart") || "[]",
    );
    setCart(storedCart);

    const total = calculateTotal(storedCart);
    setCartTotal(total);
    setCartCount(storedCart.length);
  }, []);

  const handleAddToCart = (productId: number) => {
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    const newCart = [...cart, product];
    setCart(newCart);

    const total = calculateTotal(newCart);
    setCartTotal(total);
    setCartCount(newCart.length);

    localStorage.setItem("cart", JSON.stringify(newCart));
    localStorage.setItem("cartTotal", total.toString());
    localStorage.setItem("cartCount", newCart.length.toString());
  };

  const calculateTotal = (cart: Product[]): number => {
    return cart.reduce(
      (acc, item) => acc + (item.discountPrice || item.price),
      0,
    );
  };

  return children({ cart, cartTotal, cartCount, handleAddToCart });
};

export default CartManager;
