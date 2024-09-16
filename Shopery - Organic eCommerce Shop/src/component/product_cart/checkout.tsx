import React from "react";
import { useProductContext } from "../../hooks/useProductContext";
import Button from "../Reusable component/buttons";

const Checkout = () => {
  const { cart, calculateTotal } = useProductContext();
  return (
    <section className="grid grid-cols-3">
      <div className="col-span-2">
        <div className="mx-auto max-w-4xl rounded-md bg-white p-6 ">
          <h2 className="mb-6 text-BodyXXL font-medium">Billing Information</h2>

          <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-BodySmall font-regular">
                First name
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-BodySmall font-regular">
                Last name
              </label>
              <input
                type="text"
                placeholder="Your last name"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-BodySmall font-regular">
                Company Name (optional)
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-BodySmall font-regular">
              Street Address
            </label>
            <input
              type="text"
              placeholder="Street address"
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-3 text-BodySmall font-regular">
            <div>
              <label className="mb-1 block ">
                Country / Region
              </label>
              <select className="w-full rounded-md border border-gray-300 p-2">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block ">States</label>
              <select className="w-full rounded-md border border-gray-300 p-2">
                <option>Selects</option>
              </select>
            </div>
            <div className="text-BodySmall font-regular">
              <label className="mb-1 block ">Zip Code</label>
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2 text-BodySmall font-regular">
            <div>
              <label className="mb-1 block ">Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="mb-1 block">Phone</label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>

          <div className="mb-4 border-b pb-4">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2" />
              Ship to a different address
            </label>
          </div>

          <h3 className="mb-4 text-BodyXXL font-medium">Additional Info</h3>

          <div className="mb-4">
            <label className="mb-1 block text-BodySmall font-regular">
              Order Notes (Optional)
            </label>
            <textarea
              placeholder="Notes about your order, e.g. special notes for delivery"
              className="h-32 w-full rounded-md border border-gray-300 p-2"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="col-span-1 w-full border-[1px] border-gray-100 p-6 rounded-md mt-6">
        <h1 className="text-BodyXL font-medium">Order Summery</h1>
        {cart.map((cart) => (
          <div className="flex w-[100%] items-center text-BodySmall font-regular">
            <img className="h-[60px] w-[60px]" src={cart.image} alt="product" />
            <p className="">
              {cart.name} x{cart.quantity}
            </p>
            {cart.discountPrice ? (
              <p className="ml-auto font-medium">
                ${(cart.discountPrice * cart.quantity).toFixed(2)}
              </p>
            ) : (
              <p className="ml-auto font-medium">
                ${(cart.price * cart.quantity).toFixed(2)}
              </p>
            )}
          </div>
        ))}
        <div className="mt-2 flex flex-col text-BodySmall font-regular text-gray-700">
          <p className="mb-2 flex justify-between">
            Subtotal:{" "}
            <span className="font-medium text-gray-900">
              ${calculateTotal(cart).toFixed(2)}
            </span>
          </p>
          <p className="mb-1 flex justify-between border-t py-2">
            Shipping <span className="font-medium text-gray-900">Free</span>
          </p>
          <p className="flex justify-between border-t py-2">
            Total
            <span className="text-BodyLarge font-semibold text-gray-900">
              ${calculateTotal(cart).toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex flex-col text-BodySmall text-gray-700">
          <h1 className="mb-4 text-BodyXL font-medium text-gray-900">
            Payment Method
          </h1>
          <label className="mb-1 flex items-center" htmlFor="">
            <input className="mr-1 h-4 w-4" type="radio" />
            Cash delivery
          </label>
          <label className="mb-1 flex items-center" htmlFor="">
            <input className="mr-1 h-4 w-4" type="radio" />
            Paypal
          </label>
          <label className="mb-5 flex items-center" htmlFor="">
            <input className="mr-1 h-4 w-4" type="radio" />
            Amazon Pay
          </label>

          <Button className="w-full">Place Order</Button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
