import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setLanguage } from "../features/language/languageSlice";

const LanguageToggle = () => {
  const dispatch = useDispatch();

  const lang = useSelector(
    (state: RootState) => state.language.lang
  );

  return (
    <div className="relative">

      {/* ACCESSIBILITY LABEL */}
      <label
        htmlFor="language-select"
        className="sr-only"
      >
        Select Language
      </label>

      <select
        id="language-select"
        aria-label="Select Language"
        value={lang}
        onChange={(e) =>
          dispatch(setLanguage(e.target.value))
        }
        className="
          px-4 py-3
          rounded-2xl
          outline-none
          text-sm font-medium
          cursor-pointer

          border border-gray-300
          dark:border-gray-700

          hover:scale-105
          active:scale-95

          transition-all duration-300

          text-gray-900
          dark:text-gray-100

          bg-white
          dark:bg-gray-900

          focus:ring-2
          focus:ring-red-500
          focus:border-red-500
        "
        style={{
          backgroundColor: "var(--card)",
          color: "var(--text)",
        }}
      >
        <option
          value="en"
          style={{
            background: "var(--card)",
            color: "var(--text)",
          }}
        >
          EN
        </option>

        <option
          value="ar"
          style={{
            background: "var(--card)",
            color: "var(--text)",
          }}
        >
          AR
        </option>
      </select>

    </div>
  );
};

export default LanguageToggle;