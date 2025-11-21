// import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/home";

// const root = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

// export default root;

import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../components/showcase";
import { RegistrationForm } from "../components/navbar";

const root = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register/:direction",
    element: <RegistrationForm />,
  },
]);

export default root;
