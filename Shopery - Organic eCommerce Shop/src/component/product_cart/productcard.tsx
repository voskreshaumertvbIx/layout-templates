import BasketIcon from "../../assets/icons/basketIcon";
import Badge from "../Reusable component/badge";
import { Product } from "../../hooks/useProductContext";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
  className?: string;
}

const ProductCard = ({ product, onAdd, className }: ProductCardProps) => {
  return (
    <div
      className={`relative z-10 h-[327px] w-[264px] border border-gray-100 hover:border-[2px] hover:border-Primary hover:shadow-lg ${className}`}
    >
      {product.sale && (
        <Badge variant="sale" className="absolute left-2 top-2">
          Sale {product.sale}%
        </Badge>
      )}
      <div className="h-[254px] overflow-hidden">
        <img src={product.image} className="" alt={product.name} />
      </div>
      <div className="mb-3 flex items-center justify-between px-3">
        <div>
          <h3 className="text-BodySmall font-regular text-gray-700">
            {product.name}
          </h3>
          {product.discountPrice ? (
            <>
              <span className="text-BodyMedium font-medium text-gray-900">
                ${product.discountPrice}
              </span>{" "}
              <span className="text-BodyMedium text-gray-400 line-through">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-BodyMedium font-medium text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          )}
          <img src="/img/Products/Rating.png" className="" alt="rating" />
        </div>
        <BasketIcon onClick={() => onAdd(product)} />
      </div>
    </div>
  );
};

export default ProductCard;
