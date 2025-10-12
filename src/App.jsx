import AppRoutes from "./routes/AppRoutes";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  // Access the current theme mode ("light" or "dark") from Redux store
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    //  Add or remove the "dark" class on <html> based on theme
    // This is how Tailwind knows when to apply dark styles
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]); // Runs every time `theme` changes

  return (
    <div className="bg-white dark:bg-[#0D1117] text-[#000000] dark:text-white">
      <AppRoutes />
    </div>
  );
}

export default App;
