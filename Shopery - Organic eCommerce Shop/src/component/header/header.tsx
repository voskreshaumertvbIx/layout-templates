import  { useState } from "react";
import Logo from "../icons/Logo/logo";

import HeartIcon from "../icons/HeartIcon/heartIcon";
import BasketIcon from "../icons/BasketIcon/basketIcon";
import InputField from "../Reusable component/input";

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="flex h-[93px] items-center justify-between ">
      <Logo className="h-[40px]" />

      <div className="flex items-center">
        <InputField
          className={`my-auto h-[40px] w-[300px] border-[1px]`}
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button className="rounded-r-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          Search
        </button>
      </div>

      <div className="flex items-center">
        <HeartIcon />
        <div className="mx-4 h-7 border-l border-gray-300"></div>
        <BasketIcon />
        <span className="ml-2 flex flex-col">
          <span className="text-BodyTiny font-regular text-gray-700">
            Shoping cart:
          </span>
          <span className="text-BodySmall font-medium text-gray-900">
            $00.00
          </span>
        </span>
      </div>
      
    </div>
  );
};

export default Header;
