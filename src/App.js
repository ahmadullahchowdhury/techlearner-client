import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Components/Error/Error';
import Courses from './Components/Courses/Courses';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import Terms from './Components/Terms/Terms';
import FAQ from './Components/FAQ/FAQ';
import Blog from './Components/Blog/Blog';
import CourseDetails from './Components/CourseDetails/CourseDetails';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "courses",
          element: <Courses></Courses>,
          loader:  ()=> {
            return fetch('https://nodejs-practise.vercel.app/courses')
          },
          errorElement: <Error></Error>
        },
        {
          path: "/",
          element: <Courses></Courses>,
          errorElement: <Error></Error>
        },
        {
          path: "/courses/:id",
          loader:  ( {params} )=> {
            return fetch(`http://localhost:5000/courses/${params.id}`)
          },
          element: <CourseDetails></CourseDetails>,
          errorElement: <Error></Error>
        },
        {
          path: "/orders",
          element: <PrivateRoute><Orders></Orders></PrivateRoute>,
          errorElement: <Error></Error>
        },
        {
          path: "login",
          element: <Login></Login>,
          errorElement: <Error></Error>
        },
        {
          path: "/register",
          element: <Register></Register>,
          errorElement: <Error></Error>
        },
        {
          path: "/terms",
          element: <Terms></Terms>,
          errorElement: <Error></Error>
        },
        {
          path: "faq",
          element: <FAQ></FAQ>,
          errorElement: <Error></Error>
        },
        {
          path: "blog",
          element: <Blog></Blog>,
          errorElement: <Error></Error>
        },
        { path: '*', element: <Error/>},
      ],
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
