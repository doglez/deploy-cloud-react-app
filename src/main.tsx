import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
