import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginApi } from "../api/authApi";

import * as yup from "yup";

// 驗證規則
const schema = yup.object().shape({
  username: yup
    .string()
    .required("帳號不可為空")
    .min(4, "帳號至少要 4 碼")
    .max(20, "帳號不可超過 20 碼")
    .matches(/^[a-zA-Z0-9_]+$/, "帳號只能包含英數字與底線"),

  password: yup
    .string()
    .required("密碼不可為空")
    .min(4, "密碼至少要 4 碼")
    .max(30, "密碼不可超過 30 碼"),
});

// 模擬帳號資料
const userList = [
  { username: "admin", password: "1234", token: "aaa" },
  { username: "kimi", password: "5678", token: "bbb" },
];

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const result = await loginApi(data.username, data.password);
      login(result);
      navigate("/dashboard");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login 
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              帳號
            </label>
            <input
              {...register("username")}
              placeholder="輸入帳號"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              密碼
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="請輸入密碼"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
          >
            登入
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          還沒有帳號？
          <a href="#" className="text-blue-600 hover:underline">
            註冊
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
