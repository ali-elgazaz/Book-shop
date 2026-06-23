import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../assets/logo.png";

import { IoLanguageOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-[#3B2F4A] text-white">
      <div className="container-custom">
        {/* Top Footer */}
        <div className="flex items-center justify-between border-b border-white/20 pb-6">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="logo" />

              <span className="text-sm">Bookshop</span>
            </Link>

            <ul className="flex items-center gap-8 text-[15px] font-medium">
              <li>
                <Link to="/" className="text-[#F2A531]">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/books">Books</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6 text-xl">
            <FaFacebook className="cursor-pointer hover:opacity-80 transition" />

            <FaInstagram className="cursor-pointer hover:opacity-80 transition" />

            <FaYoutube className="cursor-pointer hover:opacity-80 transition" />

            <FaXTwitter className="cursor-pointer hover:opacity-80 transition" />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex items-center justify-between pt-6">
          <p className="text-sm text-white/80">
            &lt;Developed By&gt; EraaSoft &lt;All Copy Rights Reserved @2024
          </p>

          <div className="flex items-center gap-3">
            <IoLanguageOutline className="text-2xl" />

            <button className="border border-white/20 rounded-full px-5 py-2 text-sm text-white/70 flex items-center gap-10">
              English
              <span>{">"}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
