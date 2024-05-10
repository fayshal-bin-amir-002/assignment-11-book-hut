import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BorrowedBooks from "../pages/BorrowedBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";
import BookDetails from "../pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/all-books",
        element: <PrivetRoute><AllBooks></AllBooks></PrivetRoute>
      },
      {
        path: "/add-book",
        element: <PrivetRoute><AddBook></AddBook></PrivetRoute>
      },
      {
        path: "/borrowed-books",
        element: <PrivetRoute><BorrowedBooks></BorrowedBooks></PrivetRoute>
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
        path: "/book-details/:id",
        element: <PrivetRoute><BookDetails></BookDetails></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/book-details/${params.id}`)
      }
    ]
  },
]);

export default router;