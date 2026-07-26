import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <img
        src={logo}
        alt="VIDHINAAD"
        className="h-12 w-auto"
      />

      <div className="hidden sm:block">
        <h2
          className="text-2xl font-semibold leading-none text-[#0F172A]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          VIDHINAAD
        </h2>

        <p className="mt-1 text-xs tracking-[0.25em] text-[#B08D57] uppercase">
          The Voice of Law
        </p>
      </div>
    </Link>
  );
}

export default Logo;