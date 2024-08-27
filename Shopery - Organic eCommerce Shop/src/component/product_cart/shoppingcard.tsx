import React, { useState, useEffect } from 'react';

interface CartItem {
  name: string;
  image: string;
  price: number;
 
}

interface ShoppingcardProps {
  onClose: () => void;
}

const Shoppingcard: React.FC<ShoppingcardProps> = ({ onClose }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const storedCartTotal = parseFloat(localStorage.getItem('cartTotal') || '0');
    const storedCartCount = parseInt(localStorage.getItem('cartCount') || '0', 10);

    setCart(storedCart);
    setCartTotal(storedCartTotal);
    setCartCount(storedCartCount);
  }, []);

  const handleDeleteProduct = (indexDelete: number) => {
    const updatedCart = cart.filter((_, index) => index !== indexDelete);
    
    
    const updatedCartTotal = updatedCart.reduce((total, item) => total + item.price, 0);
    const updatedCartCount = updatedCart.length;

    
    setCart(updatedCart);
    setCartTotal(updatedCartTotal);
    setCartCount(updatedCartCount);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('cartTotal', updatedCartTotal.toFixed(2));
    localStorage.setItem('cartCount', updatedCartCount.toString());
  };

  return (
    <div className="fixed right-0 top-0 h-full w-[400px] bg-white shadow-lg p-4 z-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Shopping Cart ({cartCount})</h2>
        <button onClick={onClose} className="text-gray-600">✖</button>
      </div>
      
      <div className="space-y-4 h-[75%] overflow-y-scroll scroll-auto scrollbar scrollbar-thumb-green-300 scrollbar-track-HardPrimary">
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-2">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">1 kg x ${item.price.toFixed(2)}</p>
              </div>
            </div>
            <button onClick={() => handleDeleteProduct(index)} className="text-gray-600 mr-3">✖</button>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <span>{cartCount} Product{cartCount > 1 ? 's' : ''}</span>
        <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
      </div>

      <div className="mt-6 space-y-2">
        <button className="w-full bg-green-600 text-white py-2 rounded">Checkout</button>
        <button className="w-full bg-green-100 text-green-600 py-2 rounded">Go To Cart</button>
      </div>
    </div>
  );
};

export default Shoppingcard;
