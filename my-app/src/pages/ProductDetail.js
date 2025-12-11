import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);
  const { addToCart } = useContext(CartContext);

  const containerStyle = {
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px"
  };

  const buttonStyle = {
    marginTop: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 14px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  if (!product) return <p style={{ padding: "20px" }}>Product not found.</p>;

  return (
    <div style={containerStyle}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
      />
      <div>
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <button style={buttonStyle} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
