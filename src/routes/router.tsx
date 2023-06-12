import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
        ],
    },
]);

export default router;
