import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/Contact.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
      path: '/about',
      Component: About,
    },
    {
      path: "/contact",
      element: <Contact />,
    }
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
