import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "../../constants/navigation";

function MobileMenu({ isOpen, setIsOpen }) {
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, setIsOpen]);

  const handleFoundingPartners = () => {
    setIsOpen(false);

    const scrollToSection = () => {
      const section = document.getElementById("founding-partners");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (location.pathname === "/") {
      setTimeout(scrollToSection, 150);
    } else {
      navigate("/");
      setTimeout(scrollToSection, 250);
    }
  };

  return (
    <div className="lg:hidden" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="rounded-lg p-2 text-[#0F172A] transition hover:bg-[#E8E2D8]"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`absolute left-0 top-20 w-full border-t border-[#E8E2D8] bg-[#F8F6F2] shadow-lg transition-all duration-300 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6">
          {NAVIGATION.map((item) => {
            if (item.name === "Founding Partners") {
              return (
                <button
                  key={item.name}
                  onClick={handleFoundingPartners}
                  className="border-b border-[#E8E2D8] py-4 text-left text-base font-medium text-[#0F172A] transition hover:text-[#B08D57]"
                >
                  {item.name}
                </button>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`border-b border-[#E8E2D8] py-4 text-base font-medium transition ${
                  location.pathname === item.path
                    ? "text-[#B08D57]"
                    : "text-[#0F172A] hover:text-[#B08D57]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 rounded-lg bg-[#0F172A] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#1E293B]"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;