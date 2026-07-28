import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E2D8] bg-[#F8F6F2]/95 backdrop-blur-md">
      <Container>
        <div className="relative flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden rounded-lg bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1E293B] lg:inline-flex"
            >
              Book Consultation
            </Link>

            <MobileMenu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;