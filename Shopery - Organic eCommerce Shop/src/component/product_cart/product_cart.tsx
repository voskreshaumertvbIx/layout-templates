import React from "react";
import Badge from "../Reusable component/badge";
import BasketIcon from "../icons/BasketIcon/basketIcon";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    discountPrice?: number;
    sale?: number;
  };
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div
      className="relative box-border border-b border-r border-gray-100"
      key={product.id}
    >
      {product.sale && (
        <Badge variant="sale" className="absolute left-2 top-2">
          Sale {product.sale}%
        </Badge>
      )}
      <img
        src={product.image}
        className="h-[230px] w-[254px]"
        alt={product.name}
      />
      <div className="mb-3 flex items-center justify-between p-3">
        <div>
          <h3 className="text-BodySmall font-regular text-gray-700">
            {product.name}
          </h3>
          {product.discountPrice ? (
            <>
              <span className="text-BodyMedium font-medium text-gray-900 ">
                ${product.discountPrice}
              </span>{" "}
              <span className="text-BodyMedium text-gray-400 line-through ">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-BodyMedium font-medium text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          )}
          <img src="img/Products/Rating.png" className="mt-1." alt="rating" />
        </div>
        <BasketIcon onClick={onAddToCart} />
      </div>
    </div>
  );
};

export default ProductCard;
