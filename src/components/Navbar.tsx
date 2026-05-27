import { Search, Bell, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import useTranslation from "../hooks/useTranslation";

const categories = [
  "Home", "Politics", "Technology", "Sports",
  "Business", "Health", "Entertainment",
];

const Navbar = () => {
  const t = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* TOP BREAKING BAR */}
      <div className="bg-red-600 text-white text-sm font-medium px-4 py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="font-bold uppercase tracking-wider">Breaking</span>
          <div className="opacity-90 whitespace-nowrap overflow-hidden text-ellipsis">
            Global market trends • AI revolution in tech industry
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className="backdrop-blur-xl border-b shadow-sm"
        style={{
          background: "var(--navbar-bg)",
          borderColor: "var(--border-light)",
          boxShadow: "var(--shadow-light)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">

          {/* TOP SECTION */}
          <div className="flex items-center justify-between h-[78px]">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* MOBILE MENU */}
              <button
                className="
                  lg:hidden w-10 h-10 rounded-xl
                  flex items-center justify-center
                  hover:bg-black/5 dark:hover:bg-white/10 transition
                "
              >
                <Menu size={22} />
              </button>

              {/* LOGO */}
              <div className="cursor-pointer">
                <h1 className="text-3xl font-black tracking-tight text-black dark:text-white">
                  NewsHub
                </h1>
                <p className="text-xs uppercase tracking-[3px] text-gray-500 dark:text-gray-400">
                  {t.latestHeadlines}
                </p>
              </div>
            </div>

            {/* CENTER NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {categories.map((item, index) => (
                <button
                  key={item}
                  className={`
                    relative text-[15px] font-semibold transition-all duration-300
                    hover:text-red-600 dark:hover:text-red-400

                    after:absolute after:left-0 after:-bottom-2
                    after:h-[2px] after:w-0 after:bg-red-600
                    after:transition-all after:duration-300
                    hover:after:w-full

                    ${index === 0
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-700 dark:text-gray-200"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              {/* SEARCH */}
              <div
                className="
                  hidden md:flex items-center gap-2
                  w-[260px] h-11 px-4 rounded-full
                  border border-transparent
                  focus-within:border-red-500 transition
                "
                style={{ background: "var(--card)" }}
              >
                <Search size={18} className="text-gray-500 dark:text-gray-400" />
                <input
                  placeholder="Search news..."
                  className="bg-transparent outline-none w-full text-sm text-[var(--text)] placeholder:text-gray-400"
                />
              </div>

              {/* NOTIFICATION */}
              <button
                className="
                  relative w-11 h-11 rounded-full
                  flex items-center justify-center
                  hover:bg-black/5 dark:hover:bg-white/10 transition
                  text-[var(--text)]
                "
              >
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-red-500" />
              </button>

              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* BOTTOM CATEGORY BAR (mobile) */}
          <div className="lg:hidden flex items-center gap-5 overflow-x-auto py-3 no-scrollbar">
            {categories.map((item, index) => (
              <button
                key={item}
                className={`
                  whitespace-nowrap text-sm font-medium transition
                  ${index === 0
                    ? "text-red-600 dark:text-red-400"
                    : "text-gray-600 dark:text-gray-300"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;