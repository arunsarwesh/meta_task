import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";  
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile/profile"
import Attendance from "./components/Attendance/Attendance";
import ProjectPage from "./page/Project/Project";
import CoursesPage from './page/Course/Course';
import WorkReport from "./page/Workreport/Workreport";
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Login />

        } 
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/profile/:username" 
        element={
          <ProtectedRoute>
          <Profile />
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
        <Route path="/" element={<Profile />} />
        <Route path="/Project" element={<ProjectPage />} /> 
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/Workreport" element={<CoursesPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
