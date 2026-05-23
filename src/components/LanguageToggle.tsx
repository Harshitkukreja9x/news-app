import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../app/store";

import { setLanguage } from "../features/language/languageSlice";

const LanguageToggle = () => {
  const dispatch = useDispatch();

  const lang = useSelector(
    (state: RootState) => state.language.lang
  );

  return (
    <select
      value={lang}
      onChange={(e) =>
        dispatch(setLanguage(e.target.value))
      }
      className="
        px-4 py-2.5
        rounded-xl
        border
        outline-none
        transition-all duration-300
        shadow-sm

        bg-white
        text-slate-800
        border-slate-200

        focus:ring-2
        focus:ring-blue-400

        dark:bg-slate-800
        dark:text-white
        dark:border-slate-700
      "
    >
      <option value="en">🇺🇸 EN</option>
      <option value="ar">🇸🇦 AR</option>
    </select>
  );
};

export default LanguageToggle;