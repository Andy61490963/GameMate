import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/test";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts
import PublicLayout from "./layouts/PublicLayout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Login 畫面 */}
          <Route element={<PublicLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Dashboard 等內部頁面可再用另一個 MainLayout 包 */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
