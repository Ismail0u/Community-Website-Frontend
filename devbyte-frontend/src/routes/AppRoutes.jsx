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
import Contact from "@/pages/Contact.jsx";

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
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
}
