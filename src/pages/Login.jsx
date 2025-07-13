import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "../store/userSlice";
import * as yup from "yup";
import Toast from "../components/Toast";

const schema = yup.object().shape({
  username: yup.string().required("帳號不可為空").min(4).max(50),
  password: yup.string().required("密碼不可為空").min(4).max(30),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";
  const showUnauth = location.state?.unauth;

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showUnauth) {
      setShowToast(true);
    }
  }, [showUnauth]);

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      navigate(from, { replace: true });
    } catch (err) {
      setShowToast(true);
    }
  };

  return (
    <div className="bg-gray-50 relative">
      {showToast && (
        <Toast message="請先登入才能訪問此頁面" time={1500} type="warning" />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 w-full rounded-xl overflow-hidden bg-white shadow-md">
        <div className="flex items-center justify-center p-6 sm:p-8">
          <div className="max-w-[400px] w-full">
            <div className="rounded-2xl">
              <h1 className="text-slate-900 text-center text-3xl font-semibold">登入</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">帳號</label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Enter user name"
                      {...register("username")}
                      className={`w-full text-sm border px-4 py-3 pr-8 rounded-md outline-blue-600 ${
                        errors.username ? "border-red-500 text-red-600" : "border-slate-300 text-slate-900"
                      }`}
                    />
                  </div>
                  {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>}
                </div>

                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">密碼</label>
                  <div className="relative flex items-center">
                    <input
                      type="password"
                      placeholder="Enter password"
                      {...register("password")}
                      className={`w-full text-sm border px-4 py-3 pr-8 rounded-md outline-blue-600 ${
                        errors.password ? "border-red-500 text-red-600" : "border-slate-300 text-slate-900"
                      }`}
                    />
                  </div>
                  {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 border-slate-300 rounded" />
                    <label htmlFor="remember-me" className="ml-3 text-sm text-slate-900">記住帳號</label>
                  </div>
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">忘記密碼?</a>
                </div>

                <div className="!mt-12">
                  <button type="submit" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none">
                    Sign in
                  </button>
                </div>

                <p className="text-slate-900 text-sm mt-6 text-center">
                  還沒有帳號?
                  <a href="#" className="text-blue-600 hover:underline ml-1 font-semibold">點我註冊</a>
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-gray-100 p-4">
          <div className="md:flex items-center justify-center bg-gray-100 p-4">
            <div className="group relative">
              <figure>
                <img
                  src="https://cdn.cybassets.com/s/files/18929/ckeditor/pictures/content_679f61eb-3abb-46f5-bee8-00c0dc8e9725.jpg"
                  alt="可愛貓咪"
                  className="w-72 md:w-96 h-auto rounded-lg cursor-pointer"
                />
              </figure>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 group-hover:flex">
                <div className="bg-orange-200 text-orange-600 font-bold px-3 py-1 rounded-full animate-bounce shadow">
                  我想要吃罐罐😿
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
