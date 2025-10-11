import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import Signup from "@/pages/auth/Signup.jsx";
import Home from "@/pages/Home.jsx";
import CommunityGuidelines from "@/pages/CommunityGuidelines.jsx";
import Learning from "@/pages/Learning.jsx";
import Layout from "@/components/layout/Layout.jsx";
import About from "@/pages/About.jsx";
import FAQ from "@/pages/FAQ.jsx";
import Events from "@/pages/Events.jsx";
import Projects from "@/pages/Projects.jsx";
import Blogs from "@/pages/Blogs.jsx";
import ForgetPassword from "@/pages/auth/ForgetPassword.jsx";
import OtpVerification from "@/pages/auth/OtpVerification.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="communityGuidelines" element={<CommunityGuidelines />} />
        <Route path="learning" element={<Learning />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="events" element={<Events />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="otpVerification" element={<OtpVerification />} />
      </Route>
    </Routes>
  );
}
