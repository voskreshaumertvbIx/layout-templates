import React from "react";
import Button from "../Reusable component/buttons";

import SectionHeader from "../Reusable component/sectionHeader";
import ProductList from "../product_cart/productlist";

const FeaturedProducts = () => {
  return (
    <section className="mt-[120px] text-white">
      <div className="flex aspect-[1320/358] w-full flex-col justify-start bg-[url('/img/banner.png')] bg-cover bg-center">
        <div className="ml-[65%] mt-[60px]">
          <p className="text-BodyMedium font-regular uppercase">Summer Sale</p>
          <h1 className="text-Heading01 font-semibold">
            <span className="text-Warning">37%</span> OFF
          </h1>
          <p className="mb-7 text-BodyMedium font-regular">
            Free on all your orders, Free Shipping and 30 days <br />
            money-back guarantee
          </p>
          <Button variant="fill" icon={true}>
            Shop Now
          </Button>
        </div>
      </div>
      <SectionHeader linkText="View All" title="Featured Products" linkUrl="" />
      <ProductList limit={5} />
    </section>
  );
};

export default FeaturedProducts;
