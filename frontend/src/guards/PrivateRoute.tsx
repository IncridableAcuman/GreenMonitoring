import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = () => {
  const token = localStorage.getItem("accessToken");
  return token ? <Outlet /> : <Navigate to={'/auth'} replace />;
};

export default PrivateRoute;
