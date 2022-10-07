export const useTranslation = () => {
  return {
    t: (str: String) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  };
};
