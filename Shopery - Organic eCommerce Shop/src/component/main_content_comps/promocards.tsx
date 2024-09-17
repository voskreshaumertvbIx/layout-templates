import React, { useState, useEffect } from "react";
import Badge from "../Reusable component/badge";
import Button from "../Reusable component/buttons";

const Promocards = () => {
  const [imageSizes, setImageSizes] = useState({
    main: { width: "0px", height: "0px" },
    submain1: { width: "0px", height: "0px" },
    submain2: { width: "0px", height: "0px" },
  });

  useEffect(() => {
    const images = [
      { key: "main", src: "/img/promocards/main.png" },
      { key: "submain1", src: "/img/promocards/submain1.png" },
      { key: "submain2", src: "/img/promocards/submain2.png" },
    ];

    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        setImageSizes((prevSizes) => ({
          ...prevSizes,
          [image.key]: { width: img.width + "px", height: img.height + "px" },
        }));
      };
    });
  }, []);

  return (
    <section className="mt-12 grid grid-cols-3 gap-2">
      <div
        className="col-span-2 flex items-center bg-cover bg-center text-White"
        style={{
          width: imageSizes.main.width,
          height: imageSizes.main.height,
          backgroundImage: "url('/img/promocards/main.png')",
        }}
      >
        <section className="ml-[60px]">
          <h1 className="text-Heading02">
            Fresh & Healthy <br /> Organic Food
          </h1>
          <div className="border-l-[2px] border-SoftPrimary pl-3">
            <p className="mb-2 text-BodyXL font-medium">
              Sale up to <Badge variant="new">30% OFF</Badge>{" "}
            </p>
            <p className="text-BodySmall font-regular">
              Free shipping on all your order.
            </p>
          </div>
          <Button
            className="mt-[26px] w-[193px] bg-White"
            variant="border"
            icon={true}
          >
            Shop now
          </Button>
        </section>
      </div>

      <section>
        <div
          className="mb-6 flex flex-col justify-start bg-cover bg-center p-4 text-gray-900"
          style={{
            width: imageSizes.submain1.width,
            height: imageSizes.submain1.height,
            backgroundImage: "url('/img/promocards/submain1.png')",
          }}
        >
          <h2 className="text-BodySmall font-medium uppercase">summer sale</h2>
          <p className="text-Heading05 font-semibold uppercase">75% off</p>
          <p className="text-BodySmall font-regular text-gray-600">
            Only Fruit & Vegetable
          </p>
          <Button className="-ml-6 mt-4" variant="border" icon={true}>
            Shop now
          </Button>
        </div>

        <div
          className="flex flex-col items-center justify-center bg-cover bg-center p-4 text-white"
          style={{
            width: imageSizes.submain2.width,
            height: imageSizes.submain2.height,
            backgroundImage: "url('/img/promocards/submain2.png')",
          }}
        >
          <p className="text-BodySmall font-medium uppercase">Best Deal</p>
          <h2 className="text-Heading05 font-semibold">
            Special Products <br /> Deal of the Month
          </h2>
          <Button variant="border" icon={true}>
            Shop now
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Promocards;
