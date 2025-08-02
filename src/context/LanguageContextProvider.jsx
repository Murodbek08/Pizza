import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { LanguageContext } from ".";
import { UZ } from "../data/uz";
import { RU } from "../data/ru";

const LanguageContextProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem("language")?.toLowerCase() || "ru"
  );

  const language = { ru: RU, uz: UZ };

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
