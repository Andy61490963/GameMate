import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import * as yup from "yup";

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

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      navigate("/dashboard");
    } catch (err) {
      alert("登入失敗：" + err);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full rounded-xl overflow-hidden bg-white shadow-md">
        {/* ✅ 左邊：登入表單區 */}
        <div className="flex items-center justify-center p-6 sm:p-8">
          <div className="max-w-[400px] w-full">
            <div className="rounded-2xl">
              <h1 className="text-slate-900 text-center text-3xl font-semibold">
                登入
              </h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-12 space-y-6"
              >
                {/* username */}
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">
                    帳號
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Enter user name"
                      {...register("username")}
                      className={`w-full text-sm border px-4 py-3 pr-8 rounded-md outline-blue-600 ${
                        errors.username
                          ? "border-red-500 text-red-600"
                          : "border-slate-300 text-slate-900"
                      }`}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="10" cy="7" r="6" />
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5z" />
                    </svg>
                  </div>
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                {/* password */}
                <div>
                  <label className="text-slate-900 text-sm font-medium mb-2 block">
                    密碼
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="password"
                      placeholder="Enter password"
                      {...register("password")}
                      className={`w-full text-sm border px-4 py-3 pr-8 rounded-md outline-blue-600 ${
                        errors.password
                          ? "border-red-500 text-red-600"
                          : "border-slate-300 text-slate-900"
                      }`}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    ></svg>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember me */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-slate-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 text-sm text-slate-900"
                    >
                      記住帳號
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    忘記密碼?
                  </a>
                </div>

                {/* submit */}
                <div className="!mt-12">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>

                {/* link */}
                <p className="text-slate-900 text-sm mt-6 text-center">
                  還沒有帳號?
                  <a
                    href="#"
                    className="text-blue-600 hover:underline ml-1 font-semibold"
                  >
                    點我註冊
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* ✅ 右邊：圖片區 */}
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
