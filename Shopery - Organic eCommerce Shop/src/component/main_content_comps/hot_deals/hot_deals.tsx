import ProductCard from "../../product_cart/productcard";
import { useProductContext } from "../../../hooks/useProductContext";
import SectionHeader from "../../Reusable component/sectionHeader";
import ProductCardLarge from "./productLarge";

const HotDeals = () => {
  const { products, onAdd } = useProductContext();

  return (
    <div className="container px-4">
      <SectionHeader linkText="View All" title="Hot Deals" linkUrl="" />

      <div className="hidden max-lg:m-auto max-lg:block">
        <ProductCardLarge></ProductCardLarge>
      </div>

      <div className="mx-5 grid grid-cols-5 max-md:flex max-md:flex-wrap max-md:justify-center max-md:items-center max-lg:!grid-cols-3 max-xl:grid-cols-4 ">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={
              index === 0
                ? "col-span-2 row-span-2 border border-gray-100 max-lg:hidden"
                : ""
            }
          >
            {index === 0 ? (
              <ProductCardLarge />
            ) : (
              <ProductCard
                product={product}
                onAdd={() => onAdd(product)}
                className="w-full max-se:w-[175px] max-md:!w-[200px] max-lg:max-w-[100%] max-lg:w-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
