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
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-black/40 border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            {t.news}
          </h1>

          <p className="text-sm opacity-70">
            {t.latestHeadlines}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;