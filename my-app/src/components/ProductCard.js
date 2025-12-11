import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  };

  const buttonStyle = {
    marginTop: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  return (
    <div style={cardStyle}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "6px" }}
        />
        <h3 style={{ margin: "8px 0" }}>{product.name}</h3>
        <p style={{ margin: 0, color: "#555" }}>₹{product.price}</p>
      </Link>
      <button style={buttonStyle} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
