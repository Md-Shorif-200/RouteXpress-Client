import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
        <AuthProvider>
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* react-tanstack query  */}
      <RouterProvider router={router} />
      <Toaster></Toaster> {/* react-hot-toast */}
    </QueryClientProvider>

        </AuthProvider>

  </StrictMode>
);
