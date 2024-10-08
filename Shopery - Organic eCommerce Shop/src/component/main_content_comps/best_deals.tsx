import React from "react";
import Timer from "../Reusable component/timer";
import Button from "../Reusable component/buttons";
import Badge from "../Reusable component/badge";

const BestDeals = () => {
  return (
    <div className="container m-auto">
      <section className="flex flex-wrap justify-between max-xl:justify-around">
        <div className="flex h-[536px] w-[424px] flex-col items-center justify-start space-y-4 rounded-lg bg-[url('/img/deals/bestdeals.png')] p-8 max-sm:w-[360px]">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-BodyMedium font-regular uppercase text-white">
              Best Deals
            </p>
            <h1 className="text-Heading03 font-semibold text-white max-2xl:text-Heading05">
              Sale of the Month
            </h1>
            <Timer initialTime={1000000} />
          </div>
          <Button
            icon={true}
            variant="border"
            className="text-GreenPrimary flex items-center justify-center bg-white"
          >
            Shop Now
          </Button>
        </div>

        <div className="flex h-[536px] w-[424px] flex-col items-center justify-start rounded-lg bg-[url('/img/deals/fatfree.png')] p-8 max-sm:w-[360px] max-md:mt-10">
          <p className="text-BodyMedium font-regular uppercase text-white">
            85% Fat Free
          </p>
          <h1 className="text-Heading03 font-semibold text-white max-2xl:text-Heading05">
            Low-Fat Meat
          </h1>
          <p className="mt-2 text-BodyLarge font-regular text-white">
            Started at{" "}
            <span className="text-BodyXL font-semibold text-Warning">
              $79.99
            </span>
          </p>
          <Button
            icon={true}
            variant="border"
            className="text-GreenPrimary mt-6 flex items-center justify-center bg-white"
          >
            Shop Now
          </Button>
        </div>

        <div className="flex h-[536px] w-[424px] flex-col items-center justify-start rounded-lg bg-[url('/img/deals/Summer.png')] p-8 text-gray-900 max-sm:w-[360px] max-xl:mt-10">
          <p className="text-BodyMedium font-medium uppercase">Summer Sale</p>
          <h1 className="text-Heading03 font-semibold max-2xl:text-Heading05">
            100% Fresh Fruit
          </h1>
          <p className="mt-2 text-BodyLarge font-regular">
            Up to{" "}
            <span>
              <Badge
                className={`text-BodyLarge font-semibold text-Warning`}
                variant="out"
              >
                64% OFF
              </Badge>
            </span>
          </p>
          <Button
            icon={true}
            variant="border"
            className="text-GreenPrimary mt-6 flex items-center justify-center bg-white"
          >
            Shop Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BestDeals;
