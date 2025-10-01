import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert('Thank You for Buying!');
    clearCart();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-4">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-slate-400 text-lg mb-4">Your cart is empty.</p>
          <Link 
            to="/"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex justify-between items-center bg-slate-800 p-4 rounded-md border border-slate-700">
                <div className="flex items-center gap-4">
                  <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h2 className="font-semibold text-white">{item.title}</h2>
                    <p className="text-slate-400">₱{item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-slate-500 hover:text-red-500 transition-colors duration-300"
                  aria-label={`Remove ${item.title} from cart`}
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="flex justify-between text-xl font-bold">
              <span className="text-slate-300">Total</span>
              <span>₱{total.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;