import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { RU } from "../data/RU";
import { UZ } from "../data/uz";
import { LanguageContext } from ".";

const LanguageContextProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem("language")?.toLowerCase() || "ru"
  );

  const language = { ru: RU, uz: UZ };

  // LangType o‘zgarsa — localStorage yangilanadi
  useEffect(() => {
    localStorage.setItem("language", langType);
  }, [langType]);

  const state = {
    langType,
    lang: language[langType],
    setLangType,
  };

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageContextProvider;
