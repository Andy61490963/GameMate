import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.user.token);
  return token ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
