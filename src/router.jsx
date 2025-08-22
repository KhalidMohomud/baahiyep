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


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'service', element: <Services /> },
      { path: 'Portifole', element: <Portifole/> },
      { path: 'Contact', element: <Contact /> },

      { path: 'SingUp', element: <SingUp /> },
      { path: 'SingIn', element: <SingIn /> },
      { path: 'verify-email', element: <VerifyEmail /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        )
      },
    ],
  },
]);

export default router;