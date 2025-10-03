export default function ToggleButton({ id, isOpen, toggle }) {
  return (
    <button
      type="button"
      className={`open-toggle ${isOpen === id ? "open" : ""}`}
      onClick={() => toggle(id)}
      aria-expanded={isOpen === id}
    >
      ▸
    </button>
  );
}
