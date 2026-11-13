function FAQ() {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>

      <details>
        <summary>How can I place an order?</summary>
        <p>Add products to your cart and complete the checkout form.</p>
      </details>

      <details>
        <summary>Which payment method is available?</summary>
        <p>Currently, Cash on Delivery is available.</p>
      </details>

      <details>
        <summary>How can I track my order?</summary>
        <p>Enter your Order ID on the Order Tracking page.</p>
      </details>
    </div>
  );
}

export default FAQ;