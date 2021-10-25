import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { AppProvider } from "superops-polaris-old";
import enTranslations from 'superops-polaris-old/locales/en.json';
import "superops-polaris-old/dist/styles.css";


ReactDOM.render(<AppProvider i18n={enTranslations}><App /></AppProvider>, document.getElementById("root"));
