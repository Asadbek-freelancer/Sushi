import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en/translation.json'
import en from './ru/translation.json'


i18n
.use(initReactI18next)
.init({

    resources: {
        en: {
            translation: en
        },
        ru:{
            translation: ru
        }
    },

    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
        escapeValue: false
    }
})

export default i18n;