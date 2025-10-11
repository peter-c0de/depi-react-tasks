import { createBrowserRouter } from "react-router";

// Layouts
import MainLayout from "../Layout/MainLayout/MainLayout";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";

// Pages
import Home from "./../pages/Home/Home";
import Cart from "./../pages/Cart/Cart";
import Category from "./../pages/Category/Category";
import ProductDetails from "./../pages/ProductDetails/ProductDetails";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
import NotFound from "./../pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
    //     path: "/",
    //     // element: <Home />,
    //     // element: <div>Hello World</div>,
    //     Component: Home,
    // },
    // {
    //     path: "/cart",
    //     Component: Cart,
    // },
        path: "/",
        children: [
            {
                Component: MainLayout,
                children: [
                    {
                        index: true,
                        Component: Home,
                    },
                    {
                        path: "cart",
                        Component: Cart,
                    },
                    {
                        path: "category",
                        Component: Category,
                    },
                    {
                        path: "*",
                        Component: NotFound,
                    },
                    {
                        path: "product-details/:id",
                        Component: ProductDetails,
                    },
                ]
            },
            {
                Component: AuthLayout,
                children: [
                    {
                        path: "login",
                        Component: Login,
                    },
                    {
                        path: "register",
                        Component: Register,
                    },
                ],
            },
        ],
    },

]);

export default router;