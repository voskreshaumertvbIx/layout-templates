import React from "react";
import ProductCard from "../product_cart/product_cart";
import ProductCardLarge from "./productLarge";


interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  sale?: number;
  dealEndTime?: string;
}


interface HotDealsProps {
  products: Product[];
  onAddToCart: (id: number) => void;
}

const HotDeals: React.FC<HotDealsProps> = ({ products, onAddToCart }) => {
  return (
  <div>
    <div className="flex justify-between mt-[100px] mb-8">
        <h1 className="text-Heading05 font-semibold text-gray-900">
          Hot Deals
        </h1>
        <div className="flex items-center justify-center space-x-3">
          <a href="" className="text-BodyMedium font-medium text-Primary">
            View All{" "}
          </a>
          <img className="w-[15px]" src="/img/icon/Group.svg" alt="" />
        </div>
      </div>
    <div className="grid grid-cols-5 grid-rows-[repeat(4,_minmax(0,_1fr))]">
    {products.map((product, index) => (
      <div
        key={product.id}
        className={index === 0 ? "col-span-2 row-span-2" : ""}
      >
        {index === 0 ? (
          <ProductCardLarge product={product} onAddToCart={onAddToCart} />
        ) : (
          <ProductCard product={product} onAddToCart={() => onAddToCart(product.id)} />
        )}
      </div>
    ))}
  </div>
  </div>
  );
};

export default HotDeals;
