import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Characters from "./Components/Characters.jsx";
import Inscription from "./Components/Inscription.jsx";
import Planete from "./Components/Planete.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Characters",
    element: <Characters />,
  },
  {
    path: "/Inscription",
    element: <Inscription />,
  },
  {
    path: "/Planete",
    element: <Planete />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
