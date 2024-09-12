import EyeIcon from "../../../assets/icons/eyeIcon";
import HeartIcon from "../../../assets/icons/heartIcon";
import { useProductContext } from "../../../hooks/useProductContext";
import Badge from "../../Reusable component/badge";
import Button from "../../Reusable component/buttons";
import Timer from "../../Reusable component/timer";

const ProductCardLarge = () => {
  const { products, onAdd } = useProductContext();
  const productlarge = products[0];
  return (
    <div className="relative z-10 flex h-[654px] w-[528px] flex-col border border-gray-100 hover:border-[2px] hover:border-Primary hover:shadow-lg">
      <div className="absolute left-4 top-4 flex space-x-2">
        {productlarge.sale && (
          <Badge variant="sale">Sale {productlarge.sale}%</Badge>
        )}
        <Badge variant="bestSale">Best Sale</Badge>
      </div>
      <img
        src="img/bigapple.png"
        alt={productlarge.name}
        className="w-full object-cover"
      />{" "}
      <div className="absolute bottom-[35%] left-0 right-0 flex items-center justify-center">
        <HeartIcon className="mr-2" />
        <Button onClick={() => onAdd(productlarge)} className="w-[400px]">
          Add to Cart
        </Button>
        <EyeIcon className="ml-2" />
      </div>
      <div className="flex flex-col items-center px-4">
        <h2 className="mb-2 text-BodyLarge font-regular text-HardPrimary">
          {productlarge.name}
        </h2>

        <div className="mb-2 flex items-center space-x-2 text-BodyXXL font-medium">
          <span className="text-gray-900">
            ${productlarge.discountPrice || productlarge.price}
          </span>
          {productlarge.discountPrice && (
            <span className="text-gray-500 line-through">
              ${productlarge.price}
            </span>
          )}
        </div>
        <img src="img/5.png" alt="" className="mb-3" />
        <p className="text-BodySmall font-regular text-gray-400">
          Hurry up! Offer ends In:
        </p>
        <Timer className="text-gray-900" initialTime={10000} />
      </div>
    </div>
  );
};

export default ProductCardLarge;
