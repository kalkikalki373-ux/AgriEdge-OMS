export default function InventoryCard({ item }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>Stock: {item.stock}</p>
    </div>
  );
}
