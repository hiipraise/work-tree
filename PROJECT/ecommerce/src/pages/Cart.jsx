import { useState } from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="sm:hidden bg-gray-200 p-2 rounded mb-4"
      >
        {isOpen ? 'Close Cart' : 'Open Cart'}
      </button>
      <div className={`fixed right-0 top-0 h-full bg-white p-4 shadow transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:static sm:translate-x-0 sm:w-1/3 sm:h-auto sm:shadow-none`}>
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center border p-2 mb-2">
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeFromCart(index)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Remove
                </button>
              </div>
            ))}
            <button className="bg-black text-white px-4 py-2 mt-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;