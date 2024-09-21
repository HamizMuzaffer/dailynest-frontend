import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

const DashboardLayout = () => {
  const { authToken} = useAuthContext();

  if (!authToken?.token) {
    return <Navigate to={"/auth/login"} replace />;
  }
  return (
    <div><Outlet/></div>
  )
}

export default DashboardLayout