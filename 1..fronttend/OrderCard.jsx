export default function OrderCard({ order }) {
  return (
    <div className="card">
      <h3>Order #{order.id}</h3>
      <p>Product: {order.product}</p>
      <p>Status: {order.status}</p>
    </div>
  );
}
