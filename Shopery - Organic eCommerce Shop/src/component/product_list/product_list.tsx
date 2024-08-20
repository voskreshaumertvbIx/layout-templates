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

interface ProductListProps {
  products: Product[];
  onAddToCart: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <>
      <div className="mb-8 mt-[50px] flex justify-between">
        <h1 className="flex- text-Heading05 font-semibold text-gray-900">
          Popular Categories
        </h1>
        <div className="flex items-center justify-center space-x-3">
          <a href="" className="text-BodyMedium font-medium text-Primary">
            View All{" "}
          </a>
          <img className="w-[15px]" src="/img/icon/Group.svg" alt="" />
        </div>
      </div>
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
