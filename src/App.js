import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"))

const Footer = () => {
  return (
    <div className="footer">
      <div>Links</div>
      <div>Links</div>
      <div>Links</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    {/* // <UserContext.Provider value={{loggedinUser:"vanna"}}> */}
    <div className="container">
      <Header />
      <Outlet/>
      <Footer />
    </div>
    {/* // </UserContext.Provider> */}
    </Provider>
  );
};

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout/>,
  errorElement: <Error/>,
  children:[
    {
      path: "/",
      element: <Body/>,
    },
    {
      path: "/grocery",
      element: <Suspense fallback={<h1>LOADING....</h1>}><Grocery/></Suspense>,
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: "/restaurant/:resId",
      element: <RestaurantMenu />
    },
  ]
},

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
