// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { Toaster } from "react-hot-toast";
// import Layout from "./Layout.jsx";
// import Home from "./projects/reactRouter/home/Home.jsx";
// import About from "./projects/reactRouter/about/About.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Contact from "./projects/reactRouter/contact/Contact";
// import User from "./projects/reactRouter/user/User";
// import Github from "./projects/reactRouter/github/Github";
// import {GithubDataLoader} from "./projects/reactRouter/github/Github";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "user/:id",
//         element: <User />,
//       },
//       {
//         loader: GithubDataLoader,
//         path: "github",
//         element: <Github />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App />  */}
//     <RouterProvider router={router} />
//     <Toaster position="top-right" reverseOrder={false} />
//   </StrictMode>
// );


// for context api 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> 
  </StrictMode>
);
