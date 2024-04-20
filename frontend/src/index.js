import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Components/Navbar1/about/About";
import Contact from "./Components/Navbar1/contact/Contact";
import HelpCenter from "./Components/Navbar1/helpCenter/HelpCenter";
import Logins from "./Components/Pages/Logins.js";
import ShopCategory from "./Components/Pages/ShopCategory.js";
import Product from "./Components/Pages/Product.js";
import Cart from "./Components/Pages/Cart.js";
import Shop from "./Components/Pages/Shop.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop/>,
      },
      {
        path: "mens",
        element: <ShopCategory category="men" />,
      },
      {
        path: "womens",
        element: <ShopCategory category="women" />,
      },
      {
        path: "kids",
        element: <ShopCategory category="kid" />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "help",
        element: <HelpCenter />,
      },
    ],
  },
  {
    path: "login",
    element: <Logins />,
  },
  {
    path: "product",
    element: <Product />,
    children: [
      {
        path: ":productId",
        element: <Product />,
      },
    ],
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
