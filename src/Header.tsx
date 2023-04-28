const nav_bar = [
  { title: "Home", isActive: true, id: 1 },
  { title: "Projects", isActive: false, id: 2 },
  { title: "About", isActive: false, id: 3 },
  { title: "Contact", isActive: false, id: 4 },
];

function handleClick() {
  alert("You clicked me!");
}

const nav_items = nav_bar.map((nav_item) => (
  <li
    key={nav_item.id}
    style={{ color: nav_item.isActive ? "green" : "white" }}
    onClick={handleClick}
  >
    {nav_item.title}
  </li>
));

export function Header() {
  return (
    <header className="header">
      <h3>rodweleo.dev</h3>
      <ul className="nav_bar">{nav_items}</ul>
    </header>
  );
}
