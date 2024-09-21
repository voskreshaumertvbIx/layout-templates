import BasketIcon from "../../assets/icons/basketIcon";
import Badge from "../Reusable component/badge";
import { Product } from "../../hooks/useProductContext";
import { useState } from "react";
import QuickViewModal from "./quickviewModal";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
  className?: string;
}

const ProductCard = ({ product, onAdd, className }: ProductCardProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate(); 
  return (
    <div
      className={`relative  h-[327px] max-md:h-[250px] w-[256px] max-sm:!w-[190px] border border-gray-100 hover:border-[2px] hover:border-Primary hover:shadow-lg ${className}`}
    >
      {product.sale && (
        <Badge variant="sale" className="absolute left-2 top-2">
          Sale {product.sale}%
        </Badge>
      )}
      <div
        className="max-md:mt-10 overflow-hidden"
        onClick={() => setSelectedProduct(product)} 
      >
        <img src={product.image} alt={product.name} className="max-md:w-[160px] m-auto"/>
      </div>
      <div className="mb-3 flex items-center justify-between px-3">
        <div>
        <h3
            onClick={() => navigate(`/categories/${product.id}`)}  
            className="text-BodySmall font-regular text-gray-700 max-md:text-BodyTiny"
          >
            {product.name}
          </h3>
          {product.discountPrice ? (
            <>
              <span className="text-BodyMedium font-medium text-gray-900 max-md:text-BodySmall">
                ${product.discountPrice}
              </span>{" "}
              <span className="text-BodyMedium text-gray-400 line-through max-md:text-BodySmall">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-BodyMedium font-medium text-gray-900 max-md:text-BodySmall">
              ${product.price.toFixed(2)}
            </span>
          )}
          <img src="/img/Products/Rating.png" alt="rating" className="" />
        </div>
        <BasketIcon onClick={() => onAdd(product)} />
      </div>

     
      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}  
        />
      )}
    </div>
  );
};

export default ProductCard;
