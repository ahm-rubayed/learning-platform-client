import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import ErrorRoute from "../../components/ErrorRoute/ErrorRoute";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Course from "../../Course/Course";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/courses",
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            }, 
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/course/:id",
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: "/course/:id",
                loader: ({params}) => fetch(`/http://localhost:5000/course/${params.id}`),

            }
        ]
    },
    {
        path: "*",
        element: <ErrorRoute></ErrorRoute>
    }
])