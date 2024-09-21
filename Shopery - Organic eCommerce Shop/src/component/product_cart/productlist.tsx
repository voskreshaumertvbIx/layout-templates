import ProductCard from "./productcard";
import { useProductContext } from "../../hooks/useProductContext";

interface ProductListProps {
  limit?: number;
}

const ProductList = ({ limit }: ProductListProps) => {
  const { products, onAdd } = useProductContext();
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="mx-5 max-sm:mx-0 mb-12">
    <div className="container flex flex-wrap justify-center">
      {displayedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
          className=" max-2xl:w-[240px] max-md:w-[160px] max-md:h-[300px]"
        />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
