import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 6 }}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <h3 style={{ margin: "8px 0" }}>{product.name}</h3>
        <p style={{ margin: 0 }}>₹{product.price}</p>
      </Link>
      <button style={{ marginTop: 8 }} onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}
