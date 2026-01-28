import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const authUser = useSelector((state) => state.auth?.user);
  const profileUser = useSelector((state) => state.user?.user);

  const user = profileUser || authUser;

  // verify if he is connected and is an admin
  if (!user || user.role !== 'ADMIN') {
    return <Navigate to="/profile" replace />; // go to homepage if not 
  }

  return <Outlet />; 
};

export default AdminRoute;