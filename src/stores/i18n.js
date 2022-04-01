import { defineStore } from "pinia";
import { LocalStorage } from "quasar";

export const usei18nStore = defineStore("i18n", {
  state: () => ({
    locale: LocalStorage.getItem("locale") || "pt-BR",
  }),

  actions: {
    changeLanguage(language) {
      LocalStorage.set("locale", language);
      this.locale = language;
    },
  },
});
