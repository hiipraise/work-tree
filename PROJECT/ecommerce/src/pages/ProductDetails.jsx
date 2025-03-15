import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <img src={product.img} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-xl">${product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-black text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;