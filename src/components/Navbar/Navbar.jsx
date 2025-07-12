// Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import feather from "feather-icons";
import ThemeSwitcher from "./ThemeSwitcher";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    feather.replace();
  }, [isOpen]);

  return (
    <header className="pc-header shadow bg-black z-50">
      <div className="header-wrapper flex max-sm:px-[15px] px-[25px] grow justify-between items-center h-16">
        {/* Left - Mobile Menu Button + Logo */}
        <div className="flex items-center gap-2">
          <button className="pc-head-link lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <i data-feather="menu"></i>
          </button>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-200">GameMate</span>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <NotificationDropdown />
          <UserDropdown token={token} onLogout={() => dispatch(logout())} />
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="sm:hidden bg-black border-t shadow">
          <div className="px-4 py-2 space-y-1">
            <NavLink to="/" className="block py-2" onClick={() => setIsOpen(false)}>首頁</NavLink>
            <NavLink to="/about" className="block py-2" onClick={() => setIsOpen(false)}>關於我們</NavLink>
            <NavLink to="/dashboard" className="block py-2" onClick={() => setIsOpen(false)}>控制台</NavLink>
            {token ? (
              <button
                type="button"
                onClick={() => {
                  dispatch(logout());
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-red-600"
              >
                登出
              </button>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2">
                登入
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}