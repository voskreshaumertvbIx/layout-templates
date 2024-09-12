import ProductCard from "../../product_cart/productcard";
import { useProductContext } from "../../../hooks/useProductContext";
import SectionHeader from "../../Reusable component/sectionHeader";
import ProductCardLarge from "./productLarge";

const HotDeals = () => {
  const { products, onAdd } = useProductContext();

  return (
    <div>
      <SectionHeader linkText="View All" title="Hot Deals" linkUrl="" />
      <div className="grid grid-cols-5 grid-rows-[repeat(3,_minmax(0,_1fr))] border">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={index === 0 ? "col-span-2 row-span-2" : ""}
          >
            {index === 0 ? (
              <ProductCardLarge />
            ) : (
              <ProductCard product={product} onAdd={() => onAdd(product)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
