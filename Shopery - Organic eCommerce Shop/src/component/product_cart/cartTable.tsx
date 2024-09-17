import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../hooks/useProductContext";
import { ROUTES } from "../../routes/routes";
import Button from "../Reusable component/buttons";

const CartTable = () => {
  const { cart, onDelete, updateCartQuantity , calculateTotal} = useProductContext();
  const navigate = useNavigate();

  return ( 
  <section className="grid grid-cols-3 gap-5">
    <div className="mx-auto w-full rounded-md border-[1px] p-6 border-gray-100 bg-white col-span-2">
     
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-BodySmall font-regular uppercase text-gray-400 p-0">
            <th className="pb-4">Product</th>
            <th className="pb-4">Price</th>
            <th className="pb-4">Quantity</th>
            <th className="pb-4">Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="p-4">
          {cart.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="flex items-center space-x-4 py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-cover"
                />
                <span>{item.name}</span>
              </td>
              <td className="py-4">${item.price.toFixed(2)}</td>
              <td className="py-4">
                <div className="flex items-center space-x-2 border-[1px] rounded-full p-2 w-[60%]">
                  <button
                    onClick={() => updateCartQuantity(item.id, -1)}
                    className="rounded-full border w-8 h-8"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateCartQuantity(item.id, 1)}
                    className="rounded-full border w-8 h-8"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-4">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="py-4">
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-gray-500"
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate(ROUTES.categories)}
          className="rounded-md bg-gray-100 px-4 py-2"
        >
          Return to shop
        </button>
        <button className="rounded-md bg-gray-100 px-4 py-2 ">
          Update Cart
        </button>
      </div>
     
      
    </div> 
    <div className="w-[424px] h-[276px]  border-[1px] rounded-md p-6">
        <h1 className="text-BodyXL font-medium mb-5">Cart Total</h1>
        <div className="mt-2 flex flex-col text-BodySmall font-regular text-gray-700">
          <p className="mb-2 flex justify-between">
            Subtotal:{" "}
            <span className="font-medium text-gray-900">
              ${calculateTotal(cart).toFixed(2)}
            </span>
          </p>
          <p className=" flex justify-between border-t py-2">
            Shipping <span className="font-medium text-gray-900">Free</span>
          </p>
          <p className="flex justify-between border-t py-2 mb-5">
            Total
            <span className="text-BodyLarge font-semibold text-gray-900">
              ${calculateTotal(cart).toFixed(2)}
            </span>
          </p>
        </div>
        <Button onClick={()=>navigate(ROUTES.checkout)} className="w-full">Proceed to checkout</Button>
      </div>
    </section>
  );
};

export default CartTable;
