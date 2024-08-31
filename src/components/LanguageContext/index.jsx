const { createContext, useState } = require("react");

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLenguage] = useState("en");

  const changeLanguage = (newLanguage) => {
    setLenguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
