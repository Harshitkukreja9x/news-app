import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const mode = useSelector(
    (state: RootState) => state.theme.mode
  );

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="min-h-screen p-6">
        <div className="flex justify-between mb-6">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        <AppRoutes />
      </div>
    </div>
  );
}

export default App;