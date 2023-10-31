import Home from "./component/home";

import { createBrowserRouter } from "react-router-dom";

// Affectation des routes 

const router = createBrowserRouter([

  { path: "/", element: <Home /> },

]);

export default router;
