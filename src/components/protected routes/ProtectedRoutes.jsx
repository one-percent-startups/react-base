import { Navigate, Outlet } from "react-router-dom";
import Cookie from "js-cookie";

const ProtectedRoute = () => {
  if (!!Cookie.get("shaping3DKey")) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
export default ProtectedRoute;
