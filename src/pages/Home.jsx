import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url = searchTerm
        ? `https://dummyjson.com/products/search?q=${searchTerm}`
        : 'https://dummyjson.com/products?limit=100';
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]); 
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();

  }, [searchTerm]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'price-asc') return a.price - b.price;
    if (sortOrder === 'price-desc') return b.price - a.price;
    if (sortOrder === 'name-asc') return a.title.localeCompare(b.title);
    if (sortOrder === 'name-desc') return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div>
      <div className="flex justify-end mb-8">
        <select 
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-[#333333] border border-gray-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#D3D3D3]"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;