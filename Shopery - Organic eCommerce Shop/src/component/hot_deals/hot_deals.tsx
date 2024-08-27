import React from "react";
import ProductCard from "../product_cart/product_cart";
import ProductCardLarge from "./productLarge";
import SectionHeader from "../Reusable component/sectionHeader";


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
   <SectionHeader linkText="View All" title="Hot Deals" linkUrl=""/>
    <div className="grid grid-cols-5 grid-rows-[repeat(3,_minmax(0,_1fr))] border ">
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
