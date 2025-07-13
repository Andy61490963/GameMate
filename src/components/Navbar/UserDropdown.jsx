import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";

export default function UserDropdown({ token, onLogout }) {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow"
        >
          <li>
            <Link to="/account" className="block"></Link>
            <a>個人檔案</a>
    
          </li>
          <li>
            <Link to="/settings" className="block"></Link>
            <a>Settings</a>

          </li>
          {token ? (
            <li>
              <button
                type="button"
                onClick={onLogout}
                className="w-full text-left"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="block">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
