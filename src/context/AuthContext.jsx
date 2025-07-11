import { createContext, useContext, useState, useEffect } from "react";

/*setUser(...) 更新 useState    
        ↓
AuthContext.Provider 中的 value 改變
        ↓
所有使用 useAuth()（useContext(AuthContext)）的元件會重新 render
        ↓
useAuth() 拿到最新的 user
*/

// 創造一個「登入狀態的資料源」，可以讓任何地方透過 useContext(AuthContext) 取得
const AuthContext = createContext();

// 自訂 Hook
export const useAuth = () => useContext(AuthContext);

// 提供者元件
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // 登入使用者資訊
  const [loading, setLoading] = useState(true); // 初始化載入狀態

  // 初始化時檢查 token
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token && name) {
      setUser({ token, name });
    }
    setLoading(false);
  }, []);

  // 登入方法
  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("name", data.name);
    setUser(data);
  };

  // 登出方法
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;