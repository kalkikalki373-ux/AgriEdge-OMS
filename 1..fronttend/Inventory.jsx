import InventoryCard from "../components/InventoryCard";

const inventory = [
  { id: 1, name: "Wheat", stock: 50 },
  { id: 2, name: "Rice", stock: 20 },
];

export default function Inventory() {
  return (
    <div className="container">
      <h1>Inventory</h1>
      {inventory.map((item) => (
        <InventoryCard key={item.id} item={item} />
      ))}
    </div>
  );
}
