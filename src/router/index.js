// Page components
import AboutPg from "../pages/AboutPg";
import ContactPg from "../pages/ContactPg";
import HomePg from "../pages/HomePg";
import InventoryPg from "../pages/InventoryPg";
import GuidePg from "../pages/GuidePg";
import NoPg from "../pages/NoPg";
// Router components
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Router = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePg className="home"/>,
        },
        {
          path: "about",
          element: <AboutPg />,
        },
        {
          path: "contact",
          element: <ContactPg />,
        },
        {
          path: "inventory",
          element: <InventoryPg />,
        },
        {
          path: "guide",
          element: <GuidePg />
        },
        {
          path: "*",
          element: <NoPg />,
        },
      ]);
      return (
        <RouterProvider router={router}/>
      )
}
  
  export default Router;