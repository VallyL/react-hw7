import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import styles from "../../components/LanguageSwitcher/styles.module.css";

function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <div className={styles.buttonContainer}>
      <button value="en" onClick={() => handleLanguageChange("en")}>
        En
      </button>
      <button value="ru" onClick={() => handleLanguageChange("ru")}>
        Ru
      </button>
    </div>
  );
}

export default LanguageSwitcher;
