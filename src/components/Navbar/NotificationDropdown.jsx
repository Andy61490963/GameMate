import { useEffect } from "react";
import feather from "feather-icons";

export default function NotificationDropdown() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="hidden lg:flex lg:gap-x-12">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <i data-feather="bell" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
        >
          <div className="card-body">
            <span className="text-lg font-bold">3 則通知</span>
            <span className="text-info">有三位用戶右滑您的檔案</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">查看</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
