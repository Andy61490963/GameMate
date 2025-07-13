import { useEffect, useState } from "react";

export default function Toast({ message, time = 3000, type = "warning" }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  if (!visible) return null;

  const typeClass =
    {
      success: "alert-success",
      error: "alert-error",
      warning: "alert-warning",
      info: "alert-info",
    }[type] || "alert-info";

  return (
    <div className="toast toast-end toast-bottom z-50 fixed right-4 bottom-4">
      <div className={`alert ${typeClass} shadow-lg`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
}
