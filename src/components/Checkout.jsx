function Checkout({ total, onPlaceOrder }) {
  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <h3>Total: Rs. {total}</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onPlaceOrder();
        }}
      >
        <input
          type="text"
          placeholder="Your Full Name"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
        />

        <textarea
          placeholder="Delivery Address"
          required
        />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;