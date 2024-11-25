import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/auth/SignUp";
import PasswordReset from "../pages/auth/PasswordReset";
import ResetPage from "../pages/auth/ResetPage";
import DeleteAccount from "../pages/Auth/DeleteAccount";
import ProtectedRoute from '../components/ProtectedRoute';
import MainLayout from '../components/MainLayout';
import Home from "../pages/protected/Home";
import Profile from '../pages/protected/Profile';
import TestPage from '../pages/protected/TestPage';
import TestResultPage from '../pages/protected/TestResultPage';
import Intro from "../pages/Intro";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Intro Page */}
        <Route path="/" element={<Intro />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/reset-page" element={<ResetPage />} />
        <Route path="/delete-account" element={<DeleteAccount />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/results" element={<TestResultPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router