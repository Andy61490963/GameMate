import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold text-green-800 mb-4">歡迎{ user?.name }這是 Dashboard 頁面</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        登出
      </button>
    </div>
  );
}

export default Dashboard;
