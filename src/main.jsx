import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccueilPage from "./Components/AccueilPage.jsx";

import Characters from "./Components/Characters.jsx";
import MatchScreen from "./Components/MatchScreen.jsx";
import Inscription from "./Components/Inscription.jsx";
import Planete from "./Components/Planete.jsx";
import Welcome from "./Components/Welcome.jsx";
import Page4 from "./Components/Page4.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AccueilPage",
    element: <AccueilPage />,
  },
  {
    path: "/Characters",
    element: <Characters />,
  },
  {
    path: "/MatchScreen",
    element: <MatchScreen />,
  },
  {
    path: "/Inscription",
    element: <Inscription />,
  },
  {
    path: "/Planete",
    element: <Planete />,
  },
  {
    path: "/Welcome",
    element: <Welcome />,
  },

  {
    path: "/Page4",
    element: <Page4 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
