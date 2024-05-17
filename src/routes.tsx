import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import App from "./App";
import Category from "./pages/Category";

interface CategoryParams {
    category: string
}

export function loader({ params }) {
    const category = params.category;
    return { category }
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { 
                index: true,
                element: <Home />,
            },
            {
                path: "category/:category",
                loader: loader,
                element: <Category />
            }
        ],
    }
]);