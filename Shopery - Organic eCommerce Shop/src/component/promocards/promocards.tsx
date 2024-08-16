import React from "react";
import Badge from "../Reusable component/badge";
import Button from "../Reusable component/buttons";

const Promocards = () => {
  return (
    <section className="relative mt-[88px] flex">
      <div className="flex-1">
        <img src="./img/promocards/main.png" alt="main" />
      </div>
      <div className="absolute bottom-[30%] ml-[60px] flex-1 text-White">
        <h1 className="text-Heading02">
          Fresh & Healthy <br /> Organic Food
        </h1>
        <div className="border-l-[2px] border-SoftPrimary pl-3">
          <p className="mb-2 text-BodyXL font-medium">
            Sale up to{" "}
            <Badge variant="new" className="">
              30% OFF
            </Badge>{" "}
          </p>
          <p className="text-BodySmall font-regular">
            Free shipping on all your order.
          </p>
        </div>
        <Button
          className={`mt-[26px] w-[193px] bg-White`}
          variant="border"
          icon={true}
        >
          Shop now
        </Button>
      </div>
      <section>
        <div className="relative mb-6">
          <img src="/img/promocards/submain1.png" alt="" />
          <div className="absolute top-0 ml-8 mt-8 text-gray-900">
            <h2 className="text-BodySmall font-medium uppercase">
              summer sale
            </h2>
            <p className="text-Heading05 font-semibold uppercase">75% off</p>
            <p className="text-BodySmall font-regular text-gray-600">
              Only Fruit & Vegetable
            </p>
            <Button
              className={`absolute left-[-15%] top-[100%]`}
              variant="border"
              icon={true}
            >
              Shop now
            </Button>
          </div>
        </div>

        <div className="relative">
          <img src="/img/promocards/submain2.png" alt="" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-White">
            <p className="text-BodySmall uppercase font-medium">Best Deal</p>
            <h2 className="text-Heading05 font-semibold">
              Special Products <br /> Deal of the Month
            </h2>
            <Button variant="border" icon={true}>
              Shop now
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Promocards;
