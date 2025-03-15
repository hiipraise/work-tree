import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="hero bg-gray-200 text-6xl font-bold text-black text-center py-20 mb-8">
        Welcome to E-Shop
      </div>
      <div className="grid grid-cols-3 gap-6">
        {products.slice(0, 6).map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border p-4 rounded shadow"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
