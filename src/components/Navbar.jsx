import { Link } from 'react-router-dom';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-[#1E1E1E] text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-baseline">
          <span className="text-4xl font-serif font-bold">SM</span>
          <span className="ml-3 text-xl font-light">Sud Merkado</span>
        </Link>
        <div className="relative flex-grow max-w-xl mx-8">
          <input
            type="text"
            className="w-full bg-[#333333] text-white border border-gray-600 rounded-full py-2 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#D3D3D3]"
            placeholder="Search..."
            //  Use the props para mu control sa input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <Link to="/cart" className="relative p-2 hover:bg-gray-700 rounded-full transition-colors duration-300">
          <ShoppingCartIcon className="h-7 w-7 text-white" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;