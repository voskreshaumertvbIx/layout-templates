import { useState } from "react";
import Logo from "../../assets/icons/logo";
import HeartIcon from "../../assets/icons/heartIcon";
import BasketIcon from "../../assets/icons/basketIcon";
import InputField from "../Reusable component/input";
import Cart from "../product_cart/cart";
import { useProductContext } from "../../hooks/useProductContext";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, calculateTotal, calculateProduct } = useProductContext();
  return (
    <div className="container">
    <div className=" relative flex items-center justify-between py-4 max-body:justify-around ">
      <Logo className="h-[40px] max-lg:h-[34px]  max-sm:w-[140px]" />

      <div className="flex items-center max-md:absolute max-md:top-[70px] ">
        <InputField
          className="my-auto h-[40px] w-[300px] border-[1px] max-lg:h-[34px] max-lg:w-[240px] "
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="rounded-r-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 max-lg:py-[5px] max-lg:text-center ">
          Search
        </button>
      </div>

      <div className="flex items-center">
        <HeartIcon className="max-lg:h-[34px] max-sm:hidden" />
        <div className="mx-4 h-7 border-l border-gray-300 max-sm:hidden"></div>
        <div className="relative">
          <BasketIcon
            className="max-lg:h-[34px]"
            onClick={() => setIsCartOpen(!isCartOpen)}
          />
          {calculateProduct > 0 && (
            <span className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-HardPrimary text-[10px] text-white">
              {calculateProduct}
            </span>
          )}
        </div>
        <span className="ml-2 flex flex-col">
          <span className="text-BodyTiny font-regular text-gray-700">
            Shopping cart:
          </span>
          <span className="text-BodySmall font-medium text-gray-900 max-lg:text-BodyTiny">
            {calculateTotal(cart).toFixed(2)}$
          </span>
        </span>
      </div>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </div>
    </div>
  );
};

export default Header;
