import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import { usei18nStore } from "stores/i18n";
import messages from "src/i18n";

const store = usei18nStore();

const numberFormats = {
  "en-US": {
    height: {
      style: "unit",
      unit: "foot",
    },
    weight: {
      style: "unit",
      unit: "pound",
    },
  },
  "pt-BR": {
    height: {
      style: "unit",
      unit: "meter",
    },
    weight: {
      style: "unit",
      unit: "kilogram",
    },
  },
};

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: store.locale,
    messages,
    numberFormats,
  });

  // Set i18n instance on app
  app.use(i18n);
});
