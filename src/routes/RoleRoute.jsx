import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RoleRoute = ({ allowedLevel, children }) => {
  const { user } = useAuth();
  return user && user.level === allowedLevel ? children : <Navigate to="/" />;
};

export default RoleRoute;