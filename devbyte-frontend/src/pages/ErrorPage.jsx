import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  ServerCrash,
  WifiOff,
  Unplug,
  RefreshCcw,
  FileQuestion, Clock, ShieldAlert,
} from "lucide-react";
import Button from "@/components/ui/Button";

const errorConfig = {
  400: {
    code: "400",
    title: "Bad Request!",
    message:
      "Looks like something went wrong with your request. The request could not be understood or was missing required parameters.",
    action: () => (window.location.href = "/"),
    buttonText: "Go to Homepage",
    IconComponent: (props) => <AlertCircle {...props} />,
  },
  401: {
      code: "401",
      title: "Unauthorized",
      message: "You must be logged in to access this resource.",
      action: () => navigate("/login"),
      buttonText: "Sign In",
      IconComponent: Lock,
    },
    403: {
      code: "403",
      title: "Forbidden",
      message: "You do not have the necessary permissions to view this page.",
      action: () => navigate("/"),
      buttonText: "Request Access",
      IconComponent: ShieldAlert,
    },
    404: {
      code: "404",
      title: "Page Not Found",
      message: "The link might be broken or the page has been moved.",
      action: () => navigate("/"),
      buttonText: "Back to Home",
      IconComponent: FileQuestion,
    },
    408: {
      code: "408",
      title: "Request Timeout",
      message: "The server took too long to respond. Your connection might be unstable.",
      action: () => window.location.reload(),
      buttonText: "Try Again",
      IconComponent: Clock,
    },
  500: {
    code: "500",
    title: "Internal Server Error",
    message:
      "The server encountered an unexpected condition. Our team has been notified, please try again later.",
    action: () => window.location.reload(),
    buttonText: "Reload Page",
    IconComponent: (props) => <ServerCrash {...props} />,
  },
  cors: {
      code: "CORS",
      title: "Access Restricted",
      message: "The request was blocked by the browser for security reasons (Cross-Origin).",
      action: () => window.open("https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS", "_blank"),
      buttonText: "Learn More",
      IconComponent: Unplug,
    },
  network: {
    code: "Network Error",
    title: "Connection Lost",
    message:
      "Unable to connect to the internet. Please check your network connection and try again.",
    action: () => window.location.reload(),
    buttonText: "Retry Connection",
    secondaryAction: () => console.log("Handling offline mode..."),
    secondaryButtonText: "Go Offline",
    IconComponent: (props) => <WifiOff {...props} />,
  },
};

const ErrorPage = ({ type }) => {
  const config = errorConfig[type] || errorConfig["404"];

  const {
    code,
    title,
    message,
    action,
    buttonText,
    secondaryAction,
    secondaryButtonText,
    IconComponent,
    iconClassName,
  } = config;

  return (
    <div className="h-[calc(100vh-var(--nav-h))] bg-white dark:bg-[#0D1117] text-[#161B22] dark:text-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full flex flex-col items-center space-y-12 md:flex-row md:justify-center md:items-center md:gap-20">
        <div className="flex justify-center flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full" />
            <IconComponent
              className={`relative w-32 h-32 md:w-44 md:h-44 text-blue-600 animate-pulse`}
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="space-y-5 text-center md:text-left max-w-lg">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold">
            {code}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            {message}
          </p>

          <div className="flex md:gap-10 gap-3 md:justify-start justify-center flex-wrap mt-6">
            <Button
              children={buttonText}
              onClick={action}
              className="bg-blue-600 w-fit  md:w-fit text-white text-lg "
            />

            {type === "network" && secondaryButtonText && secondaryAction && (
              <Button
                children={secondaryButtonText}
                onClick={secondaryAction}
                className=" w-fit  md:w-fit border border-gray-400 text-gray-600 dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
