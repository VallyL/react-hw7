import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function TextComponent() {
  const { language } = useContext(LanguageContext);

  const text = {
    en: "English language was chosen!",
    ru: "Русский язык был выбран!",
  };

  return <p>{text[language]}</p>;
}

export default TextComponent;
