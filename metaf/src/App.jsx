import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Attendance from "./Components/Attendance";
import Home from "./Components/Home";
import WorkReport from "./Components/WorkReport";
import Courses from "./Components/Courses";
import Projects from "./Components/Projects";
import Profile from "./Components/Profile";
import Login from "./Components/Home/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import NotFound from "./pages/NotFound";

// Logout Functionality
function Logout() {
  localStorage.clear(); // Clear localStorage to remove authentication tokens
  return <Navigate to="/login" />;
}

// Register and Logout Route (if needed)
function RegisterAndLogout() {
  localStorage.clear();
  return <Navigate to="/register" />;
}

// App Component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Attendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workreport"
          element={
            <ProtectedRoute>
              <WorkReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
