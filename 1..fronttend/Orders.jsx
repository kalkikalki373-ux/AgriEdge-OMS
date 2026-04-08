import OrderCard from "../components/OrderCard";

const orders = [
  { id: 1, product: "Seeds", status: "Pending" },
  { id: 2, product: "Fertilizer", status: "Shipped" },
];

export default function Orders() {
  return (
    <div className="container">
      <h1>Orders</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
