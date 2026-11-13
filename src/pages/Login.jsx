function Login() {
  return (
    <div className="login-page">
      <h1>Login to ShopZone</h1>

      <form>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;