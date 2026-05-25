import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

import useTranslation from "../hooks/useTranslation";

const Navbar = () => {
  const t = useTranslation();

  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        border-b
        border-white/10
        bg-white/70
        dark:bg-slate-900/80
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-black">
            {t.news}
          </h1>

          <p className="text-sm opacity-70 mt-1">
            {t.latestHeadlines}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;