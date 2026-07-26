function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
      {children}
    </div>
  );
}

export default Container;