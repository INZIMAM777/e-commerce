import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { totals } = useContext(CartContext);

  const navStyle = {
    display: "flex",
    gap: "16px",
    padding: "12px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fafafa"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ ...linkStyle, fontWeight: "bold" }}>MyShop</Link>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/cart" style={linkStyle}>
        Cart ({totals?.count || 0})
      </Link>
    </nav>
  );
}
