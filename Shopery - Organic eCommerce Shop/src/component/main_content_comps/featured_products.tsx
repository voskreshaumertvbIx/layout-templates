import React from "react";
import Button from "../Reusable component/buttons";
import SectionHeader from "../Reusable component/sectionHeader";
import ProductList from "../product_cart/productlist";

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="mt-[120px] text-white">
        {/* Banner section */}
        <div className="flex aspect-[1320/358] w-full flex-col justify-start bg-[url('/img/banner.png')] bg-cover bg-center max-lg:hidden">
          <div className="ml-auto mt-[60px] mr-[5%] max-md:mr-[10%] max-sm:ml-4 max-sm:mr-4">
            <p className="text-BodyMedium font-regular uppercase max-sm:text-sm">
              Summer Sale
            </p>
            <h1 className="text-Heading01 font-semibold max-md:text-Heading02 max-sm:text-Heading03">
              <span className="text-Warning">37%</span> OFF
            </h1>
            <p className="mb-7 text-BodyMedium font-regular max-md:text-sm">
              Free on all your orders, Free Shipping and 30 days <br />
              money-back guarantee
            </p>
            <Button variant="fill" icon={true} className="max-md:w-full">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Section Header */}
        <SectionHeader linkText="View All" title="Featured Products" linkUrl="" />

        {/* Product List */}
        <div className="mt-8">
          <ProductList limit={5} />
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
