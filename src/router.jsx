import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./page/NotFound";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import Contact from "./page/Content";
import SingUp from  "./page/SingUp";
import SingIn from "./page/SingIn";
import Portifole from "./page/Portifole";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import VerifyEmail from "./page/VerifyEmail";
import Payments from "./page/Payments";
import ServiceDetail from "./components/ServiceDetail";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/service/:title', element: <ServiceDetail /> },
      { path: '/service', element: <Services /> },
      { path: '/Portifole', element: <Portifole/> },
      { path: '/Contact', element: <Contact /> },
      { path: '/payments', element: <Payments /> },
     
      { path: '/SingUp', element: <SingUp /> },
      { path: '/SingIn', element: <SingIn /> },
      { path: 'verify-email', element: <VerifyEmail /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        )
      },
      // Catch-all route for unmatched paths
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;