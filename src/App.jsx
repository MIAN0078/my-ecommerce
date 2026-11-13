import { useState } from 'react'
import './App.css'

const products = [
  // CLOTHING
  { id: 1, name: 'Casual T-Shirt', category: 'Clothing', price: 1800, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500' },
  { id: 2, name: 'Denim Jacket', category: 'Clothing', price: 4500, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500' },
  { id: 3, name: 'Casual Hoodie', category: 'Clothing', price: 3200, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500' },
  { id: 4, name: 'Men Shirt', category: 'Clothing', price: 2200, image: 'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=500' },
  { id: 5, name: 'Jeans Pants', category: 'Clothing', price: 3500, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500' },
  { id: 6, name: 'Winter Sweater', category: 'Clothing', price: 2800, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500' },
  { id: 7, name: 'Summer Outfit', category: 'Clothing', price: 3000, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500' },

  // MOBILES
  { id: 8, name: 'Smart Watch', category: 'Mobiles', price: 3500, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
  { id: 9, name: 'Headphones', category: 'Mobiles', price: 2500, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
  { id: 10, name: 'Smart Phone', category: 'Mobiles', price: 35000, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500' },
  { id: 11, name: 'Wireless Earbuds', category: 'Mobiles', price: 4500, image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500' },
  { id: 12, name: 'Tablet', category: 'Mobiles', price: 28000, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500' },
  { id: 13, name: 'Digital Camera', category: 'Mobiles', price: 22000, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500' },
  { id: 14, name: 'Bluetooth Speaker', category: 'Mobiles', price: 5500, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500' },

  // LAPTOPS
  { id: 15, name: 'Gaming Laptop', category: 'Laptops', price: 125000, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500' },
  { id: 16, name: 'Office Laptop', category: 'Laptops', price: 95000, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500' },
  { id: 17, name: 'MacBook Style Laptop', category: 'Laptops', price: 145000, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500' },
  { id: 18, name: 'Computer Monitor', category: 'Laptops', price: 32000, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500' },
  { id: 19, name: 'Gaming Keyboard', category: 'Laptops', price: 6500, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500' },
  { id: 20, name: 'Wireless Mouse', category: 'Laptops', price: 1800, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500' },
  { id: 21, name: 'Laptop Desk Setup', category: 'Laptops', price: 85000, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500' },

  // SHOES
  { id: 22, name: 'Sports Shoes', category: 'Shoes', price: 4500, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
  { id: 23, name: 'Running Shoes', category: 'Shoes', price: 5500, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500' },
  { id: 24, name: 'Casual Sneakers', category: 'Shoes', price: 4000, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500' },
  { id: 25, name: 'White Sneakers', category: 'Shoes', price: 4800, image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500' },
  { id: 26, name: 'Leather Shoes', category: 'Shoes', price: 6500, image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500' },
  { id: 27, name: 'Training Shoes', category: 'Shoes', price: 5200, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500' },
  { id: 28, name: 'Fashion Sneakers', category: 'Shoes', price: 5800, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500' },
]

const categories = [
  { name: 'Clothing', icon: '👕' },
  { name: 'Mobiles', icon: '📱' },
  { name: 'Laptops', icon: '💻' },
  { name: 'Shoes', icon: '👟' },
]

function App() {
  const [search, setSearch] = useState('')
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('shopzone-wishlist') || '[]'))
  const [reviews, setReviews] = useState(() => JSON.parse(localStorage.getItem('shopzone-reviews') || '{}'))
  const [reviewDrafts, setReviewDrafts] = useState({})
  const [trackingInput, setTrackingInput] = useState('')
  const [trackedOrder, setTrackedOrder] = useState(null)
  const [accountOpen, setAccountOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [currentUser, setCurrentUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('shopzone-current-user') || 'null') }
    catch { return null }
  })
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
  })

  const handleAuthSubmit = (e) => {
    e.preventDefault()
    const email = authForm.email.trim().toLowerCase()
    const savedAccount = JSON.parse(localStorage.getItem('shopzone-demo-account') || 'null')

    if (authMode === 'signup') {
      if (savedAccount && savedAccount.email === email) {
        alert('Is email ka account pehle se bana hua hai. Login karein.')
        return
      }
      const account = { name: authForm.name.trim(), email, password: authForm.password }
      localStorage.setItem('shopzone-demo-account', JSON.stringify(account))
      localStorage.setItem('shopzone-current-user', JSON.stringify({ name: account.name, email }))
      setCurrentUser({ name: account.name, email })
      setAuthOpen(false)
      setAuthForm({ name: '', email: '', password: '' })
      alert('Account successfully create ho gaya!')
      return
    }

    if (!savedAccount || savedAccount.email !== email || savedAccount.password !== authForm.password) {
      alert('Email ya password ghalat hai. Pehle Signup karein.')
      return
    }
    const user = { name: savedAccount.name, email: savedAccount.email }
    localStorage.setItem('shopzone-current-user', JSON.stringify(user))
    setCurrentUser(user)
    setAuthOpen(false)
    setAuthForm({ name: '', email: '', password: '' })
  }

  const handleLogout = () => {
    localStorage.removeItem('shopzone-current-user')
    setCurrentUser(null)
    alert('Aap logout ho gaye hain.')
  }

  const toggleWishlist = (product) => {
    setWishlist(old => {
      const next = old.some(item => item.id === product.id)
        ? old.filter(item => item.id !== product.id)
        : [...old, product]
      localStorage.setItem('shopzone-wishlist', JSON.stringify(next))
      return next
    })
  }

  const submitReview = (productId) => {
    if (!currentUser) { setAuthMode('login'); setAuthOpen(true); alert('Review dene ke liye pehle Login karein.'); return }
    const draft = reviewDrafts[productId] || {}
    if (!draft.comment?.trim()) { alert('Please apna comment likhein.'); return }
    const next = { ...reviews, [productId]: [...(reviews[productId] || []), { name: currentUser.name, rating: Number(draft.rating || 5), comment: draft.comment.trim(), date: new Date().toLocaleDateString() }] }
    setReviews(next)
    localStorage.setItem('shopzone-reviews', JSON.stringify(next))
    setReviewDrafts({ ...reviewDrafts, [productId]: { rating: 5, comment: '' } })
    alert('Aapka review save ho gaya!')
  }

  const trackOrder = () => {
    const orders = JSON.parse(localStorage.getItem('shopzone-orders') || '[]')
    setTrackedOrder(orders.find(order => String(order.orderNumber) === trackingInput.trim()) || false)
  }

  const addToCart = (product) => {
    setCart(currentCart => {
      const existing = currentCart.find(item => item.id === product.id)

      if (existing) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const increaseQuantity = (id) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCart(currentCart =>
      currentCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart(currentCart =>
      currentCart.filter(item => item.id !== id)
    )
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity, 0
  )

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  )

  const delivery = subtotal === 0 || subtotal >= 5000 ? 0 : 250
  const total = subtotal + delivery

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const placeOrder = (e) => {
    e.preventDefault()

    if (cart.length === 0) return

    const order = {
      orderNumber: Date.now(),
      customer,
      items: cart,
      subtotal,
      delivery,
      total,
      payment: 'Cash on Delivery',
      date: new Date().toLocaleString(),
    }

    try {
      const oldOrders = JSON.parse(
        localStorage.getItem('shopzone-orders') || '[]'
      )

      localStorage.setItem(
        'shopzone-orders',
        JSON.stringify([...oldOrders, order])
      )

      setOrderPlaced(true)
      setCart([])
    } catch (error) {
      alert('Order save nahi ho saka. Browser storage check karein.')
    }
  }

  const closeCheckout = () => {
    setCheckoutOpen(false)
    setOrderPlaced(false)
    setCustomer({ name: '', phone: '', address: '' })
  }

  return (
    <div className="app">
      <div className="top-bar">
        Welcome to ShopZone — Your Online Shopping Store!
      </div>

      <header className="navbar">
        <h2 className="logo">Shop<span>Zone.</span></h2>

        <div className="search">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="button">Search</button>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#tracking">Track Order</a>
        </nav>

        {currentUser && <button className="auth-button" onClick={() => setAccountOpen(true)}>My Account</button>}
        <button className="wishlist-nav" onClick={() => document.getElementById("wishlist")?.scrollIntoView({ behavior: "smooth" })}>❤️ Wishlist ({wishlist.length})</button>
        <button
          className="cart-button"
          onClick={() => setCartOpen(true)}
        >
          🛒 Cart ({cartCount})
        </button>

        {currentUser ? (
          <div className="user-actions">
            <span className="welcome-user">Hi, {currentUser.name}</span>
            <button className="auth-button logout-button" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button className="auth-button" onClick={() => { setAuthMode('login'); setAuthOpen(true) }}>
            Login / Signup
          </button>
        )}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tagline">BIG SALE • BIG SAVINGS</p>
            <h1>Discover Your<br />Perfect Products</h1>
            <p>Shop the latest products at amazing prices.</p>
            <a href="#products" className="shop-btn">
              Shop Now →
            </a>
          </div>
          <div className="hero-emoji">🛍️</div>
        </section>

        <section className="categories" id="categories">
          <h2>Shop By Category</h2>
          <p className="section-subtitle">
            Explore our popular categories
          </p>

          <div className="category-list">
            <button
              type="button"
              className={`category-card ${selectedCategory === 'All' ? 'active-category' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              <span>🛍️</span>
              <h3>All Products</h3>
            </button>

            {categories.map(category => (
              <button
                type="button"
                className={`category-card ${selectedCategory === category.name ? 'active-category' : ''}`}
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
              >
                <span>{category.icon}</span>
                <h3>{category.name}</h3>
              </button>
            ))}
          </div>
        </section>

        <section className="products" id="products">
          <h2>Featured Products</h2>
          <p className="section-subtitle">
            Showing: {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </p>

          <div className="product-list">
            {filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <button className={`like-button ${wishlist.some(item => item.id === product.id) ? 'liked' : ''}`} onClick={() => toggleWishlist(product)} aria-label="Add to wishlist">{wishlist.some(item => item.id === product.id) ? '♥' : '♡'}</button>
                <h3>{product.name}</h3>

                <p className="price">
                  Rs. {product.price.toLocaleString()}
                </p>

                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
               <details className="review-box">
                  {(reviews[product.id] || []).map((review, index) => (
                    <div className="single-review" key={index}>
                      <strong>{review.name}</strong>
                      <p>{'⭐'.repeat(review.rating)}</p>
                      <p>{review.comment}</p>
                      <small>{review.date}</small>
                    </div>
                  ))}
                  <div className="review-form">
                    <select
                      value={reviewDrafts[product.id]?.rating || 5}
                      onChange={e => setReviewDrafts({
                        ...reviewDrafts,
                        [product.id]: {
                          ...reviewDrafts[product.id],
                          rating: e.target.value,
                        },
                      })}
                    >
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                    <textarea
                      placeholder="Write your review..."
                      value={reviewDrafts[product.id]?.comment || ''}
                      onChange={e => setReviewDrafts({
                        ...reviewDrafts,
                        [product.id]: {
                          ...reviewDrafts[product.id],
                          comment: e.target.value,
                        },
                      })}
                    />
                    <button onClick={() => submitReview(product.id)}>
                      Submit Review
                    </button>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        <section className="wishlist-section" id="wishlist">
          <h2>❤️ My Wishlist</h2>
          {wishlist.length === 0 ? (
            <p>Your wishlist is empty. Products ko heart button se save karein.</p>
          ) : (
            <div className="product-list">
              {wishlist.map(product => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">Rs. {product.price.toLocaleString()}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                  <button onClick={() => toggleWishlist(product)}>Remove ❤️</button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="tracking-section" id="tracking">
          <h2>📦 Track Your Order</h2>
          <p>Apna order number enter karein.</p>
          <div className="tracking-form">
            <input
              value={trackingInput}
              onChange={e => setTrackingInput(e.target.value)}
              placeholder="Enter Order Number"
            />
            <button onClick={trackOrder}>Track Order</button>
          </div>
          {trackedOrder === false && <p>Is order number ka order nahi mila.</p>}
          {trackedOrder && (
            <div className="tracking-result">
              <h3>Order Found!</h3>
              <p>Order Number: {trackedOrder.orderNumber}</p>
              <p>Customer: {trackedOrder.customer.name}</p>
              <p>Total: Rs. {trackedOrder.total.toLocaleString()}</p>
              <p>Status: Order Received (Cash on Delivery)</p>
            </div>
          )}
        </section>

        <section className="about-section" id="about">
          <h2>About ShopZone</h2>
          <p>
            ShopZone is your online shopping store. Yahan aap clothing,
            mobiles, laptops aur shoes asani se khareed sakte hain.
            Hamara maqsad aapko achi products aur asaan shopping experience
            dena hai.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <h2>Contact Us</h2>
          <p>ShopZone se rabta karne ke liye:</p>
          <p>Email: support@shopzone.example</p>
          <p>Phone: 0300-0000000</p>
        </section>

        <section className="faq-section" id="faq">
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>How can I place an order?</summary>
            <p>Product ko cart mein add karein aur checkout form fill karein.</p>
          </details>
          <details>
            <summary>What payment method is available?</summary>
            <p>Filhal Cash on Delivery available hai.</p>
          </details>
          <details>
            <summary>How can I track my order?</summary>
            <p>Checkout ke baad milne wala order number Track Order section mein enter karein.</p>
          </details>
          <details>
            <summary>How can I write a review?</summary>
            <p>Login karein, product ke Reviews section mein comment likhein aur submit karein.</p>
          </details>
        </section>
      </main>

      <footer className="footer">
        <h2>ShopZone.</h2>
        <p>Your trusted online shopping store.</p>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQ</a>
          <a href="#tracking">Track Order</a>
        </div>
        <p>© {new Date().getFullYear()} ShopZone. All rights reserved.</p>
      </footer>

      {cartOpen && (
        <div className="modal-overlay" onClick={() => setCartOpen(false)}>
          <div className="modal-content cart-modal" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setCartOpen(false)}>✕</button>
            <h2>🛒 Your Shopping Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map(item => (
                  <div className="cart-item" key={item.id}>
                    <div>
                      <strong>{item.name}</strong>
                      <p>Rs. {item.price.toLocaleString()}</p>
                    </div>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                ))}
                <hr />
                <p>Subtotal: Rs. {subtotal.toLocaleString()}</p>
                <p>Delivery: Rs. {delivery.toLocaleString()}</p>
                <h3>Total: Rs. {total.toLocaleString()}</h3>
                <button onClick={() => { setCartOpen(false); setCheckoutOpen(true) }}>
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {checkoutOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeCheckout}>✕</button>
            {orderPlaced ? (
              <div className="success-message">
                <h2>🎉 Order Placed Successfully!</h2>
                <p>Thank you for shopping with ShopZone.</p>
                <p>Your order has been saved in this browser.</p>
                <button onClick={closeCheckout}>Continue Shopping</button>
              </div>
            ) : (
              <>
                <h2>Checkout</h2>
                <h3>Total: Rs. {total.toLocaleString()}</h3>
                <form onSubmit={placeOrder}>
                  <input
                    required
                    placeholder="Your Name"
                    value={customer.name}
                    onChange={e => setCustomer({ ...customer, name: e.target.value })}
                  />
                  <input
                    required
                    placeholder="Phone Number"
                    value={customer.phone}
                    onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                  />
                  <textarea
                    required
                    placeholder="Complete Delivery Address"
                    value={customer.address}
                    onChange={e => setCustomer({ ...customer, address: e.target.value })}
                  />
                  <p>Payment Method: Cash on Delivery</p>
                  <button type="submit">Place Order</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {authOpen && (
        <div className="modal-overlay" onClick={() => setAuthOpen(false)}>
          <div className="modal-content auth-modal" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setAuthOpen(false)}>✕</button>
            <h2>{authMode === 'signup' ? 'Create Account' : 'Login to ShopZone'}</h2>
            <form onSubmit={handleAuthSubmit}>
              {authMode === 'signup' && (
                <input
                  required
                  placeholder="Your Name"
                  value={authForm.name}
                  onChange={e => setAuthForm({ ...authForm, name: e.target.value })}
                />
              )}
              <input
                required
                type="email"
                placeholder="Email Address"
                value={authForm.email}
                onChange={e => setAuthForm({ ...authForm, email: e.target.value })}
              />
              <input
                required
                minLength="6"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password (minimum 6 characters)"
                value={authForm.password}
                onChange={e => setAuthForm({ ...authForm, password: e.target.value })}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide Password' : 'Show Password'}
              </button>
              <button type="submit">
                {authMode === 'signup' ? 'Sign Up' : 'Login'}
              </button>
            </form>
            <p>
              {authMode === 'signup' ? 'Already have an account?' : "Don't have an account?"}
              <button onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}>
                {authMode === 'signup' ? 'Login' : 'Sign Up'}
              </button>
            </p>
            <small>Demo login only. Real secure login ke liye backend zaroori hai.</small>
          </div>
        </div>
      )}

      {accountOpen && currentUser && (
        <div className="modal-overlay" onClick={() => setAccountOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setAccountOpen(false)}>✕</button>
            <h2>My Account</h2>
            <p>Name: {currentUser.name}</p>
            <p>Email: {currentUser.email}</p>
            <p>Wishlist Items: {wishlist.length}</p>
            <button onClick={() => { setAccountOpen(false); handleLogout() }}>Logout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
                