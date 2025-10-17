// Layout Component
import AuthLayout from "../layouts/AuthLayout";

// Auth Page Component
import Login from "../pages/AuthPages/Login";
import Signup from "../pages/AuthPages/Signup";

// Route PATHS
import PATHS from "../constants/PATHS";

const authRoutes = [
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      { index: true, Component: Login },
      { path: PATHS.AUTH.SIGNUP, Component: Signup },
    ],
  },
];

export default authRoutes;
