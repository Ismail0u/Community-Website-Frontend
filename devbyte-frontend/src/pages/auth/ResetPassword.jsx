import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import bgImage from "@/assets/images/auth-bg2.webp";
import { resetPassword, resetAuthState } from "@/redux/features/authSlice";

const ResetPassword = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [passwordError, setPasswordError] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { loading, error, successMessage, resetToken } = useSelector((state) => state.auth);

  // Reset auth state on mount
  useEffect(() => {
    dispatch(resetAuthState());
    
    // Check if user came from OTP verification
    const token = localStorage.getItem("resetToken");
    if (!token) {
      // Redirect to forgot password if no token
      navigate("/forget-password");
    }
  }, [dispatch, navigate]);

  // Redirect to login on success
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        navigate("/login");
        // Clear stored data
        localStorage.removeItem("resetToken");
        localStorage.removeItem("resetEmail");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear password error when user types
    if (passwordError) {
      setPasswordError("");
    }
  };

  const validatePasswords = () => {
    if (formData.password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match";
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      return "Password must contain uppercase, lowercase, and numbers";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validatePasswords();
    if (validationError) {
      setPasswordError(validationError);
      return;
    }
    
    const token = localStorage.getItem("resetToken") || resetToken;
    
    if (!token) {
      setPasswordError("Invalid reset token. Please try the reset process again.");
      return;
    }

    try {
      await dispatch(resetPassword({
        token,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      })).unwrap();
      
      // Clear form on success
      setFormData({ password: "", confirmPassword: "" });
    } catch (err) {
      console.error("Password reset failed:", err);
    }
  };

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
          <h2 className="text-3xl font-bold mb-2 text-center">
            Reset Your Password
          </h2>
          <p className="text-center text-gray-200 mb-6 text-sm">
            Create a new password for your account.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* New Password */}
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="New Password"
                className="w-full bg-transparent border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
              >
                {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                className="w-full bg-transparent border border-white/30 outline-none rounded-lg px-4 py-3 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password requirements */}
            <div className="text-xs text-gray-300 space-y-1">
              <p className="font-medium">Password must contain:</p>
              <ul className="list-disc list-inside pl-2">
                <li className={formData.password.length >= 8 ? "text-green-400" : ""}>
                  At least 8 characters
                </li>
                <li className={/(?=.*[a-z])/.test(formData.password) ? "text-green-400" : ""}>
                  One lowercase letter
                </li>
                <li className={/(?=.*[A-Z])/.test(formData.password) ? "text-green-400" : ""}>
                  One uppercase letter
                </li>
                <li className={/(?=.*\d)/.test(formData.password) ? "text-green-400" : ""}>
                  One number
                </li>
              </ul>
            </div>

            {/* Error messages */}
            {(passwordError || error) && (
              <div className="text-red-400 text-sm text-center p-2 bg-red-400/10 rounded-lg">
                {passwordError || (typeof error === 'string' ? error : error?.message)}
              </div>
            )}

            {/* Success message */}
            {successMessage && (
              <div className="text-green-400 text-sm text-center p-2 bg-green-400/10 rounded-lg">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !formData.password || !formData.confirmPassword}
              className="mt-5 relative text-[17px] w-full font-medium px-10 py-4 bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-[cubic-bezier(0,0,0.2,1)] group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
              <span className="relative z-10">
                {loading ? "Resetting..." : "Reset Password"}
              </span>
            </button>
          </form>

          <p className="text-center text-sm text-gray-300 mt-6">
            <a href="/login" className="text-yellow-400 hover:underline font-medium">
              Back to Login
            </a>
          </p>
        </div>

        {/* Right: DevByte Info Section */}
        <div className="bg-white dark:bg-[#0D1117] text-gray-800 dark:text-[#ffffff] flex flex-col justify-center p-10">
          <h3 className="text-2xl font-bold mb-4">
            Empowering Developers Worldwide
          </h3>
          <p className="text-gray-600 dark:text-[#ffffff] leading-relaxed">
            At <span className="font-semibold text-blue-700 dark:text-[#ffffff]">DevByte</span>, we
            believe in building tools and resources that help developers learn,
            grow, and create impactful solutions. Reset your password and get
            back to transforming ideas into reality.
          </p>
          <div className="mt-6 space-y-3">
            <p className="font-medium text-gray-700 dark:text-[#ffffff]">Security Tips:</p>
            <ul className="text-sm text-gray-600 dark:text-[#ffffff]/80 space-y-1">
              <li>• Use a unique password for DevByte</li>
              <li>• Consider using a password manager</li>
              <li>• Enable two-factor authentication for added security</li>
              <li>• Never share your password with anyone</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-[#ffffff] italic">
            "Every great developer you know started where you are — by taking
            the next step forward."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;