import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart, totals } = useContext(CartContext);
  const navigate = useNavigate();

  const containerStyle = { padding: "20px" };
  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderBottom: "1px solid #eee",
    paddingBottom: "8px"
  };
  const inputStyle = { width: "60px", marginLeft: "6px" };
  const checkoutStyle = {
    marginTop: "16px",
    backgroundColor: "#ffc107",
    padding: "10px 14px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  const checkout = () => {
    alert("Order placed! (Demo)");
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div style={containerStyle}>
        <h2>Your Cart</h2>
        <p>No items yet. <Link to="/">Shop now</Link></p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h2>Your Cart</h2>
      <div style={{ display: "grid", gap: "12px" }}>
        {cart.map((item) => (
          <div key={item.id} style={itemStyle}>
            <strong style={{ minWidth: "160px" }}>{item.name}</strong>
            <span>₹{item.price}</span>
            <label>
              Qty:
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
                style={inputStyle}
              />
            </label>
            <span style={{ marginLeft: "auto" }}>Subtotal: ₹{item.price * item.qty}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "16px" }}>
        <h3>Total: ₹{totals.amount}</h3>
        <button style={checkoutStyle} onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}
