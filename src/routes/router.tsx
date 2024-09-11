import App from "@/App";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />
    },
    {
        path : "/auth",
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