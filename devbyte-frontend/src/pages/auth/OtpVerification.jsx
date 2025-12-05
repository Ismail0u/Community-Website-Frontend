import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "@/assets/images/auth-bg2.webp";
import { verifyOtp, forgotPassword, resetAuthState } from "@/redux/features/authSlice";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error, successMessage } = useSelector((state) => state.auth);

  // Initialize email and reset state
  useEffect(() => {
    dispatch(resetAuthState());
    
    // Get email from location state or localStorage
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      const storedEmail = localStorage.getItem("resetEmail");
      if (storedEmail) setEmail(storedEmail);
    }
  }, [dispatch, location]);

  // Countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleResend = async () => {
    if (email) {
      try {
        await dispatch(forgotPassword(email)).unwrap();
        setTimer(30);
      } catch (err) {
        console.error("Resend OTP failed:", err);
      }
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.querySelector(`input[name="otp-${index + 1}"]`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      return;
    }

    if (!email) {
      console.error("Email not found");
      return;
    }

    try {
      await dispatch(verifyOtp({ email, otp: enteredOtp })).unwrap();
      // Redirect after successful verification
      setTimeout(() => {
        navigate("/reset-password");
      }, 1500);
    } catch (err) {
      console.error("OTP verification failed:", err);
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
    if (pastedData.length === 6) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      // Focus last input
      const lastInput = document.querySelector('input[name="otp-5"]');
      if (lastInput) lastInput.focus();
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
        {/* Left: Glass OTP Form */}
        <div className="flex flex-col justify-center p-10 text-white">
          <h2 className="text-3xl font-bold mb-2 text-center">OTP Verification</h2>
          <p className="text-gray-300 text-center mb-8">
            Enter the 6-digit code sent to{" "}
            <span className="font-semibold text-yellow-300">{email || "your email"}</span>
          </p>

          <div className="p-8 w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {!successMessage ? (
                <motion.div
                  key="otp-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center mb-6">
                    <motion.button
                      whileHover={{ x: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="flex items-center hover:text-white"
                      onClick={() => navigate(-1)}
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" /> Back
                    </motion.button>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="flex justify-between mb-6">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          name={`otp-${index}`}
                          type="text"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleChange(e, index)}
                          onPaste={index === 0 ? handlePaste : undefined}
                          className="w-12 h-12 text-center text-xl font-semibold rounded-xl bg-black/20 dark:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                      ))}
                    </div>

                    {error && (
                      <div className="text-red-400 text-sm text-center mb-4 p-2 bg-red-400/10 rounded-lg">
                        {typeof error === 'string' ? error : error?.message || "Invalid OTP"}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading || otp.join("").length !== 6}
                      className="relative text-[17px] w-full font-medium px-10 py-4 bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-[cubic-bezier(0,0,0.2,1)] group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
                      <span className="relative z-10">
                        {loading ? "Verifying..." : "Verify OTP"}
                      </span>
                    </button>
                  </form>

                  <p className="text-gray-300 mt-6 text-sm">
                    Didn't receive the code?{" "}
                    {timer > 0 ? (
                      <span className="text-yellow-400 font-medium">
                        Resend in {timer}s
                      </span>
                    ) : (
                      <button
                        className="text-yellow-400 hover:underline font-medium transition"
                        onClick={handleResend}
                        disabled={loading}
                      >
                        Resend
                      </button>
                    )}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center h-72"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.1,
                    }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-400 mb-4 animate-bounce drop-shadow-lg" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold"
                  >
                    Verification Successful
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 mt-2"
                  >
                    Redirecting to reset your password...
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: DevByte Motivation */}
        <div className="bg-white dark:bg-[#0D1117] dark:text-[#ffffff] text-gray-800 flex flex-col justify-center p-10">
          <h3 className="text-2xl font-bold mb-4">Secure. Verify. Continue.</h3>
          <p className="text-gray-600 dark:text-[#ffffff] leading-relaxed">
            Your account safety matters. This quick verification ensures only you
            can reset your DevByte access — because your growth deserves protection.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p className="font-medium text-gray-700 dark:text-[#ffffff]">Tips:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-[#ffffff]/80">
              <li>Check your spam folder if you don't see the email</li>
              <li>The OTP expires in 10 minutes</li>
              <li>You can request a new OTP after 30 seconds</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-[#ffffff] italic">
            "Trust in your process. Security builds confidence."
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;