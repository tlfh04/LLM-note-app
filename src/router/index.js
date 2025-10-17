// import react-router-dom
import { createBrowserRouter } from "react-router-dom";

// Error Page Component
import NotFound from "../pages/NotFound";

// Auth Routes
import authRoutes from "./routes/authRoutes";
import rootRoutes from "./routes/rootRoutes";

// Create Router
const router = createBrowserRouter([
  ...rootRoutes,
  ...authRoutes,
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
