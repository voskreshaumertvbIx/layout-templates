import { useParams } from "react-router-dom";
import { Product, useProductContext } from "../../hooks/useProductContext";
import { useState } from "react";
import Button from "../Reusable component/buttons";
import Comments from "../Blog/comments";

const SoloProductpage = () => {
  const { products, onAdd } = useProductContext();
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActivetab] = useState<
    "description" | "information" | "feedback"
  >("information");

  const pluses = [
    "100 g of fresh leaves provides.",
    "Aliquam ac est at augue volutpat elementum.",
    "Quisque nec enim eget sapien molestie.",
    "Proin convallis odio volutpat finibus posuere.",
  ];
  const selectProduct = products.find(
    (item: Product) => item.id === parseInt(id || "", 10),
  );

  const [quantity, setQuantity] = useState(
    selectProduct ? selectProduct.quantity || 1 : 1,
  );

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const totalPrice = (price: number, quantity: number) =>
    (price * quantity).toFixed(2);

  if (!selectProduct) {
    return <div>Product not found</div>;
  }

  return (
    <section className="container">
      <div className="flex items-center justify-center bg-opacity-50 text-black">
        <div className="relative flex h-[636px] w-[1200px] rounded-lg bg-white p-10 max-lg:h-auto max-lg:flex-col max-lg:items-center">
          <section className="h-full w-1/2">
            <img
              src={selectProduct.image}
              className="h-full w-full object-scale-down"
              alt={selectProduct.name}
            />
          </section>
          <section className="flex h-full w-1/2 flex-col max-lg:w-[95%]">
            <div className="border-b border-gray-100 border-opacity-70">
              <h1 className="mb-3 text-Heading04 font-medium max-sm:text-BodyXL">
                {selectProduct.name}
              </h1>
              <div className="mb-3 flex w-[48%] items-center max-xl:flex-col max-xl:items-start">
                <img src="/img/q.png" className="mr-1" alt="" />
                <p className="mr-3 text-BodySmall text-gray-600">4: Review</p>
                <p>SKU: 2,51,594</p>
              </div>
              <div>
                {selectProduct.discountPrice ? (
                  <div className="mb-5 flex text-BodyXL font-medium">
                    <p className="mr-1 text-gray-300 line-through">
                      ${totalPrice(selectProduct.price, quantity)}
                    </p>
                    <p className="text-HardPrimary">
                      ${totalPrice(selectProduct.discountPrice, quantity)}
                    </p>
                  </div>
                ) : (
                  <p className="mb-5 text-BodyXL font-medium text-HardPrimary">
                    ${totalPrice(selectProduct.price, quantity)}
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
                  <p className="mr-1 text-BodySmall font-regular">
                    Share item:
                  </p>
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
                  className="rounded-full bg-gray-50 px-4 py-2 text-BodyXL"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              <div className="w-2/3">
                <Button
                  size="large"
                  onClick={() => onAdd({ ...selectProduct, quantity })}
                  className="w-full rounded-full bg-Primary px-6 py-2 text-BodyXL font-regular text-white max-se:text-BodySmall"
                >
                  Add to Cart
                </Button>
              </div>
              <div className="relative max-md:hidden">
                <img
                  className="rounded-full hover:bg-Primary"
                  src="/img/Button.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <p>
                <span className="mb-3 text-BodySmall font-medium text-black">
                  Category:
                </span>
                <span className="text-BodySmall text-gray-500">
                  {selectProduct.type}
                </span>
              </p>
              <p>
                <span className="text-BodySmall font-medium text-black">
                  Tag:
                </span>
                <span className="text-BodySmall text-gray-500">
                  {selectProduct.tags.join(", ")}
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="flex justify-center border-b text-BodyMedium text-gray-500">
        <button
          className={`${
            activeTab === "description"
              ? "border-b border-Primary text-black"
              : ""
          } p-2`}
          onClick={() => setActivetab("description")}
        >
          Descriptions
        </button>
        <button
          className={`${
            activeTab === "information"
              ? "border-b border-Primary text-black"
              : ""
          } p-2`}
          onClick={() => setActivetab("information")}
        >
          Additional Information
        </button>
        <button
          className={`${
            activeTab === "feedback" ? "border-b border-Primary text-black" : ""
          } p-2`}
          onClick={() => setActivetab("feedback")}
        >
          Customer Feedback
        </button>
      </div>

      {activeTab === "description" && (
        <article className="mt-10 grid grid-cols-2 gap-[136px] text-BodySmall font-regular text-gray-500 max-xl:flex max-xl:gap-0 max-xl:p-4">
          <div className="grid gap-y-5">
            <p>
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
              posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
              vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet
              nisi porttitor vel. Etiam tincidunt metus vel dui interdum
              sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
              mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla
              facilisi. Nam scelerisque vitae justo a convallis. Morbi urna
              ipsum, placerat quis commodo quis, egestas elementum leo. Donec
              convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla
              elit.
            </p>
            <p>
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
              Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra
              velit, pellentesque tristique neque mi eget nulla. Proin luctus
              elementum neque et pharetra.
            </p>
            <ul>
              {pluses.map((plus) => (
                <li
                  key={plus}
                  className="mb-3 flex items-center last-of-type:m-0"
                >
                  <img className="mr-1" src="/img/Check.svg" alt="" />
                  {plus}
                </li>
              ))}
            </ul>
            <p>
              Cras et diam maximus, accumsan sapien et, sollicitudin velit.
              Nulla blandit eros non turpis lobortis iaculis at ut massa.
            </p>
          </div>
          <div>
            <section className="w-[536px] max-xl:hidden">
              <img src="/img/Video.png" alt="video" />
              <div className="mt-3 flex justify-around rounded-md border-2 border-gray-100 p-4">
                <div className="flex">
                  <img
                    className="mr-2"
                    src="/img/discount.svg"
                    alt="discount"
                  />
                  <span>
                    <p className="font-medium text-black">64% Discount</p>
                    <p>Save your 64% money with us</p>
                  </span>
                </div>
                <div className="flex">
                  <img className="mr-2" src="/img/organic.svg" alt="organic" />
                  <span>
                    <p className="font-medium text-black">100% Organic</p>
                    <p>100% Organic Vegetables</p>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </article>
      )}

      {activeTab === "information" && (
        <section className="mt-10 grid grid-cols-2 gap-[136px] max-xl:flex max-xl:items-center max-xl:justify-center">
          <div className="grid">
            <ul className="space-y-2">
              <li className="flex">
                <span className="w-32 font-medium">Weight:</span>
                <span className="text-gray-700">03</span>
              </li>
              <li className="flex">
                <span className="w-32 font-medium">Color:</span>
                <span className="text-gray-700">Green</span>
              </li>
              <li className="flex">
                <span className="w-32 font-medium">Type:</span>
                <span className="text-gray-700">{selectProduct.type}</span>
              </li>
              <li className="flex">
                <span className="w-32 font-medium">Category:</span>
                <span className="text-gray-700">Vegetables</span>
              </li>
              <li className="flex">
                <span className="w-32 font-medium">Stock Status:</span>
                <span className="text-gray-700">Available (5,413)</span>
              </li>
              <li className="flex">
                <span className="w-32 font-medium">Tags:</span>
                <span className="text-gray-700">
                  {selectProduct.tags.join(", ")}
                </span>
              </li>
            </ul>
          </div>
          <section className="w-[536px] max-xl:hidden">
            <img src="/img/Video.png" alt="video" />
            <div className="mt-3 flex justify-around rounded-md border-2 border-gray-100 p-4">
              <div className="flex">
                <img className="mr-2" src="/img/discount.svg" alt="discount" />
                <span>
                  <p className="font-medium text-black">64% Discount</p>
                  <p>Save your 64% money with us</p>
                </span>
              </div>
              <div className="flex">
                <img className="mr-2" src="/img/organic.svg" alt="organic" />
                <span>
                  <p className="font-medium text-black">100% Organic</p>
                  <p>100% Organic Vegetables</p>
                </span>
              </div>
            </div>
          </section>
        </section>
      )}

      {activeTab === "feedback" && (
        <section className="mt-5 w-[65%] max-sm:w-[80%] max-xl:m-auto">
          <Comments />
        </section>
      )}
      <h1 className="mb-5 mt-[80px] text-center text-Heading05 font-semibold text-gray-900">
        Related Products
      </h1>
    </section>
  );
};

export default SoloProductpage;
