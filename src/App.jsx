import { useState } from 'react'; //  Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  // Manage search state 
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="bg-[#1E1E1E] text-white min-h-screen">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;