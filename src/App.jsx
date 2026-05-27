import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";

import Layout from "./layouts/Layout";
import "../styles/global.css";
import ProtectedRoute from "./components/ProtectRoutes";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((res) => res.json())

      .then((data) => {
        const formatted = data.jobs.map((job) => {
          
          const parts = (job.salary || "").split("-");
          const min = parts[0] || "";
          const max = parts[1] || "";
          const clearedMin = min.replace("$", "").replace("k", "");
          const clearedMax = max.replace("$", "").replace("k", "");
          const convertedMin = parseInt(clearedMin) || 0;
          const convertedMax = parseInt(clearedMax) || 0;

          return {
            id: job.id,

            title: job.title,

            company: job.company_name,

            location: job.candidate_required_location,

            url: job.url,

            description: job.description,

            salaryRaw: job.salary,

            salaryMin: convertedMin,

            salaryMax: convertedMax,

            tags: job.tags,

            logo: job.company_logo,

            
          };
        });

        setJobs(formatted);
        setLoading(false);
        })
        .catch(() => {
        setError("Failed to load jobs");
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer /> {/* the notes and windows */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Home jobs={jobs} loading={loading} error={error}></Home>
              }
            ></Route>
            <Route path="login" element={<Login />} />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile jobs={jobs}></Profile>
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
