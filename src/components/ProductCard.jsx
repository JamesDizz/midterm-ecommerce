import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleBuyNow = (event) => {
    event.stopPropagation();
    event.preventDefault();
    alert('Bought Successfully!');
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    addToCart(product);
    alert('Added to Cart');
  };

  return (
    <div className="bg-transparent border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 flex flex-col hover:border-[#D3D3D3] hover:shadow-xl hover:shadow-gray-700/20">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={product.thumbnail} alt={product.title} />
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold text-white truncate h-7">{product.title}</h3>
          <p className="text-slate-300 mt-1">₱{product.price.toFixed(2)}</p>
        </div>
      </Link>
     <div className="p-4 pt-0 flex space-x-2">
              <button
                  onClick={handleBuyNow}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                  Buy Now
              </button>
              <button
                  onClick={handleAddToCart}
                  className="w-full bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                  Add to Cart
              </button>
          </div>
    </div>
  );
};
export default ProductCard;