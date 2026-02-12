import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";



import BookAppointment from "../pages/patient/BookAppointment";








const AppRoutes = () => {
  const location = useLocation();

  return (
   
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
        <Route path="/BookAppointment" element={<BookAppointment />} />
        
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;