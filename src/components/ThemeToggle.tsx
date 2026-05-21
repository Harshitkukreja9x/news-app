import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { toggleTheme } from "../features/theme/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const mode = useSelector(
    (state: RootState) => state.theme.mode
  );

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded bg-blue-500 text-white"
    >
      {mode === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;