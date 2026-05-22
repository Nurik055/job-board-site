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
  

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((res) => res.json())

      .then((data) => {
        const formatted = data.jobs.map((job) => ({
          id: job.id,

          title: job.title,

          company: job.company_name,

          location: job.candidate_required_location,

          url: job.url,

          description: job.description,

          salary: job.salary = parsedIn,
          
          tags: job.tags,
        }));

        setJobs(formatted);
      });
  }, []);

  let a = salary.split("-")[0];
  let b = salary.split("-")[1];
  const parts = [a,b];
  const replaced = salary.replace("$","").replace("k", "");
  const parsedIn = replaced.parseInt("a", "b");



  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer /> {/* the notes and windows */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home jobs={jobs}></Home>}></Route>
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
