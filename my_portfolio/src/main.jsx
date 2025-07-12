import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routing/routes.jsx";
import { Provider } from "react-redux";
// import store from "./store/store.js";
import store from "./store/thunkStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Original commented out code */}
    {/* <RouterProvider router={router} /> */}
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* <Router /> */}
    {/* </BrowserRouter> */}

    {/* New working code */}
    {/* <RouterProvider router={router} /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

// <App />
