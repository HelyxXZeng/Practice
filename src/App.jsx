import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "signup",
      element: (
        <div className=" flex justify-center items-center h-screen flex-col">
          <span className="text-2xl text-text-blue-main">
            Sign Up Page is under construction
          </span>
          ,
          <Link to={"/"}>
            {" "}
            <span className="underline text-blue-400 text-xl">Go Back</span>
          </Link>
        </div>
      ),
    },
    {
      path: "forgotPassword",
      element: (
        <div className=" flex justify-center items-center h-screen flex-col">
          <span className="text-2xl text-text-blue-main">
            Forgot Password Page is under construction
          </span>
          ,
          <Link to={"/"}>
            {" "}
            <span className="underline text-blue-400 text-xl">Go Back</span>
          </Link>
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
