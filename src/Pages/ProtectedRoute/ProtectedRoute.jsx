import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserDetailContext } from "../../Usecontext/Usecontext";
const ProtectedRoute = () => {
  const {
    state: { userInfo },
  } = useContext(UserDetailContext);
  return userInfo?.email ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
