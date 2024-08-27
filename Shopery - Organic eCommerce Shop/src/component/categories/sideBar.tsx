import React, { useState } from "react";

import { products } from "../../component/product_cart/product";
import ProductCard from "../product_cart/product_cart";

interface ProductFilterProps {
  handleAddToCart: (productId: number) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ handleAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000); 

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.type === selectedCategory;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-6">
        <button onClick={() => setSelectedCategory("All")}>All</button>
        <button onClick={() => setSelectedCategory("Fresh Fruit")}>Fresh Fruit</button>
        <button onClick={() => setSelectedCategory("Vegetable")}>Vegetables</button>
      </div>



      <div className="grid grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
