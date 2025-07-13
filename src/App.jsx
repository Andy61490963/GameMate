import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Card from "./pages/Cards/Card1";

// Protected Pages
import Dashboard from "./pages/Dashboard";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts
import PublicLayout from "./layouts/PublicLayout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* 公開區（含首頁） */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />{" "}
            {/* 假設 Test 是 About 頁 */}
          </Route>

          {/* Dashboard 等內部頁面可再用另一個 MainLayout 包 */}
          <Route
            element={
              <ProtectedRoute>
                <PublicLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/card" element={<Card />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
