import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routing/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Original commented out code */}
    {/* <RouterProvider router={router} /> */}
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* <Router /> */}
    {/* </BrowserRouter> */}

    {/* New working code */}
    <RouterProvider router={router} />
  </StrictMode>
);

// <App />
