import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.jsx";
import About from "./components/about/About.jsx";
import MainSection from "./components/mainSection/mainSection.jsx";
import Contactus from "./components/contactUs/Contactus.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainSection />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contactus />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
