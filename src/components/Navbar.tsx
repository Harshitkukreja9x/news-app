import { Search, Bell, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import useTranslation from "../hooks/useTranslation";

const categories = [
  "Home",
  "Politics",
  "Technology",
  "Sports",
  "Business",
  "Health",
  "Entertainment",
];

const Navbar = () => {
  const t = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">

      {/* BREAKING NEWS BAR */}
      <div className="bg-red-800 text-white text-sm font-semibold px-4 py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-3">

          <span className="font-bold uppercase tracking-wider">
            Breaking
          </span>

          <div className="text-white whitespace-nowrap overflow-hidden text-ellipsis">
            Global market trends • AI revolution in tech industry
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className="
          backdrop-blur-xl
          border-b
          shadow-sm
          transition-all
          duration-300
          motion-reduce:transition-none
        "
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

              {/* MOBILE MENU BUTTON */}
              <button
                aria-label="Open menu"
                title="Open menu"
                className="
                  lg:hidden
                  w-10 h-10
                  rounded-xl
                  flex items-center justify-center

                  hover:bg-black/10
                  dark:hover:bg-white/15

                  transition-all
                  duration-300
                  motion-reduce:transition-none

                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-500
                  focus:ring-offset-2
                "
              >
                <Menu size={22} />
              </button>

              {/* LOGO */}
              <div className="cursor-pointer select-none">
                <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                  NewsHub
                </h1>

                <p className="text-xs uppercase tracking-[3px] text-gray-700 dark:text-gray-300">
                  {t.latestHeadlines}
                </p>
              </div>

            </div>

            {/* DESKTOP NAVIGATION */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-8"
            >
              {categories.map((item, index) => (
                <button
                  key={item}
                  aria-label={item}
                  className={`
                    relative
                    text-[15px]
                    font-semibold
                    rounded-md
                    px-1

                    transition-all
                    duration-300
                    motion-reduce:transition-none

                    hover:text-red-700
                    dark:hover:text-red-300

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-red-700
                    after:transition-all
                    after:duration-300

                    hover:after:w-full

                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-500
                    focus:ring-offset-2

                    focus:text-red-700
                    dark:focus:text-red-300

                    ${
                      index === 0
                        ? "text-red-700 dark:text-red-300"
                        : "text-gray-800 dark:text-gray-200"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3">

              {/* SEARCH BAR */}
              <div
                className="
                  hidden md:flex
                  items-center gap-2
                  w-[260px]
                  h-11
                  px-4
                  rounded-full
                  border

                  border-gray-300
                  dark:border-gray-700

                  focus-within:border-red-500
                  dark:focus-within:border-red-400

                  transition-all
                  duration-300
                  motion-reduce:transition-none
                "
                style={{
                  background: "var(--card)",
                }}
              >

                <label
                  htmlFor="search-news"
                  className="sr-only"
                >
                  Search News
                </label>

                <Search
                  size={18}
                  className="text-gray-700 dark:text-gray-300"
                />

                <input
                  id="search-news"
                  type="text"
                  placeholder="Search news..."
                  aria-label="Search news"
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-sm

                    text-gray-900
                    dark:text-white

                    placeholder:text-gray-600
                    dark:placeholder:text-gray-300
                  "
                />
              </div>

              {/* NOTIFICATION BUTTON */}
              <button
                aria-label="Notifications"
                title="Notifications"
                className="
                  relative
                  w-11 h-11
                  rounded-full
                  flex items-center justify-center

                  hover:bg-black/10
                  dark:hover:bg-white/15

                  transition-all
                  duration-300
                  motion-reduce:transition-none

                  text-gray-800
                  dark:text-white

                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-500
                  focus:ring-offset-2
                "
              >
                <Bell size={20} />

                <span
                  className="
                    absolute
                    top-2.5
                    right-2.5
                    w-2 h-2
                    rounded-full
                    bg-red-700
                  "
                />
              </button>

              {/* LANGUAGE */}
              <LanguageToggle />

              {/* THEME */}
              <ThemeToggle />

            </div>
          </div>

          {/* MOBILE CATEGORY BAR */}
          <div className="lg:hidden flex items-center gap-5 overflow-x-auto py-3 no-scrollbar">

            {categories.map((item, index) => (
              <button
                key={item}
                aria-label={item}
                className={`
                  whitespace-nowrap
                  text-sm
                  font-medium
                  rounded-md
                  px-1

                  transition-all
                  duration-300
                  motion-reduce:transition-none

                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-500
                  focus:ring-offset-2

                  focus:text-red-700
                  dark:focus:text-red-300

                  ${
                    index === 0
                      ? "text-red-700 dark:text-red-300"
                      : "text-gray-700 dark:text-gray-300"
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