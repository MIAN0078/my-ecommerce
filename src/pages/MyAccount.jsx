function MyAccount({ user }) {
  return (
    <div className="my-account-page">
      <h1>My Account</h1>

      {user ? (
        <>
          <h3>Welcome, {user.name}</h3>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Please login to view your account.</p>
      )}
    </div>
  );
}

export default MyAccount;