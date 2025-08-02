import PropTypes from "prop-types";
import { LanguageContext } from ".";
import { useState } from "react";
import { RU } from "../data/RU";
import { UZ } from "../data/UZ";
const LanguageContextProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem("language")?.toLowerCase() || "ru"
  );
  const language = { ru: RU, uz: UZ };
  let state = { langType, lang: language[langType], setLangType };
  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};
LanguageContextProvider.propTypes = {
  children: PropTypes.node,
};
export default LanguageContextProvider;
