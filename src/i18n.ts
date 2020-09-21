import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
        logout: 'Log out',
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
        verify: 'Verify',
        crap: 'Crap!',
        crapDescription: "I don't know what happened, but you were not supposed to see this.",
        yourFault: 'You messed up!',
        yourFaultDescription: "I didn't do anything this time. This is all your fault.",
        unauthorized: 'Guessing the number, huh?',
        unauthorizedDescription:
          'There are 46656 possibilites and I will murder your entire family on your 20th try. Suit yourself!'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});
