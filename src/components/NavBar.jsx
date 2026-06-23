import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-35 py-6 z-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center border-r border-white/30 pr-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Book Shop Logo" className="w-8 h-8" />
              <h1 className="text-[16px] font-semibold">Book Shop</h1>
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-10 text-[18px] font-semibold pl-6">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/books">Books</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-3 text-[12px]">
          <Link
            to="/login"
            className="btn btn-secondary rounded-lg text-[12px]"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="btn btn-outline btn-secondary rounded-lg text-[12px]"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
