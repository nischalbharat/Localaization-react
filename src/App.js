import logo from './logo.svg';
import './App.css';
import { useTranslation, initReactI18next } from "react-i18next";

function App() {

  const { t , i18n} = useTranslation();
  i18n.changeLanguage(navigator.language || navigator.userLanguage);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("Edit src/App.js and save to reload")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Learn React")}
        </a>
      </header>
    </div>
  );
}

export default App;
