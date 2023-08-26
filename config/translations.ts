import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "../src/assets/locales/pt.json";

const resources = {
  pt: {
    translation: pt,
  },
};

// i18n.use(initReactI18next).init({
//   resources,
//   ns: ["translations"],
//   fallbackLng: (code) => {
//     if (code === "keys") return "";
//     return "pt";
//   },
//   lng: "pt",
//   debug: false,
//   defaultNS: "translations",
//   keySeparator: false,
//   react: {
//     useSuspense: true,
//   },
//   saveMissing: true,
// });

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pt",
    returnNull: false,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    saveMissing: true,
    fallbackLng: (code) => {
      if (code === "keys") return "";
      return "pt";
    },
  });

export default i18n;
