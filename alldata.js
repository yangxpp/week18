function AllData() {
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    highlightNavLink("nav-alldata"); // to highlight nav link
  });

  return (
    <>
      <h5>All Bank Accounts</h5>
      <br />
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {ctx.users.map((user) => (
            <div key={user.name} className="col">
              <Card
                outstyle="warning"
                header={user.name.toUpperCase() + "'s Account"}
                body={
                  <div style={{textAlign:"left"}}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>Balance: {user.balance}</p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
