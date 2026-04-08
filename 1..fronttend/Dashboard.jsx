export default function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="grid">
        <div className="card">Total Orders: 120</div>
        <div className="card">Pending Orders: 15</div>
        <div className="card">Inventory Items: 300</div>
        <div className="card">Low Stock Alerts: 8</div>
      </div>
    </div>
  );
}
