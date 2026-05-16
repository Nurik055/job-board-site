import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"
import { ToastContainer } from "react-toastify";

import Layout from "./layouts/Layout";
import "../styles/global.css";
import ProtectedRoute from "./components/ProtectRoutes"

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";



function App() {
  return (
    
    <BrowserRouter>
    <AuthProvider>
      <ToastContainer /> {/* the notes and windows */}
      <Routes>
        <Route path="/" element={<Layout / >}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="profile" element={
            <ProtectedRoute>
            <Profile />
            </ProtectedRoute>
            } />
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
