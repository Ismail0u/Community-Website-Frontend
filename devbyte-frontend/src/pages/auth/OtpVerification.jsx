import React from "react";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(30);

// Countdown timer logic
  useEffect(() => {
    if (timer <= 0) return;

    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);


  const handleResend = () => {
    alert("Resend OTP clicked");
    setTimer(30); // Reset timer after resend
  };



  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && e.target.nextSibling) e.target.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      setVerified(true);
      setTimeout(() => {
        // simulate redirect
        window.location.href = "/reset-password";
      }, 2500);
    } else {
      alert("Please enter all 6 digits of your OTP");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col dark:bg-[#0D1117]">
      {/* Top container with message */}
      <div className="w-full bg-gradient-to-r from-blue-950 to-blue-600 text-white text-center py-10 shadow">
        <h2 className="text-3xl font-bold">OTP Verification</h2>
        <p className="text-md mt-1">
          Enter the 6-digit code sent to your email address.
        </p>
      </div>

      {/* OTP Verification / Success Animation */}
      <div className="flex-1 flex items-center justify-center px-4 dark:bg-[#0D1117] dark:text-[#D9D9D9]">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
          <AnimatePresence mode="wait">
            {!verified ? (
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
                    onClick={() => window.history.back()}
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back
                  </motion.button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-between mb-6">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        className="w-12 h-12 text-center text-xl font-semibold rounded-xl bg-black/20 dark:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="relative text-[17px] w-full font-medium px-10 py-4 bg-gradient-to-r from-blue-950 to-blue-600 text-white rounded-lg cursor-pointer overflow-hidden active:scale-95 transition-transform duration-300 group"
                  >
                    <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffc107]/70 rounded-lg transition-all duration-500 ease-&lsqb;cubic-bezier(0,0,0.2,1)&rsqb; group-hover:w-full group-hover:h-[14em] -translate-x-1/2 -translate-y-1/2"></span>
                    <span className="relative z-10">Verify OTP</span>
                  </button>
                </form>

              <p className="text-gray-600 dark:text-gray-300 mt-6 text-sm">
                Didn’t receive the code?{" "}
                {timer > 0 ? (
                  <span className="text-blue-400 font-medium">
                    Resend in {timer}s
                  </span>
                ) : (
                  <button
                    className="text-blue-400 hover:text-blue-600 font-medium transition"
                    onClick={handleResend}
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
                  className="text-gray-600 dark:text-gray-300 mt-2"
                >
                  Redirecting to reset your password...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
