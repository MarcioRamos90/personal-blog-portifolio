import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './languages/en';
import portugueseBR from './languages/pt';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: { ...english },
    pt: { ...portugueseBR },
};

i18n.use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
