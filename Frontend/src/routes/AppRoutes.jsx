import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

// Pages ke imports
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/landingPage/Home";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      {/* Toaster ko yahan rakhna sahi hai taaki notifications har jagah dikhen */}
      <Toaster position="top-center" reverseOrder={false} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;