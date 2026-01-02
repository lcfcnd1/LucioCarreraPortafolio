import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';

// Configuración de i18next
i18n
  // Detecta el idioma del navegador automáticamente
  .use(LanguageDetector)
  // Pasa la instancia de i18n a react-i18next
  .use(initReactI18next)
  // Inicializa i18next
  .init({
    resources: {
      es: {
        translation: es
      },
      en: {
        translation: en
      }
    },
    // Idioma por defecto si no se detecta ninguno
    fallbackLng: 'es',
    // Idiomas disponibles
    supportedLngs: ['es', 'en'],
    // Detectar idioma automáticamente
    detection: {
      // Orden de detección: localStorage > navegador > fallback
      order: ['localStorage', 'navigator'],
      // Cache el idioma seleccionado en localStorage
      caches: ['localStorage'],
      // Nombre de la clave en localStorage
      lookupLocalStorage: 'i18nextLng',
    },
    // Interpolación
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
    // Debug en desarrollo
    debug: false,
  });

export default i18n;

