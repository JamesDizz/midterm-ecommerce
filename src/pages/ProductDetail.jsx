import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
const ProductDetail = () => {
  const { id } = useParams(); 
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.title} has been added to your cart!`);
    }
  };

  if (loading) {
    return <p className="text-center text-slate-400">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center text-slate-400">Product not found.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-5xl mx-auto">
      <div className="md:w-1/2">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="w-full rounded-lg shadow-lg border border-slate-700"
        />
      </div>

      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
        <p className="text-slate-400 mb-4">Brand: {product.brand}</p>
        
        <p className="text-lg text-slate-300 mb-6">{product.description}</p>
        
        <div className="mt-auto"> 
          <p className="text-3xl font-semibold text-white mb-4">
            ₱{product.price.toFixed(2)}
          </p>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;