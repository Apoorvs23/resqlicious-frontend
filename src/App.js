// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../src/components/ProtectedRoute";
import { useAuth } from "./components/AuthContext";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import RestaurantDetailsPage from "./components/RestaurantDetailsPage";
import Cart from "./components/Cart";
import Order from "./components/Order";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  const { isAuthenticated, loading } = useAuth();

  return (
    <Router>
      {isAuthenticated && <Navbar />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<ProtectedRoute element={Home} />} />
        <Route path="/logout" element={<ProtectedRoute element={Logout} />} />
        <Route
          path="/restaurant/:id"
          element={<ProtectedRoute element={RestaurantDetailsPage} />}
        />
        <Route path="/cart" element={<ProtectedRoute element={Cart} />} />
        <Route path="/order" element={<ProtectedRoute element={Order} />} />
      </Routes>
    </Router>
  );
};

export default App;
