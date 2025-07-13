// components/Navbar/DesktopMenu.jsx
import { NavLink } from "react-router-dom";

export default function DesktopMenu({ navLinks }) {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className="text-sm font-semibold bg-base-100 hover:text-gray-200"
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
