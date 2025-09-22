
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Welcome to DevByte Community</h1>
      <p>Select a page to continue.</p>
      <AppRoutes />
    </div>
  );
}
