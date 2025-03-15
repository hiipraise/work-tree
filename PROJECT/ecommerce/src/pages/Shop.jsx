import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

function Shop() {
  const [filter, setFilter] = useState('All');
  const { addToCart } = useCart();
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shop</h1>
      <select 
        onChange={e => setFilter(e.target.value)} 
        className="p-2 border mb-4"
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Audio">Audio</option>
      </select>
      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button 
              onClick={() => addToCart(product)} 
              className="bg-black text-white px-4 py-2 mt-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;