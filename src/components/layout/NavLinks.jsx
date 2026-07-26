import { NavLink } from "react-router-dom";
import { NAVIGATION } from "../../constants/navigation";

function NavLinks() {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {NAVIGATION.map((item) => (
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
      ))}
    </nav>
  );
}

export default NavLinks;