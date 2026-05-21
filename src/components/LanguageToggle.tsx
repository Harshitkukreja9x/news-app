import { useDispatch } from "react-redux";
import { setLanguage } from "../features/language/languageSlice";

const LanguageToggle = () => {
  const dispatch = useDispatch();

  return (
    <select
      onChange={(e) =>
        dispatch(setLanguage(e.target.value))
      }
      className="border px-3 py-2 rounded"
    >
      <option value="en">EN</option>
      <option value="ar">AR</option>
    </select>
  );
};

export default LanguageToggle;