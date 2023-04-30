import SubscribeForm from "./components/SubscribeForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <SubscribeForm />
      <p>{`Copyright Rodwell Leo ${year}`}</p>
    </footer>
  );
}
