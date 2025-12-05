import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bgImage from "@/assets/images/auth-bg2.webp";
import { forgotPassword, resetAuthState } from "@/redux/features/authSlice";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, successMessage } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      return;
    }

    try {
      await dispatch(forgotPassword(email.trim())).unwrap();
      // Store email for OTP verification page
      localStorage.setItem("resetEmail", email.trim());
    } catch (err) {
      console.error("Forgot password failed:", err);
    }
  };

  // Reset auth state when component mounts
  useEffect(() => {
    dispatch(resetAuthState());
    
    return () => {
      // Clean up on unmount if needed
    };
  }, [dispatch]);

  // Redirect to OTP page on success
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        navigate("/otpVerification", { state: { email: email.trim() } });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate, email]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative w-full max-w-5xl mx-4 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl bg-white/10">
        {/* Left: Glass Form Section */}
        <div className="p-10 flex flex-col justify-center text-white">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold">Forgot Password</h2>
            <p className="text-md mt-1 text-gray-200">
              Enter your email to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              required
            />
            
            {error && (
              <div className="text-red-400 text-sm text-center p-2 bg-red-400/10 rounded-lg">
                {typeof error === 'string' ? error : error?.message || "Something went wrong"}
              </div>
            )}
            
            {successMessage && (
              <div className="text-green-400 text-sm text-center p-2 bg-green-400/10 rounded-lg">
                {successMessage}
              </div>
            )}
            
            <button 
              type="submit"
              disabled={loading || !email.trim()}
              className="mt-5 relative text-[17px] w-full font-medium px-10 py-4 bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-[cubic-bezier(0,0,0.2,1)] group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
              <span className="relative z-10">
                {loading ? "Sending..." : "Send Reset Link"}
              </span>
            </button>
          </form>

          <p className="text-center text-sm text-gray-300 mt-6">
            <a
              href="/login"
              className="text-yellow-400 hover:underline font-medium"
            >
              Back to Login
            </a>
          </p>
        </div>

        {/* Right: DevByte Info Section */}
        <div className="bg-white dark:bg-[#0D1117] text-gray-800 dark:text-[#ffffff] flex flex-col justify-center p-10">
          <h3 className="text-2xl font-bold mb-4">
            Reset Your Journey with DevByte 
          </h3>
          <p className="text-gray-600 dark:text-[#ffffff] leading-relaxed">
            Passwords are temporary, but your passion to build is forever.
            DevByte helps you reconnect with innovation — empowering developers
            to learn, collaborate, and create the future.
          </p>
          <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-[#ffffff]">
            <p className="font-medium">What happens next:</p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li>Check your email for a 6-digit OTP code</li>
              <li>Enter the OTP on the next screen</li>
              <li>Set a new secure password</li>
              <li>Return to login with your new credentials</li>
            </ol>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-[#ffffff] italic">
            "Small steps build great developers. Keep going."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;