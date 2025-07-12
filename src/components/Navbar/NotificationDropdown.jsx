import { useEffect } from "react";
import feather from "feather-icons";

export default function NotificationDropdown() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="relative group">
      <button className="pc-head-link relative">
        <i data-feather="bell" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
      </button>
      <div className="hidden group-hover:block absolute right-0 mt-2 w-[320px] max-h-[calc(100vh-150px)] overflow-y-auto bg-black rounded shadow p-4 z-50">
        <h4 className="font-bold mb-3">Notifications</h4>
        <div className="space-y-3">
          <div className="text-sm">🔔 UI/UX Design updated.</div>
          <div className="text-sm">📧 New message received.</div>
          <div className="text-sm">🔒 Security alert triggered.</div>
        </div>
      </div>
    </div>
  );
}