import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./page/NotFound";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import Contact from "./page/Content";
import Portifole from "./page/Portifole";

import ProtectedRoute from "./components/ProtectedRoute";

import Payments from "./page/Payments";
import InformtionSevices from "./page/InformtionSevices";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/service/:title', element: <InformtionSevices /> },
      { path: '/service', element: <Services /> },
      { path: '/Portifole', element: <Portifole/> },
      { path: '/Contact', element: <Contact /> },
      { path: '/payments', element: <Payments /> },
     
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
        
          </ProtectedRoute>
        )
      },
      // Catch-all route for unmatched paths
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;