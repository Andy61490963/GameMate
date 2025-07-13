// components/Navbar/MobileMenu.jsx
import { NavLink, Link } from "react-router-dom";

export default function MobileMenu({ NAV_LINKS, isOpen, token, onLogout, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t shadow-md">
      <div className="space-y-1 p-4">
        {NAV_LINKS.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className="block text-gray-900 py-2"
            onClick={onClose}
          >
            {label}
          </NavLink>
        ))}
        {token ? (
          <button
            type="button"
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="block w-full text-left py-2 text-red-600"
          >
            登出
          </button>
        ) : (
          <Link
            to="/login"
            onClick={onClose}
            className="block py-2 text-blue-600"
          >
            登入
          </Link>
        )}
      </div>
    </div>
  );
}
