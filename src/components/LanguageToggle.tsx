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
      className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
    >
      <option value="en">🇺🇸 EN</option>

      <option value="ar">🇸🇦 AR</option>
    </select>
  );
};

export default LanguageToggle;