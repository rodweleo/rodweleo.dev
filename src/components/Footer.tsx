export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <p>&copy; {`Rodwell Leo ${year}`}. All Rights Reserved | <a href="privacy-policy-link">Privacy Policy</a></p>
    </footer>
  );
}