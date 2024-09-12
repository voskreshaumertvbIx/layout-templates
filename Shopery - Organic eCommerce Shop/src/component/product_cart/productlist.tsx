import ProductCard from "./productcard";
import { useProductContext } from "../../hooks/useProductContext";

interface ProductListProps {
  limit?: number;
}

const ProductList = ({ limit }: ProductListProps) => {
  const { products, onAdd } = useProductContext();
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="grid grid-cols-5">
      {displayedProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ProductList;


