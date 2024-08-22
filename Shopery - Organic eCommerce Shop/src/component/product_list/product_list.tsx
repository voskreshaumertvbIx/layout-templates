import React from "react";
import ProductCard from "../product_cart/product_cart";


export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  sale?: number;
}

export interface ProductListProps {
  products: Product[];
  onAddToCart: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <>
      <div className="grid grid-cols-5 border border-gray-100">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
