import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/slices/auth';

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectUser);
  return isLoggedIn
    ? children
    : window.alert('Vui lòng đăng nhập!') || <Navigate to="/login" />;
}

export default PrivateRoute;