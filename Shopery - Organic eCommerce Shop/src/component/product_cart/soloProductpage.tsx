import { useParams } from "react-router-dom";
import { Product, useProductContext } from "../../hooks/useProductContext";
import { useState } from "react";
import Button from "../Reusable component/buttons";
import Comments from "../Blog/comments";

const SoloProductpage = () => {
  const { products, onAdd } = useProductContext();
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActivetab] = useState<"description" | "information" | "feedback">("information");

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
    <section>
      <div className="flex items-center justify-center bg-opacity-50 text-black">
        <div className="relative flex h-[636px] w-[1200px] rounded-lg bg-white p-10">
          <section className="h-full w-1/2">
            <img
              src={selectProduct.image}
              className="h-full w-full object-scale-down"
              alt={selectProduct.name}
            />
          </section>
          <section className="flex h-full w-1/2 flex-col">
            <div className="border-b border-gray-100 border-opacity-70">
              <h1 className="mb-3 text-Heading04 font-medium">
                {selectProduct.name}
              </h1>
              <div className="mb-3 flex w-[48%] items-center">
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
                  className="w-full rounded-full bg-Primary px-6 py-2 text-BodyXL font-regular text-white"
                >
                  Add to Cart
                </Button>
              </div>
              <div className="relative">
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

    
      <div className="flex justify-center text-BodyMedium text-gray-500 border-b ">
        <button
          className={`${
            activeTab === "description"
              ? " border-b  border-Primary text-black"
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
        <article className="grid grid-cols-2 text-BodySmall font-regular text-gray-500 gap-[136px] mt-10">
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
                <li key={plus} className="mb-3 flex items-center last-of-type:m-0">
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
  
    <section className="w-[536px]">
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
 
</div>

        </article>
      )}

      {activeTab === "information" && (
        <section className="grid grid-cols-2 gap-[136px] mt-10">
          <div className="grid">
          <ul className="space-y-2 ">
            <li className="flex">
              <span className="font-medium w-32">Weight:</span>
              <span className="text-gray-700">03</span>
            </li>
            <li className="flex">
              <span className="font-medium w-32">Color:</span>
              <span className="text-gray-700">Green</span>
            </li>
            <li className="flex">
              <span className="font-medium w-32">Type:</span>
              <span className="text-gray-700">{selectProduct.type}</span>
            </li>
            <li className="flex">
              <span className="font-medium w-32">Category:</span>
              <span className="text-gray-700">Vegetables</span>
            </li>
            <li className="flex">
              <span className="font-medium w-32">Stock Status:</span>
              <span className="text-gray-700">Available (5,413)</span>
            </li>
            <li className="flex">
              <span className="font-medium w-32">Tags:</span>
              <span className="text-gray-700">
                {selectProduct.tags.join(", ")}
              </span>
            </li>
          </ul>
          </div>
          <section className="w-[536px]">
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

     
      {activeTab === "feedback" && 
      <section className="w-[65%] mt-5">
        <Comments/>
        </section>}
        <h1 className="mt-[80px] text-Heading05 text-gray-900 font-semibold text-center mb-5">Related Products</h1>
    </section>
  );
};

export default SoloProductpage;
