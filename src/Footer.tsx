export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <form>
        <h4>Subscribe to my Newsletter</h4>
        <input type="email" name="subscriber" placeholder="123@gmail.com" />
        <button style={{ margin: "5px" }}>Subscribe</button>
      </form>
      <p>{`Copyright Rodwell Leo ${year}`}</p>
    </footer>
  );
}
