import { useEffect } from "react";
import feather from "feather-icons";

export default function ThemeSwitcher() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="relative group">
      <button className="pc-head-link" aria-haspopup="true">
        <i data-feather="sun" />
      </button>
      <div className="absolute right-0 mt-2 w-36 bg-black rounded shadow hidden group-hover:block z-50">
        <button
          className="dropdown-item w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
          onClick={() => document.documentElement.classList.add("dark")}
        >
          <i data-feather="moon" />
          <span>Dark</span>
        </button>
        <button
          className="dropdown-item w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100"
          onClick={() => document.documentElement.classList.remove("dark")}
        >
          <i data-feather="sun" />
          <span>Light</span>
        </button>
      </div>
    </div>
  );
}