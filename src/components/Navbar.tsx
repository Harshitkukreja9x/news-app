import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-black/40 border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            NewsHub
          </h1>

          <p className="text-sm opacity-70">
            Latest Headlines
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <LanguageToggle />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;