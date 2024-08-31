import "./App.css";
import { LanguageProvider } from "./components/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TextComponent from "./components/TextComponent";

function App() {
  return (
    <LanguageProvider>
      <div>
        <LanguageSwitcher />
        <TextComponent />
      </div>
    </LanguageProvider>
  );
}

export default App;
