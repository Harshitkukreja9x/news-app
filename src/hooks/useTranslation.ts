import { useSelector } from "react-redux";

import type { RootState } from "../app/store";

import { translations } from "../translations";

const useTranslation = () => {
  const lang = useSelector(
    (state: RootState) => state.language.lang
  );

  return translations[lang as "en" | "ar"];
};

export default useTranslation;