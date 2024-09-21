import React, { useState } from "react";
import { Product, useProductContext } from "../../hooks/useProductContext";
import Button from "../Reusable component/buttons";

interface QuickViewModalProps {
  product: Product | undefined;
  isOpen?: boolean;
  onClose?: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(product?.quantity || 1);
  const { onAdd } = useProductContext();
  if (!isOpen || !product) {
    return null;
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      console.log(product);
    }
  };

  const totalPrice = (price: number, quantity: number) =>
    (price * quantity).toFixed(2);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 text-black mx-4">
      <div className="relative flex h-[636px] w-[1200px] rounded-lg bg-white p-10 shadow-lg max-lg:p-5 max-md:flex-col max-md:items-center max-md:h-auto max-se:w-[370px] ">
        <section className="h-full w-1/2 max-lg:w-[350px] max-md:justify-center max-md:flex overflow-y-auto">
          <img
            src={product.image}
            className="h-full w-full object-scale-down max-lg:w-3/4"
            alt={product.name}
          />
        </section>
        <section className="flex h-full w-1/2 flex-col max-md:w-full ">
          <div className="border-b border-gray-100 border-opacity-70">
            <h1 className="mb-3 text-Heading04 font-medium max-lg:text-BodyXXL">{product.name}</h1>
            <div className="mb-3 flex w-[48%] items-center max-xl:flex-col max-xl:items-start ">
              <img src="/img/q.png" className="mr-1" alt="" />
              <p className="mr-3 text-BodySmall text-gray-600">4: Review</p>
              <p>SKU: 2,51,594</p>
            </div>
            <div>
              {product.discountPrice ? (
                <div className="mb-5 flex text-BodyXL font-medium">
                  <p className="mr-1 text-gray-300 line-through">
                    ${totalPrice(product.price, quantity)}
                  </p>
                  <p className="text-HardPrimary">
                    ${totalPrice(product.discountPrice, quantity)}
                  </p>
                </div>
              ) : (
                <p className="mb-5 text-BodyXL font-medium text-HardPrimary">
                  ${totalPrice(product.price, quantity)}
                </p>
              )}
            </div>
          </div>
          <div className="border-b border-gray-100">
            <div className="mt-6 flex justify-between">
              <div className="flex items-center">
                <p className="mr-1 text-BodySmall font-regular">Brand:</p>
                <img src="/img/brr.svg" alt="Brand" />
              </div>
              <div className="flex items-center">
                <p className="mr-1 text-BodySmall font-regular">Share item:</p>
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
            <p className="my-4 text-BodySmall font-regular text-gray-500">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4 border-b border-gray-100 pb-4">
            <div className="flex items-center rounded-full border-[1px] p-1 px-3">
              <button
                className="rounded-full bg-gray-50 px-4 py-2 text-BodyXL"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <p className="mx-2 text-BodyMedium font-medium">{quantity}</p>
              <button
                className="rounded-full bg-gray-50 px-4 py-2 text-BodyXL max-lg:text-BodyLarge"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            <div className="w-2/3">
              <Button
                size="large"
                onClick={() => onAdd({ ...product, quantity })}
                className="w-full rounded-full bg-Primary px-6 py-2 text-BodyXL font-regular text-white"
              >
                Add to Cart
              </Button>
            </div>
            <div className="relative max-lg:hidden">
              <img
                className="rounded-full hover:bg-Primary"
                src="/img/Button.svg"
                alt=""
              />
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute right-[30px] h-[40px] w-[40px] rounded-full border-[1px] max-md:top-[30px] max-"
          >
            ✖
          </button>
          <div className="mt-5 flex flex-col">
            <p>
              {" "}
              <span className="mb-3 text-BodySmall font-medium text-black">
                Category:
              </span>{" "}
              <span className="text-BodySmall text-gray-500">
                {product.type}
              </span>
            </p>
            <p>
              {" "}
              <span className="text-BodySmall font-medium text-black">
                Tag:
              </span>{" "}
              <span className="text-BodySmall text-gray-500">
                {product.tags.join(", ")}
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuickViewModal;
