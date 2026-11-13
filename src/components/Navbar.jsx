function Navbar() {
  return (
    <nav className="navbar">
      <h1>ShopZone</h1>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-buttons">
        <button>Login</button>
        <button>🛒 Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;