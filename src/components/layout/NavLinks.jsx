import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION } from "../../constants/navigation";

function NavLinks() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFoundingPartners = (e) => {
    e.preventDefault();

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
      scrollToSection();
    } else {
      navigate("/");

      setTimeout(scrollToSection, 150);
    }
  };

  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {NAVIGATION.map((item) => {
        if (item.name === "Founding Partners") {
          return (
            <a
              key={item.name}
              href="/#founding-partners"
              onClick={handleFoundingPartners}
              className="relative text-[15px] font-medium text-[#0F172A] transition-all duration-300 hover:text-[#B08D57]"
            >
              <div className="flex flex-col items-center">
                <span>{item.name}</span>

                <span className="mt-1 h-[2px] w-0 rounded-full bg-[#B08D57] transition-all duration-300 hover:w-full" />
              </div>
            </a>
          );
        }

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative text-[15px] font-medium transition-all duration-300 ${
                isActive
                  ? "text-[#B08D57]"
                  : "text-[#0F172A] hover:text-[#B08D57]"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex flex-col items-center">
                <span>{item.name}</span>

                <span
                  className={`mt-1 h-[2px] rounded-full bg-[#B08D57] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </div>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavLinks;