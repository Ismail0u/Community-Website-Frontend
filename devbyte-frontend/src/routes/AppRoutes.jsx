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
import ResetPassword from "@/pages/auth/ResetPassword.jsx";
import TermsOfService from "@/pages/TermsOfService.jsx";
import PrivacyPolicy from "@/pages/PrivacyPolicy.jsx";
import Jobs from "@/pages/Jobs.jsx";
import BlogDetails from "@/components/Blogs/BlogDetails.jsx";

import UserProfile from "@/pages/UserProfile.jsx";

import Member from "@/pages/Member.jsx";
import Contact from "@/pages/Contact.jsx";
import AdminDashboard from "@/pages/AdminDashboard.jsx";
import AdminLayout from "@/components/layout/adminLayout.jsx";
import AuthLayout from "@/components/layout/authLayout.jsx";
import ProjectDetails from "@/features/projects/ProjectDetails.jsx";
import Error400 from "@/pages/ErrorPage.jsx";
import MemberListPage from "@/features/adminDashboard/memberRoleToggleComponents/memberListPage.jsx";
import PageNotFound from "@/pages/PageNotFound.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="communityGuidelines" element={<CommunityGuidelines />} />
        <Route path="learning" element={<Learning />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="events" element={<Events />} />
        <Route path="projects" element={<Projects />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog-details/:id" element={<BlogDetails />} />
        <Route path="members" element={<Member />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="policy" element={<PrivacyPolicy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project-details/:id" element={<ProjectDetails />} />
        <Route path="error" element={<Error400 type="network" />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="otpVerification" element={<OtpVerification />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>

      <Route path="/" element={<AdminLayout />}>
        <Route path="adminDashboard" element={<AdminDashboard />} />
        <Route path="membersList" element={<MemberListPage />} />
      </Route>
    </Routes>
  );
}
