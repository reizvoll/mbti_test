import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/auth/Login';
import SignUp from "../pages/auth/SignUp";
import ProtectedRoute from '../components/ProtectedRoute';
import MainLayout from '../components/MainLayout';
import Home from "../pages/protected/Home";
import Profile from '../pages/protected/Profile';
import TestPage from '../pages/protected/TestPage';
import Intro from "../pages/Intro";
import TestResult from "../pages/protected/TestResult";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/results" element={<TestResult />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router