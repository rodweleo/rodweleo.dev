import SubscribeForm from "../components/SubscribeForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <SubscribeForm />
      <p>{`Rodwell Leo ${year}`}</p>
    </footer>
  );
}
