function Wishlist({ wishlist = [] }) {
  return (
    <div className="wishlist-page">
      <h1>My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((product) => (
          <div key={product.id} className="wishlist-item">
            <h3>{product.name}</h3>
            <p>Rs. {product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;