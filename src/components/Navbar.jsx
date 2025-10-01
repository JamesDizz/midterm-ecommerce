import { Link } from 'react-router-dom';
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-[#1E1E1E] text-white shadow-md sticky top-0 z-10 p-4 sm:px-6">
      <div className="container mx-auto flex justify-between items-center flex-wrap gap-y-4">
        
        <Link to="/" className="flex items-baseline order-1">
          {/* 2. Optionally make logo text slightly smaller on mobile */}
          <span className="text-3xl sm:text-4xl font-serif font-bold">SM</span>
          <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-light">Sud Merkado</span>
        </Link>
        
        <Link to="/cart" className="relative p-2 hover:bg-gray-700 rounded-full transition-colors duration-300 order-2 md:order-3">
          <ShoppingCartIcon className="h-7 w-7 text-white" />
        </Link>
        
        <div className="relative w-full md:flex-grow max-w-xl mx-auto order-3 md:order-2">
          <input
            type="text"
            className="w-full bg-[#333333] text-white border border-gray-600 rounded-full py-2 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#D3D3D3]"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        
      </div>
    </nav>
  );
};
export default Navbar;