export function Footer() {
  const year = new Date().getFullYear;
  return <p style={{ color: "red" }}>{ year }</p>;
}
