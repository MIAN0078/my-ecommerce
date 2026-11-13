function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Have a question? Contact our ShopZone team.</p>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Write your message..." required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;