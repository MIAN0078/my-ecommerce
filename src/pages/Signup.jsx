function Signup() {
  return (
    <div className="signup-page">
      <h1>Create Your Account</h1>

      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Create Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;