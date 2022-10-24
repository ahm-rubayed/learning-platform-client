import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import ErrorRoute from "../../components/ErrorRoute/ErrorRoute";
import Home from "../../Home/Home";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            }, 
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorRoute></ErrorRoute>
    }
])