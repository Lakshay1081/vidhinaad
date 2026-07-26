function Button({ children }) {
  return (
    <button className="rounded bg-black px-6 py-3 text-white transition hover:bg-neutral-800">
      {children}
    </button>
  );
}

export default Button;