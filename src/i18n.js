import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
import en from './Translation/en.json'
import kr from './Translation/kr.json'
import ar from './Translation/ar.json'

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  kr: {
    translation: kr,
  },
}

i18n
  //   .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })
export default i18n
