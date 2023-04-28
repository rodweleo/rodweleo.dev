function handleClick() {
  alert(
    "Message sent successfully.\nWe will get back to you as soon as possible."
  );
}

export function MyButton() {
  return (
    <button className="btn" onClick={handleClick}>
      Send Message
    </button>
  );
}
