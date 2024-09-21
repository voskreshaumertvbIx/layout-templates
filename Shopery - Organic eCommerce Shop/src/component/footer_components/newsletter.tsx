import React from "react";
import InputField from "../Reusable component/input";
import Button from "../Reusable component/buttons";

const Newsletter = () => {
  return (
    <div className="container">
    <section className="mt-[100px] flex items-center justify-between max-xl:justify-around max-md:flex-col ">
      <div className="flex flex-col justify-center max-md:w-full max-md:items-center">
        <h1 className="text-BodyXXL font-semibold text-gray-900 max-lg:text-BodyXL">
          Subcribe our Newsletter
        </h1>
        <p className="text-BodySmall font-regular text-gray-400 max-lg:text-BodyTiny max-sm:text-center">
          Pellentesque eu nibh eget mauris congue mattis mattis nec <br className="max-md:hidden"/>{" "}
          tellus. Phasellus imperdiet elit eu magna.
        </p>
      </div>
      <div className="flex items-center max-md:mt-4">
        <InputField
          className={`h-[45px] w-[392px] max-lg:w-[200px]  flex-grow rounded-l-full border border-gray-300 px-4 py-2 focus:outline-none`}
          value=""
          onChange={(e) => e.target.value}
        />
        <Button
          variant="fill"
          className="z-20 -ml-5 rounded-full px-6 font-semibold text-white focus:outline-none max-lg:w-[120px]"
        >
          Subcribe
        </Button>
       
      </div>
    </section>
    </div>
  );
};

export default Newsletter;
