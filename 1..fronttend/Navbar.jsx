import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>AgriEdge OMS</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/support">Support</Link>
      </div>
    </nav>
  );
}
