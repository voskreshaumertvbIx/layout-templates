import React from 'react';
import Button from '../Reusable component/buttons';
import ProductList, { ProductListProps } from '../product_list/product_list';
import SectionHeader from '../Reusable component/sectionHeader';




const FeaturedProducts: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <section className="text-white mt-[120px]">
      <div className="bg-[url('/img/banner.png')] bg-cover bg-center w-full aspect-[1320/358] flex flex-col justify-start">
        <div className="ml-[65%] mt-[60px]">
          <p className="uppercase text-BodyMedium font-regular">Summer Sale</p>
          <h1 className="text-Heading01 font-semibold">
            <span className="text-Warning">37%</span> OFF
          </h1>
          <p className="text-BodyMedium font-regular mb-7">
            Free on all your orders, Free Shipping and 30 days <br />
            money-back guarantee
          </p>
          <Button variant="fill" icon={true}>Shop Now</Button>
        </div>
      </div>
     <SectionHeader linkText='View All' title='Featured Products' linkUrl=''/>
      <ProductList products={products} onAddToCart={onAddToCart} />
    </section>
  );
}

export default FeaturedProducts;
