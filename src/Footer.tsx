export function Footer() {
  const year = new Date().getFullYear();

  return <footer><hr/>{`Copyright Rodwell Leo ${year}`}</footer>;
}
