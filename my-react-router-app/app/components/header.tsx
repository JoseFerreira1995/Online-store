import { Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide uppercase">
          THE ONLINE STORE
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-medium" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink to="/store" className="hover:text-blue-600">
            Store
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-600">
            About
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <Link to="/cart">
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
}
