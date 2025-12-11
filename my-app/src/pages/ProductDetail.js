import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);
  const { addToCart } = useContext(CartContext);

  if (!product) return <p style={{ padding: 16 }}>Product not found.</p>;

  return (
    <div style={{ padding: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", maxWidth: 400, objectFit: "cover", borderRadius: 8 }}
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
      <div>
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}
