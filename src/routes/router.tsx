import App from "@/App";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Calender from "@/pages/Dashboard/Calender";
import Dashboard from "@/pages/Dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />
    },
    {
        path : "/home",
        element : <DashboardLayout />,
        children : [
            {
                path : "dashboard",
                element : <Dashboard />,
            },
            {
                path : "calender",
                element : <Calender />,
            }
        ]
    },
    {
        path : "/auth",
        element : <AuthLayout />,
        children : [
            {
                path : "login",
                element : <Login />
            },
            {
                path : "signup",
                element : <SignUp />
            }
        ]
    }
])





export default router 