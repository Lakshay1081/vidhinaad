import { Menu } from "lucide-react";

function MobileMenu() {
  return (
    <button
      className="lg:hidden"
      aria-label="Open navigation menu"
    >
      <Menu size={28} />
    </button>
  );
}

export default MobileMenu;