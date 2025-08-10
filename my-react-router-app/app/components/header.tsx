import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link, NavLink } from "react-router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="border-b sticky top-0 z-50 bg-white w-full">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 w-full max-w-full mx-auto">
        <Link to="/" className="text-xl font-bold tracking-wide uppercase">
          THE ONLINE STORE
        </Link>
        <nav className="hidden md:flex gap-6 text-sm flex-grow justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "hover:text-blue-600 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            className="hover:text-blue-600 transition-colors"
          >
            Store
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-blue-600 transition-colors"
          >
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <SearchIcon className="w-5 h-5 cursor-pointer" />
          <PersonIcon className="w-5 h-5 cursor-pointer" />
          <Link to="/bag">
            <ShoppingCartIcon />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden ml-4 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col px-4 py-2 gap-2">
            <li>
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "block text-blue-600 font-medium"
                    : "block hover:text-blue-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                onClick={closeMobileMenu}
                className="block hover:text-blue-600"
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className="block hover:text-blue-600"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}