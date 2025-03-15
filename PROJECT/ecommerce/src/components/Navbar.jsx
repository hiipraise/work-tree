import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Obi’s E-Shop</Link>
      <div className="space-x-6">
        <Link to="/shop" className="text-gray-700 hover:text-black">Shop</Link>
        <Link to="/categories" className="text-gray-700 hover:text-black">Categories</Link>
        <Link to="/blog" className="text-gray-700 hover:text-black">Blog</Link>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-700 hover:text-black">🔍</button>
        <Link to="/cart" className="text-gray-700 hover:text-black relative">
          🛒 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cart.length}</span>
        </Link>
        <Link to="/account" className="text-gray-700 hover:text-black">👤</Link>
      </div>
    </nav>
  );
}

export default Navbar;