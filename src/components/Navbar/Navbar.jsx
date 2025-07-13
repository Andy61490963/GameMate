// Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import feather from "feather-icons";
import ThemeSwitcher from "./ThemeSwitcher";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const NAV_LINKS = [
    { path: "/", label: "首頁" },
    { path: "/about", label: "關於我們" },
    { path: "/dashboard", label: "控制台" },
  ];

  useEffect(() => {
    feather.replace();
  }, [isOpen]);

  return (
    <header className="bg-base-100 shadow">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        {/* Left：Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-lg font-bold bg-base-100">GameMate</span>
          </Link>
        </div>

        {/* Mobile 漢堡選單按鈕 */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <i data-feather="menu"></i>
          </button>
        </div>

        {/* menu */}
        <Menu navLinks={NAV_LINKS} />

        {/* Right：使用者元件 */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <ThemeSwitcher />
          <NotificationDropdown />
          <UserDropdown token={token} onLogout={() => dispatch(logout())} />
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        NAV_LINKS={NAV_LINKS}
        isOpen={isOpen}
        token={token}
        onLogout={() => dispatch(logout())}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
}