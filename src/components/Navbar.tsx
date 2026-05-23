import { useSelector } from "react-redux";

import type { RootState } from "../app/store";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

import { translations } from "../translations";

const Navbar = () => {
  const lang = useSelector(
    (state: RootState) => state.language.lang
  );

  const t = translations[lang as "en" | "ar"];

  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        border-b
        border-white/10
        bg-white/70
        dark:bg-slate-900/80
        shadow-sm
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1
            className="
              text-2xl font-extrabold tracking-wide
              text-slate-900
              dark:text-white
            "
          >
            NewsHub
          </h1>

          <p
            className="
              text-sm mt-1
              text-slate-500
              dark:text-slate-400
            "
          >
            {t.latestHeadlines}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;