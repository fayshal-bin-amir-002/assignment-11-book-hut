import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BorrowedBooks from "../pages/BorrowedBooks";
import Login from "../pages/Login";

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
        element: <AllBooks></AllBooks>
      },
      {
        path: "/add-book",
        element: <AddBook></AddBook>
      },
      {
        path: "/borrowed-books",
        element: <BorrowedBooks></BorrowedBooks>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

export default router;