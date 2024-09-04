import EyeIcon from "../icons/EyeIcon/eyeIcon";
import HeartIcon from "../icons/HeartIcon/heartIcon";
import Badge from "../Reusable component/badge";
import Button from "../Reusable component/buttons";
import Timer from "../timer/timer";
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  sale?: number;
  dealEndTime?: string;
}

interface ProductCardLargeProps {
  product: Product;
  onAddToCart: (id: number) => void;
}

const ProductCardLarge: React.FC<ProductCardLargeProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <div className=" relative flex h-full w-full flex-col   border border-gray-100 hover:border-[2px] hover:border-Primary hover:shadow-lg z-10">
      <div className="absolute left-4 top-4 flex space-x-2">
        {product.sale && <Badge variant="sale">Sale {product.sale}%</Badge>}
        <Badge variant="bestSale">Best Sale</Badge>
      </div>
      <img
        src="img/bigapple.png"
        alt={product.name}
        className="w-full object-cover"
      />{" "}
      <div className="absolute bottom-[35%] right-0 left-0 flex items-center justify-center">
        <HeartIcon className="mr-2" />
        <Button onClick={() => onAddToCart(product.id)} className="w-[400px]">
          Add to Cart
        </Button>
        <EyeIcon className="ml-2" />
      </div>
      <div className="flex flex-col items-center px-4">
        <h2 className="text-BodyLarge font-regular text-HardPrimary mb-2">
          {product.name}
        </h2>

        <div className="flex items-center space-x-2 text-BodyXXL font-medium mb-2">
          <span className="text-gray-900">
            ${product.discountPrice || product.price}
          </span>
          {product.discountPrice && (
            <span className="text-gray-500 line-through">${product.price}</span>
          )}
        </div>
        <img src="img/5.png" alt="" className="mb-3" />
        <p className="text-BodySmall font-regular text-gray-400">
          Hurry up! Offer ends In:
        </p>
        <Timer className='text-gray-900' initialTime={10000} />
      </div>
    </div>
  );
};

export default ProductCardLarge;
