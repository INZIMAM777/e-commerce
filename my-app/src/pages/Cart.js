import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart, totals } = useContext(CartContext);
  const navigate = useNavigate();

  const checkout = () => {
    alert("Order placed! (Demo)");
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: 16 }}>
        <h2>Your Cart</h2>
        <p>No items yet. <Link to="/">Shop now</Link></p>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Your Cart</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {cart.map((item) => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid #eee", paddingBottom: 8 }}>
            <strong style={{ minWidth: 160 }}>{item.name}</strong>
            <span>₹{item.price}</span>
            <label>
              Qty:
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
                style={{ width: 60, marginLeft: 6 }}
              />
            </label>
            <span style={{ marginLeft: "auto" }}>Subtotal: ₹{item.price * item.qty}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <h3>Total: ₹{totals.amount}</h3>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}
