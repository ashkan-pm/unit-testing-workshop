import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: 'Home',
        notFound: 'You seem to have lost your way...',
        login: 'Who are you?',
        email: 'Email',
        emailExample: 'george.carlin@example.com',
        emailRequired: 'I really need your email!',
        emailInvalid: 'You know what email is, right?',
        emailNotGmail: "Gmail only! Don't ask why.",
        getCode: 'Get code!',
        proveIt: 'Prove it!',
        goBack: 'Go back',
        verify: 'Verify'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});
