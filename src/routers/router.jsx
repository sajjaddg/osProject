import { createBrowserRouter } from "react-router-dom";
import Root from "./rootPage/rootPage";
import HomePage from "./homePage/homePage";
import CalculatePage from "./calculatePage/calculatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index:true,
        element: <HomePage />,
      },
      {
        path:'/calculate',
        element:<CalculatePage/>
      },
    ],
  },
]);
export default router;
