import React, { createContext, useContext, useEffect, useState } from "react";

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
}

export interface CartProduct extends Product {
  quantity: number; 
}

interface ProductContextProps {
  products: Product[];
  cart: CartProduct[];
  onAdd: (product: Product) => void;
  onDelete: (productId: number) => void;
  calculateTotal:(cart:CartProduct[])=>number
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
  const [cart, setCart] = useState<CartProduct[]>(() => {
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
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

    
      return [...prevCart, { ...product, quantity: 1 }];
    });

    
  };
  const calculateTotal = (cart: CartProduct[]): number => {
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
      }).filter(Boolean) as CartProduct[] 
    );
  };

   const products: Product[] = [
    {
      id: 1,
      name: "Green Apple",
      image: "/img/Products/apple.png",
      price: 20.99,
      discountPrice: 14.99,
      sale: 50,
      type: "Fresh Fruit",
      rating: "5",
      tags: ["Healthy", "Low fat", "Fruit"],
    },
    {
      id: 2,
      name: "Fresh Indian Malta",
      image: "/img/Products/orange.png",
      price: 20.0,
      type: "Fresh Fruit",
      rating: "4",
      tags: ["Healthy", "Vitamins", "Fruit"],
    },
    {
      id: 3,
      name: "Chinese cabbage",
      image: "/img/Products/cabbage.png",
      price: 12.0,
      type: "Vegetable",
      rating: "4",
      tags: ["Healthy", "Vegetarian", "Vegetable"],
    },
    {
      id: 4,
      name: "Green Lettuce",
      image: "/img/Products/lettuce.png",
      price: 9.0,
      type: "Vegetable",
      rating: "3",
      tags: ["Vegetarian", "Low fat", "Vegetable"],
    },
    {
      id: 5,
      name: "Eggplant",
      image: "img/Products/eggplant.png",
      price: 34.0,
      type: "Vegetable",
      rating: "5",
      tags: ["Vegetarian", "Low fat", "Vegetable"],
    },
    {
      id: 6,
      name: "Big Potatoes",
      image: "/img/Products/potatoes.png",
      price: 20.0,
      type: "Vegetable",
      rating: "3",
      tags: ["Vitamins", "Vegetarian", "Vegetable"],
    },
    {
      id: 7,
      name: "Corn",
      image: "/img/Products/corn.png",
      price: 20.0,
      type: "Vegetable",
      rating: "4",
      tags: ["Healthy", "Low fat", "Vegetable"],
    },
    {
      id: 8,
      name: "Fresh Cauliflower",
      image: "/img/Products/cauliflower.png",
      price: 12.0,
      type: "Vegetable",
      rating: "3",
      tags: ["Vegetarian", "Low fat", "Vegetable"],
    },
    {
      id: 9,
      name: "Green Capsicum",
      image: "/img/Products/capsicum.png",
      price: 20.99,
      discountPrice: 9.0,
      sale: 50,
      type: "Vegetable",
      rating: "4",
      tags: ["Vegetarian", "Low fat", "Vegetable"],
    },
    {
      id: 10,
      name: "Green Chili",
      image: "/img/Products/chili.png",
      price: 34.0,
      type: "Vegetable",
      rating: "5",
      tags: ["Spicy", "Vitamins", "Vegetable"],
    },
    {
      id: 11,
      name: "Red Tomatoes",
      image: "/img/Products/tomato.png",
      price: 20.99,
      discountPrice: 9.0,
      sale: 50,
      type: "Vegetable",
      rating: "4",
      tags: ["Vitamins", "Healthy", "Vegetable"],
    },
    {
      id: 12,
      name: "Surjapur Mango",
      image: "/img/Products/mango.png",
      price: 34.0,
      type: "Fresh fruit",
      rating: "5",
      tags: ["Healthy", "Low fat", "Fruit"],
    },
  ];
  

  return (
    <ProductContext.Provider value={{ products, cart, onAdd, onDelete, calculateTotal, calculateProduct}}>
      {children}
    </ProductContext.Provider>
  );
};
