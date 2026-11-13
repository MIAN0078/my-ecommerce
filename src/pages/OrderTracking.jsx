function OrderTracking() {
  return (
    <div className="order-tracking-page">
      <h1>Track Your Order 📦</h1>

      <form>
        <input
          type="text"
          placeholder="Enter your Order ID"
          required
        />
        <button type="submit">Track Order</button>
      </form>
    </div>
  );
}

export default OrderTracking;