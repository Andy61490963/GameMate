import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";

export default function UserDropdown({ token, onLogout }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    feather.replace();
  }, [open]);

  return (
    <div className="relative">
      <button className="pc-head-link" onClick={() => setOpen(!open)}>
        <i data-feather="user" />
      </button>
      {open && (
        <div className="dropdown-menu dropdown-menu-end pc-h-dropdown absolute right-0 mt-2 w-48 bg-black rounded shadow p-3 z-50">
          <div className="mb-2 border-b pb-2">
            <p className="font-semibold">Carson Darrin</p>
            <p className="text-xs text-gray-500">carson.darrin@company.io</p>
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/account" className="block hover:text-blue-600">My Account</Link></li>
            <li><Link to="/settings" className="block hover:text-blue-600">Settings</Link></li>
            <li><Link to="/support" className="block hover:text-blue-600">Support</Link></li>
            <li><Link to="/lock" className="block hover:text-blue-600">Lock Screen</Link></li>
            {token ? (
              <li>
                <button
                  type="button"
                  onClick={onLogout}
                  className="w-full text-left hover:text-red-600"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="block hover:text-blue-600">Login</Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
