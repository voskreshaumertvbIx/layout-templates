import React from 'react';
import { useProductContext } from '../../hooks/useProductContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
interface ShoppingcardProps {
  onClose: () => void;

}
const Cart: React.FC<ShoppingcardProps>=({onClose}) => {
  const navigate = useNavigate();
  const {cart, onDelete,calculateTotal, calculateProduct} = useProductContext();
  return (
    <div className="fixed right-0 top-0 h-full w-[400px] bg-white shadow-lg p-4 z-20">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold">Shopping Cart ({calculateProduct})</h2>
      <button onClick={onClose} className="text-gray-600">✖</button>
    </div>
    
    <div className="space-y-4 h-[75%] overflow-y-scroll scroll-auto scrollbar scrollbar-thumb-green-300 scrollbar-track-HardPrimary">
      {cart.map((cart, index) => (
        <div key={index} className="flex justify-between items-center border-b pb-2">
          <div className="flex items-center space-x-4">
            <img src={cart.image} alt={cart.name} className="w-12 h-12 object-cover" />
            <div>
              <h3 className="font-semibold">{cart.name}</h3>
              <p className="text-sm text-gray-600">{cart.quantity} kg x ${cart.discountPrice?.toFixed(2) || cart.price.toFixed(2)}</p>
            </div>
          </div>
          <button onClick={() => onDelete(cart.id)} className="text-gray-600 mr-3">✖</button>
        </div>
      ))}
    </div>
    
    <div className="flex justify-between items-center mt-4">
      <span>{calculateProduct} Product</span>
      <span className="text-lg font-bold">{calculateTotal(cart).toFixed(2)}$</span>
    </div>

    <div className="mt-6 space-y-2">
      <button onClick={()=>(navigate(ROUTES.checkout))} className="w-full bg-green-600 text-white py-2 rounded">Checkout</button>
      <button className="w-full bg-green-100 text-green-600 py-2 rounded">Go To Cart</button>
    </div>
  </div>
  );
}

export default Cart;
