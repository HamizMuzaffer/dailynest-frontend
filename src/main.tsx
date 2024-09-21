import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import toast, { Toaster } from "react-hot-toast";
// Routes Config

import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";

import "./styles/globals.css";
// Redux Initialization
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </Provider>
  </StrictMode>
);
