import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setLanguage } from "../features/language/languageSlice";

const LanguageToggle = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.lang);

  return (
    <select
      value={lang}
      onChange={(e) => dispatch(setLanguage(e.target.value))}
      className="
        px-4 py-3
        rounded-2xl
        outline-none
        border-none
        text-sm font-medium
        cursor-pointer
        hover:scale-105
        active:scale-95
        transition-all duration-300

        text-gray-800
        dark:text-gray-100

        bg-black/5
        dark:bg-white/10
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
  );
};

export default LanguageToggle;