import React, { createContext, useContext, useEffect, useState } from "react";

import { products } from "../component/product_cart/product";
export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  sale?: number;
  type:string;
  rating:string;
  tags:string[];
  quantity: number; 
}



interface ProductContextProps {
  products: Product[];
  cart: Product[];
  onAdd: (product: Product) => void;
  onDelete: (productId: number) => void;
  calculateTotal: (cart: Product[]) => number;
  calculateProduct: number;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const onAdd = (product: Product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
  
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity } 
            : item
        );
      }
 
      return [...prevCart, { ...product }];
    });
  };
  
  const calculateTotal = (cart: Product[]): number => {
    return cart.reduce((acc, item) => acc + (item.discountPrice || item.price) * item.quantity, 0);
  };
  const calculateProduct = cart.length;
  
  const onDelete = (productId: number) => {
    setCart((prevCart) => 
      prevCart.map((item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      }).filter(Boolean) as Product[] 
    );
  };

   
  

  return (
    <ProductContext.Provider value={{ products, cart, onAdd, onDelete, calculateTotal, calculateProduct}}>
      {children}
    </ProductContext.Provider>
  );
};
