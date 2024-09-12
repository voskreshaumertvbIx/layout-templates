import React from "react";
import InputField from "../Reusable component/input";
import Button from "../Reusable component/buttons";

const Newsletter = () => {
  return (
    <section className="mt-[100px] flex items-center justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="text-BodyXXL font-semibold text-gray-900">
          Subcribe our Newsletter
        </h1>
        <p className="text-BodySmall font-regular text-gray-400">
          Pellentesque eu nibh eget mauris congue mattis mattis nec <br />{" "}
          tellus. Phasellus imperdiet elit eu magna.
        </p>
      </div>
      <div className="flex items-center">
        <InputField
          className={`h-[45px] w-[392px] flex-grow rounded-l-full border border-gray-300 px-4 py-2 focus:outline-none`}
          value=""
          onChange={(e) => e.target.value}
        />
        <Button
          variant="fill"
          className="z-20 -ml-5 rounded-full px-6 font-semibold text-white focus:outline-none"
        >
          Subcribe
        </Button>
        <div className="ml-[60px] flex items-center space-x-4">
          {["instagram", "pinterest", "twitter"].map((icon) => (
            <div
              key={icon}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full hover:bg-Primary"
            >
              <img
                className="h-[18px] w-[18px]"
                src={`/img/socials/${icon}.png`}
                alt={icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
