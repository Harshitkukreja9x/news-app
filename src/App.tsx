import { useSelector } from "react-redux";

import type { RootState } from "./app/store";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {

  const mode = useSelector(
    (state: RootState) => state.theme.mode
  );

  
  return (
    <div
      className={mode === "dark" ? "dark" : ""}
      
    >
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-all duration-300">

        <Navbar />

        <main className="max-w-7xl mx-auto px-6 py-8">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;